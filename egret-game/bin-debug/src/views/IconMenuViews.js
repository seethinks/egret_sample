var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var IconMenuViews = (function (_super) {
    __extends(IconMenuViews, _super);
    function IconMenuViews() {
        _super.call(this);
    }
    IconMenuViews.prototype.createChildren = function () {
        _super.prototype.createChildren.call(this);
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
    };
    IconMenuViews.prototype.setShowWarn = function (b) {
        if (b === void 0) { b = false; }
        if (this.m_UI) {
            if (b && !this.m_UI._main_btn_myinfo.visible)
                return;
            this.m_UI.setEqptWarn(b);
        }
    };
    IconMenuViews.prototype.setGift = function (b) {
        if (b === void 0) { b = false; }
        if (this.m_UI) {
            if (!egret.localStorage.getItem("prompt1") && b)
                return;
            if (b && !this.m_UI._main_btn_myinfo.visible)
                return;
            this.m_UI.setGiftWarn(b);
        }
    };
    IconMenuViews.prototype.setBag = function (b) {
        if (b === void 0) { b = false; }
        if (this.m_UI) {
            if (b && !this.m_UI._main_btn_myinfo.visible)
                return;
            this.m_UI.setBagWarn(b);
        }
    };
    IconMenuViews.prototype.setBelle = function (b) {
        if (b === void 0) { b = false; }
        if (this.m_UI) {
            this.m_UI.setBelleWarn(b);
        }
    };
    IconMenuViews.prototype.setFull = function (b) {
        if (b === void 0) { b = false; }
        if (this.m_UI) {
            if (b && !this.m_UI._main_btn_myinfo.visible)
                return;
            this.m_UI.setFull(b);
        }
    };
    IconMenuViews.prototype.setSkill = function (b) {
        if (b === void 0) { b = false; }
        if (this.m_UI) {
            this.m_UI.setSkill(b);
        }
    };
    IconMenuViews.prototype.setFight = function (b) {
        if (b === void 0) { b = false; }
        if (this.m_UI) {
            this.m_UI.setFight(b);
        }
    };
    IconMenuViews.prototype.setShowMailWarn = function (b) {
        if (b === void 0) { b = false; }
        if (b) {
            if (!egret.localStorage.getItem("prompt1"))
                return;
            if (this.m_UI._main_btn_mail.visible)
                this.m_UI.setMailWarn(b);
        }
        else {
            this.m_UI.setMailWarn();
        }
    };
    IconMenuViews.prototype.onBegin = function (e) {
        var ui = e.currentTarget;
        ui.scaleX = 0.9;
        ui.scaleY = 0.9;
        this.clickUI = ui;
        egret.setTimeout(this.onEnd, this, 50);
    };
    IconMenuViews.prototype.onEnd = function (e) {
        if (this.clickUI) {
            this.clickUI.scaleX = 1;
            this.clickUI.scaleY = 1;
        }
    };
    IconMenuViews.prototype.setSmallIconVis = function (_bool) {
        if (_bool === void 0) { _bool = true; }
        this.m_UI._main_btn_myinfo.visible = _bool;
        this.m_UI._main_btn_mail.visible = _bool;
        this.m_UI._main_btn_notice.visible = _bool;
        this.m_UI._main_btn_idea.visible = _bool;
        this.m_UI._main_btn_recharge.visible = _bool;
        this.m_UI._main_btn_help.visible = _bool;
        if (!_bool) {
            this.setShowMailWarn();
            this.setBag();
            this.setGift();
            this.setFull();
            this.setSkill();
            this.setFight();
            this.setBelle();
        }
    };
    IconMenuViews.prototype.setHanghuiGroupVis = function (_bool) {
        if (_bool === void 0) { _bool = true; }
        this.m_UI.group_hanghui.visible = _bool;
    };
    IconMenuViews.prototype.onTouch = function (e) {
        DialogManager.clear();
        this.setSmallIconVis(true);
        this.setHanghuiGroupVis(false);
        switch (e.target) {
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
                var help = DialogManager.findDialog(HelpDialog, "HelpDialog");
                if (help) {
                    help.index = 0;
                    if (help.showing) {
                        help.showText();
                    }
                    else {
                        help.show();
                    }
                }
                break;
            case this.m_UI._main_btn_hero:
                //                GameManager.flyText({t:"即将开放！", q:1});
                //                return;
                if (Main.player.level < 15) {
                    GameManager.flyText({ t: "15级开放！", q: 1 });
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
                var url = "http://" + GameManager.server["ip"] + ":" + GameManager.server["port"];
                var param = "type=0x0070&sid=" + GameManager.SESSION_ID;
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
                if (Main.player.level < 5) {
                    GameManager.flyText({ t: "达到5级开放！", q: 1 });
                    break;
                }
                var url = "http://" + GameManager.server["ip"] + ":" + GameManager.server["port"];
                var param = "type=0x0015&sid=" + GameManager.SESSION_ID;
                HttpMessage.sendMsg(url, param);
                DialogManager.open(SkillDialog, "SkillDialog");
                this.setSmallIconVis(false);
                break;
            case this.m_UI._mian_btn_mian:
                break;
        }
    };
    IconMenuViews.prototype.onTouchs = function (e) {
        switch (e.target) {
            case this.m_UI.icon_hanghuichengyuan:
                var url = "http://" + GameManager.server["ip"] + ":" + GameManager.server["port"];
                var param = "type=0x0029&sid=" + GameManager.SESSION_ID;
                HttpMessage.sendMsg(url, param);
                break;
            case this.m_UI.icon_hanghuipaihang:
                DialogManager.open(SocietyRank, "SocietyRank");
                break;
            case this.m_UI.icon_hanghuiqiandao:
                if (Main.player.m_society && Main.player.m_society.myInfo && Main.player.m_society.myInfo.isSignIn > 0) {
                    GameManager.flyText({ "t": "今日已签到", "q": 5 });
                    return;
                }
                var url = "http://" + GameManager.server["ip"] + ":" + GameManager.server["port"];
                var param = "type=0x0028&sid=" + GameManager.SESSION_ID;
                HttpMessage.sendMsg(url, param);
                break;
            case this.m_UI.icon_guaiwugongcheng:
                var url = "http://" + GameManager.server["ip"] + ":" + GameManager.server["port"];
                var param = "type=0x0127&sid=" + GameManager.SESSION_ID;
                HttpMessage.sendMsg(url, param);
                break;
            case this.m_UI.icon_gongxianduihuan:
                DialogManager.open(SocietyShop, "SocietyShop");
                break;
            default:
                GameManager.flyText({ t: "暂未开放,敬请期待！", q: 1 });
                break;
        }
    };
    return IconMenuViews;
})(egret.gui.Group);
IconMenuViews.prototype.__class__ = "IconMenuViews";
