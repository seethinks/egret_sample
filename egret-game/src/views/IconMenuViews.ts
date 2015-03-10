
class IconMenuViews extends egret.gui.Group
{
    private m_UI:MainIconMenu;

    private clickUI:egret.gui.UIAsset;

    public constructor()
    {
        super();
    }

    public createChildren():void
    {
        super.createChildren();

        this.m_UI = new MainIconMenu();

        this.addElement(this.m_UI);

        this.m_UI._main_btn_bag.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouch, this);
        this.m_UI._main_btn_eqpt.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouch, this);
        this.m_UI._main_btn_fight.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouch, this);
        this.m_UI._main_btn_help.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouch, this);
        this.m_UI._main_btn_hero.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouch, this);
        this.m_UI._main_btn_idea.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouch, this);
        this.m_UI._main_btn_mail.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouch, this);
        this.m_UI._main_btn_myinfo.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouch, this);
        this.m_UI._main_btn_notice.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouch, this);
        this.m_UI._main_btn_recharge.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouch, this);
        this.m_UI._main_btn_skill.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouch, this);
        this.m_UI._mian_btn_mian.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouch, this);
        this.m_UI.icon_gongxianduihuan.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchs, this);
        this.m_UI.icon_guaiwugongcheng.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchs, this);
        this.m_UI.icon_hanghuichengyuan.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchs, this);
        this.m_UI.icon_hanghuipaihang.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchs, this);
        this.m_UI.icon_hanghuiqiandao.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchs, this);
        this.m_UI.icon_hanghuizhengba.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchs, this);

        this.m_UI._main_btn_bag.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onBegin, this);
        this.m_UI._main_btn_eqpt.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onBegin, this);
        this.m_UI._main_btn_fight.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onBegin, this);
        this.m_UI._main_btn_help.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onBegin, this);
        this.m_UI._main_btn_hero.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onBegin, this);
        this.m_UI._main_btn_idea.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onBegin, this);
        this.m_UI._main_btn_mail.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onBegin, this);
        this.m_UI._main_btn_myinfo.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onBegin, this);
        this.m_UI._main_btn_notice.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onBegin, this);
        this.m_UI._main_btn_recharge.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onBegin, this);
        this.m_UI._main_btn_skill.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onBegin, this);
        this.m_UI._mian_btn_mian.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onBegin, this);
        this.m_UI.icon_gongxianduihuan.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onBegin, this);
        this.m_UI.icon_guaiwugongcheng.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onBegin, this);
        this.m_UI.icon_hanghuichengyuan.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onBegin, this);
        this.m_UI.icon_hanghuipaihang.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onBegin, this);
        this.m_UI.icon_hanghuiqiandao.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onBegin, this);
        this.m_UI.icon_hanghuizhengba.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onBegin, this);

        this.m_UI.group_hanghui.visible = false;
    }

    public setShowWarn(b:boolean = false):void
    {
        if(this.m_UI)
        {
            if(b && !this.m_UI._main_btn_myinfo.visible) return;

            this.m_UI.setEqptWarn(b);
        }
    }

    public setGift(b:boolean = false):void
    {
        if(this.m_UI)
        {
            if(!egret.localStorage.getItem("prompt1") && b) return;

            if(b && !this.m_UI._main_btn_myinfo.visible) return;

            this.m_UI.setGiftWarn(b);
        }
    }

    public setBag(b:boolean = false):void
    {
        if(this.m_UI)
        {
            if(b && !this.m_UI._main_btn_myinfo.visible) return;

            this.m_UI.setBagWarn(b);
        }
    }

    public setBelle(b:boolean = false):void
    {
        if(this.m_UI)
        {
            this.m_UI.setBelleWarn(b);
        }
    }

    public setFull(b:boolean = false):void
    {
        if(this.m_UI)
        {
            if(b && !this.m_UI._main_btn_myinfo.visible) return;
            this.m_UI.setFull(b);
        }
    }

    public setSkill(b:boolean = false):void
    {
        if(this.m_UI)
        {
            this.m_UI.setSkill(b);
        }
    }

    public setFight(b:boolean = false):void
    {
        if(this.m_UI)
        {
            this.m_UI.setFight(b);
        }
    }

    public setShowMailWarn(b:boolean = false):void
    {
        if(b)
        {
            if(!egret.localStorage.getItem("prompt1")) return;

            if(this.m_UI._main_btn_mail.visible) this.m_UI.setMailWarn(b);
        }
        else
        {
            this.m_UI.setMailWarn();
        }
    }

    private onBegin(e:egret.TouchEvent):void
    {
        var ui:egret.gui.UIAsset = e.currentTarget;

        ui.scaleX = 0.9;

        ui.scaleY = 0.9;

        this.clickUI = ui;

        egret.setTimeout(this.onEnd, this, 50);
    }

    private onEnd(e:egret.TouchEvent):void
    {
        if(this.clickUI)
        {
            this.clickUI.scaleX = 1;

            this.clickUI.scaleY = 1;
        }
    }

    public setSmallIconVis(_bool:boolean = true):void
    {
        this.m_UI._main_btn_myinfo.visible = _bool;
        this.m_UI._main_btn_mail.visible = _bool;
        this.m_UI._main_btn_notice.visible = _bool;
        this.m_UI._main_btn_idea.visible = _bool;
        this.m_UI._main_btn_recharge.visible = _bool;
        this.m_UI._main_btn_help.visible = _bool;

        if(!_bool)
        {
            this.setShowMailWarn();

            this.setBag();

            this.setGift();

            this.setFull();

            this.setSkill();

            this.setFight();

            this.setBelle();
        }
    }

    public setHanghuiGroupVis(_bool:boolean = true):void
    {
        this.m_UI.group_hanghui.visible = _bool;
    }

    private onTouch(e:egret.TouchEvent):void
    {
        DialogManager.clear();

        this.setSmallIconVis(true);

        this.setHanghuiGroupVis(false);

        switch (e.target)
        {
            case this.m_UI._main_btn_bag:
                DialogManager.open(ItemBag, "ItemBag");
                break;
            case this.m_UI._main_btn_eqpt:
                DialogManager.open(HeroEqpt, "HeroEqpt");
                this.setShowWarn(false);
                break;
            case this.m_UI._main_btn_fight:
                DialogManager.open(FightDialog, "FightDialog");
                this.setSmallIconVis(false);
                break;
            case this.m_UI._main_btn_help:
                var help:HelpDialog = DialogManager.findDialog(HelpDialog, "HelpDialog");

                if(help)
                {
                    help.index = 0;

                    if(help.showing)
                    {
                        help.showText();
                    }
                    else
                    {
                        help.show();
                    }
                }
                break;
            case this.m_UI._main_btn_hero:
//                GameManager.flyText({t:"即将开放！", q:1});
//                return;
                if(Main.player.level < 15)
                {
                    GameManager.flyText({t:"15级开放！", q:1});
                    break;
                }
                DialogManager.open(BelleDialog, "BelleDialog");
                this.setSmallIconVis(false);
                break;
            case this.m_UI._main_btn_idea:
                //DialogManager.open(SuggestionDialog, "SuggestionDialog");   意见界面干掉换成了 礼包界面
                DialogManager.open(GiftDialog, "GiftDialog");
                break;
            case this.m_UI._main_btn_mail:
                //DialogManager.open(MailDialog, "MailDialog");
                var url:string = "http://"+GameManager.server["ip"]+":"+GameManager.server["port"];
                var param:string = "type=0x0070&sid="+GameManager.SESSION_ID;
                HttpMessage.sendMsg(url, param);

                this.setShowMailWarn();
                break;
            case this.m_UI._main_btn_myinfo:
                DialogManager.open(MyInformation, "MyInformation");
                break;
            case this.m_UI._main_btn_notice:
                DialogManager.open(NoticeDialog, "NoticeDialog");
                break;
            case this.m_UI._main_btn_recharge:
                DialogManager.open(ChargeDialog, "ChargeDialog");
                break;
            case this.m_UI._main_btn_skill:
                if(Main.player.level < 5)
                {
                    GameManager.flyText({t:"达到5级开放！", q:1});
                    break;
                }
                var url:string = "http://"+GameManager.server["ip"]+":"+GameManager.server["port"];
                var param:string = "type=0x0015&sid="+GameManager.SESSION_ID;
                HttpMessage.sendMsg(url, param);

                DialogManager.open(SkillDialog, "SkillDialog");

                this.setSmallIconVis(false);
                break;
            case this.m_UI._mian_btn_mian:
                break;
        }
    }

    private onTouchs(e:egret.TouchEvent):void
    {
        switch (e.target)
        {
            case this.m_UI.icon_hanghuichengyuan:
                var url:string = "http://"+GameManager.server["ip"]+":"+GameManager.server["port"];
                var param:string = "type=0x0029&sid="+GameManager.SESSION_ID;
                HttpMessage.sendMsg(url, param);
                break;
            case this.m_UI.icon_hanghuipaihang:
                DialogManager.open(SocietyRank, "SocietyRank");
                break;
            case this.m_UI.icon_hanghuiqiandao:
                if(Main.player.m_society && Main.player.m_society.myInfo && Main.player.m_society.myInfo.isSignIn > 0){
                    GameManager.flyText({"t":"今日已签到", "q":5});
                    return;
                }

                var url:string = "http://"+GameManager.server["ip"]+":"+GameManager.server["port"];
                var param:string = "type=0x0028&sid="+GameManager.SESSION_ID;
                HttpMessage.sendMsg(url, param);
                break;
            case this.m_UI.icon_guaiwugongcheng:
                var url:string = "http://"+GameManager.server["ip"]+":"+GameManager.server["port"];

                var param:string = "type=0x0127&sid="+GameManager.SESSION_ID;

                HttpMessage.sendMsg(url, param);
                break;
            case this.m_UI.icon_gongxianduihuan:
                DialogManager.open(SocietyShop, "SocietyShop");
                break;
            default:
                GameManager.flyText({t:"暂未开放,敬请期待！", q:1});
                break;
        }
    }
}
