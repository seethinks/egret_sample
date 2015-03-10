var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var skins;
(function (skins) {
    var HeroDialogSkin = (function (_super) {
        __extends(HeroDialogSkin, _super);
        function HeroDialogSkin() {
            _super.call(this);
            this.__s = egret.gui.setProperties;
            this.__s(this, ["height", "width"], [960, 640]);
            this.elementsContent = [this.eqpt_hero_i(), this.__3_i(), this._btn_prop_i(), this._title_hp_i(), this._title_mp_i(), this._label_zhiye_i(), this._label_naili_i(), this._label_baoji_i(), this._label_shanbi_i(), this._label_mingzhong_i(), this._label_mofafangyu_i(), this._label_wulifangyu_i(), this._label_shanghai_i(), this._label_momagongji_i(), this._label_zhandouli_i(), this._label_heroname_i(), this._label_daoshugongji_i(), this._label_wuligongji_i(), this.eqpt_icon_1_i(), this.eqpt_icon_2_i(), this.eqpt_icon_8_i(), this.eqpt_icon_3_i(), this.eqpt_icon_4_i(), this.eqpt_icon_9_i(), this.eqpt_icon_7_i(), this.eqpt_icon_6_i(), this.eqpt_icon_5_i(), this.eqpt_icon_10_i(), this._player_hp_label_i(), this._player_mp_label_i()];
            this.states = [
                new egret.gui.State("normal", [
                ]),
                new egret.gui.State("disabled", [
                ])
            ];
        }
        Object.defineProperty(HeroDialogSkin.prototype, "skinParts", {
            get: function () {
                return HeroDialogSkin._skinParts;
            },
            enumerable: true,
            configurable: true
        });
        HeroDialogSkin.prototype._btn_prop_i = function () {
            var t = new egret.gui.UIAsset();
            this._btn_prop = t;
            this.__s(t, ["source", "x", "y"], ["btn_prop", 578, 129]);
            return t;
        };
        HeroDialogSkin.prototype._label_baoji_i = function () {
            var t = new egret.gui.Label();
            this._label_baoji = t;
            this.__s(t, ["height", "size", "verticalAlign", "width", "x", "y"], [25, 20, "middle", 130, 455, 189]);
            return t;
        };
        HeroDialogSkin.prototype._label_daoshugongji_i = function () {
            var t = new egret.gui.Label();
            this._label_daoshugongji = t;
            this.__s(t, ["height", "size", "verticalAlign", "width", "x", "y"], [25, 20, "middle", 200, 55, 189]);
            return t;
        };
        HeroDialogSkin.prototype._label_heroname_i = function () {
            var t = new egret.gui.Label();
            this._label_heroname = t;
            this.__s(t, ["height", "size", "verticalAlign", "width", "x", "y"], [26, 20, "middle", 200, 19, 272]);
            return t;
        };
        HeroDialogSkin.prototype._label_mingzhong_i = function () {
            var t = new egret.gui.Label();
            this._label_mingzhong = t;
            this.__s(t, ["height", "size", "verticalAlign", "width", "x", "y"], [25, 20, "middle", 200, 255, 219]);
            return t;
        };
        HeroDialogSkin.prototype._label_mofafangyu_i = function () {
            var t = new egret.gui.Label();
            this._label_mofafangyu = t;
            this.__s(t, ["height", "size", "verticalAlign", "width", "x", "y"], [25, 20, "middle", 200, 255, 189]);
            return t;
        };
        HeroDialogSkin.prototype._label_momagongji_i = function () {
            var t = new egret.gui.Label();
            this._label_momagongji = t;
            this.__s(t, ["height", "size", "verticalAlign", "width", "x", "y"], [25, 20, "middle", 200, 55, 219]);
            return t;
        };
        HeroDialogSkin.prototype._label_naili_i = function () {
            var t = new egret.gui.Label();
            this._label_naili = t;
            this.__s(t, ["height", "size", "verticalAlign", "width", "x", "y"], [25, 20, "middle", 130, 455, 219]);
            return t;
        };
        HeroDialogSkin.prototype._label_shanbi_i = function () {
            var t = new egret.gui.Label();
            this._label_shanbi = t;
            this.__s(t, ["height", "size", "verticalAlign", "width", "x", "y"], [25, 20, "middle", 130, 455, 159]);
            return t;
        };
        HeroDialogSkin.prototype._label_shanghai_i = function () {
            var t = new egret.gui.Label();
            this._label_shanghai = t;
            this.__s(t, ["height", "size", "verticalAlign", "width", "x", "y"], [25, 20, "middle", 200, 255, 129]);
            return t;
        };
        HeroDialogSkin.prototype._label_wulifangyu_i = function () {
            var t = new egret.gui.Label();
            this._label_wulifangyu = t;
            this.__s(t, ["height", "size", "verticalAlign", "width", "x", "y"], [25, 20, "middle", 200, 255, 159]);
            return t;
        };
        HeroDialogSkin.prototype._label_wuligongji_i = function () {
            var t = new egret.gui.Label();
            this._label_wuligongji = t;
            this.__s(t, ["height", "size", "verticalAlign", "width", "x", "y"], [25, 20, "middle", 200, 55, 159]);
            return t;
        };
        HeroDialogSkin.prototype._label_zhandouli_i = function () {
            var t = new egret.gui.Label();
            this._label_zhandouli = t;
            this.__s(t, ["height", "size", "textAlign", "verticalAlign", "width", "x", "y"], [26, 20, "right", "middle", 192, 425, 272]);
            return t;
        };
        HeroDialogSkin.prototype._label_zhiye_i = function () {
            var t = new egret.gui.Label();
            this._label_zhiye = t;
            this.__s(t, ["height", "size", "verticalAlign", "width", "x", "y"], [25, 20, "middle", 200, 55, 129]);
            return t;
        };
        HeroDialogSkin.prototype._player_hp_label_i = function () {
            var t = new egret.gui.Label();
            this._player_hp_label = t;
            this.__s(t, ["height", "size", "textAlign", "verticalAlign", "width", "x", "y"], [22, 18, "center", "middle", 182, 58, 83]);
            return t;
        };
        HeroDialogSkin.prototype._player_mp_label_i = function () {
            var t = new egret.gui.Label();
            this._player_mp_label = t;
            this.__s(t, ["height", "size", "textAlign", "verticalAlign", "width", "x", "y"], [22, 18, "center", "middle", 182, 400, 84]);
            return t;
        };
        HeroDialogSkin.prototype._title_hp_i = function () {
            var t = new egret.gui.UIAsset();
            this._title_hp = t;
            this.__s(t, ["source", "width", "x", "y"], ["title_hp", 196, 51, 83]);
            return t;
        };
        HeroDialogSkin.prototype._title_mp_i = function () {
            var t = new egret.gui.UIAsset();
            this._title_mp = t;
            this.__s(t, ["source", "width", "x", "y"], ["title_mp", 196, 392, 83]);
            return t;
        };
        HeroDialogSkin.prototype.eqpt_hero_i = function () {
            var t = new egret.gui.UIAsset();
            this.eqpt_hero = t;
            this.__s(t, ["horizontalCenter", "source", "y"], [-46.5, "hero_0_1", 91]);
            return t;
        };
        HeroDialogSkin.prototype.eqpt_icon_10_i = function () {
            var t = new UIIcon();
            this.eqpt_icon_10 = t;
            this.__s(t, ["height", "skinName", "width", "x", "y"], [99, skins.IconSkin, 81, 496, 518]);
            return t;
        };
        HeroDialogSkin.prototype.eqpt_icon_1_i = function () {
            var t = new UIIcon();
            this.eqpt_icon_1 = t;
            this.__s(t, ["skinName", "x", "y"], [skins.IconSkin, 179, 621]);
            return t;
        };
        HeroDialogSkin.prototype.eqpt_icon_2_i = function () {
            var t = new UIIcon();
            this.eqpt_icon_2 = t;
            this.__s(t, ["skinName", "x", "y"], [skins.IconSkin, 350, 621]);
            return t;
        };
        HeroDialogSkin.prototype.eqpt_icon_3_i = function () {
            var t = new UIIcon();
            this.eqpt_icon_3 = t;
            this.__s(t, ["height", "skinName", "width", "x", "y"], [99, skins.IconSkin, 81, 53, 325]);
            return t;
        };
        HeroDialogSkin.prototype.eqpt_icon_4_i = function () {
            var t = new UIIcon();
            this.eqpt_icon_4 = t;
            this.__s(t, ["height", "skinName", "width", "x", "y"], [99, skins.IconSkin, 81, 53, 423]);
            return t;
        };
        HeroDialogSkin.prototype.eqpt_icon_5_i = function () {
            var t = new UIIcon();
            this.eqpt_icon_5 = t;
            this.__s(t, ["height", "skinName", "width", "x", "y"], [99, skins.IconSkin, 81, 495, 423]);
            return t;
        };
        HeroDialogSkin.prototype.eqpt_icon_6_i = function () {
            var t = new UIIcon();
            this.eqpt_icon_6 = t;
            this.__s(t, ["height", "skinName", "width", "x", "y"], [99, skins.IconSkin, 81, 496, 325]);
            return t;
        };
        HeroDialogSkin.prototype.eqpt_icon_7_i = function () {
            var t = new UIIcon();
            this.eqpt_icon_7 = t;
            this.__s(t, ["height", "skinName", "width", "x", "y"], [99, skins.IconSkin, 81, 53, 612]);
            return t;
        };
        HeroDialogSkin.prototype.eqpt_icon_8_i = function () {
            var t = new UIIcon();
            this.eqpt_icon_8 = t;
            this.__s(t, ["height", "skinName", "width", "x", "y"], [99, skins.IconSkin, 81, 496, 612]);
            return t;
        };
        HeroDialogSkin.prototype.eqpt_icon_9_i = function () {
            var t = new UIIcon();
            this.eqpt_icon_9 = t;
            this.__s(t, ["height", "skinName", "width", "x", "y"], [99, skins.IconSkin, 81, 53, 518]);
            return t;
        };
        HeroDialogSkin.prototype.__3_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["source", "x", "y"], ["hero_dialog_bg", 12, 76]);
            return t;
        };
        HeroDialogSkin._skinParts = ["eqpt_hero", "_btn_prop", "_title_hp", "_title_mp", "_label_zhiye", "_label_naili", "_label_baoji", "_label_shanbi", "_label_mingzhong", "_label_mofafangyu", "_label_wulifangyu", "_label_shanghai", "_label_momagongji", "_label_zhandouli", "_label_heroname", "_label_daoshugongji", "_label_wuligongji", "eqpt_icon_1", "eqpt_icon_2", "eqpt_icon_8", "eqpt_icon_3", "eqpt_icon_4", "eqpt_icon_9", "eqpt_icon_7", "eqpt_icon_6", "eqpt_icon_5", "eqpt_icon_10", "_player_hp_label", "_player_mp_label"];
        return HeroDialogSkin;
    })(egret.gui.Skin);
    skins.HeroDialogSkin = HeroDialogSkin;
    HeroDialogSkin.prototype.__class__ = "skins.HeroDialogSkin";
})(skins || (skins = {}));
