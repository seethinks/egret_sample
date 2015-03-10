var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var GemCheckUI = (function (_super) {
    __extends(GemCheckUI, _super);
    function GemCheckUI() {
        _super.call(this);
        this.skinName = "skins.GemCheckSkin";
        this.touchChildren = true;
        this.touchEnabled = true;
    }
    GemCheckUI.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    return GemCheckUI;
})(egret.gui.SkinnableComponent);
GemCheckUI.prototype.__class__ = "GemCheckUI";
