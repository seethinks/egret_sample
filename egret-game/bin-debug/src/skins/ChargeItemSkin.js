var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var skins;
(function (skins) {
    var ChargeItemSkin = (function (_super) {
        __extends(ChargeItemSkin, _super);
        function ChargeItemSkin() {
            _super.call(this);
            this.__s = egret.gui.setProperties;
            this.__s(this, ["height", "width"], [281, 166]);
            this.elementsContent = [this.__3_i(), this.label_price_i(), this.btn_buy_i(), this.label_dec_i(), this.label_name_i(), this.__4_i(), this.__5_i()];
            this.states = [
                new egret.gui.State("normal", [
                ]),
                new egret.gui.State("disabled", [
                ])
            ];
        }
        Object.defineProperty(ChargeItemSkin.prototype, "skinParts", {
            get: function () {
                return ChargeItemSkin._skinParts;
            },
            enumerable: true,
            configurable: true
        });
        ChargeItemSkin.prototype.__4_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["source", "x", "y"], ["itemicon_gold", 50, 25]);
            return t;
        };
        ChargeItemSkin.prototype.__5_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["height", "source", "width", "x", "y"], [80, "_icon_4", 80, 43, 18]);
            return t;
        };
        ChargeItemSkin.prototype.btn_buy_i = function () {
            var t = new egret.gui.Button();
            this.btn_buy = t;
            this.__s(t, ["height", "label", "skinName", "width", "x", "y"], [47, "购  买", skins.ButtonBlueSkin, 139, 14, 224]);
            return t;
        };
        ChargeItemSkin.prototype.label_dec_i = function () {
            var t = new egret.gui.Label();
            this.label_dec = t;
            this.__s(t, ["bold", "height", "horizontalCenter", "size", "textAlign", "textColor", "verticalAlign", "width", "y"], [true, 47, 0, 16, "center", 16711680, "middle", 130, 175]);
            return t;
        };
        ChargeItemSkin.prototype.label_name_i = function () {
            var t = new egret.gui.Label();
            this.label_name = t;
            this.__s(t, ["bold", "height", "size", "textColor", "verticalAlign", "width", "x", "y"], [true, 24, 17, 0xDC0091, "middle", 88, 69, 116]);
            return t;
        };
        ChargeItemSkin.prototype.label_price_i = function () {
            var t = new egret.gui.Label();
            this.label_price = t;
            this.__s(t, ["bold", "height", "horizontalCenter", "size", "textAlign", "textColor", "verticalAlign", "width", "y"], [true, 23, 0, 16, "center", 0xFFFF00, "middle", 132, 144]);
            return t;
        };
        ChargeItemSkin.prototype.__3_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["source", "x", "y"], ["charge_item", 0, 0]);
            return t;
        };
        ChargeItemSkin._skinParts = ["label_price", "btn_buy", "label_dec", "label_name"];
        return ChargeItemSkin;
    })(egret.gui.Skin);
    skins.ChargeItemSkin = ChargeItemSkin;
    ChargeItemSkin.prototype.__class__ = "skins.ChargeItemSkin";
})(skins || (skins = {}));
