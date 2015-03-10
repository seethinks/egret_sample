var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var skins;
(function (skins) {
    var SkillSkin = (function (_super) {
        __extends(SkillSkin, _super);
        function SkillSkin() {
            _super.call(this);
            this.__s = egret.gui.setProperties;
            this.__s(this, ["height", "width"], [670, 551]);
            this.elementsContent = [this.__3_i(), this.skill_btn_jnzj_i(), this.skill_btn_jjjn_i(), this.skill_btn_ghjn_i()];
            this.states = [
                new egret.gui.State("normal", [
                ]),
                new egret.gui.State("disabled", [
                ])
            ];
        }
        Object.defineProperty(SkillSkin.prototype, "skinParts", {
            get: function () {
                return SkillSkin._skinParts;
            },
            enumerable: true,
            configurable: true
        });
        SkillSkin.prototype.skill_btn_ghjn_i = function () {
            var t = new egret.gui.Button();
            this.skill_btn_ghjn = t;
            this.__s(t, ["height", "label", "skinName", "x", "y"], [55, "更换技能", skins.ButtonRedSkin, 359, 615]);
            return t;
        };
        SkillSkin.prototype.skill_btn_jjjn_i = function () {
            var t = new egret.gui.Button();
            this.skill_btn_jjjn = t;
            this.__s(t, ["height", "label", "skinName", "x", "y"], [55, "防守技能", skins.ButtonRedSkin, 45, 615]);
            return t;
        };
        SkillSkin.prototype.skill_btn_jnzj_i = function () {
            var t = new egret.gui.Button();
            this.skill_btn_jnzj = t;
            this.__s(t, ["height", "label", "skinName", "x", "y"], [55, "技能专精", skins.ButtonYellowSkin, 45, 616]);
            return t;
        };
        SkillSkin.prototype.__3_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["height", "horizontalCenter", "left", "right", "scale9Grid", "source", "top"], [601, 0, 0, 0, egret.gui.getScale9Grid("59,21,355,64"), "my_panel_4", 2]);
            return t;
        };
        SkillSkin._skinParts = ["skill_btn_jnzj", "skill_btn_jjjn", "skill_btn_ghjn"];
        return SkillSkin;
    })(egret.gui.Skin);
    skins.SkillSkin = SkillSkin;
    SkillSkin.prototype.__class__ = "skins.SkillSkin";
})(skins || (skins = {}));
