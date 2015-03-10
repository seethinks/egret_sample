var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var UIChangeEqpt = (function (_super) {
    __extends(UIChangeEqpt, _super);
    function UIChangeEqpt() {
        _super.call(this);
        this.skinName = "skins.EqptChangeBoxSkin";
    }
    UIChangeEqpt.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    return UIChangeEqpt;
})(egret.gui.SkinnableComponent);
UIChangeEqpt.prototype.__class__ = "UIChangeEqpt";
