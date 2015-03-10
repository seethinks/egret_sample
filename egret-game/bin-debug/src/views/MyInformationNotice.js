var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
/**
 * 帮会公告
 */
var MyInformationNotice = (function (_super) {
    __extends(MyInformationNotice, _super);
    function MyInformationNotice() {
        _super.call(this);
        this.text = "";
    }
    MyInformationNotice.prototype.createChildren = function () {
        _super.prototype.createChildren.call(this);
        this._dialog = new DialogBox();
        this.addElement(this._dialog);
        this._dialog.height = 550;
        this._dialog.horizontalCenter = 0;
        this.m_UI = new ManagerEditUI();
        this.addElement(this.m_UI);
        this.m_UI.horizontalCenter = 0;
        this._dialog._btn_close.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouch, this);
        this._dialog._btn_help.visible = false;
        this._dialog.setTitle("编辑个性签名");
        this.top = 30;
        this.m_UI.top = this.top + 50;
        this.verticalCenter = 0;
        this.m_UI.btn_false.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouch, this);
        this.m_UI.btn_true.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
        //this.m_UI._text.addEventListener(egret.Event.CHANGE, this.onInput, this);
        this.m_UI._label_info.text = "请设置您的个人签名，字数限制为20个字";
    };
    MyInformationNotice.prototype.onInput = function (e) {
        var str = this.m_UI._text.text;
        var regEx = new RegExp('^[\u4e00-\u9fa5]{1,40}$|^[\dA-Za-z_]{1,80}$');
        var r = regEx.test(str);
        if (r) {
            this.text = str;
        }
        else {
            this.m_UI._text.text = str;
        }
    };
    MyInformationNotice.prototype.onClick = function (e) {
        var str = this.m_UI._text.text;
        if (str.length <= 20) {
            var url = "http://" + GameManager.server["ip"] + ":" + GameManager.server["port"];
            var param = "type=0x0124&sid=" + GameManager.SESSION_ID + "&signature=" + str;
            HttpMessage.sendMsg(url, param);
            this.hide();
        }
        else {
            GameManager.flyText({ t: "不能超过20个字符！", q: 1 });
        }
    };
    MyInformationNotice.prototype.onTouch = function (e) {
        this.hide();
    };
    MyInformationNotice.prototype.onUpdate = function () {
    };
    MyInformationNotice.prototype.show = function () {
        _super.prototype.show.call(this);
    };
    MyInformationNotice.prototype.hide = function () {
        _super.prototype.hide.call(this);
    };
    return MyInformationNotice;
})(Dialog);
MyInformationNotice.prototype.__class__ = "MyInformationNotice";
