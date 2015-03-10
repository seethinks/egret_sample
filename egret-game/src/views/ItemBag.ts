
class ItemBag extends Dialog
{
    private dialog:UIOriginalDialog;

    private m_UI:UIItemBag;

    private taskList1:egret.gui.List = new egret.gui.List();

    private dp:egret.gui.ArrayCollection = new egret.gui.ArrayCollection();

    private type:number = 0;

    private itemWain:boolean = false;

    public constructor()
    {
        super();
    }

    public createChildren():void
    {
        super.createChildren();

        this.dialog = new UIOriginalDialog();

        this.addElement(this.dialog);

        this.dialog.horizontalCenter = 0;

        this.dialog.top = 0;

        this.dialog.setTitle("背包");

        this.m_UI = new UIItemBag();

        this.addElement(this.m_UI);

        this.m_UI.horizontalCenter = 0;

        this.m_UI.top = 0;

        this.m_UI.btn_tab1.setText("wenzi_zhuangbei");

        this.m_UI.btn_tab2.setText("wenzi_wuping");

        this.m_UI.btn_tab1.setSouoce("btn_chek1");

        this.m_UI.btn_tab2.setSouoce("btn_chek2");

        this.taskList1.skinName = "skins.TileListSkin";

        this.taskList1.width = 540;

        this.taskList1.height = 415;

        this.taskList1.horizontalCenter = 0;

        this.taskList1.top = 320;

        this.addElement(this.taskList1);

        this.taskList1.itemRenderer = new egret.gui.ClassFactory(UIIcon);

        this.taskList1.itemRendererSkinName = "skins.IconSkin";

        this.taskList1.dataProvider = this.dp;

        this.taskList1.addEventListener(egret.gui.ListEvent.ITEM_CLICK, this.clickItem, this);

        this.m_UI._btn_kzbg.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onKzbag, this);

        this.m_UI._btn_plmc.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onKzbag, this);

        this.m_UI._btn_zbsx.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onKzbag, this);

        this.m_UI.btn_tab1.touchEnabled = true;

        this.m_UI.btn_tab1.touchChildren = true;

        this.m_UI.btn_tab2.touchChildren = true;

        this.m_UI.btn_tab2.touchEnabled = true;


        this.m_UI.btn_tab1.addEventListener(egret.TouchEvent.TOUCH_TAP, this.clickTab1, this);

        this.m_UI.btn_tab2.addEventListener(egret.TouchEvent.TOUCH_TAP, this.clickTab2, this);

        this.m_UI.setItemWarn(this.itemWain);

    }

    private onKzbag(e:egret.TouchEvent):void
    {
        switch (e.target){
            case this.m_UI._btn_plmc:
                DialogManager.open(BatchSellDialog, "BatchSellDialog");
                break;
            case this.m_UI._btn_kzbg:
                GameManager.msgBox.showMsg(function(r)
                {
                    if(r)
                    {
                        var url:string = "http://"+GameManager.server["ip"]+":"+GameManager.server["port"];
                        var param:string = "type=0x0080&sid="+GameManager.SESSION_ID;
                        HttpMessage.sendMsg(url, param);
                    }
                }, "您确定花费100元宝购买10个背包格子？");
                break;
            case this.m_UI._btn_zbsx:
                DialogManager.open(EqptRongLian, "EqptRongLian");
                break;
            default :
                GameManager.flyText({t:"功能完善中，敬请期待！", q:1});
        }
    }

    private clickTab1(e:egret.TouchEvent = null):void
    {
        if(this.type != 0)
        {
            this.type = 0;

            this.onUpdate();

            this.m_UI.btn_tab1.setSouoce("btn_chek1");

            this.m_UI.btn_tab2.setSouoce("btn_chek2");

            this.m_UI.bag_size_label.visible = true;

            this.m_UI._btn_plmc.visible = true;

            this.m_UI._btn_zbsx.visible = true;

            this.setEqptW();
        }
    }

    private clickTab2(e:egret.TouchEvent = null):void
    {
        if(this.type != 1)
        {
            this.type = 1;

            this.onUpdate();

            this.m_UI.btn_tab1.setSouoce("btn_chek2");

            this.m_UI.btn_tab2.setSouoce("btn_chek1");

            this.m_UI.bag_size_label.visible = false;

            this.m_UI._btn_plmc.visible = false;

            this.m_UI._btn_zbsx.visible = false;

            this.setItemW();
        }
    }

    public setTab(type:number = 0):void
    {
        this.type = type;
    }

    public onUpdate():void
    {

        //背包占用格数显示
        if(this.initUI) this.m_UI.bag_size_label.text = Main.player.m_items.equips.length +"/"+Main.player.m_bagSize;

        //显示黑铁矿石数
        if(this.initUI) this.m_UI.bstone_count_label.text = "黑铁矿石："+Main.player.bstone;

        this.dp.removeAll();

        var items:ItemBase[] = [];

        if(this.type == 0)
        {
            items = Main.player.m_items.equips;
        }
        else
        {
            items = Main.player.m_items.items;
        }

        for(var i in items)
        {
            this.dp.addItem(items[i]);
        }

        if(items.length < 16) {
            var self = this;
            egret.callLater(function(){
                 if(self.taskList1.dataGroup && self.taskList1.dataGroup.verticalScrollPosition) self.taskList1.dataGroup.verticalScrollPosition = 0;
            }, this.taskList1);
        }

    }


    public show()
    {
        super.show();

        this.onUpdate();

        if(this.type == 0)
        {
            this.setEqptW();
        }
        else
        {
            this.setItemW();
        }

        Main.iconMeun.setBag();
    }

    public hide()
    {
        super.hide();
    }

    public setEqptW(b:boolean = false):void
    {
        if(this.m_UI) this.m_UI.setEqptWarn(b);
    }

    public setItemW(b:boolean = false):void
    {
        this.itemWain = b;

        if(this.m_UI) this.m_UI.setItemWarn(b);
    }

    private clickItem(e:egret.gui.ListEvent):void
    {
        Main.player.m_clickItme = e.item;

        if(!Main.player.m_clickItme)return;

        if(Main.player.m_clickItme && Main.player.m_clickItme.maxType == 2){
            DialogManager.open(EqptDetailsBag, "EqptDetailsBag");
        }else{
           DialogManager.open(ItemDetialDialog, "ItemDetialDialog");
        }
    }
}
