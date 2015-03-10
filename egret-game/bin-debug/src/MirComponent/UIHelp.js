var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var UIHelp = (function (_super) {
    __extends(UIHelp, _super);
    function UIHelp() {
        _super.call(this);
        this.skinName = "skins.HelpSkin";
    }
    UIHelp.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    return UIHelp;
})(egret.gui.SkinnableComponent);
UIHelp.prototype.__class__ = "UIHelp";
