var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var skins;
(function (skins) {
    var EqptDetailsSkin = (function (_super) {
        __extends(EqptDetailsSkin, _super);
        function EqptDetailsSkin() {
            _super.call(this);
            this.__s = egret.gui.setProperties;
            this.__s(this, ["height", "width"], [604, 522]);
            this.elementsContent = [this.__3_i(), this.xz_itembtn_qianghua_i(), this.xz_itembtn_genghuan_i(), this.xz_itembtn_xiangqian_i(), this.xz_itembtn_chuancheng_i(), this.xz_itembtn_tunshi_i(), this.xz_itembtn_xiexia_i(), this.xz_itembtn_xilian_i(), this.xz_itemlabel_propey_i(), this.xz_itemlabel_type_i(), this.xz_itemlabel_name_i(), this.xz_icon_i()];
            this.states = [
                new egret.gui.State("normal", [
                ]),
                new egret.gui.State("disabled", [
                ])
            ];
        }
        Object.defineProperty(EqptDetailsSkin.prototype, "skinParts", {
            get: function () {
                return EqptDetailsSkin._skinParts;
            },
            enumerable: true,
            configurable: true
        });
        EqptDetailsSkin.prototype.__3_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["height", "horizontalCenter", "left", "right", "scale9Grid", "source", "top"], [603, 0, 0, 0, egret.gui.getScale9Grid("65,19,392,114"), "my_panel_2", 0]);
            return t;
        };
        EqptDetailsSkin.prototype.xz_icon_i = function () {
            var t = new UIIcon();
            this.xz_icon = t;
            this.__s(t, ["left", "skinName", "top"], [13, skins.IconSkin, 20]);
            return t;
        };
        EqptDetailsSkin.prototype.xz_itembtn_chuancheng_i = function () {
            var t = new egret.gui.Button();
            this.xz_itembtn_chuancheng = t;
            this.__s(t, ["height", "label", "skinName", "top", "width", "x"], [50, "神器传承", skins.ButtonYellowSkin, 367, 135, 7]);
            return t;
        };
        EqptDetailsSkin.prototype.xz_itembtn_genghuan_i = function () {
            var t = new egret.gui.Button();
            this.xz_itembtn_genghuan = t;
            this.__s(t, ["height", "label", "right", "skinName", "top", "width"], [49, "更换", 14, skins.ButtonRedSkin, 221, 110]);
            return t;
        };
        EqptDetailsSkin.prototype.xz_itembtn_qianghua_i = function () {
            var t = new egret.gui.Button();
            this.xz_itembtn_qianghua = t;
            this.__s(t, ["height", "label", "skinName", "width", "x", "y"], [49, "强化", skins.ButtonBlueSkin, 110, 398, 49]);
            return t;
        };
        EqptDetailsSkin.prototype.xz_itembtn_tunshi_i = function () {
            var t = new egret.gui.Button();
            this.xz_itembtn_tunshi = t;
            this.__s(t, ["height", "label", "left", "skinName", "top", "width"], [50, "神器吞噬", 7, skins.ButtonYellowSkin, 297, 135]);
            return t;
        };
        EqptDetailsSkin.prototype.xz_itembtn_xiangqian_i = function () {
            var t = new egret.gui.Button();
            this.xz_itembtn_xiangqian = t;
            this.__s(t, ["height", "label", "skinName", "top", "width", "x"], [50, "宝石镶嵌", skins.ButtonGreenSkin, 227, 135, 9]);
            return t;
        };
        EqptDetailsSkin.prototype.xz_itembtn_xiexia_i = function () {
            var t = new egret.gui.Button();
            this.xz_itembtn_xiexia = t;
            this.__s(t, ["height", "label", "right", "skinName", "top", "width"], [49, "卸下", 14, skins.ButtonRedSkin, 163, 110]);
            return t;
        };
        EqptDetailsSkin.prototype.xz_itembtn_xilian_i = function () {
            var t = new egret.gui.Button();
            this.xz_itembtn_xilian = t;
            this.__s(t, ["height", "label", "skinName", "width", "x", "y"], [49, "洗练", skins.ButtonBlueSkin, 110, 398, 106]);
            return t;
        };
        EqptDetailsSkin.prototype.xz_itemlabel_name_i = function () {
            var t = new egret.gui.Label();
            this.xz_itemlabel_name = t;
            this.__s(t, ["height", "left", "right", "size", "textColor", "top"], [31, 149, 133, 25, 0xFFFFFF, 24]);
            return t;
        };
        EqptDetailsSkin.prototype.xz_itemlabel_propey_i = function () {
            var t = new egret.gui.Label();
            this.xz_itemlabel_propey = t;
            this.__s(t, ["height", "size", "textColor", "top", "width", "x"], [478, 19, 0xFFFFFF, 23, 239, 149]);
            return t;
        };
        EqptDetailsSkin.prototype.xz_itemlabel_type_i = function () {
            var t = new egret.gui.Label();
            this.xz_itemlabel_type = t;
            this.__s(t, ["height", "left", "size", "textAlign", "textColor", "top", "width"], [24, 10, 18, "center", 653516, 155, 115]);
            return t;
        };
        EqptDetailsSkin._skinParts = ["xz_itembtn_qianghua", "xz_itembtn_genghuan", "xz_itembtn_xiangqian", "xz_itembtn_chuancheng", "xz_itembtn_tunshi", "xz_itembtn_xiexia", "xz_itembtn_xilian", "xz_itemlabel_propey", "xz_itemlabel_type", "xz_itemlabel_name", "xz_icon"];
        return EqptDetailsSkin;
    })(egret.gui.Skin);
    skins.EqptDetailsSkin = EqptDetailsSkin;
    EqptDetailsSkin.prototype.__class__ = "skins.EqptDetailsSkin";
})(skins || (skins = {}));
