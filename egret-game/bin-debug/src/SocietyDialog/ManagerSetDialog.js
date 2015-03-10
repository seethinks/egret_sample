var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
/**
 * 入会条件设置
 */
var ManagerSetDialog = (function (_super) {
    __extends(ManagerSetDialog, _super);
    function ManagerSetDialog() {
        _super.call(this);
        this.text = "";
    }
    ManagerSetDialog.prototype.createChildren = function () {
        _super.prototype.createChildren.call(this);
        this._dialog = new DialogBox();
        this.addElement(this._dialog);
        this._dialog.height = 550;
        this._dialog.horizontalCenter = 0;
        this.m_UI = new ManagerSetUI();
        this.addElement(this.m_UI);
        this.m_UI.horizontalCenter = 0;
        this._dialog._btn_close.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouch, this);
        this._dialog._btn_help.visible = false;
        this._dialog.setTitle("设定入会条件");
        this.top = 30;
        this.m_UI.top = this.top + 50;
        this.verticalCenter = 0;
        this.m_UI.btn_false.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouch, this);
        this.m_UI.btn_true.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
        this.m_UI.touchChildren = true;
        //this.m_UI._text.addEventListener(egret.Event.CHANGE, this.onInput, this);
    };
    ManagerSetDialog.prototype.onInput = function (e) {
        var str = this.m_UI._text.text;
        var regEx = new RegExp('^[0-9]*$'); //数字
        var r = regEx.test(str);
        if (r) {
            this.text = str;
        }
        else {
            this.m_UI._text.text = str;
        }
    };
    ManagerSetDialog.prototype.onClick = function (e) {
        var str = this.m_UI._text.text;
        var regEx = new RegExp('^[0-9]*$'); //数字
        var r = regEx.test(str);
        if (r) {
            var url = "http://" + GameManager.server["ip"] + ":" + GameManager.server["port"];
            var param = "type=0x0022&sid=" + GameManager.SESSION_ID + "&fv=" + str;
            HttpMessage.sendMsg(url, param);
            this.hide();
        }
        else {
            GameManager.flyText({ t: "只能输入数字！", q: 1 });
        }
    };
    ManagerSetDialog.prototype.onTouch = function (e) {
        this.hide();
    };
    ManagerSetDialog.prototype.onUpdate = function () {
    };
    ManagerSetDialog.prototype.show = function () {
        _super.prototype.show.call(this);
    };
    ManagerSetDialog.prototype.hide = function () {
        _super.prototype.hide.call(this);
    };
    return ManagerSetDialog;
})(Dialog);
ManagerSetDialog.prototype.__class__ = "ManagerSetDialog";
