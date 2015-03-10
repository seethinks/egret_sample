var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var skins;
(function (skins) {
    var HangHuiManageSkin = (function (_super) {
        __extends(HangHuiManageSkin, _super);
        function HangHuiManageSkin() {
            _super.call(this);
            this.__s = egret.gui.setProperties;
            this.__s(this, ["height", "width"], [432, 484]);
            this.elementsContent = [this.__3_i(), this.__4_i(), this.xq_label_explain_i(), this.__5_i(), this.__6_i(), this.__7_i(), this.__8_i(), this.hh_label_set_i(), this.hh_label_edit_i(), this.hh_btn_set_i(), this.hh_btn_close_i(), this.hh_btn_edit_i()];
            this.states = [
                new egret.gui.State("normal", [
                ]),
                new egret.gui.State("disabled", [
                ])
            ];
        }
        Object.defineProperty(HangHuiManageSkin.prototype, "skinParts", {
            get: function () {
                return HangHuiManageSkin._skinParts;
            },
            enumerable: true,
            configurable: true
        });
        HangHuiManageSkin.prototype.__4_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["bottom", "left", "right", "scale9Grid", "source", "top"], [60, 1, 1, egret.gui.getScale9Grid("59,21,355,64"), "my_panel_4", 59]);
            return t;
        };
        HangHuiManageSkin.prototype.__5_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["scale9Grid", "source", "width", "x", "y"], [egret.gui.getScale9Grid("56,17,340,102"), "my_panel_3", 452, 16, 78]);
            return t;
        };
        HangHuiManageSkin.prototype.__6_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["scale9Grid", "source", "width", "x", "y"], [egret.gui.getScale9Grid("56,17,340,102"), "my_panel_3", 452, 16, 220]);
            return t;
        };
        HangHuiManageSkin.prototype.__7_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["height", "scale9Grid", "source", "width", "x", "y"], [109, egret.gui.getScale9Grid("65,19,392,114"), "my_panel_2", 353, 24, 92]);
            return t;
        };
        HangHuiManageSkin.prototype.__8_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["height", "scale9Grid", "source", "width", "x", "y"], [109, egret.gui.getScale9Grid("65,19,392,114"), "my_panel_2", 353, 24, 235]);
            return t;
        };
        HangHuiManageSkin.prototype.hh_btn_close_i = function () {
            var t = new egret.gui.Button();
            this.hh_btn_close = t;
            this.__s(t, ["label", "skinName", "x", "y"], ["关闭", skins.ButtonRedSkin, 169, 379]);
            return t;
        };
        HangHuiManageSkin.prototype.hh_btn_edit_i = function () {
            var t = new egret.gui.Button();
            this.hh_btn_edit = t;
            this.__s(t, ["height", "label", "skinName", "width", "x", "y"], [44, "编辑", skins.ButtonYellowSkin, 85, 379, 274]);
            return t;
        };
        HangHuiManageSkin.prototype.hh_btn_set_i = function () {
            var t = new egret.gui.Button();
            this.hh_btn_set = t;
            this.__s(t, ["height", "label", "skinName", "width", "x", "y"], [44, "设置", skins.ButtonYellowSkin, 85, 378, 129]);
            return t;
        };
        HangHuiManageSkin.prototype.hh_label_edit_i = function () {
            var t = new egret.gui.Label();
            this.hh_label_edit = t;
            this.__s(t, ["height", "size", "textColor", "verticalAlign", "width", "x", "y"], [96, 20, 16777215, "middle", 335, 32, 243]);
            return t;
        };
        HangHuiManageSkin.prototype.hh_label_set_i = function () {
            var t = new egret.gui.Label();
            this.hh_label_set = t;
            this.__s(t, ["height", "size", "textColor", "verticalAlign", "width", "x", "y"], [92, 20, 16777215, "middle", 337, 32, 101]);
            return t;
        };
        HangHuiManageSkin.prototype.__3_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["height", "scale9Grid", "source", "width", "x", "y"], [57, egret.gui.getScale9Grid("59,21,355,64"), "my_panel_4", 482, 1, 0]);
            return t;
        };
        HangHuiManageSkin.prototype.xq_label_explain_i = function () {
            var t = new egret.gui.Label();
            this.xq_label_explain = t;
            this.__s(t, ["height", "size", "text", "textAlign", "textColor", "verticalAlign", "width", "x", "y"], [32, 18, "行会管理权限仅限行会会长", "center", 0x32FF00, "middle", 430, 27, 13]);
            return t;
        };
        HangHuiManageSkin._skinParts = ["xq_label_explain", "hh_label_set", "hh_label_edit", "hh_btn_set", "hh_btn_close", "hh_btn_edit"];
        return HangHuiManageSkin;
    })(egret.gui.Skin);
    skins.HangHuiManageSkin = HangHuiManageSkin;
    HangHuiManageSkin.prototype.__class__ = "skins.HangHuiManageSkin";
})(skins || (skins = {}));
