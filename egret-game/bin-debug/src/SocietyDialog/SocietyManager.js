var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
/**
 * 帮会管理
 */
var SocietyManager = (function (_super) {
    __extends(SocietyManager, _super);
    function SocietyManager() {
        _super.call(this);
    }
    SocietyManager.prototype.createChildren = function () {
        _super.prototype.createChildren.call(this);
        this._dialog = new DialogBox();
        this.addElement(this._dialog);
        this._dialog.height = 550;
        this._dialog.horizontalCenter = 0;
        this.m_UI = new UISocietyManager();
        this.addElement(this.m_UI);
        this.m_UI.horizontalCenter = 0;
        this._dialog._btn_close.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouch, this);
        this._dialog._btn_help.visible = false;
        this._dialog.setTitle("行会管理");
        this.top = 30;
        this.m_UI.top = this.top + 50;
        this.m_UI.hh_btn_close.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouch, this);
        this.verticalCenter = 0;
        this.m_UI.hh_btn_edit.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
        this.m_UI.hh_btn_set.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
    };
    SocietyManager.prototype.onClick = function (e) {
        switch (e.target) {
            case this.m_UI.hh_btn_edit:
                DialogManager.open(ManagerEditDialog, "ManagerEditDialog");
                break;
            case this.m_UI.hh_btn_set:
                DialogManager.open(ManagerSetDialog, "ManagerSetDialog");
                break;
        }
    };
    SocietyManager.prototype.onTouch = function (e) {
        this.hide();
    };
    SocietyManager.prototype.onUpdate = function () {
        this.m_UI.hh_label_edit.text = "" + Main.player.m_society.notice;
        this.m_UI.hh_label_set.text = "" + Main.player.m_society.fv;
    };
    SocietyManager.prototype.show = function () {
        _super.prototype.show.call(this);
        this.onUpdate();
    };
    SocietyManager.prototype.hide = function () {
        _super.prototype.hide.call(this);
    };
    return SocietyManager;
})(Dialog);
SocietyManager.prototype.__class__ = "SocietyManager";
