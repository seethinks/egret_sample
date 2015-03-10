
class BelleStart extends Dialog
{
    private _dialog:DialogBox;

    private m_UI:BelleStartUI;

    private selectIndex:number = 0;

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

        this._dialog.height = Main.guiLayer.height - 300;

        this.m_UI = new BelleStartUI();

        this.addElement(this.m_UI);

        this.m_UI.horizontalCenter = 0;

        this._dialog._btn_close.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouch,this);

        this._dialog._btn_help.visible = false;

        this._dialog.setTitle("美人升星");

        this.top = 30;

        this.m_UI.top = this.top + 50;

        this.m_UI._icon1.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onSelect, this);

        this.m_UI._icon2.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onSelect, this);

        this.m_UI._icon3.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onSelect, this);

        this.m_UI._icon4.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onSelect, this);

        this.m_UI._btn_uplevel.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onUp, this);

        this.m_UI._btn_uplevelall.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onUp, this);

        this.m_UI._label_desc.text = "点击选中您要使用一种道具，使用后增加星级经验";
    }

    private onUp(e:egret.TouchEvent):void
    {
        if(this.selectIndex <= 0)
        {
            GameManager.flyText({t:"没有升星道具或者未选中道具！", q:1});
            return;
        }
        else
        {
            var url:string = "http://"+GameManager.server["ip"]+":"+GameManager.server["port"];

            var str:string = "";

            var num:number = 0;

            switch (this.selectIndex)
            {
                case 1:
                    num = 60;
                    break;
                case 2:
                    num = 61;
                    break;
                case 3:
                    num = 62;
                    break;
            }

            switch (e.target)
            {
                case this.m_UI._btn_uplevel:
                    str = "0x0060";
                    break;
                case this.m_UI._btn_uplevelall:
                    str = "0x0061";
                    break;
            }

            var param:string = "type="+str+"&sid="+GameManager.SESSION_ID + "&tempId=" + num + "&heroId=" + Main.player.m_operateObjid;

            HttpMessage.sendMsg(url, param);
        }
    }

    public onSelect(e:egret.TouchEvent):void
    {
        switch (e.target)
        {
            case this.m_UI._icon1:
                if(this.m_UI._icon1.source != "60") break;
                this.clear();
                this.selectIndex = 1;
                this.m_UI._f1.visible = true;
                break;
            case this.m_UI._icon2:
                if(this.m_UI._icon2.source != "61") break;
                this.clear();
                this.selectIndex = 2;
                this.m_UI._f2.visible = true;
                break;
            case this.m_UI._icon3:
                if(this.m_UI._icon3.source != "62") break;
                this.clear();
                this.selectIndex = 3;
                this.m_UI._f3.visible = true;
                break;
            case this.m_UI._icon4:
//                this.selectIndex = 4;
//                this.m_UI._f4.visible = true;
                break;
        }
    }

    private clear():void
    {
        this.m_UI._f1.visible = false;
        this.m_UI._f2.visible = false;
        this.m_UI._f3.visible = false;
        this.m_UI._f4.visible = false;
    }

    private onTouch(e:egret.TouchEvent):void
    {
        this.hide();
    }

    public onUpdate():void
    {
        var item60:ItemBase = Main.player.m_items.findItemByTplId(60);

        if(item60)
        {
            this.m_UI._icon1.source = "60";

            this.m_UI._count1.text = "" + item60.count;
        }
        else
        {
            this.m_UI._icon1.source = "60_h";

            this.m_UI._count1.text = "";
        }

        var item61:ItemBase = Main.player.m_items.findItemByTplId(61);

        if(item61)
        {
            this.m_UI._icon2.source = "61";

            this.m_UI._count2.text = "" + item61.count;
        }
        else
        {
            this.m_UI._icon2.source = "61_h";

            this.m_UI._count2.text = "";
        }

        var item62:ItemBase = Main.player.m_items.findItemByTplId(62);

        if(item62)
        {
            this.m_UI._icon3.source = "62";

            this.m_UI._count3.text = "" + item62.count;
        }
        else
        {
            this.m_UI._icon3.source = "62_h";

            this.m_UI._count3.text = "";
        }

        var sm:SuperWoman = Main.player.m_heros.heros[Main.player.m_operateObjid];

        if(sm)
        {
            for (var i = 1; i <= 10; i++)
            {
                var star:egret.gui.UIAsset = this.m_UI["belle_start" + i];

                if (i > sm.starlevel)
                {
                    star.source = "belle_start_a";
                }
                else
                {
                    star.source = "belle_start_l";
                }
            }

            this.m_UI._title_exp.width = (Number(sm.starexp) / Number(sm.nextstarexp)) * 464;

            if(sm.nextstarexp == 0) this.m_UI._title_exp.width = 0;

            this.m_UI._label_exp.text = sm.starexp + "/" + sm.nextstarexp;

            var level:number = Number(sm.starlevel) + 1;
            if(level > 10) level = 10;
            var model = GameManager.JSON_HERO_UPSTAR[level];

            var str:string = "攻击：" + sm.atk + "（+"+model["per"]+"%）";
            str += "\n魔法：" + sm.magic + "（+"+model["per"]+"%）";
            str += "\n道术：" + sm.tois + "（+"+model["per"]+"%）";
            str += "\n耐力：" + sm.exer + "（+"+model["per"]+"%）";

            var str2:string = "伤害：" + sm.hurtmin + "-" + sm.hurtmax + "（+"+model["per"]+"%）";
            str2 += "\n防御：" + sm.def + "（+"+model["per"]+"%）";
            str2 += "\n魔法防御：" + sm.mdef + "（+"+model["per"]+"%）";
            str2 += "\n暴击：" + sm.crit + "（+"+model["per"]+"%）";

            var p_id = sm.tpl["star" + sm.starlevel];

            var godatt = GameManager.JSON_HERO_GODATT[p_id];

            var attkey:number = Number(godatt["attkey"]);

            var attvalue:number = Number(godatt["attvalue"]);

            str += "\n当前美人特殊属性：\n" + GameManager.GetGodEqDesc(attkey, attvalue);

            p_id = sm.tpl["star" + (Number(sm.starlevel) + 1)];

            if(p_id)
            {
                godatt = GameManager.JSON_HERO_GODATT[p_id];

                if(godatt)
                {
                    attkey = Number(godatt["attkey"]);

                    attvalue = Number(godatt["attvalue"]);

                    str2 += "\n下级美人特殊属性：\n" + GameManager.GetGodEqDesc(attkey, attvalue);
                }
            }

            this.m_UI._label_prop0.text = str;

            this.m_UI._label_prop1.text = str2;
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
