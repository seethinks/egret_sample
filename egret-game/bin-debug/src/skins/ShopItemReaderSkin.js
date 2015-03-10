var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var skins;
(function (skins) {
    var ShopItemReaderSkin = (function (_super) {
        __extends(ShopItemReaderSkin, _super);
        function ShopItemReaderSkin() {
            _super.call(this);
            this.__s = egret.gui.setProperties;
            this.__s(this, ["height", "width"], [236, 166]);
            this.elementsContent = [this.__3_i(), this.btn_buy_i(), this.label_price_i(), this.label_name_i(), this.currnecy_icon_i(), this.item_icon_i(), this.img_rebate_i(), this.lable_count_i()];
            this.states = [
                new egret.gui.State("normal", [
                ]),
                new egret.gui.State("disabled", [
                ])
            ];
        }
        Object.defineProperty(ShopItemReaderSkin.prototype, "skinParts", {
            get: function () {
                return ShopItemReaderSkin._skinParts;
            },
            enumerable: true,
            configurable: true
        });
        ShopItemReaderSkin.prototype.btn_buy_i = function () {
            var t = new egret.gui.Button();
            this.btn_buy = t;
            this.__s(t, ["bottom", "height", "horizontalCenter", "label", "skinName", "width"], [9, 47, 0, "购  买", skins.ButtonBlueSkin, 139]);
            return t;
        };
        ShopItemReaderSkin.prototype.currnecy_icon_i = function () {
            var t = new egret.gui.UIAsset();
            this.currnecy_icon = t;
            this.__s(t, ["width", "x", "y"], [30, 14, 144]);
            return t;
        };
        ShopItemReaderSkin.prototype.img_rebate_i = function () {
            var t = new egret.gui.UIAsset();
            this.img_rebate = t;
            this.__s(t, ["height", "x", "y"], [82, 1, 1]);
            return t;
        };
        ShopItemReaderSkin.prototype.item_icon_i = function () {
            var t = new UIIcon();
            this.item_icon = t;
            this.__s(t, ["height", "horizontalCenter", "skinName", "width", "y"], [102, 0, skins.IconSkin, 80, 20]);
            return t;
        };
        ShopItemReaderSkin.prototype.label_name_i = function () {
            var t = new egret.gui.Label();
            this.label_name = t;
            this.__s(t, ["bold", "height", "horizontalCenter", "size", "textAlign", "textColor", "verticalAlign", "width", "y"], [true, 24, 0.5, 17, "center", 14418065, "middle", 143, 117]);
            return t;
        };
        ShopItemReaderSkin.prototype.label_price_i = function () {
            var t = new egret.gui.Label();
            this.label_price = t;
            this.__s(t, ["bold", "height", "horizontalCenter", "size", "textAlign", "textColor", "verticalAlign", "width", "y"], [true, 23, 0, 16, "center", 16777215, "middle", 94, 144]);
            return t;
        };
        ShopItemReaderSkin.prototype.lable_count_i = function () {
            var t = new egret.gui.Label();
            this.lable_count = t;
            this.__s(t, ["height", "size", "textColor", "verticalAlign", "width", "x", "y"], [20, 14, 16447479, "middle", 33, 91, 75]);
            return t;
        };
        ShopItemReaderSkin.prototype.__3_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["source", "width", "x", "y"], ["shop_itemreder", 167, 0, 0]);
            return t;
        };
        ShopItemReaderSkin._skinParts = ["btn_buy", "label_price", "label_name", "currnecy_icon", "item_icon", "img_rebate", "lable_count"];
        return ShopItemReaderSkin;
    })(egret.gui.Skin);
    skins.ShopItemReaderSkin = ShopItemReaderSkin;
    ShopItemReaderSkin.prototype.__class__ = "skins.ShopItemReaderSkin";
})(skins || (skins = {}));
