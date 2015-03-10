var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var UIViper = (function (_super) {
    __extends(UIViper, _super);
    function UIViper() {
        _super.call(this);
        this.skinName = "skins.ViperSkin";
    }
    UIViper.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    return UIViper;
})(egret.gui.SkinnableComponent);
UIViper.prototype.__class__ = "UIViper";
