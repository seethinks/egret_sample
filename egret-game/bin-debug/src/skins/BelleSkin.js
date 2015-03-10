var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var skins;
(function (skins) {
    var BelleSkin = (function (_super) {
        __extends(BelleSkin, _super);
        function BelleSkin() {
            _super.call(this);
            this.__s = egret.gui.setProperties;
            this.__s(this, ["height", "width"], [761, 597]);
            this.elementsContent = [this.__3_i(), this.__4_i(), this.__5_i(), this.belle_hero_i(), this.__6_i(), this.belle_btn_zhengfa_i(), this.belle_btn_stutas_i(), this.belle_btn_upstart_i(), this.belle_hp_i(), this.belle_mp_i(), this.__7_i(), this.__8_i(), this.__9_i(), this.__10_i(), this.belle_skill1_i(), this.belle_skill4_i(), this.belle_skill3_i(), this.belle_skill2_i(), this.__12_i(), this.belle_label_name_i(), this.belle_label_fightnum_i(), this.belle_label_hurt_i(), this.__13_i(), this.belle_btn_check_i(), this.belle_icon4_i(), this.belle_icon2_i(), this.belle_icon1_i(), this.belle_icon6_i(), this.belle_label_hp_i(), this.belle_label_mp_i(), this.__15_i(), this.__16_i(), this._label_p_i()];
            this.states = [
                new egret.gui.State("normal", [
                ]),
                new egret.gui.State("disabled", [
                ])
            ];
        }
        Object.defineProperty(BelleSkin.prototype, "skinParts", {
            get: function () {
                return BelleSkin._skinParts;
            },
            enumerable: true,
            configurable: true
        });
        BelleSkin.prototype.__11_i = function () {
            var t = new egret.gui.HorizontalLayout();
            return t;
        };
        BelleSkin.prototype.__12_i = function () {
            var t = new egret.gui.Group();
            this.__s(t, ["height", "width", "x", "y"], [25, 278, 275, 162]);
            t.layout = this.__11_i();
            t.elementsContent = [this.belle_start1_i(), this.belle_start2_i(), this.belle_start3_i(), this.belle_start4_i(), this.belle_start5_i(), this.belle_start6_i(), this.belle_start7_i(), this.belle_start8_i(), this.belle_start9_i(), this.belle_start10_i()];
            return t;
        };
        BelleSkin.prototype.__13_i = function () {
            var t = new egret.gui.Label();
            this.__s(t, ["size", "text", "textColor", "width", "x", "y"], [22, "星级:", 65280, 58, 216, 158]);
            return t;
        };
        BelleSkin.prototype.__14_i = function () {
            var t = new egret.gui.HorizontalLayout();
            t.gap = 1;
            return t;
        };
        BelleSkin.prototype.__15_i = function () {
            var t = new egret.gui.Group();
            this.__s(t, ["height", "horizontalCenter", "width", "y"], [96, 0, 593, 11]);
            t.layout = this.__14_i();
            t.elementsContent = [this._hero_icon_1_i(), this._hero_icon_2_i(), this._hero_icon_3_i(), this._hero_icon_4_i(), this._hero_icon_5_i(), this._hero_icon_6_i()];
            return t;
        };
        BelleSkin.prototype.__16_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["height", "horizontalCenter", "source", "y"], [24, 0, "new_loding_bg", 547]);
            return t;
        };
        BelleSkin.prototype.__3_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["source", "x", "y"], ["hero_bgImg1", 20, 152]);
            return t;
        };
        BelleSkin.prototype.__4_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["source", "x", "y"], ["hero_bgimg2", 26, 151]);
            return t;
        };
        BelleSkin.prototype.__5_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["source", "x", "y"], ["belle_bgImg", 0, 111]);
            return t;
        };
        BelleSkin.prototype.__6_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["source", "x", "y"], ["belle_bgImg", 2, 111]);
            return t;
        };
        BelleSkin.prototype.__7_i = function () {
            var t = new egret.gui.Label();
            this.__s(t, ["height", "size", "text", "textAlign", "textColor", "verticalAlign", "width", "x", "y"], [64, 14, "10星开启", "center", 0xFFFFFF, "middle", 65, 465, 581]);
            return t;
        };
        BelleSkin.prototype.__8_i = function () {
            var t = new egret.gui.Label();
            this.__s(t, ["height", "size", "text", "textAlign", "textColor", "verticalAlign", "width", "x", "y"], [64, 14, "1星开启", "center", 16777215, "middle", 65, 65, 582]);
            return t;
        };
        BelleSkin.prototype.__9_i = function () {
            var t = new egret.gui.Label();
            this.__s(t, ["height", "size", "text", "textAlign", "textColor", "verticalAlign", "width", "x", "y"], [64, 14, "4星开启", "center", 0xFFFFFF, "middle", 65, 197, 582]);
            return t;
        };
        BelleSkin.prototype._hero_icon_1_i = function () {
            var t = new BelleHead();
            this._hero_icon_1 = t;
            this.__s(t, ["skinName", "x", "y"], [skins.BelleHeadSkin, 156, 59]);
            return t;
        };
        BelleSkin.prototype._hero_icon_2_i = function () {
            var t = new BelleHead();
            this._hero_icon_2 = t;
            this.__s(t, ["skinName", "x", "y"], [skins.BelleHeadSkin, 284, 69]);
            return t;
        };
        BelleSkin.prototype._hero_icon_3_i = function () {
            var t = new BelleHead();
            this._hero_icon_3 = t;
            this.__s(t, ["skinName", "x", "y"], [skins.BelleHeadSkin, 418, 72]);
            return t;
        };
        BelleSkin.prototype._hero_icon_4_i = function () {
            var t = new BelleHead();
            this._hero_icon_4 = t;
            this.__s(t, ["skinName", "x", "y"], [skins.BelleHeadSkin, 530, 64]);
            return t;
        };
        BelleSkin.prototype._hero_icon_5_i = function () {
            var t = new BelleHead();
            this._hero_icon_5 = t;
            this.__s(t, ["skinName", "x", "y"], [skins.BelleHeadSkin, 374, 530]);
            return t;
        };
        BelleSkin.prototype._hero_icon_6_i = function () {
            var t = new BelleHead();
            this._hero_icon_6 = t;
            this.__s(t, ["skinName", "x", "y"], [skins.BelleHeadSkin, 603, 567]);
            return t;
        };
        BelleSkin.prototype._label_p_i = function () {
            var t = new egret.gui.Label();
            this._label_p = t;
            this.__s(t, ["bold", "height", "horizontalCenter", "size", "textAlign", "textColor", "verticalAlign", "width", "y"], [true, 24, 0.5, 20, "center", 16711680, "middle", 480, 546]);
            return t;
        };
        BelleSkin.prototype.belle_btn_check_i = function () {
            var t = new egret.gui.UIAsset();
            this.belle_btn_check = t;
            this.__s(t, ["source", "x", "y"], ["belle_btn_weizhi", 517, 219]);
            return t;
        };
        BelleSkin.prototype.belle_btn_stutas_i = function () {
            var t = new egret.gui.Button();
            this.belle_btn_stutas = t;
            this.__s(t, ["height", "label", "skinName", "width", "x", "y"], [52, "休息中", skins.ButtonRedSkin, 140, 434, 690]);
            return t;
        };
        BelleSkin.prototype.belle_btn_upstart_i = function () {
            var t = new egret.gui.Button();
            this.belle_btn_upstart = t;
            this.__s(t, ["height", "horizontalCenter", "label", "skinName", "width", "y"], [52, 0, "升  星", skins.ButtonYellowSkin, 140, 690]);
            return t;
        };
        BelleSkin.prototype.belle_btn_zhengfa_i = function () {
            var t = new egret.gui.Button();
            this.belle_btn_zhengfa = t;
            this.__s(t, ["height", "label", "skinName", "width", "x", "y"], [52, "阵  法", skins.ButtonBlueSkin, 140, 23, 690]);
            return t;
        };
        BelleSkin.prototype.belle_hero_i = function () {
            var t = new egret.gui.UIAsset();
            this.belle_hero = t;
            this.__s(t, ["horizontalCenter", "source", "y"], [-22, "hero_body_101", 230]);
            return t;
        };
        BelleSkin.prototype.belle_hp_i = function () {
            var t = new egret.gui.UIAsset();
            this.belle_hp = t;
            this.__s(t, ["source", "width", "x", "y"], ["belle_hp", 157, 32, 163]);
            return t;
        };
        BelleSkin.prototype.belle_icon1_i = function () {
            var t = new UIIcon();
            this.belle_icon1 = t;
            this.__s(t, ["height", "skinName", "width", "x", "y"], [102, skins.IconSkin, 84, 50, 461]);
            return t;
        };
        BelleSkin.prototype.belle_icon2_i = function () {
            var t = new UIIcon();
            this.belle_icon2 = t;
            this.__s(t, ["height", "skinName", "width", "x", "y"], [102, skins.IconSkin, 84, 450, 461]);
            return t;
        };
        BelleSkin.prototype.belle_icon4_i = function () {
            var t = new UIIcon();
            this.belle_icon4 = t;
            this.__s(t, ["height", "skinName", "width", "x", "y"], [102, skins.IconSkin, 84, 50, 300]);
            return t;
        };
        BelleSkin.prototype.belle_icon6_i = function () {
            var t = new UIIcon();
            this.belle_icon6 = t;
            this.__s(t, ["height", "skinName", "width", "x", "y"], [102, skins.IconSkin, 84, 450, 300]);
            return t;
        };
        BelleSkin.prototype.belle_label_fightnum_i = function () {
            var t = new egret.gui.Label();
            this.belle_label_fightnum = t;
            this.__s(t, ["size", "text", "textAlign", "textColor", "width", "x", "y"], [22, "战斗力：0", "right", 891088, 277, 298, 121]);
            return t;
        };
        BelleSkin.prototype.belle_label_hp_i = function () {
            var t = new egret.gui.Label();
            this.belle_label_hp = t;
            this.__s(t, ["height", "size", "text", "textAlign", "textColor", "verticalAlign", "width", "x", "y"], [19, 16, "0", "center", 16777215, "middle", 156, 33, 160]);
            return t;
        };
        BelleSkin.prototype.belle_label_hurt_i = function () {
            var t = new egret.gui.Label();
            this.belle_label_hurt = t;
            this.__s(t, ["size", "text", "textColor", "width", "x", "y"], [22, "伤害: ", 2347021, 332, 216, 190]);
            return t;
        };
        BelleSkin.prototype.belle_label_mp_i = function () {
            var t = new egret.gui.Label();
            this.belle_label_mp = t;
            this.__s(t, ["height", "size", "text", "textAlign", "textColor", "verticalAlign", "width", "x", "y"], [19, 16, "0", "center", 0xFFFFFF, "middle", 156, 33, 191]);
            return t;
        };
        BelleSkin.prototype.belle_label_name_i = function () {
            var t = new egret.gui.Label();
            this.belle_label_name = t;
            this.__s(t, ["size", "text", "textColor", "width", "x", "y"], [22, "Lv.", 16777215, 269, 26, 122]);
            return t;
        };
        BelleSkin.prototype.belle_mp_i = function () {
            var t = new egret.gui.UIAsset();
            this.belle_mp = t;
            this.__s(t, ["source", "width", "x", "y"], ["belle_mp", 158, 32, 192]);
            return t;
        };
        BelleSkin.prototype.belle_skill1_i = function () {
            var t = new egret.gui.UIAsset();
            this.belle_skill1 = t;
            this.__s(t, ["height", "width", "x", "y"], [65, 65, 65, 581]);
            return t;
        };
        BelleSkin.prototype.belle_skill2_i = function () {
            var t = new egret.gui.UIAsset();
            this.belle_skill2 = t;
            this.__s(t, ["height", "width", "x", "y"], [65, 65, 197, 581]);
            return t;
        };
        BelleSkin.prototype.belle_skill3_i = function () {
            var t = new egret.gui.UIAsset();
            this.belle_skill3 = t;
            this.__s(t, ["height", "width", "x", "y"], [65, 65, 332, 581]);
            return t;
        };
        BelleSkin.prototype.belle_skill4_i = function () {
            var t = new egret.gui.UIAsset();
            this.belle_skill4 = t;
            this.__s(t, ["height", "width", "x", "y"], [65, 65, 465, 581]);
            return t;
        };
        BelleSkin.prototype.belle_start10_i = function () {
            var t = new egret.gui.UIAsset();
            this.belle_start10 = t;
            this.__s(t, ["source", "x", "y"], ["belle_start_a", 85, 61]);
            return t;
        };
        BelleSkin.prototype.belle_start1_i = function () {
            var t = new egret.gui.UIAsset();
            this.belle_start1 = t;
            this.__s(t, ["source", "x", "y"], ["belle_start_a", 147, 96]);
            return t;
        };
        BelleSkin.prototype.belle_start2_i = function () {
            var t = new egret.gui.UIAsset();
            this.belle_start2 = t;
            this.__s(t, ["source", "x", "y"], ["belle_start_a", 96, 92]);
            return t;
        };
        BelleSkin.prototype.belle_start3_i = function () {
            var t = new egret.gui.UIAsset();
            this.belle_start3 = t;
            this.__s(t, ["source", "x", "y"], ["belle_start_a", 120, 148]);
            return t;
        };
        BelleSkin.prototype.belle_start4_i = function () {
            var t = new egret.gui.UIAsset();
            this.belle_start4 = t;
            this.__s(t, ["source", "x", "y"], ["belle_start_a", 61, 126]);
            return t;
        };
        BelleSkin.prototype.belle_start5_i = function () {
            var t = new egret.gui.UIAsset();
            this.belle_start5 = t;
            this.__s(t, ["source", "x", "y"], ["belle_start_a", 60, 162]);
            return t;
        };
        BelleSkin.prototype.belle_start6_i = function () {
            var t = new egret.gui.UIAsset();
            this.belle_start6 = t;
            this.__s(t, ["source", "x", "y"], ["belle_start_a", 153, 134]);
            return t;
        };
        BelleSkin.prototype.belle_start7_i = function () {
            var t = new egret.gui.UIAsset();
            this.belle_start7 = t;
            this.__s(t, ["source", "x", "y"], ["belle_start_a", 96, 137]);
            return t;
        };
        BelleSkin.prototype.belle_start8_i = function () {
            var t = new egret.gui.UIAsset();
            this.belle_start8 = t;
            this.__s(t, ["source", "x", "y"], ["belle_start_a", 40, 135]);
            return t;
        };
        BelleSkin.prototype.belle_start9_i = function () {
            var t = new egret.gui.UIAsset();
            this.belle_start9 = t;
            this.__s(t, ["source", "x", "y"], ["belle_start_a", 51, 97]);
            return t;
        };
        BelleSkin.prototype.__10_i = function () {
            var t = new egret.gui.Label();
            this.__s(t, ["height", "size", "text", "textAlign", "textColor", "verticalAlign", "width", "x", "y"], [64, 14, "7星开启", "center", 0xFFFFFF, "middle", 65, 332, 581]);
            return t;
        };
        BelleSkin._skinParts = ["belle_hero", "belle_btn_zhengfa", "belle_btn_stutas", "belle_btn_upstart", "belle_hp", "belle_mp", "belle_skill1", "belle_skill4", "belle_skill3", "belle_skill2", "belle_start1", "belle_start2", "belle_start3", "belle_start4", "belle_start5", "belle_start6", "belle_start7", "belle_start8", "belle_start9", "belle_start10", "belle_label_name", "belle_label_fightnum", "belle_label_hurt", "belle_btn_check", "belle_icon4", "belle_icon2", "belle_icon1", "belle_icon6", "belle_label_hp", "belle_label_mp", "_hero_icon_1", "_hero_icon_2", "_hero_icon_3", "_hero_icon_4", "_hero_icon_5", "_hero_icon_6", "_label_p"];
        return BelleSkin;
    })(egret.gui.Skin);
    skins.BelleSkin = BelleSkin;
    BelleSkin.prototype.__class__ = "skins.BelleSkin";
})(skins || (skins = {}));
