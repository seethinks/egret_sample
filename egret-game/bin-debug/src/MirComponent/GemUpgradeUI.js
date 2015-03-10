var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var GemUpgradeUI = (function (_super) {
    __extends(GemUpgradeUI, _super);
    function GemUpgradeUI() {
        _super.call(this);
        this.skinName = "skins.GemUpgradeSkin";
    }
    GemUpgradeUI.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
        if (instance == this._bs_img1) {
            this._bs_img1.touchEnabled = false;
        }
    };
    return GemUpgradeUI;
})(egret.gui.SkinnableComponent);
GemUpgradeUI.prototype.__class__ = "GemUpgradeUI";
