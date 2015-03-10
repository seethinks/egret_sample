var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var BelleListUI = (function (_super) {
    __extends(BelleListUI, _super);
    function BelleListUI() {
        _super.call(this);
        this.skinName = "skins.BelleListSkin";
    }
    BelleListUI.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    return BelleListUI;
})(egret.gui.SkinnableComponent);
BelleListUI.prototype.__class__ = "BelleListUI";
