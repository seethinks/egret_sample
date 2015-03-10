var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var skins;
(function (skins) {
    var ChuanchengBoxSkin = (function (_super) {
        __extends(ChuanchengBoxSkin, _super);
        function ChuanchengBoxSkin() {
            _super.call(this);
            this.__s = egret.gui.setProperties;
            this.__s(this, ["height", "width"], [577, 522]);
            this.elementsContent = [this.__3_i(), this.__4_i(), this.__5_i(), this.ch_label_property_i(), this.ch_label_money_i(), this.ch_btn_chuancheng_i(), this.__6_i(), this.cc_icon_from_i(), this.cc_icon_to_i()];
            this.states = [
                new egret.gui.State("normal", [
                ]),
                new egret.gui.State("disabled", [
                ])
            ];
        }
        Object.defineProperty(ChuanchengBoxSkin.prototype, "skinParts", {
            get: function () {
                return ChuanchengBoxSkin._skinParts;
            },
            enumerable: true,
            configurable: true
        });
        ChuanchengBoxSkin.prototype.__4_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["horizontalCenter", "source", "y"], [0, "sq_tunshi_bg", 6]);
            return t;
        };
        ChuanchengBoxSkin.prototype.__5_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["height", "source", "x", "y"], [48, "sq_chuancheng_textbg", 19, 308]);
            return t;
        };
        ChuanchengBoxSkin.prototype.__6_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["horizontalCenter", "source", "top"], [0.5, "sq_chuangcheng", 191]);
            return t;
        };
        ChuanchengBoxSkin.prototype.cc_icon_from_i = function () {
            var t = new UIIcon();
            this.cc_icon_from = t;
            this.__s(t, ["skinName", "x", "y"], [skins.IconSkin, 42, 173]);
            return t;
        };
        ChuanchengBoxSkin.prototype.cc_icon_to_i = function () {
            var t = new UIIcon();
            this.cc_icon_to = t;
            this.__s(t, ["skinName", "x", "y"], [skins.IconSkin, 372, 173]);
            return t;
        };
        ChuanchengBoxSkin.prototype.ch_btn_chuancheng_i = function () {
            var t = new egret.gui.Button();
            this.ch_btn_chuancheng = t;
            this.__s(t, ["horizontalCenter", "label", "skinName", "top"], [0, "传  承", skins.ButtonRedSkin, 523]);
            return t;
        };
        ChuanchengBoxSkin.prototype.ch_label_money_i = function () {
            var t = new egret.gui.Label();
            this.ch_label_money = t;
            this.__s(t, ["height", "horizontalCenter", "size", "textAlign", "textColor", "top", "verticalAlign", "width"], [28, 0, 20, "center", 16777215, 371, "middle", 254]);
            return t;
        };
        ChuanchengBoxSkin.prototype.ch_label_property_i = function () {
            var t = new egret.gui.Label();
            this.ch_label_property = t;
            this.__s(t, ["bold", "height", "size", "text", "textAlign", "textColor", "width", "x", "y"], [true, 53, 19, "传承属性：攻击吸血+%4.0", "center", 0xFF0000, 318, 102, 309]);
            return t;
        };
        ChuanchengBoxSkin.prototype.__3_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["height", "horizontalCenter", "scale9Grid", "source", "width"], [517, 0, egret.gui.getScale9Grid("65,19,392,114"), "my_panel_2", 522]);
            return t;
        };
        ChuanchengBoxSkin._skinParts = ["ch_label_property", "ch_label_money", "ch_btn_chuancheng", "cc_icon_from", "cc_icon_to"];
        return ChuanchengBoxSkin;
    })(egret.gui.Skin);
    skins.ChuanchengBoxSkin = ChuanchengBoxSkin;
    ChuanchengBoxSkin.prototype.__class__ = "skins.ChuanchengBoxSkin";
})(skins || (skins = {}));
