var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var UIGameSet = (function (_super) {
    __extends(UIGameSet, _super);
    function UIGameSet() {
        _super.call(this);
        this.skinName = "skins.GameSetSkin";
    }
    UIGameSet.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    return UIGameSet;
})(egret.gui.SkinnableComponent);
UIGameSet.prototype.__class__ = "UIGameSet";
