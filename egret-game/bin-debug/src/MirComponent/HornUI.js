var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var HornUI = (function (_super) {
    __extends(HornUI, _super);
    function HornUI() {
        _super.call(this);
        this.skinName = "skins.HornSkin";
    }
    HornUI.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
        if (instance == this._laba) {
            this._laba.visible = false;
        }
    };
    return HornUI;
})(egret.gui.SkinnableComponent);
HornUI.prototype.__class__ = "HornUI";
