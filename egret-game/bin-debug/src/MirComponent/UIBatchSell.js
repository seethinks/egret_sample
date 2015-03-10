var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var UIBatchSell = (function (_super) {
    __extends(UIBatchSell, _super);
    function UIBatchSell() {
        _super.call(this);
        this.skinName = "skins.BatchSellSkin";
    }
    UIBatchSell.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    return UIBatchSell;
})(egret.gui.SkinnableComponent);
UIBatchSell.prototype.__class__ = "UIBatchSell";
