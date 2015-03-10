var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var UIEqptStrengthen = (function (_super) {
    __extends(UIEqptStrengthen, _super);
    function UIEqptStrengthen() {
        _super.call(this);
        this.skinName = "skins.EqptStrengthenSkin";
    }
    UIEqptStrengthen.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    return UIEqptStrengthen;
})(egret.gui.SkinnableComponent);
UIEqptStrengthen.prototype.__class__ = "UIEqptStrengthen";
