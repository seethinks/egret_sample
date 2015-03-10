var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var PrisonUI = (function (_super) {
    __extends(PrisonUI, _super);
    function PrisonUI() {
        _super.call(this);
        this.skinName = "skins.PrisonSkin";
    }
    PrisonUI.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    return PrisonUI;
})(egret.gui.SkinnableComponent);
PrisonUI.prototype.__class__ = "PrisonUI";
