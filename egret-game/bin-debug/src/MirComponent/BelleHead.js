var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var BelleHead = (function (_super) {
    __extends(BelleHead, _super);
    function BelleHead() {
        _super.call(this);
        this.skinName = "skins.BelleHeadSkin";
        this.touchChildren = true;
    }
    BelleHead.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    return BelleHead;
})(egret.gui.SkinnableComponent);
BelleHead.prototype.__class__ = "BelleHead";
