
class ArmsInheritDialog extends Dialog
{
    private _dialog:DialogBox;

    private m_UI:UIArmsInherit;

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

        this.m_UI = new UIArmsInherit();

        this.addElement(this.m_UI);

        this.m_UI.horizontalCenter = 0;

        this._dialog._btn_close.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouch,this);

        this._dialog._btn_help.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onHelp,this);

        this._dialog.setTitle("神器传承");

        this.top = 30;

        this.m_UI.top = this.top + 50;

        this.m_UI.cc_icon_to.addEventListener(egret.TouchEvent.TOUCH_TAP,this.openCheck,this);

        this.m_UI.ch_btn_chuancheng.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onChuanCheng, this);
    }

    private onHelp(e:egret.TouchEvent):void
    {
        var help:HelpDialog = DialogManager.findDialog(HelpDialog, "HelpDialog");

        if(help)
        {
            help.index = 7;

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

    private onChuanCheng(e:egret.TouchEvent):void
    {
        if(this.m_UI.cc_icon_from.data && this.m_UI.cc_icon_to.data)
        {
            var url:string = "http://"+GameManager.server["ip"]+":"+GameManager.server["port"];

            var param:string = "type=0x0088&sid="+GameManager.SESSION_ID + "&godId=" + this.m_UI.cc_icon_from.data["id"] + "&equipId=" + this.m_UI.cc_icon_to.data["id"];

            HttpMessage.sendMsg(url, param);

            this.hide();
        }
    }

    private openCheck(e:egret.TouchEvent):void
    {
        DialogManager.open(ArmsInheritCheck, "ArmsInheritCheck");
    }

    private onTouch(e:egret.TouchEvent):void
    {
        this.hide();
    }

    public setItem(obj:any):void
    {
        if(!obj) return;

        this.m_UI.cc_icon_to.data = obj;

        this.m_UI.cc_icon_to.dataChanged();

        this.updateText();
    }

    private updateText():void
    {
        var level_from:number = this.m_UI.cc_icon_from.data.tpl["lv"];

        var level_to:number = this.m_UI.cc_icon_to.data.tpl["lv"];

        if(Number(level_from) == 1) level_from = 0;

        if(Number(level_from) < Number(level_to))
        {
            var godLevel:number = Number(this.m_UI.cc_icon_from.data["godLevel"]);

            var num:number = (level_to - level_from) * 10000 * godLevel * godLevel;

            this.m_UI.ch_label_money.text = "需要消耗金币：" + Math.abs(num);
        }
        else
        {
            this.m_UI.ch_label_money.text = "需要消耗金币：10000";
        }
    }

    public onUpdate():void
    {
        var item:any = Main.player.m_clickItme;

        if(item)
        {
            this.m_UI.cc_icon_from.data = item;

            this.m_UI.cc_icon_from.dataChanged();

            //this.updateText();

            var str:string = "";

            //神器属性
            if(item["godEq"]> 0)
            {
                if(item["gevalue1"] > 0)
                {
                    str = GameManager.GetGodEqDesc(Number(item["gekey1"]), item["gevalue1"])+"\n";
                }
                if(item["gevalue2"]> 0)
                {
                    str += GameManager.GetGodEqDesc(Number(item["gekey2"]), item["gevalue2"]);
                }
            }

            this.m_UI.ch_label_property.text = str;
        }
    }

    public show()
    {
        super.show( );

        if(Main.player.m_clickItme) this.onUpdate();
    }

    public hide()
    {
        super.hide();

        this.clearIcon(this.m_UI.cc_icon_from);

        this.clearIcon(this.m_UI.cc_icon_to);

        this.m_UI.ch_label_property.text = "";

        this.m_UI.ch_label_money.text = "";
    }

    private clearIcon(icon:UIIcon):void
    {
        icon.setCount("");

        icon.setItems("test_icon");

        icon.setName("");

        icon.setQuality(0);

        icon.setText("");

        icon.setStrength("");

        icon.data = null;

//        icon._group.removeAllElements();
    }
}
