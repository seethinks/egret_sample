var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var SocietyCreate = (function (_super) {
    __extends(SocietyCreate, _super);
    function SocietyCreate() {
        _super.call(this);
        this.txt_chat = new egret.TextField();
    }
    SocietyCreate.prototype.createChildren = function () {
        _super.prototype.createChildren.call(this);
        this.top = 200;
        this.dialog = new DialogBox();
        this.addElement(this.dialog);
        this.dialog.height = 460;
        this.dialog.setTitle("创建行会");
        this.m_UI = new UISocietyCreate();
        this.addElement(this.m_UI);
        this.m_UI.top = 120;
        this.m_UI.horizontalCenter = 0;
        this.m_UI._name_input.source = this.txt_chat;
        this.txt_chat.text = "";
        this.txt_chat.type = egret.TextFieldType.INPUT;
        this.m_UI._name_input.touchChildren = true;
        this.txt_chat.width = 240;
        this.txt_chat.height = 30;
        this.txt_chat.textColor = 0xffffff;
        this.txt_chat.size = 20;
        this.dialog._btn_close.addEventListener(egret.TouchEvent.TOUCH_TAP, this.hied, this);
        this.dialog._btn_help.visible = false;
        this.m_UI.btn_cancel.addEventListener(egret.TouchEvent.TOUCH_TAP, this.hied, this);
        this.m_UI.btn_create.addEventListener(egret.TouchEvent.TOUCH_TAP, this.createSociety, this);
    };
    SocietyCreate.prototype.show = function () {
        _super.prototype.show.call(this);
    };
    SocietyCreate.prototype.hied = function () {
        _super.prototype.hide.call(this);
    };
    SocietyCreate.prototype.createSociety = function (e) {
        if (this.txt_chat.text == "") {
            GameManager.flyText({ "t": "名称不能为空", "q": 5 });
            return;
        }
        if (Main.player.level < 18) {
            GameManager.flyText({ "t": "等级达到18级才能创建行会", "q": 5 });
            return;
        }
        var url = "http://" + GameManager.server["ip"] + ":" + GameManager.server["port"];
        var params = "type=0x0019&name=" + this.txt_chat.text + "&sid=" + GameManager.SESSION_ID;
        HttpMessage.sendMsg(url, params);
        this.hied();
    };
    return SocietyCreate;
})(Dialog);
SocietyCreate.prototype.__class__ = "SocietyCreate";
