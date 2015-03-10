var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var UIMy = (function (_super) {
    __extends(UIMy, _super);
    function UIMy() {
        _super.call(this);
        this.skinName = "skins.MyInformationSkin";
    }
    UIMy.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
        if (instance == this.my_btn_ghch) {
        }
    };
    return UIMy;
})(egret.gui.SkinnableComponent);
UIMy.prototype.__class__ = "UIMy";
