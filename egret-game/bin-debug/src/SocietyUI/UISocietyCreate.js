var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var UISocietyCreate = (function (_super) {
    __extends(UISocietyCreate, _super);
    function UISocietyCreate() {
        _super.call(this);
        this.skinName = "skins.SocietyCreatSkin";
    }
    UISocietyCreate.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    return UISocietyCreate;
})(egret.gui.SkinnableComponent);
UISocietyCreate.prototype.__class__ = "UISocietyCreate";
