var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var skins;
(function (skins) {
    var EqptMakeSkin = (function (_super) {
        __extends(EqptMakeSkin, _super);
        function EqptMakeSkin() {
            _super.call(this);
            this.__s = egret.gui.setProperties;
            this.__s(this, ["height", "width"], [628, 533]);
            this.elementsContent = [this.__3_i(), this.make_itemlabel_propey_i(), this.make_itemlabel_type_i(), this.make_icon_i(), this.__4_i(), this.make_label_num_i(), this.make_label_need_i(), this.make_btn_refresh_i(), this.make_btn_make_i()];
            this.states = [
                new egret.gui.State("normal", [
                ]),
                new egret.gui.State("disabled", [
                ])
            ];
        }
        Object.defineProperty(EqptMakeSkin.prototype, "skinParts", {
            get: function () {
                return EqptMakeSkin._skinParts;
            },
            enumerable: true,
            configurable: true
        });
        EqptMakeSkin.prototype.__4_i = function () {
            var t = new egret.gui.Label();
            this.__s(t, ["size", "text", "textColor", "width", "x", "y"], [21, "当前可以的打造装备：", 16777215, 335, 1, 0]);
            return t;
        };
        EqptMakeSkin.prototype.make_btn_make_i = function () {
            var t = new egret.gui.Button();
            this.make_btn_make = t;
            this.__s(t, ["label", "skinName", "x", "y"], ["打  造", skins.ButtonRedSkin, 311, 575]);
            return t;
        };
        EqptMakeSkin.prototype.make_btn_refresh_i = function () {
            var t = new egret.gui.Button();
            this.make_btn_refresh = t;
            this.__s(t, ["label", "skinName", "x", "y"], ["刷  新", skins.ButtonBlueSkin, 88, 575]);
            return t;
        };
        EqptMakeSkin.prototype.make_icon_i = function () {
            var t = new UIIcon();
            this.make_icon = t;
            this.__s(t, ["left", "skinName", "top"], [20, skins.IconSkin, 48]);
            return t;
        };
        EqptMakeSkin.prototype.make_itemlabel_propey_i = function () {
            var t = new egret.gui.Label();
            this.make_itemlabel_propey = t;
            this.__s(t, ["height", "size", "textColor", "top", "width", "x"], [328, 19, 0xFFFFFF, 51, 359, 152]);
            return t;
        };
        EqptMakeSkin.prototype.make_itemlabel_type_i = function () {
            var t = new egret.gui.Label();
            this.make_itemlabel_type = t;
            this.__s(t, ["height", "size", "textAlign", "textColor", "verticalAlign", "width", "x", "y"], [20, 18, "center", 0xFFFFFF, "middle", 120, 9, 183]);
            return t;
        };
        EqptMakeSkin.prototype.make_label_need_i = function () {
            var t = new egret.gui.Label();
            this.make_label_need = t;
            this.__s(t, ["height", "size", "textColor", "width", "x", "y"], [28, 20, 65280, 532, 1, 541]);
            return t;
        };
        EqptMakeSkin.prototype.make_label_num_i = function () {
            var t = new egret.gui.Label();
            this.make_label_num = t;
            this.__s(t, ["size", "textColor", "width", "x", "y"], [20, 16777215, 304, 1, 509]);
            return t;
        };
        EqptMakeSkin.prototype.__3_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["height", "scale9Grid", "source", "top", "width", "x"], [478, egret.gui.getScale9Grid("59,21,355,64"), "my_panel_4", 27, 534, 0]);
            return t;
        };
        EqptMakeSkin._skinParts = ["make_itemlabel_propey", "make_itemlabel_type", "make_icon", "make_label_num", "make_label_need", "make_btn_refresh", "make_btn_make"];
        return EqptMakeSkin;
    })(egret.gui.Skin);
    skins.EqptMakeSkin = EqptMakeSkin;
    EqptMakeSkin.prototype.__class__ = "skins.EqptMakeSkin";
})(skins || (skins = {}));
