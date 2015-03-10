var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var EqptRongLian = (function (_super) {
    __extends(EqptRongLian, _super);
    function EqptRongLian() {
        _super.call(this);
        this.iconList = {};
        this.idList = ["0", "0", "0", "0", "0", "0"];
        this.isCan = false;
    }
    EqptRongLian.prototype.createChildren = function () {
        _super.prototype.createChildren.call(this);
        this.layout = new egret.gui.BasicLayout();
        this.m_dialog = new DialogBox();
        this.addElement(this.m_dialog);
        this.m_dialog.horizontalCenter = 0;
        this.m_dialog.setTitle("装备熔炼");
        this.m_dialog._btn_close.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouch, this);
        this.m_dialog._btn_help.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onHelp, this);
        this.m_UI = new UIRongLian();
        this.addElement(this.m_UI);
        this.m_UI.horizontalCenter = 0;
        this.m_UI.rl_btn_screen.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onCheck, this);
        this.m_UI.rl_btn_ronglin.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onRonglian, this);
        this.m_UI.rl_btn_cast.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onMake, this);
        for (var j = 1; j <= 6; j++) {
            var icon = this.m_UI["rl_icon_" + j];
            this.iconList[j] = icon;
            icon.addEventListener(egret.TouchEvent.TOUCH_TAP, this.clearIcon, this);
            icon.name = "" + j;
            icon.setText("点击选择");
        }
        this.top = 30;
        this.m_UI.top = this.top + 50;
    };
    EqptRongLian.prototype.onHelp = function (e) {
        var help = DialogManager.findDialog(HelpDialog, "HelpDialog");
        if (help) {
            help.index = 3;
            if (help.showing) {
                help.showText();
            }
            else {
                help.show();
            }
        }
    };
    EqptRongLian.prototype.onMake = function (e) {
        DialogManager.open(EqptMakeDialog, "EqptMakeDialog");
    };
    EqptRongLian.prototype.clearIcon = function (e) {
        var num = Number(e.currentTarget.name);
        var icon = this.iconList[num];
        if (icon.data) {
            this.idList[num - 1] = "0";
            icon.setCount("");
            icon.setItems("test_icon");
            icon.setName("");
            icon.setQuality(0);
            icon.setStrength("");
            icon.data = null;
        }
        else {
            DialogManager.open(EqptSelectDialog, "EqptSelectDialog");
        }
    };
    EqptRongLian.prototype.checkIcon = function () {
        for (var i = 1; i <= 6; i++) {
            var icon = this.iconList[i];
            if (icon.data) {
                var qly = Number(icon.data["qly"]);
                if (qly >= 4)
                    return true;
            }
        }
        return false;
    };
    EqptRongLian.prototype.onRonglian = function (e) {
        if (!this.isCan)
            return;
        if (this.checkIcon()) {
            var self = this;
            GameManager.msgBox.showMsg(function (r) {
                if (r) {
                    self.sendMsg();
                }
            }, "所选装备包含橙色装备您确定熔炼？");
        }
        else {
            this.sendMsg();
        }
    };
    EqptRongLian.prototype.setList = function (list) {
        if (list && list.length > 0) {
            this.clear();
            this.isCan = true;
            for (var i = 0; i < list.length; i++) {
                if (i > 5)
                    break;
                var icon = this.iconList[i + 1];
                icon.data = list[i];
                icon.dataChanged();
                this.idList[i] = "" + list[i].id;
            }
        }
    };
    EqptRongLian.prototype.sendMsg = function () {
        var url = "http://" + GameManager.server["ip"] + ":" + GameManager.server["port"];
        var param = "objid1=" + this.idList[0] + "&objid2=" + this.idList[1] + "&objid3=" + this.idList[2] + "&objid4=" + this.idList[3] + "&objid5=" + this.idList[4] + "&objid6=" + this.idList[5] + "&type=0x0014&sid=" + GameManager.SESSION_ID;
        HttpMessage.sendMsg(url, param);
    };
    EqptRongLian.prototype.onCheck = function (e) {
        var temp = new Array();
        var equips = Main.player.m_items.equips;
        if (equips.length > 0) {
            for (var i = equips.length - 1; i >= 0; i--) {
                if (!equips[i])
                    continue;
                if (equips[i].godEq > 0)
                    continue;
                var b = false;
                for (var j = 1; j <= 4; j++) {
                    var equ = equips[i];
                    if (Number(equ["hole" + j]) > 0) {
                        b = true;
                        break;
                    }
                }
                if (b)
                    continue;
                temp.push(equips[i]);
            }
            if (temp.length > 0)
                this.isCan = true;
            else
                this.isCan = false;
        }
        else
            this.isCan = false;
        for (var k = 0; k < temp.length; k++) {
            if (k > 5)
                break;
            var icon = this.iconList[k + 1];
            icon.data = temp[k];
            icon.dataChanged();
            this.idList[k] = "" + temp[k].id;
        }
    };
    EqptRongLian.prototype.onTouch = function (e) {
        this.clear();
        this.hide();
    };
    EqptRongLian.prototype.clear = function () {
        this.idList = ["0", "0", "0", "0", "0", "0"];
        for (var j = 1; j <= 6; j++) {
            var icon = this.iconList[j];
            icon.setCount("");
            icon.setItems("test_icon");
            icon.setName("");
            icon.setQuality(0);
            icon.setStrength("");
            icon.data = null;
        }
    };
    EqptRongLian.prototype.onUpdatePlayer = function () {
        this.m_UI.rl_label_rlnum.text = "当前熔炼值：" + Main.player.smelt;
    };
    EqptRongLian.prototype.show = function () {
        _super.prototype.show.call(this);
        this.clear();
        this.onUpdatePlayer();
    };
    EqptRongLian.prototype.hide = function () {
        _super.prototype.hide.call(this);
    };
    return EqptRongLian;
})(Dialog);
EqptRongLian.prototype.__class__ = "EqptRongLian";
