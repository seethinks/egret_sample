var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var skins;
(function (skins) {
    var GemUpgradeSkin = (function (_super) {
        __extends(GemUpgradeSkin, _super);
        function GemUpgradeSkin() {
            _super.call(this);
            this.__s = egret.gui.setProperties;
            this.__s(this, ["height", "width"], [643, 522]);
            this.elementsContent = [this.__3_i(), this.__4_i(), this.__5_i(), this.__6_i(), this.__7_i(), this.__8_i(), this.__9_i(), this.__10_i(), this.xq_btn_upgrade_i(), this.xq_label_explain_i(), this.xq_label_eqptname_i(), this._icon_i(), this._event1_i(), this._bs_img1_i(), this._name1_i(), this._label_i()];
            this.states = [
                new egret.gui.State("normal", [
                ]),
                new egret.gui.State("disabled", [
                ])
            ];
        }
        Object.defineProperty(GemUpgradeSkin.prototype, "skinParts", {
            get: function () {
                return GemUpgradeSkin._skinParts;
            },
            enumerable: true,
            configurable: true
        });
        GemUpgradeSkin.prototype.__3_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["height", "horizontalCenter", "scale9Grid", "source", "width", "y"], [514, 0, egret.gui.getScale9Grid("59,21,355,64"), "my_panel_4", 519, 73]);
            return t;
        };
        GemUpgradeSkin.prototype.__4_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["source", "x", "y"], ["sq_tunshi_bg", 6, 79]);
            return t;
        };
        GemUpgradeSkin.prototype.__5_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["horizontalCenter", "source", "width", "y"], [0.5, "skill_text_bg", 137, 435]);
            return t;
        };
        GemUpgradeSkin.prototype.__6_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["height", "horizontalCenter", "source", "y"], [25, 0, "gem_text_bg", 298]);
            return t;
        };
        GemUpgradeSkin.prototype.__7_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["height", "horizontalCenter", "source", "width", "y"], [31, 0, "gem_text_bg", 504, 154]);
            return t;
        };
        GemUpgradeSkin.prototype.__8_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["height", "horizontalCenter", "source", "y"], [25, 0, "gem_text_bg", 433]);
            return t;
        };
        GemUpgradeSkin.prototype.__9_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["height", "horizontalCenter", "scale9Grid", "source", "top", "width"], [57, 0, egret.gui.getScale9Grid("59,21,355,64"), "my_panel_4", 0, 522]);
            return t;
        };
        GemUpgradeSkin.prototype._bs_img1_i = function () {
            var t = new egret.gui.UIAsset();
            this._bs_img1 = t;
            this.__s(t, ["x", "y"], [227, 357]);
            return t;
        };
        GemUpgradeSkin.prototype._event1_i = function () {
            var t = new egret.gui.UIAsset();
            this._event1 = t;
            this.__s(t, ["horizontalCenter", "source", "y"], [0, "xq_bgimg", 350]);
            return t;
        };
        GemUpgradeSkin.prototype._icon_i = function () {
            var t = new UIIcon();
            this._icon = t;
            this.__s(t, ["horizontalCenter", "skinName", "y"], [0.5, skins.IconSkin, 194]);
            return t;
        };
        GemUpgradeSkin.prototype._label_i = function () {
            var t = new egret.gui.Label();
            this._label = t;
            this.__s(t, ["height", "horizontalCenter", "size", "textColor", "width", "y"], [97, 0, 19, 522977, 494, 479]);
            return t;
        };
        GemUpgradeSkin.prototype._name1_i = function () {
            var t = new egret.gui.Label();
            this._name1 = t;
            this.__s(t, ["bold", "height", "horizontalCenter", "size", "textAlign", "textColor", "verticalAlign", "width", "y"], [true, 24, 0.5, 19, "center", 65280, "middle", 243, 434]);
            return t;
        };
        GemUpgradeSkin.prototype.__10_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["height", "source", "width", "x", "y"], [125, "gem_up_bg", 509, 8, 460]);
            return t;
        };
        GemUpgradeSkin.prototype.xq_btn_upgrade_i = function () {
            var t = new egret.gui.Button();
            this.xq_btn_upgrade = t;
            this.__s(t, ["horizontalCenter", "label", "skinName", "y"], [0, "合成宝石", skins.ButtonRedSkin, 590]);
            return t;
        };
        GemUpgradeSkin.prototype.xq_label_eqptname_i = function () {
            var t = new egret.gui.Label();
            this.xq_label_eqptname = t;
            this.__s(t, ["bold", "height", "horizontalCenter", "size", "textAlign", "textColor", "verticalAlign", "width", "y"], [true, 33, 0, 20, "center", 65280, "middle", 506, 153]);
            return t;
        };
        GemUpgradeSkin.prototype.xq_label_explain_i = function () {
            var t = new egret.gui.Label();
            this.xq_label_explain = t;
            this.__s(t, ["height", "horizontalCenter", "size", "text", "textAlign", "textColor", "top", "verticalAlign", "width"], [32, 0, 18, "三个低级同色宝石可以合成为一个高级同色宝石", "center", 0x32FF00, 13, "middle", 498]);
            return t;
        };
        GemUpgradeSkin._skinParts = ["xq_btn_upgrade", "xq_label_explain", "xq_label_eqptname", "_icon", "_event1", "_bs_img1", "_name1", "_label"];
        return GemUpgradeSkin;
    })(egret.gui.Skin);
    skins.GemUpgradeSkin = GemUpgradeSkin;
    GemUpgradeSkin.prototype.__class__ = "skins.GemUpgradeSkin";
})(skins || (skins = {}));
