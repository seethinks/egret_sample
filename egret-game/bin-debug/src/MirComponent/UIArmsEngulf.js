var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var UIArmsEngulf = (function (_super) {
    __extends(UIArmsEngulf, _super);
    function UIArmsEngulf() {
        _super.call(this);
        this.skinName = "skins.TunShiBoxSkin";
        this.touchChildren = true;
        this.touchEnabled = true;
    }
    UIArmsEngulf.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    return UIArmsEngulf;
})(egret.gui.SkinnableComponent);
UIArmsEngulf.prototype.__class__ = "UIArmsEngulf";
