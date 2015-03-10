var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var UIEqptSelect = (function (_super) {
    __extends(UIEqptSelect, _super);
    function UIEqptSelect() {
        _super.call(this);
        this.skinName = "skins.EqptSelectSkin";
    }
    UIEqptSelect.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    return UIEqptSelect;
})(egret.gui.SkinnableComponent);
UIEqptSelect.prototype.__class__ = "UIEqptSelect";
