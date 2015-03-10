
class DeulShop extends Dialog
{
    private _dialog:DialogBox;

    private m_UI:UIDeulRank;

    private taskList1:egret.gui.List = new egret.gui.List();

    private dp:egret.gui.ArrayCollection = new egret.gui.ArrayCollection();

    public count:number = 0;

    public constructor()
    {
        super();
    }

    public createChildren():void
    {
        super.createChildren();

        this._dialog = new DialogBox();

        this.addElement(this._dialog);

        this._dialog.horizontalCenter = 0;

        this.m_UI = new UIDeulRank();

        this.addElement(this.m_UI);

        this.m_UI.horizontalCenter = 0;

        this._dialog._btn_close.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouch,this);

        this._dialog._btn_help.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onHelp,this);

        this._dialog.setTitle("荣誉兑换");

        this._dialog.height = Main.guiLayer.height - 190;

        this.top = 30;

        this.m_UI.top = this.top + 50;

        this.m_UI.rank_labels.text = "当前荣誉值：70";

        this.taskList1.skinName = "skins.ShopListSkin";

        this.taskList1.horizontalCenter = 0;

        this.taskList1.itemRenderer = new egret.gui.ClassFactory(ShopItemReader);

        this.taskList1.itemRendererSkinName = "skins.ShopItemReaderSkin";

        this.taskList1.dataProvider = this.dp;

        this.addElement(this.taskList1);

        this.taskList1.top = this.m_UI.top + 68;

        this.taskList1.width = 510;

        this.taskList1.height = 538;

        this.m_UI._btn_refrsh.visible = true;

        this.m_UI._btn_refrsh.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onRefresh, this);

    }

    private onRefresh(e:egret.TouchEvent):void
    {
        GameManager.msgBox.showMsg(function(r)
        {
            if(r)
            {
                var url:string = "http://"+GameManager.server["ip"]+":"+GameManager.server["port"];

                var param:string = "type=0x0095&sid="+GameManager.SESSION_ID;

                HttpMessage.sendMsg(url, param);
            }
        }, "本次刷新将消耗20荣誉，确定继续？");
    }

    private onHelp(e:egret.TouchEvent):void
    {
        var help:HelpDialog = DialogManager.findDialog(HelpDialog, "HelpDialog");

        if(help)
        {
            help.index = 2;

            if(help.showing)
            {
                help.showText();
            }
            else
            {
                help.show();
            }
        }
    }

    private onTouch(e:egret.TouchEvent):void
    {
        this.hide();
    }

    public onUpdate():void
    {

        this.m_UI.rank_labels.text = "当前荣誉值：" + Main.player.honor;

        var shop:any = Main.player.m_shops["duel"];

        if(shop)
        {
            this.dp.removeAll();

            for(var i in shop.goods)
            {

                var item:ShopItemData = shop.goods[i];

                this.dp.addItem(item);
            }
        }
        else
        {
            var url:string = "http://"+GameManager.server["ip"]+":"+GameManager.server["port"];
            var param:string = "type=0x0092&sid="+GameManager.SESSION_ID;
            HttpMessage.sendMsg(url, param);
        }
    }

    public delGood(ids:any)
    {
        for(var i in ids)
        {
            for(var k in this.dp)
            {
                var good:any = this.dp.getItemAt(k);

                if(good && good["id"] == ids[i])
                {
                    this.dp.removeItemAt(k);
                }
            }
        }
        this.dp.refresh();
    }

    public show()
    {
        super.show( );

        this.onUpdate();
    }

    public hide()
    {
        super.hide();
    }
}
