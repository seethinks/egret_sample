var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var UIShop = (function (_super) {
    __extends(UIShop, _super);
    function UIShop() {
        _super.call(this);
        this.skinName = "skins.ShopSkin";
    }
    UIShop.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    return UIShop;
})(egret.gui.SkinnableComponent);
UIShop.prototype.__class__ = "UIShop";
