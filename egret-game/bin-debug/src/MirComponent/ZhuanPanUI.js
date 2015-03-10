var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var ZhuanPanUI = (function (_super) {
    __extends(ZhuanPanUI, _super);
    function ZhuanPanUI() {
        _super.call(this);
        this.skinName = "skins.ZhuanPanSkin";
    }
    ZhuanPanUI.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    return ZhuanPanUI;
})(egret.gui.SkinnableComponent);
ZhuanPanUI.prototype.__class__ = "ZhuanPanUI";
