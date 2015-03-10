var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var UILoding = (function (_super) {
    __extends(UILoding, _super);
    function UILoding() {
        _super.call(this);
        this.skinName = "skins.LodingDilaogSkin";
    }
    UILoding.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    return UILoding;
})(egret.gui.SkinnableComponent);
UILoding.prototype.__class__ = "UILoding";
