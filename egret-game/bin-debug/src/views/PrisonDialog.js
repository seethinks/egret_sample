var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var PrisonDialog = (function (_super) {
    __extends(PrisonDialog, _super);
    function PrisonDialog() {
        _super.call(this);
        this.textList = new egret.gui.List();
        this.dp = new egret.gui.ArrayCollection();
        this.actList = [];
        this.time = 0;
    }
    PrisonDialog.prototype.createChildren = function () {
        _super.prototype.createChildren.call(this);
        this.m_dialog = new DialogBox();
        this.addElement(this.m_dialog);
        this.m_dialog.horizontalCenter = 0;
        this.m_dialog.setTitle("监  狱");
        this.m_dialog._btn_close.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouch, this);
        this.m_dialog._btn_help.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onHelp, this);
        this.m_dialog.height = Main.guiLayer.height - 220;
        this.m_UI = new PrisonUI();
        this.addElement(this.m_UI);
        this.m_UI.horizontalCenter = 0;
        this.textList.skinName = "skins.ListSkin";
        this.addElement(this.textList);
        this.textList.height = 335;
        this.textList.horizontalCenter = 0;
        this.textList.itemRenderer = new egret.gui.ClassFactory(PrisonListUI);
        this.textList.itemRendererSkinName = "skins.PrisonListSkin";
        this.textList.dataProvider = this.dp;
        //this.textList.addEventListener(egret.gui.ListEvent.ITEM_CLICK, this.clickItem, this);
        this.top = 20;
        this.m_UI.top = this.top + 45;
        this.textList.top = this.m_UI.top + 162;
        this.m_UI._btn_huilu.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
        this.m_UI._btn_zhuilu.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
    };
    PrisonDialog.prototype.onHelp = function (e) {
        var help = DialogManager.findDialog(HelpDialog, "HelpDialog");
        if (help) {
            help.index = 9;
            if (help.showing) {
                help.showText();
            }
            else {
                help.show();
            }
        }
    };
    PrisonDialog.prototype.onClick = function (e) {
        var url = "http://" + GameManager.server["ip"] + ":" + GameManager.server["port"];
        var param = "";
        switch (e.target) {
            case this.m_UI._btn_huilu:
                param = "type=0x0130&sid=" + GameManager.SESSION_ID;
                GameManager.msgBox.showMsg(function (r) {
                    if (r) {
                        HttpMessage.sendMsg(url, param);
                    }
                }, "是否花费10元宝消除100点PK值？");
                break;
            case this.m_UI._btn_zhuilu:
                if (Main.player.vip < 3) {
                    GameManager.flyText({ t: "VIP3开启！", q: 1 });
                    return;
                }
                param = "type=0x0131&sid=" + GameManager.SESSION_ID;
                GameManager.msgBox.showMsg(function (r) {
                    if (r) {
                        HttpMessage.sendMsg(url, param);
                        if (GameManager.dataEyes)
                            GameManager.dataEyes.pushEvent("红名贿赂", 1, { cost: Math.floor(Main.player.pk * 0.08), pname: Main.player.name, sid: GameManager.server.sid });
                    }
                }, "  消除" + Main.player.pk + "点PK值需要花费" + Math.floor(Main.player.pk * 0.08) + "元宝(八折)，您确定继续？");
                break;
        }
    };
    PrisonDialog.prototype.onTouch = function (e) {
        this.hide();
    };
    PrisonDialog.prototype.onUpdate = function () {
        this.dp.removeAll();
        if (this.actList && this.actList.length > 0) {
            for (var i = 0; i < this.actList.length; i++) {
                this.dp.addItem(this.actList[i]);
            }
        }
        if (this.initUI) {
            this.m_UI._label_pk.text = "PK值：" + Main.player.pk;
            this.m_UI._label_time.text = "";
        }
        this.time = (Main.player.pk / 2) * 10;
        if (Main.player.inPrison <= 0) {
            this.m_UI._btn_huilu.visible = false;
            this.m_UI._btn_zhuilu.visible = false;
        }
        else {
            this.m_UI._btn_huilu.visible = true;
            this.m_UI._btn_zhuilu.visible = true;
        }
    };
    PrisonDialog.prototype.onTimer = function () {
        if (this.initUI) {
            if (this.time > 0 && Main.player.inPrison > 0) {
                this.time--;
                this.m_UI._label_time.text = "出狱倒计时：" + GameManager.getStringBySeconds(this.time);
            }
            else {
                this.m_UI._label_time.text = "";
            }
        }
    };
    PrisonDialog.prototype.onUpdatePlayer = function () {
        this.onUpdate();
    };
    PrisonDialog.prototype.show = function () {
        _super.prototype.show.call(this);
        this.onUpdate();
    };
    PrisonDialog.prototype.hide = function () {
        _super.prototype.hide.call(this);
    };
    return PrisonDialog;
})(Dialog);
PrisonDialog.prototype.__class__ = "PrisonDialog";
