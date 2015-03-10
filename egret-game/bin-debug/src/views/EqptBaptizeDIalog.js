var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var EqptBaptizeDIalog = (function (_super) {
    __extends(EqptBaptizeDIalog, _super);
    function EqptBaptizeDIalog() {
        _super.call(this);
    }
    EqptBaptizeDIalog.prototype.createChildren = function () {
        _super.prototype.createChildren.call(this);
        this._dialog = new DialogBox();
        this.addElement(this._dialog);
        this._dialog.horizontalCenter = 0;
        this.m_UI = new UIEqptStrengthen();
        this.addElement(this.m_UI);
        this.m_UI.horizontalCenter = 0;
        this._dialog._btn_close.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouch, this);
        this._dialog._btn_help.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onHelp, this);
        this._dialog.setTitle("洗 练");
        this.m_UI.qh_btn_xilian.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onStrength, this);
        this.m_UI.qh_btn_gaojixilian.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onStrength, this);
        this.m_UI.qh_btn_strengthen.visible = false;
        this.m_UI.xq_label_explain.text = "副属性包括：攻击，道术，魔法，耐力";
        this.m_UI._label_bangding.visible = false;
        this.top = 30;
        this.m_UI.top = this.top + 50;
    };
    EqptBaptizeDIalog.prototype.onHelp = function (e) {
        var help = DialogManager.findDialog(HelpDialog, "HelpDialog");
        if (help) {
            help.index = 6;
            if (help.showing) {
                help.showText();
            }
            else {
                help.show();
            }
        }
    };
    EqptBaptizeDIalog.prototype.onStrength = function (e) {
        var type = 1;
        if (e.target == this.m_UI.qh_btn_gaojixilian) {
            type = 2;
        }
        var id = this.item["id"];
        var url = "http://" + GameManager.server["ip"] + ":" + GameManager.server["port"];
        var param = "objid=" + id + "&status=" + type + "&type=0x0010&sid=" + GameManager.SESSION_ID;
        HttpMessage.sendMsg(url, param);
        if (type == 2) {
        }
    };
    EqptBaptizeDIalog.prototype.onTouch = function (e) {
        this.hide();
    };
    EqptBaptizeDIalog.prototype.onUpdate = function () {
        var item = Main.player.m_clickItme;
        if (item) {
            this.item = item;
            var tpl = item.tpl;
            this.m_UI.qh_icon.data = item;
            this.m_UI.qh_icon.dataChanged();
            var strengthen = Number(item["strength"]);
            var nextStr = "洗练可以重置副属性\n";
            var level = tpl["lv"];
            var obj = GameManager.JSON_RECAST[level];
            nextStr += "普通洗练需要金币:" + obj["money"] + " (当前拥有: " + Main.player.money + ")\n";
            nextStr += "高级洗练需要元宝:50 (当前拥有: " + Main.player.gold + ")\n";
            this.m_UI.qh_label_next.text = nextStr;
            this.m_UI.qh_label_property._textField.textFlow = GameManager.GetEqptPropStr(item);
        }
    };
    EqptBaptizeDIalog.prototype.show = function () {
        _super.prototype.show.call(this);
        this.onUpdate();
    };
    EqptBaptizeDIalog.prototype.hide = function () {
        _super.prototype.hide.call(this);
    };
    return EqptBaptizeDIalog;
})(Dialog);
EqptBaptizeDIalog.prototype.__class__ = "EqptBaptizeDIalog";
