var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var UIGem = (function (_super) {
    __extends(UIGem, _super);
    function UIGem() {
        _super.call(this);
        this.skinName = "skins.GemInlayBoxSkin";
    }
    UIGem.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
        if (instance == this._bs_img1) {
            this._bs_img1.touchEnabled = false;
        }
        if (instance == this._bs_img2) {
            this._bs_img2.touchEnabled = false;
        }
        if (instance == this._bs_img3) {
            this._bs_img3.touchEnabled = false;
        }
        if (instance == this._bs_img4) {
            this._bs_img4.touchEnabled = false;
        }
    };
    return UIGem;
})(egret.gui.SkinnableComponent);
UIGem.prototype.__class__ = "UIGem";
