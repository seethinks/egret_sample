var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var PageLoadDialog = (function (_super) {
    __extends(PageLoadDialog, _super);
    function PageLoadDialog() {
        _super.call(this);
    }
    PageLoadDialog.prototype.createChildren = function () {
        _super.prototype.createChildren.call(this);
        this.m_dialog = new DialogBox();
        this.m_dialog.height = 350;
        this.addElement(this.m_dialog);
        this.m_dialog.setTitle("快捷下载");
        this.m_dialog._btn_close.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouch, this);
        this.m_dialog._btn_help.visible = false;
        this.m_UI = new PageLoadUI();
        this.addElement(this.m_UI);
        this.m_UI.horizontalCenter = 0;
        this.top = 30;
        this.m_UI.top = this.top + 50;
        this.m_UI.btn_android.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
        this.m_UI.btn_ios.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
    };
    PageLoadDialog.prototype.onClick = function (e) {
        //        switch (e.target)
        //        {
        //            case this.m_UI.btn_android:
        //                    location.href = GameManager.app_downLoadUrl["android"];
        //                break;
        //            case this.m_UI.btn_ios:
        //                    location.href = GameManager.app_downLoadUrl["ios"];
        //                break;
        //        }
        this.hide();
    };
    PageLoadDialog.prototype.onTouch = function (e) {
        this.hide();
    };
    PageLoadDialog.prototype.onUpdate = function () {
    };
    PageLoadDialog.prototype.show = function () {
        _super.prototype.show.call(this);
        this.onUpdate();
    };
    PageLoadDialog.prototype.hide = function () {
        _super.prototype.hide.call(this);
    };
    return PageLoadDialog;
})(Dialog);
PageLoadDialog.prototype.__class__ = "PageLoadDialog";
