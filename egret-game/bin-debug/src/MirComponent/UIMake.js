var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var UIMake = (function (_super) {
    __extends(UIMake, _super);
    function UIMake() {
        _super.call(this);
        this.skinName = "skins.EqptMakeSkin";
    }
    UIMake.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    return UIMake;
})(egret.gui.SkinnableComponent);
UIMake.prototype.__class__ = "UIMake";
