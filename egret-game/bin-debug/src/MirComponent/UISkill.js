var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var UISkill = (function (_super) {
    __extends(UISkill, _super);
    function UISkill() {
        _super.call(this);
        this.skinName = "skins.SkillSkin";
    }
    UISkill.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
        if (instance == this.skill_btn_jnzj) {
            this.skill_btn_jnzj.visible = false;
        }
    };
    return UISkill;
})(egret.gui.SkinnableComponent);
UISkill.prototype.__class__ = "UISkill";
