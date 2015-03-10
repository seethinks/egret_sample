var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var OpenServerUI = (function (_super) {
    __extends(OpenServerUI, _super);
    function OpenServerUI() {
        _super.call(this);
        this.skinName = "skins.NewServerFuLiSkin";
        this.touchChildren = false;
        this.touchEnabled = false;
    }
    OpenServerUI.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
        if (instance == this._labels) {
            this._labels.touchChildren = false;
            this._labels.touchEnabled = false;
        }
    };
    return OpenServerUI;
})(egret.gui.SkinnableComponent);
OpenServerUI.prototype.__class__ = "OpenServerUI";
