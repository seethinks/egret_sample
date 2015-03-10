var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var BelleSkillDescUI = (function (_super) {
    __extends(BelleSkillDescUI, _super);
    function BelleSkillDescUI() {
        _super.call(this);
        this.skinName = "skins.BelleSkillDescSkin";
    }
    BelleSkillDescUI.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    return BelleSkillDescUI;
})(egret.gui.SkinnableComponent);
BelleSkillDescUI.prototype.__class__ = "BelleSkillDescUI";
