var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
/**
 * 帮会商店
 */
var UISocietyShop = (function (_super) {
    __extends(UISocietyShop, _super);
    function UISocietyShop() {
        _super.call(this);
        this.skinName = "skins.SocietyShopSkin";
    }
    UISocietyShop.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
        if (instance == this._btn_refrsh) {
            this._btn_refrsh.visible = false;
        }
    };
    return UISocietyShop;
})(egret.gui.SkinnableComponent);
UISocietyShop.prototype.__class__ = "UISocietyShop";
