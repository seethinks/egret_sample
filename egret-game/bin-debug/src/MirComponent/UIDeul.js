var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var UIDeul = (function (_super) {
    __extends(UIDeul, _super);
    function UIDeul() {
        _super.call(this);
        this.skinName = "skins.DeulPlaceSkin";
    }
    UIDeul.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    return UIDeul;
})(egret.gui.SkinnableComponent);
UIDeul.prototype.__class__ = "UIDeul";
