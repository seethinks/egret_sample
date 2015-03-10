var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var FristChangeUI = (function (_super) {
    __extends(FristChangeUI, _super);
    function FristChangeUI() {
        _super.call(this);
        this.skinName = "skins.FristChangeSkin";
    }
    FristChangeUI.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    return FristChangeUI;
})(egret.gui.SkinnableComponent);
FristChangeUI.prototype.__class__ = "FristChangeUI";
