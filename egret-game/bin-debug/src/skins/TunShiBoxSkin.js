var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var skins;
(function (skins) {
    var TunShiBoxSkin = (function (_super) {
        __extends(TunShiBoxSkin, _super);
        function TunShiBoxSkin() {
            _super.call(this);
            this.__s = egret.gui.setProperties;
            this.__s(this, ["height", "width"], [577, 522]);
            this.elementsContent = [this.__3_i(), this.__4_i(), this.__5_i(), this.ts_icon_5_i(), this.ts_icon_1_i(), this.ts_icon_2_i(), this.ts_icon_3_i(), this.ts_icon_6_i(), this.ts_icon_4_i(), this.__6_i(), this.ts_label_property_i(), this.ts_label_money_i(), this.__7_i(), this.ts_title_exp_i(), this.ts_label_level_i(), this.ts_label_exp_i(), this.ts_btn_screen_i(), this.ts_btn_tunshi_i(), this.ts_icon_zhu_i()];
            this.states = [
                new egret.gui.State("normal", [
                ]),
                new egret.gui.State("disabled", [
                ])
            ];
        }
        Object.defineProperty(TunShiBoxSkin.prototype, "skinParts", {
            get: function () {
                return TunShiBoxSkin._skinParts;
            },
            enumerable: true,
            configurable: true
        });
        TunShiBoxSkin.prototype.__4_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["horizontalCenter", "source", "y"], [0, "sq_tunshi_bg", 6]);
            return t;
        };
        TunShiBoxSkin.prototype.__5_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["horizontalCenter", "source", "y"], [0, "sq_text_bg", 9]);
            return t;
        };
        TunShiBoxSkin.prototype.__6_i = function () {
            var t = new egret.gui.Label();
            this.__s(t, ["bold", "size", "text", "textAlign", "textColor", "verticalAlign", "width", "x", "y"], [true, 26, "吞噬其他神器可以提高神器属性等级", "center", 12499385, "middle", 476, 25, 16]);
            return t;
        };
        TunShiBoxSkin.prototype.__7_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["horizontalCenter", "source", "y"], [0, "sq_exp_titlebg", 484]);
            return t;
        };
        TunShiBoxSkin.prototype.__3_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["height", "horizontalCenter", "scale9Grid", "source", "width"], [517, 0, egret.gui.getScale9Grid("65,19,392,114"), "my_panel_2", 522]);
            return t;
        };
        TunShiBoxSkin.prototype.ts_btn_screen_i = function () {
            var t = new egret.gui.Button();
            this.ts_btn_screen = t;
            this.__s(t, ["label", "skinName", "x", "y"], ["自动筛选", skins.ButtonYellowSkin, 53, 523]);
            return t;
        };
        TunShiBoxSkin.prototype.ts_btn_tunshi_i = function () {
            var t = new egret.gui.Button();
            this.ts_btn_tunshi = t;
            this.__s(t, ["label", "skinName", "x", "y"], ["吞  噬", skins.ButtonRedSkin, 322, 523]);
            return t;
        };
        TunShiBoxSkin.prototype.ts_icon_1_i = function () {
            var t = new UIIcon();
            this.ts_icon_1 = t;
            this.__s(t, ["height", "skinName", "width", "x", "y"], [99, skins.IconSkin, 81, 39, 82]);
            return t;
        };
        TunShiBoxSkin.prototype.ts_icon_2_i = function () {
            var t = new UIIcon();
            this.ts_icon_2 = t;
            this.__s(t, ["height", "skinName", "width", "x", "y"], [99, skins.IconSkin, 81, 39, 190]);
            return t;
        };
        TunShiBoxSkin.prototype.ts_icon_3_i = function () {
            var t = new UIIcon();
            this.ts_icon_3 = t;
            this.__s(t, ["height", "skinName", "width", "x", "y"], [99, skins.IconSkin, 81, 39, 295]);
            return t;
        };
        TunShiBoxSkin.prototype.ts_icon_4_i = function () {
            var t = new UIIcon();
            this.ts_icon_4 = t;
            this.__s(t, ["height", "skinName", "width", "x", "y"], [99, skins.IconSkin, 81, 401, 82]);
            return t;
        };
        TunShiBoxSkin.prototype.ts_icon_5_i = function () {
            var t = new UIIcon();
            this.ts_icon_5 = t;
            this.__s(t, ["height", "skinName", "width", "x", "y"], [99, skins.IconSkin, 81, 401, 190]);
            return t;
        };
        TunShiBoxSkin.prototype.ts_icon_6_i = function () {
            var t = new UIIcon();
            this.ts_icon_6 = t;
            this.__s(t, ["height", "skinName", "width", "x", "y"], [99, skins.IconSkin, 81, 401, 295]);
            return t;
        };
        TunShiBoxSkin.prototype.ts_icon_zhu_i = function () {
            var t = new UIIcon();
            this.ts_icon_zhu = t;
            this.__s(t, ["horizontalCenter", "skinName", "y"], [0.5, skins.IconSkin, 196]);
            return t;
        };
        TunShiBoxSkin.prototype.ts_label_exp_i = function () {
            var t = new egret.gui.Label();
            this.ts_label_exp = t;
            this.__s(t, ["size", "text", "textAlign", "textColor", "verticalAlign", "width", "x", "y"], [20, "经验：0/1", "right", 2940552, "middle", 211, 290, 458]);
            return t;
        };
        TunShiBoxSkin.prototype.ts_label_level_i = function () {
            var t = new egret.gui.Label();
            this.ts_label_level = t;
            this.__s(t, ["size", "text", "textColor", "verticalAlign", "width", "x", "y"], [20, "神器等级：Lv1", 1207723, "middle", 254, 17, 458]);
            return t;
        };
        TunShiBoxSkin.prototype.ts_label_money_i = function () {
            var t = new egret.gui.Label();
            this.ts_label_money = t;
            this.__s(t, ["height", "horizontalCenter", "size", "textAlign", "textColor", "width", "y"], [26, 0, 18, "center", 16777215, 318, 397]);
            return t;
        };
        TunShiBoxSkin.prototype.ts_label_property_i = function () {
            var t = new egret.gui.Label();
            this.ts_label_property = t;
            this.__s(t, ["height", "horizontalCenter", "size", "text", "textAlign", "textColor", "width", "y"], [51, 0, 18, "攻击吸血+%4.0", "center", 16711680, 318, 333]);
            return t;
        };
        TunShiBoxSkin.prototype.ts_title_exp_i = function () {
            var t = new egret.gui.UIAsset();
            this.ts_title_exp = t;
            this.__s(t, ["source", "width", "x", "y"], ["sq_exp_title", 490, 17, 486]);
            return t;
        };
        TunShiBoxSkin._skinParts = ["ts_icon_5", "ts_icon_1", "ts_icon_2", "ts_icon_3", "ts_icon_6", "ts_icon_4", "ts_label_property", "ts_label_money", "ts_title_exp", "ts_label_level", "ts_label_exp", "ts_btn_screen", "ts_btn_tunshi", "ts_icon_zhu"];
        return TunShiBoxSkin;
    })(egret.gui.Skin);
    skins.TunShiBoxSkin = TunShiBoxSkin;
    TunShiBoxSkin.prototype.__class__ = "skins.TunShiBoxSkin";
})(skins || (skins = {}));
