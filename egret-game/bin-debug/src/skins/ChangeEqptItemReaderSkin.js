var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var skins;
(function (skins) {
    var ChangeEqptItemReaderSkin = (function (_super) {
        __extends(ChangeEqptItemReaderSkin, _super);
        function ChangeEqptItemReaderSkin() {
            _super.call(this);
            this.__s = egret.gui.setProperties;
            this.__s(this, ["height", "width"], [218, 522]);
            this.elementsContent = [this.__3_i(), this.xz_itembtn_check_i(), this.xz_itemlabel_type_i(), this.xz_itemlabel_propey_i(), this.xz_reader_icon_i(), this.xz_label_bufu_i()];
            this.states = [
                new egret.gui.State("normal", [
                ]),
                new egret.gui.State("disabled", [
                ])
            ];
        }
        Object.defineProperty(ChangeEqptItemReaderSkin.prototype, "skinParts", {
            get: function () {
                return ChangeEqptItemReaderSkin._skinParts;
            },
            enumerable: true,
            configurable: true
        });
        ChangeEqptItemReaderSkin.prototype.__3_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["height", "horizontalCenter", "scale9Grid", "source", "top"], [218, 0, egret.gui.getScale9Grid("65,19,392,114"), "my_panel_2", 0]);
            return t;
        };
        ChangeEqptItemReaderSkin.prototype.xz_itembtn_check_i = function () {
            var t = new egret.gui.Button();
            this.xz_itembtn_check = t;
            this.__s(t, ["height", "label", "skinName", "top", "width", "x"], [49, "装  备", skins.ButtonBlueSkin, 85, 110, 404]);
            return t;
        };
        ChangeEqptItemReaderSkin.prototype.xz_itemlabel_propey_i = function () {
            var t = new egret.gui.Label();
            this.xz_itemlabel_propey = t;
            this.__s(t, ["height", "size", "textColor", "top", "width", "x"], [197, 19, 16777215, 9, 263, 128]);
            return t;
        };
        ChangeEqptItemReaderSkin.prototype.xz_itemlabel_type_i = function () {
            var t = new egret.gui.Label();
            this.xz_itemlabel_type = t;
            this.__s(t, ["height", "size", "text", "textAlign", "textColor", "top", "verticalAlign", "width", "x"], [26, 18, "主手武器", "center", 14723618, 12, "middle", 95, 417]);
            return t;
        };
        ChangeEqptItemReaderSkin.prototype.xz_label_bufu_i = function () {
            var t = new egret.gui.Label();
            this.xz_label_bufu = t;
            this.__s(t, ["bold", "height", "size", "text", "textAlign", "textColor", "top", "verticalAlign", "width", "x"], [true, 60, 44, "职业不符", "center", 8465966, 78, "middle", 226, 145]);
            return t;
        };
        ChangeEqptItemReaderSkin.prototype.xz_reader_icon_i = function () {
            var t = new UIIcon();
            this.xz_reader_icon = t;
            this.__s(t, ["skinName", "top", "x"], [skins.IconSkin, 10, 10]);
            return t;
        };
        ChangeEqptItemReaderSkin._skinParts = ["xz_itembtn_check", "xz_itemlabel_type", "xz_itemlabel_propey", "xz_reader_icon", "xz_label_bufu"];
        return ChangeEqptItemReaderSkin;
    })(egret.gui.Skin);
    skins.ChangeEqptItemReaderSkin = ChangeEqptItemReaderSkin;
    ChangeEqptItemReaderSkin.prototype.__class__ = "skins.ChangeEqptItemReaderSkin";
})(skins || (skins = {}));
