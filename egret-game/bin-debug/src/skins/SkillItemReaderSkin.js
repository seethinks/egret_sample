var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var skins;
(function (skins) {
    var SkillItemReaderSkin = (function (_super) {
        __extends(SkillItemReaderSkin, _super);
        function SkillItemReaderSkin() {
            _super.call(this);
            this.__s = egret.gui.setProperties;
            this.__s(this, ["height", "width"], [136, 537]);
            this.elementsContent = [this.__3_i(), this.__4_i(), this.skill_close_i(), this.skill_panel2_i(), this.skill_btn_i(), this.skill_panel1_i(), this.skill_icon_i(), this.skill_label_i(), this.skill_check_i(), this._open_level_label_i(), this._label_mp_i()];
            this.states = [
                new egret.gui.State("normal", [
                ]),
                new egret.gui.State("disabled", [
                ])
            ];
        }
        Object.defineProperty(SkillItemReaderSkin.prototype, "skinParts", {
            get: function () {
                return SkillItemReaderSkin._skinParts;
            },
            enumerable: true,
            configurable: true
        });
        SkillItemReaderSkin.prototype.__4_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["height", "scale9Grid", "source", "width", "x", "y"], [98, egret.gui.getScale9Grid("59,21,355,64"), "my_panel_4", 98, 3, 23]);
            return t;
        };
        SkillItemReaderSkin.prototype._label_mp_i = function () {
            var t = new egret.gui.Label();
            this._label_mp = t;
            this.__s(t, ["height", "size", "textAlign", "textColor", "verticalAlign", "width", "x", "y"], [32, 20, "right", 7518690, "middle", 174, 269, 19]);
            return t;
        };
        SkillItemReaderSkin.prototype._open_level_label_i = function () {
            var t = new egret.gui.Label();
            this._open_level_label = t;
            this.__s(t, ["bold", "height", "size", "textAlign", "textColor", "verticalAlign", "width", "x", "y"], [true, 40, 30, "center", 15927304, "middle", 300, 123, 47]);
            return t;
        };
        SkillItemReaderSkin.prototype.skill_btn_i = function () {
            var t = new egret.gui.UIAsset();
            this.skill_btn = t;
            this.__s(t, ["source", "x", "y"], ["skill_btn_frist", 455, 8]);
            return t;
        };
        SkillItemReaderSkin.prototype.skill_check_i = function () {
            var t = new UICheckBox();
            this.skill_check = t;
            this.__s(t, ["label", "skinName", "x", "y"], ["复选框", skins.SkillCheckSkin, 461, 35]);
            return t;
        };
        SkillItemReaderSkin.prototype.skill_close_i = function () {
            var t = new egret.gui.UIAsset();
            this.skill_close = t;
            this.__s(t, ["source", "x", "y"], ["skill_no_check", 28, 50]);
            return t;
        };
        SkillItemReaderSkin.prototype.skill_icon_i = function () {
            var t = new egret.gui.UIAsset();
            this.skill_icon = t;
            this.__s(t, ["source", "x", "y"], ["skill_icon", 10, 30]);
            return t;
        };
        SkillItemReaderSkin.prototype.skill_label_i = function () {
            var t = new egret.gui.Label();
            this.skill_label = t;
            this.__s(t, ["height", "size", "textColor", "width", "x", "y"], [96, 20, 16777215, 335, 112, 24]);
            return t;
        };
        SkillItemReaderSkin.prototype.skill_panel1_i = function () {
            var t = new egret.gui.UIAsset();
            this.skill_panel1 = t;
            this.__s(t, ["source", "x", "y"], ["skill_list_bg1", 103, 13]);
            return t;
        };
        SkillItemReaderSkin.prototype.skill_panel2_i = function () {
            var t = new egret.gui.UIAsset();
            this.skill_panel2 = t;
            this.__s(t, ["source", "width", "x", "y"], ["skill_list_bg2", 424, 104, 24]);
            return t;
        };
        SkillItemReaderSkin.prototype.__3_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["horizontalCenter", "scale9Grid", "source", "width"], [0, egret.gui.getScale9Grid("56,17,340,102"), "my_panel_3", 537]);
            return t;
        };
        SkillItemReaderSkin._skinParts = ["skill_close", "skill_panel2", "skill_btn", "skill_panel1", "skill_icon", "skill_label", "skill_check", "_open_level_label", "_label_mp"];
        return SkillItemReaderSkin;
    })(egret.gui.Skin);
    skins.SkillItemReaderSkin = SkillItemReaderSkin;
    SkillItemReaderSkin.prototype.__class__ = "skins.SkillItemReaderSkin";
})(skins || (skins = {}));
