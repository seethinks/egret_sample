var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var skins;
(function (skins) {
    var RongLinBoxSkin = (function (_super) {
        __extends(RongLinBoxSkin, _super);
        function RongLinBoxSkin() {
            _super.call(this);
            this.__s = egret.gui.setProperties;
            this.__s(this, ["height", "width"], [569, 522]);
            this.elementsContent = [this.__3_i(), this.rl_btn_screen_i(), this.rl_btn_ronglin_i(), this.__4_i(), this.rl_label_rlnum_i(), this.rl_btn_cast_spe_i(), this.rl_btn_cast_i(), this.rl_icon_1_i(), this.rl_icon_6_i(), this.rl_icon_5_i(), this.rl_icon_4_i(), this.rl_icon_3_i(), this.rl_icon_2_i()];
            this.states = [
                new egret.gui.State("normal", [
                ]),
                new egret.gui.State("disabled", [
                ])
            ];
        }
        Object.defineProperty(RongLinBoxSkin.prototype, "skinParts", {
            get: function () {
                return RongLinBoxSkin._skinParts;
            },
            enumerable: true,
            configurable: true
        });
        RongLinBoxSkin.prototype.__4_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["height", "scale9Grid", "source", "width", "x"], [81, egret.gui.getScale9Grid("59,21,355,64"), "my_panel_4", 522, 0]);
            return t;
        };
        RongLinBoxSkin.prototype.rl_btn_cast_i = function () {
            var t = new egret.gui.Button();
            this.rl_btn_cast = t;
            this.__s(t, ["height", "label", "skinName", "width", "x", "y"], [46, "打  造", skins.ButtonBlueSkin, 120, 372, 18]);
            return t;
        };
        RongLinBoxSkin.prototype.rl_btn_cast_spe_i = function () {
            var t = new egret.gui.Button();
            this.rl_btn_cast_spe = t;
            this.__s(t, ["height", "label", "skinName", "width", "x", "y"], [46, "特殊打造", skins.ButtonRedSkin, 120, 372, 18]);
            return t;
        };
        RongLinBoxSkin.prototype.rl_btn_ronglin_i = function () {
            var t = new egret.gui.Button();
            this.rl_btn_ronglin = t;
            this.__s(t, ["label", "skinName", "x", "y"], ["熔  炼", skins.ButtonRedSkin, 322, 515]);
            return t;
        };
        RongLinBoxSkin.prototype.rl_btn_screen_i = function () {
            var t = new egret.gui.Button();
            this.rl_btn_screen = t;
            this.__s(t, ["label", "skinName", "x", "y"], ["自动筛选", skins.ButtonYellowSkin, 53, 515]);
            return t;
        };
        RongLinBoxSkin.prototype.rl_icon_1_i = function () {
            var t = new UIIcon();
            this.rl_icon_1 = t;
            this.__s(t, ["height", "skinName", "width", "x", "y"], [106, skins.IconSkin, 86, 55, 143]);
            return t;
        };
        RongLinBoxSkin.prototype.rl_icon_2_i = function () {
            var t = new UIIcon();
            this.rl_icon_2 = t;
            this.__s(t, ["height", "skinName", "width", "x", "y"], [106, skins.IconSkin, 86, 55, 264]);
            return t;
        };
        RongLinBoxSkin.prototype.rl_icon_3_i = function () {
            var t = new UIIcon();
            this.rl_icon_3 = t;
            this.__s(t, ["height", "skinName", "width", "x", "y"], [106, skins.IconSkin, 86, 55, 385]);
            return t;
        };
        RongLinBoxSkin.prototype.rl_icon_4_i = function () {
            var t = new UIIcon();
            this.rl_icon_4 = t;
            this.__s(t, ["height", "skinName", "width", "x", "y"], [106, skins.IconSkin, 86, 382, 143]);
            return t;
        };
        RongLinBoxSkin.prototype.rl_icon_5_i = function () {
            var t = new UIIcon();
            this.rl_icon_5 = t;
            this.__s(t, ["height", "skinName", "width", "x", "y"], [106, skins.IconSkin, 86, 382, 264]);
            return t;
        };
        RongLinBoxSkin.prototype.rl_icon_6_i = function () {
            var t = new UIIcon();
            this.rl_icon_6 = t;
            this.__s(t, ["height", "skinName", "width", "x", "y"], [106, skins.IconSkin, 86, 382, 385]);
            return t;
        };
        RongLinBoxSkin.prototype.rl_label_rlnum_i = function () {
            var t = new egret.gui.Label();
            this.rl_label_rlnum = t;
            this.__s(t, ["height", "horizontalCenter", "size", "text", "textColor", "verticalAlign", "width", "y"], [32, -133, 18, "当前熔炼值：0", 0xFF0000, "middle", 232, 24]);
            return t;
        };
        RongLinBoxSkin.prototype.__3_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["horizontalCenter", "source", "y"], [0.5, "sq_ronglian_bg", 101]);
            return t;
        };
        RongLinBoxSkin._skinParts = ["rl_btn_screen", "rl_btn_ronglin", "rl_label_rlnum", "rl_btn_cast_spe", "rl_btn_cast", "rl_icon_1", "rl_icon_6", "rl_icon_5", "rl_icon_4", "rl_icon_3", "rl_icon_2"];
        return RongLinBoxSkin;
    })(egret.gui.Skin);
    skins.RongLinBoxSkin = RongLinBoxSkin;
    RongLinBoxSkin.prototype.__class__ = "skins.RongLinBoxSkin";
})(skins || (skins = {}));
