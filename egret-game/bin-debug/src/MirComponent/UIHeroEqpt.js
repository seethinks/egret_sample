var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var UIHeroEqpt = (function (_super) {
    __extends(UIHeroEqpt, _super);
    function UIHeroEqpt() {
        _super.call(this);
        this.skinName = "skins.HeroDialogSkin";
    }
    UIHeroEqpt.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    return UIHeroEqpt;
})(egret.gui.SkinnableComponent);
UIHeroEqpt.prototype.__class__ = "UIHeroEqpt";
