var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var UIRongLian = (function (_super) {
    __extends(UIRongLian, _super);
    function UIRongLian() {
        _super.call(this);
        this.skinName = "skins.RongLinBoxSkin";
    }
    UIRongLian.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
        if (instance == this.rl_btn_cast_spe) {
            this.rl_btn_cast_spe.visible = false;
        }
    };
    return UIRongLian;
})(egret.gui.SkinnableComponent);
UIRongLian.prototype.__class__ = "UIRongLian";
