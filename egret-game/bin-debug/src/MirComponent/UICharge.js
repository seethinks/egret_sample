var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var UICharge = (function (_super) {
    __extends(UICharge, _super);
    function UICharge() {
        _super.call(this);
        this.skinName = "skins.ChargeSkin";
    }
    UICharge.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    return UICharge;
})(egret.gui.SkinnableComponent);
UICharge.prototype.__class__ = "UICharge";
