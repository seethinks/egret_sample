
class EqptBaptizeDIalog extends Dialog
{
    private _dialog:DialogBox;

    private m_UI:UIEqptStrengthen;

    private item:any;

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

        this.m_UI = new UIEqptStrengthen();

        this.addElement(this.m_UI);

        this.m_UI.horizontalCenter = 0;

        this._dialog._btn_close.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouch,this);

        this._dialog._btn_help.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onHelp,this);

        this._dialog.setTitle("洗 练");

        this.m_UI.qh_btn_xilian.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onStrength,this);

        this.m_UI.qh_btn_gaojixilian.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onStrength,this);

        this.m_UI.qh_btn_strengthen.visible = false;

        this.m_UI.xq_label_explain.text = "副属性包括：攻击，道术，魔法，耐力";

        this.m_UI._label_bangding.visible = false;

        this.top = 30;

        this.m_UI.top = this.top + 50;
    }

    private onHelp(e:egret.TouchEvent):void
    {
        var help:HelpDialog = DialogManager.findDialog(HelpDialog, "HelpDialog");

        if(help)
        {
            help.index = 6;

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

    private onStrength(e:egret.TouchEvent):void
    {
        var type = 1;

        if(e.target== this.m_UI.qh_btn_gaojixilian)
        {
            type = 2;
        }
        var id = this.item["id"];

        var url:string = "http://"+GameManager.server["ip"]+":"+GameManager.server["port"];

        var param:string = "objid="+id+"&status="+type+"&type=0x0010&sid="+GameManager.SESSION_ID;

        HttpMessage.sendMsg(url, param);

        if(type == 2){
//            if(GameManager.dataEyes)GameManager.dataEyes.pushEvent("高级洗炼", 1,
//                {pname:Main.player.name, sid:GameManager.server.sid, cost:50});
        }

    }

    private onTouch(e:egret.TouchEvent):void
    {
        this.hide();
    }

    public onUpdate( ):void
    {
        var item = Main.player.m_clickItme;

        if(item)
        {
            this.item = item;

            var tpl = item.tpl;

            this.m_UI.qh_icon.data = item;

            this.m_UI.qh_icon.dataChanged();

            var strengthen = Number(item["strength"]);

            var nextStr:string = "洗练可以重置副属性\n";

            var level = tpl["lv"];

            var obj = GameManager.JSON_RECAST[level];

            nextStr += "普通洗练需要金币:"+ obj["money"] +" (当前拥有: "+Main.player.money+")\n";

            nextStr += "高级洗练需要元宝:50 (当前拥有: "+Main.player.gold+")\n";

            this.m_UI.qh_label_next.text = nextStr;

            this.m_UI.qh_label_property._textField.textFlow = <Array<egret.ITextElement>>GameManager.GetEqptPropStr(item);

//            this.m_UI.qh_label_property.textColor = GameManager.COLOR[Number(item["qly"])];
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
