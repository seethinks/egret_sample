var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var EqptStrengthen = (function (_super) {
    __extends(EqptStrengthen, _super);
    function EqptStrengthen() {
        _super.call(this);
        this.s_level = [1, 1, 1.5, 2.5, 3.5, 4.5, 9, 10, 11, 12, 13, 19.5, 21.5, 23.5, 25.5, 27.5];
    }
    EqptStrengthen.prototype.createChildren = function () {
        _super.prototype.createChildren.call(this);
        this._dialog = new DialogBox();
        this.addElement(this._dialog);
        this._dialog.horizontalCenter = 0;
        this.m_UI = new UIEqptStrengthen();
        this.addElement(this.m_UI);
        this.m_UI.horizontalCenter = 0;
        this._dialog._btn_close.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouch, this);
        this._dialog._btn_help.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onHelp, this);
        this._dialog.setTitle("强 化");
        this.m_UI.qh_btn_xilian.visible = false;
        this.m_UI.qh_btn_gaojixilian.visible = false;
        this.m_UI.qh_btn_strengthen.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onStrength, this);
        this.top = 30;
        this.m_UI.top = this.top + 50;
    };
    EqptStrengthen.prototype.onHelp = function (e) {
        var help = DialogManager.findDialog(HelpDialog, "HelpDialog");
        if (help) {
            help.index = 5;
            if (help.showing) {
                help.showText();
            }
            else {
                help.show();
            }
        }
    };
    EqptStrengthen.prototype.onStrength = function (e) {
        var id = this.item["id"];
        var url = "http://" + GameManager.server["ip"] + ":" + GameManager.server["port"];
        var param = "objid=" + id + "&type=0x0009&sid=" + GameManager.SESSION_ID;
        HttpMessage.sendMsg(url, param);
    };
    EqptStrengthen.prototype.onTouch = function (e) {
        this.hide();
    };
    EqptStrengthen.prototype.onUpdate = function () {
        var item = Main.player.m_clickItme;
        if (item) {
            this.item = item;
            var tpl = item.tpl;
            this.m_UI.qh_icon.data = item;
            this.m_UI.qh_icon.dataChanged();
            var strengthen = Number(item["strength"]);
            if (strengthen < 15) {
                var qly = Number(item["qly"]);
                var a = GameManager.JSON_STRENGTH[qly];
                var b = a[(strengthen + 1)];
                var postion = Number(item.tpl["ePostion"]);
                var level = Number(item.tpl["lv"]);
                var num1 = 0;
                switch (postion) {
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
                var st_lvl = Number(item["strength"]) + 1;
                if (!st_lvl)
                    st_lvl = 0;
                var c = Math.round(num1 * this.s_level[st_lvl]);
                var nextStr = "下一级强化 主属性+" + b["baseattributeup"] + "%\n";
                nextStr += "需要黑铁矿石:" + c + " (当前拥有: " + Main.player.bstone + ")\n"; //强化金钱是  宝石数 * 2000
                if (st_lvl == 1) {
                    nextStr += "需要金币:" + (c * 2000 * 2) + "(当前拥有: " + Main.player.money + ")\n"; //两倍
                }
                else {
                    nextStr += "需要金币:" + (c * 2000) + "(当前拥有: " + Main.player.money + ")\n";
                }
            }
            else {
                nextStr = "已达顶级";
            }
            this.m_UI.qh_label_next.text = nextStr;
            this.m_UI.qh_label_property._textField.textFlow = GameManager.GetEqptPropStr(item);
        }
    };
    EqptStrengthen.prototype.onUpdatePlayer = function () {
        this.onUpdate();
    };
    EqptStrengthen.prototype.show = function () {
        _super.prototype.show.call(this);
        this.onUpdate();
    };
    EqptStrengthen.prototype.hide = function () {
        _super.prototype.hide.call(this);
    };
    return EqptStrengthen;
})(Dialog);
EqptStrengthen.prototype.__class__ = "EqptStrengthen";
