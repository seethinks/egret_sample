var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var UIEqptDetails = (function (_super) {
    __extends(UIEqptDetails, _super);
    function UIEqptDetails() {
        _super.call(this);
        this.skinName = "skins.EqptDetailsSkin";
    }
    UIEqptDetails.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
        if (instance == this.xz_itemlabel_name) {
        }
        if (instance == this.xz_itemlabel_propey) {
        }
        if (instance == this.xz_itemlabel_type) {
        }
    };
    return UIEqptDetails;
})(egret.gui.SkinnableComponent);
UIEqptDetails.prototype.__class__ = "UIEqptDetails";
