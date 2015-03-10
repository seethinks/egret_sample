
class EqptStrengthen extends Dialog
{
    private _dialog:DialogBox;

    private m_UI:UIEqptStrengthen;

    private item:any;

    private s_level:Array<any> = [1, 1, 1.5, 2.5, 3.5, 4.5, 9, 10, 11, 12, 13, 19.5, 21.5, 23.5, 25.5, 27.5];

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

        this._dialog.setTitle("强 化");

        this.m_UI.qh_btn_xilian.visible = false;

        this.m_UI.qh_btn_gaojixilian.visible = false;

        this.m_UI.qh_btn_strengthen.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onStrength,this);

        this.top = 30;

        this.m_UI.top = this.top + 50;
    }

    private onHelp(e:egret.TouchEvent):void
    {
        var help:HelpDialog = DialogManager.findDialog(HelpDialog, "HelpDialog");

        if(help)
        {
            help.index = 5;

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
        var id = this.item["id"];

        var url:string = "http://"+GameManager.server["ip"]+":"+GameManager.server["port"];

        var param:string = "objid=" + id + "&type=0x0009&sid="+GameManager.SESSION_ID;

        HttpMessage.sendMsg(url, param);
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

            if(strengthen < 15)
            {
                var qly:number = Number(item["qly"]);

                var a = GameManager.JSON_STRENGTH[qly];

                var b = a[(strengthen + 1)];

                var postion:number = Number(item.tpl["ePostion"]);

                var level:number = Number(item.tpl["lv"]);

                var num1:number = 0;

                switch (postion)
                {
                    case 1:
                        num1 = (2 + 0.12 * level) * (qly + 1);
                        break;
                    case 2:
                        num1 = 0.07 * level * qly + qly + 0.12 * level + 1;
                        break;
                    case 3:
                        num1 = 0.04 * level * qly + 0.75 * qly + 0.09 * level + 1;
                        break;
                    case 4:
                        num1 = 0.5 * qly + 3.5 / 100 * level * qly + 1 + 0.06 * level;
                        break;
                    case 5:
                        num1 = 2 * qly + 0.05 * level * qly + 0.23 * level + 1;
                        break;
                    case 6:
                        num1 = 0.5 * qly + 3.5 / 100 * level * qly + 1 + 0.06 * level;
                        break;
                    case 7:
                        num1 = 1.5 * qly + 10.25 / 100 * level * qly + 1 + 0.12 * level;
                        break;
                    case 8:
                        num1 = 0.1 * level * qly + 1.75 / 100 * qly + 1 + 0.18 * level;
                        break;
                    case 9:
                        num1 = 6.75 / 100 * level * qly + 0.75 / 100 * qly + 0.11 * level + 1;
                        break;
                    case 10:
                        num1 = 15.5 / 100 * level * qly + 1.75 / 100 * qly + 1 + 0.11 * level;
                        break;
                }

                var st_lvl:number = Number(item["strength"]) + 1;

                if(!st_lvl) st_lvl = 0;

                var c:number = Math.round(num1 * this.s_level[st_lvl]);

                var nextStr:string = "下一级强化 主属性+"+b["baseattributeup"]+"%\n";

                nextStr += "需要黑铁矿石:"+c+" (当前拥有: "+Main.player.bstone+")\n";    //强化金钱是  宝石数 * 2000

                if(st_lvl == 1)
                {
                    nextStr += "需要金币:" + (c * 2000 * 2) + "(当前拥有: " + Main.player.money + ")\n"; //两倍

                    //nextStr += "需要金币:" + (c * 2000 * 10) + "(当前拥有: " + Main.player.money + ")\n"; //十倍
                }
                else
                {
                    nextStr += "需要金币:" + (c * 2000) + "(当前拥有: " + Main.player.money + ")\n";
                }
            }
            else
            {
                nextStr = "已达顶级";
            }

            this.m_UI.qh_label_next.text = nextStr;

            this.m_UI.qh_label_property._textField.textFlow = <Array<egret.ITextElement>>GameManager.GetEqptPropStr(item);

//            this.m_UI.qh_label_property.textColor = GameManager.COLOR[Number(item["qly"])];
        }
    }

    public onUpdatePlayer():void
    {
        this.onUpdate();
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
