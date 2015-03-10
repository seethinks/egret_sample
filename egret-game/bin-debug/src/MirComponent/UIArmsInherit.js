var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var UIArmsInherit = (function (_super) {
    __extends(UIArmsInherit, _super);
    function UIArmsInherit() {
        _super.call(this);
        this.skinName = "skins.ChuanchengBoxSkin";
        this.touchChildren = true;
        this.touchEnabled = true;
    }
    UIArmsInherit.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    return UIArmsInherit;
})(egret.gui.SkinnableComponent);
UIArmsInherit.prototype.__class__ = "UIArmsInherit";
