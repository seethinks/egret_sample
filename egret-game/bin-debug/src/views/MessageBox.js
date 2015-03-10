var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
/**
 * 不要调用DialogManager.open();
 *
 * 直接调用这个类的showMsg();
 */
var MessageBox = (function (_super) {
    __extends(MessageBox, _super);
    function MessageBox() {
        _super.call(this);
    }
    MessageBox.prototype.createChildren = function () {
        _super.prototype.createChildren.call(this);
        this.m_dialog = new DialogBox();
        this.addElement(this.m_dialog);
        this.m_dialog.height = 390;
        this.m_UI = new UIMessageBox();
        this.addElement(this.m_UI);
        this.m_dialog.horizontalCenter = 0;
        this.m_dialog.setTitle("郑重提示");
        this.m_dialog._btn_close.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouch, this);
        this.m_UI.msg_btn_false.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouch, this);
        this.m_UI.msg_btn_true.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTrue, this);
        this.m_dialog._btn_help.visible = false;
        this.m_UI.horizontalCenter = 0;
        this.top = 30;
        this.m_UI.top = this.top + 50;
        this.horizontalCenter = 0;
        this.verticalCenter = 0;
    };
    MessageBox.prototype.onTrue = function (e) {
        this.hide();
        this.cb(true);
    };
    MessageBox.prototype.onTouch = function (e) {
        this.hide();
        this.cb(false);
    };
    MessageBox.prototype.onUpdate = function () {
    };
    MessageBox.prototype.showMsg = function (fun, text, hidebtn, b1, b2, title) {
        if (text === void 0) { text = ""; }
        if (hidebtn === void 0) { hidebtn = false; }
        if (b1 === void 0) { b1 = "确  定"; }
        if (b2 === void 0) { b2 = "取  消"; }
        if (title === void 0) { title = "提  示"; }
        this.show();
        this.m_UI.msg_label.text = text;
        this.cb = fun;
        this.m_UI.msg_btn_true._setLabel(b1);
        this.m_UI.msg_btn_false._setLabel(b2);
        if (hidebtn) {
            this.m_UI.msg_btn_false.visible = false;
            this.m_UI.msg_btn_true.horizontalCenter = 0;
        }
        else {
            this.m_UI.msg_btn_false.visible = true;
            this.m_UI.msg_btn_true.horizontalCenter = 100;
        }
        this.m_dialog.setTitle(title);
    };
    MessageBox.prototype.show = function () {
        _super.prototype.show.call(this);
    };
    MessageBox.prototype.hide = function () {
        _super.prototype.hide.call(this);
    };
    return MessageBox;
})(Dialog);
MessageBox.prototype.__class__ = "MessageBox";
