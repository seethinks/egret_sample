var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var ArmsEngulfDialog = (function (_super) {
    __extends(ArmsEngulfDialog, _super);
    function ArmsEngulfDialog() {
        _super.call(this);
        this.isCan = false;
        this.idList = ["0", "0", "0", "0", "0", "0"];
        this.iconList = {};
    }
    ArmsEngulfDialog.prototype.createChildren = function () {
        _super.prototype.createChildren.call(this);
        this._dialog = new DialogBox();
        this.addElement(this._dialog);
        this._dialog.horizontalCenter = 0;
        this.m_UI = new UIArmsEngulf();
        this.addElement(this.m_UI);
        this.m_UI.horizontalCenter = 0;
        this._dialog._btn_close.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouch, this);
        this._dialog._btn_help.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onHelp, this);
        this._dialog.setTitle("神器吞噬");
        this.top = 30;
        this.m_UI.top = this.top + 50;
        this.m_UI.ts_btn_screen.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onCheck, this);
        this.m_UI.ts_btn_tunshi.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTunshi, this);
        for (var j = 1; j <= 6; j++) {
            var icon = this.m_UI["ts_icon_" + j];
            this.iconList[j] = icon;
            icon.addEventListener(egret.TouchEvent.TOUCH_TAP, this.clearIcon, this);
            icon.name = "" + j;
        }
        this.m_UI.ts_title_exp.width = 0;
    };
    ArmsEngulfDialog.prototype.onHelp = function (e) {
        var help = DialogManager.findDialog(HelpDialog, "HelpDialog");
        if (help) {
            help.index = 8;
            if (help.showing) {
                help.showText();
            }
            else {
                help.show();
            }
        }
    };
    ArmsEngulfDialog.prototype.onTunshi = function (e) {
        this.sendMsg();
    };
    ArmsEngulfDialog.prototype.sendMsg = function () {
        if (!this.m_UI.ts_icon_zhu.data)
            return;
        var url = "http://" + GameManager.server["ip"] + ":" + GameManager.server["port"];
        var param = "objid0=" + this.m_UI.ts_icon_zhu.data["id"] + "&objid1=" + this.idList[0] + "&objid2=" + this.idList[1] + "&objid3=" + this.idList[2] + "&objid4=" + this.idList[3] + "&objid5=" + this.idList[4] + "&objid6=" + this.idList[5] + "&type=0x0089&sid=" + GameManager.SESSION_ID;
        HttpMessage.sendMsg(url, param);
    };
    ArmsEngulfDialog.prototype.clearIcon = function (e) {
        var num = Number(e.currentTarget.name);
        var icon = this.iconList[num];
        if (icon.data) {
            this.idList[num - 1] = "0";
            icon.setCount("");
            icon.setItems("test_icon");
            icon.setName("");
            icon.setQuality(0);
            icon.setText("");
            icon.setStrength("");
            icon.setEffVis();
            icon._group.removeAllElements();
            icon.data = null;
        }
        else {
            DialogManager.open(ArmsEngulfCheck, "ArmsEngulfCheck");
        }
    };
    ArmsEngulfDialog.prototype.onCheck = function (e) {
        var temp = new Array();
        var equips = Main.player.m_items.equips;
        if (equips.length > 0) {
            for (var i = equips.length - 1; i >= 0; i--) {
                if (!equips[i])
                    continue;
                if (equips[i].godEq <= 0)
                    continue;
                if (equips[i].id == Number(Main.player.m_clickItme["id"]))
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
            var item = temp[k];
            icon.setStart(item["godLevel"] + "星\n");
            this.idList[k] = "" + temp[k].id;
        }
        if (temp.length > 0) {
            var num = 1;
            if (temp.length > 6)
                num = 6;
            else
                num = temp.length;
            var godLevel = Number(this.m_UI.ts_icon_zhu.data.tpl["lv"]);
            //console.log(godLevel);
            if (godLevel < 5) {
                this.m_UI.ts_label_money.text = "需要消耗金币：" + (40000 * num);
            }
            else {
                this.m_UI.ts_label_money.text = "需要消耗金币：" + (godLevel * 3 * 4000 * num);
            }
        }
    };
    ArmsEngulfDialog.prototype.clear = function () {
        this.idList = ["0", "0", "0", "0", "0", "0"];
        for (var j = 1; j <= 6; j++) {
            var icon = this.iconList[j];
            icon.setCount("");
            icon.setItems("test_icon");
            icon.setName("");
            icon.setQuality(0);
            icon.setText("");
            icon.setStrength("");
            icon.setEffVis();
            icon._group.removeAllElements();
            icon.data = null;
        }
        this.m_UI.ts_label_money.text = "";
    };
    ArmsEngulfDialog.prototype.onTouch = function (e) {
        this.hide();
    };
    ArmsEngulfDialog.prototype.onUpdate = function () {
        var item = Main.player.m_clickItme;
        if (item && this.m_UI.ts_icon_zhu) {
            this.m_UI.ts_icon_zhu.data = item;
            this.m_UI.ts_icon_zhu.dataChanged();
            this.m_UI.ts_icon_zhu.setStart(item["godLevel"] + "星\n");
            var str = "";
            //神器属性
            if (item["godEq"] > 0) {
                if (item["gevalue1"] > 0) {
                    str = GameManager.GetGodEqDesc(Number(item["gekey1"]), item["gevalue1"]) + "\n";
                }
                if (item["gevalue2"] > 0) {
                    str += GameManager.GetGodEqDesc(Number(item["gekey2"]), item["gevalue2"]);
                }
            }
            var exp = Number(item["godUpExp"]);
            var expMax = GameManager.ARMS_EXP[Number(item["godLevel"])];
            this.m_UI.ts_label_property.text = str;
            this.m_UI.ts_label_exp.text = "经验：" + exp + "/" + expMax;
            this.m_UI.ts_label_level.text = "神器等级：Lv" + item["godLevel"];
            if ((exp / expMax) > 1) {
                this.m_UI.ts_title_exp.width = 490;
            }
            else {
                this.m_UI.ts_title_exp.width = (exp / expMax) * 490;
            }
        }
    };
    ArmsEngulfDialog.prototype.setList = function (list) {
        if (list && list.length > 0) {
            this.clear();
            this.isCan = true;
            for (var i = 0; i < list.length; i++) {
                if (i > 5)
                    break;
                var icon = this.iconList[i + 1];
                icon.data = list[i];
                icon.dataChanged();
                var item = list[i];
                icon.setStart(item["godLevel"] + "星\n");
                this.idList[i] = "" + list[i].id;
            }
            var num = 1;
            if (list.length > 6) {
                num = 6;
            }
            else {
                num = list.length;
            }
            var godLevel = Number(this.m_UI.ts_icon_zhu.data.tpl["lv"]);
            if (godLevel < 5) {
                this.m_UI.ts_label_money.text = "需要消耗金币：" + (40000 * num);
            }
            else {
                this.m_UI.ts_label_money.text = "需要消耗金币：" + (godLevel * 3 * 4000 * num);
            }
        }
    };
    ArmsEngulfDialog.prototype.show = function () {
        _super.prototype.show.call(this);
        if (Main.player.m_clickItme) {
            this.onUpdate();
        }
        else {
            if (this.initUI)
                this.onClear();
        }
    };
    ArmsEngulfDialog.prototype.onClear = function () {
        var icon = this.m_UI.ts_icon_zhu;
        if (icon && icon.data) {
            icon.setCount("");
            icon.setItems("test_icon");
            icon.setName("");
            icon.setQuality(0);
            icon.setText("");
            icon.setStrength("");
            icon._group.removeAllElements();
            icon.data = null;
        }
        this.m_UI.ts_label_property.text = "";
        this.m_UI.ts_label_exp.text = "";
        this.m_UI.ts_label_level.text = "";
        this.m_UI.ts_label_money.text = "";
    };
    ArmsEngulfDialog.prototype.hide = function () {
        _super.prototype.hide.call(this);
        this.clear();
    };
    return ArmsEngulfDialog;
})(Dialog);
ArmsEngulfDialog.prototype.__class__ = "ArmsEngulfDialog";
