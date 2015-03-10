var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var UIMainUI = (function (_super) {
    __extends(UIMainUI, _super);
    function UIMainUI() {
        _super.call(this);
        this.skinName = "skins.MainUiSkin";
    }
    UIMainUI.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
        if (instance == this.niu_fa) {
            this.niu_fa.visible = false;
        }
        if (instance == this.niu_dao) {
            this.niu_dao.visible = false;
        }
        if (instance == this._shenglv_title) {
            this._shenglv_title.scaleX = -1;
            this._shenglv_title.scaleY = -1;
        }
    };
    return UIMainUI;
})(egret.gui.SkinnableComponent);
UIMainUI.prototype.__class__ = "UIMainUI";
