var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var CdKey = (function (_super) {
    __extends(CdKey, _super);
    function CdKey() {
        _super.call(this);
        this.m_uiass = new egret.gui.UIAsset();
    }
    CdKey.prototype.createChildren = function () {
        _super.prototype.createChildren.call(this);
        this.m_dialog = new DialogBox();
        this.addElement(this.m_dialog);
        this.m_dialog.height = 250;
        this.m_dialog.horizontalCenter = 0;
        this.m_dialog.setTitle("CDkey激活");
        this.m_dialog._btn_close.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClose, this);
        this.m_dialog._btn_help.visible = false;
        this.m_UI = new UIJiHuo();
        this.addElement(this.m_UI);
        this.m_UI.horizontalCenter = 0;
        this.m_UI.top = 80;
        this.m_text = new egret.TextField();
        this.addElement(this.m_uiass);
        this.m_uiass.source = this.m_text;
        this.m_uiass.top = this.m_UI.top + 20;
        this.m_uiass.horizontalCenter = 0;
        this.m_text.width = 375;
        this.m_text.height = 40;
        this.m_text.type = egret.TextFieldType.INPUT;
        this.m_text.size = 24;
        this.m_text.text = "";
        this.m_uiass.touchChildren = true;
        this.m_UI._btn_jihuo._setLabel("兑换");
        this.m_UI._btn_jihuo.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouch, this);
        this.verticalCenter = 0;
    };
    CdKey.prototype.onClose = function (e) {
        this.hide();
    };
    CdKey.prototype.onTouch = function (e) {
        if (this.m_text.text == "") {
            GameManager.flyText({ t: "请输入激活码！", q: 1 });
            return;
        }
        var url = "http://" + GameManager.delive["ip"] + ":" + GameManager.delive["port"] + "/" + GameManager.delive["pn"] + "/giftKey.php";
        var params = "id=" + GameManager.account["guid"] + "&sid=" + GameManager.server.sid + "&name=" + Main.player.name + "&key=" + this.m_text.text;
        var self = this;
        HttpMessage.sendMsgCallBack(url, params, function (obj) {
            if (obj) {
                if (obj["msg"]) {
                    GameManager.flyText({ t: obj["msg"], q: 1 });
                }
                if (obj["ret"] == 0 || obj["ret"] == "0") {
                    self.hide();
                }
            }
        });
    };
    CdKey.prototype.onUpdate = function () {
    };
    CdKey.prototype.show = function () {
        _super.prototype.show.call(this);
    };
    CdKey.prototype.hide = function () {
        _super.prototype.hide.call(this);
    };
    return CdKey;
})(Dialog);
CdKey.prototype.__class__ = "CdKey";
