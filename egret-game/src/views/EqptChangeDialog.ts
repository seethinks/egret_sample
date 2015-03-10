
class EqptChangeDialog extends Dialog
{
    private _dialog:DialogBox;

    private m_UI:UIChangeEqpt;

    private textList:egret.gui.List = new egret.gui.List();

    private dp:egret.gui.ArrayCollection = new egret.gui.ArrayCollection();

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

        this.m_UI = new UIChangeEqpt();

        this.addElement(this.m_UI);

        this.m_UI.horizontalCenter = 0;

        this._dialog._btn_close.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouch,this);

        this.m_UI.xz_btn_close.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouch, this);

        this._dialog._btn_help.visible = false;

        this._dialog.setTitle("装备选择");

        this.textList.skinName = "skins.ListSkin";

        this.textList.width = 522;

        this.textList.height = 335;

        this.textList.horizontalCenter = 0;

        this.addElement(this.textList);

        this.textList.itemRenderer = new egret.gui.ClassFactory(UIChangeEqptItemReader);

        this.textList.itemRendererSkinName = "skins.ChangeEqptItemReaderSkin";

        this.textList.dataProvider = this.dp;

        this.textList.addEventListener(egret.gui.ListEvent.ITEM_CLICK, this.clickItem, this);

        this.top = 30;

        this.m_UI.top = this.top + 40;

        this.textList.y = this.m_UI.y + 300;
    }

    private clickItem(e:egret.gui.ListEvent):void
    {
        var item = e.item;

        var operateObj:any = Main.player;
        if(Number(Main.player.m_operateObjid) > 0){
            operateObj = Main.player.m_heros.heros[Main.player.m_operateObjid];
        }

        if(!operateObj || !(operateObj.id > 0))return;

        if(item.tpl["ejob"] != operateObj.job && Number(item.tpl["ejob"]) != 0) return;

        var url:string = "http://"+GameManager.server["ip"]+":"+GameManager.server["port"];
        var param:string = "tagid="+operateObj.id+"&objid=" + item["id"] + "&type=0x0005&sid="+GameManager.SESSION_ID;
        HttpMessage.sendMsg(url, param);

        this.hide();
    }

    private setVis(b:boolean = false):void
    {
        if(this.m_UI)
        {
            this.m_UI.xz_icon.visible = b;

            this.m_UI.xz_label_property.visible = b;

            this.m_UI._panel1.visible = b;

            if(b)
            {
                this.m_UI._panel2.height = 351;

                this.textList.y = this.top + 270;

                this.textList.height = 335;
            }
            else
            {
                this.m_UI._panel2.height = 575;

                this.textList.y = this.top + 44;

                this.textList.height = 560;
            }
        }
    }

    private onTouch(e:egret.TouchEvent):void
    {
        this.hide();
    }

    public onUpdate():void
    {

        this.dp.removeAll();
        this.m_UI.xz_label_null.visible = true;
        var operateObj:any = Main.player;
        if(Main.player.m_operateObjid > 0){
            operateObj = Main.player.m_heros.heros[Main.player.m_operateObjid];
        }
        if(!operateObj)return;

        var tempArr:ItemBase[] = new Array();
        var canArr:ItemBase[] = new Array();

        for(var i in Main.player.m_items.equips){
            var equip:Equip = Main.player.m_items.equips[i];
            if(equip && equip.tpl["ePostion"] == Main.player.m_clickIndex){
                this.m_UI.xz_label_null.visible = false;
                if(equip.tpl["ejob"] == 0 || equip.tpl["ejob"] == operateObj.job){
                    canArr.push(equip);
                }else{
                    tempArr.push(equip);
                }

            }
        }

        canArr.sort(function(x:ItemBase, y:ItemBase){
            if(y.grade > x.grade)return 1;
            else if(y.grade == x.grade){
                if(y["qly"] > x["qly"])return 1;
                else if(y["qly"] == x["qly"]){
                    if(y.tpl['lv'] > x.tpl['lv'])return 1
                }
            }
            return -1;
        });

        for(var i in canArr)
        {
            this.dp.addItem(canArr[i]);
        }
        for(var i in tempArr){
            this.dp.addItem(tempArr[i]);
        }

        if(Main.player.m_clickItme)
        {
            this.m_UI.xz_icon.data = Main.player.m_clickItme;

            this.m_UI.xz_icon.dataChanged();

            this.m_UI.xz_label_property._textField.textFlow = <Array<egret.ITextElement>>GameManager.GetEqptPropStr(Main.player.m_clickItme);

//            this.m_UI.xz_label_property.textColor = GameManager.COLOR[Number(Main.player.m_clickItme["qly"])];

            this.setVis(true);
        }
        else
        {
            this.m_UI.xz_label_property.text = "";
            this.m_UI.xz_icon.setCount("");
            this.m_UI.xz_icon.setItems("test_icon");
            this.m_UI.xz_icon.setName("");
            this.m_UI.xz_icon.setQuality(0);
            this.m_UI.xz_icon.setText("");
            this.m_UI.xz_icon.setStrength("");
            this.m_UI.xz_icon.setEffVis();
            this.m_UI.xz_icon._group.removeAllElements();
            this.m_UI.xz_icon.data = null;

            this.setVis();
        }

        if(this.dp.length < 3) {
            var self = this;
            egret.callLater(function(){
                self.textList.dataGroup.verticalScrollPosition = 0;
            }, this.textList);
        }

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
