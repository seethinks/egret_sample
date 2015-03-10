var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var skins;
(function (skins) {
    var ShopSkin = (function (_super) {
        __extends(ShopSkin, _super);
        function ShopSkin() {
            _super.call(this);
            this.__s = egret.gui.setProperties;
            this.__s(this, ["height", "width"], [799, 607]);
            this.elementsContent = [this.__3_i(), this.shop_label_level_i(), this.shop_label_gold_i(), this.shop_label_money_i(), this.__4_i(), this.__5_i(), this.shop_btn_buymoney_i(), this.shop_btn_buy_i(), this.shop_btn_refresh_i(), this.shop_vip_i(), this.shop_label_gailv_i(), this.__6_i()];
            this.states = [
                new egret.gui.State("normal", [
                ]),
                new egret.gui.State("disabled", [
                ])
            ];
        }
        Object.defineProperty(ShopSkin.prototype, "skinParts", {
            get: function () {
                return ShopSkin._skinParts;
            },
            enumerable: true,
            configurable: true
        });
        ShopSkin.prototype.__4_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["source", "top", "x"], ["goldicon", 11, 373]);
            return t;
        };
        ShopSkin.prototype.__5_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["source", "top", "x"], ["moneyicon", 9, 163]);
            return t;
        };
        ShopSkin.prototype.__6_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["height", "scale9Grid", "source", "width", "x", "y"], [561, egret.gui.getScale9Grid("59,21,355,64"), "my_panel_4", 534, 36, 174]);
            return t;
        };
        ShopSkin.prototype.shop_btn_buy_i = function () {
            var t = new egret.gui.Button();
            this.shop_btn_buy = t;
            this.__s(t, ["bottom", "label", "skinName", "x"], [0, "购买全部", skins.ButtonBlueSkin, 229]);
            return t;
        };
        ShopSkin.prototype.shop_btn_buymoney_i = function () {
            var t = new egret.gui.Button();
            this.shop_btn_buymoney = t;
            this.__s(t, ["bottom", "label", "skinName", "x"], [0, "购买金币", skins.ButtonYellowSkin, 50]);
            return t;
        };
        ShopSkin.prototype.shop_btn_refresh_i = function () {
            var t = new egret.gui.Button();
            this.shop_btn_refresh = t;
            this.__s(t, ["bottom", "label", "skinName", "x"], [0, "刷  新", skins.ButtonBlueSkin, 405]);
            return t;
        };
        ShopSkin.prototype.shop_label_gailv_i = function () {
            var t = new egret.gui.Label();
            this.shop_label_gailv = t;
            this.__s(t, ["height", "size", "text", "textAlign", "textColor", "top", "verticalAlign", "width", "x"], [57, 43, "100%", "center", 16114202, 72, "middle", 125, 413]);
            return t;
        };
        ShopSkin.prototype.shop_label_gold_i = function () {
            var t = new egret.gui.Label();
            this.shop_label_gold = t;
            this.__s(t, ["height", "size", "textColor", "top", "verticalAlign", "width", "x"], [24, 16, 0xEBC22E, 8, "middle", 98, 406]);
            return t;
        };
        ShopSkin.prototype.shop_label_level_i = function () {
            var t = new egret.gui.Label();
            this.shop_label_level = t;
            this.__s(t, ["height", "size", "text", "textAlign", "textColor", "top", "verticalAlign", "width", "x"], [24, 21, "Lv.1", "center", 15450670, 8, "middle", 115, 11]);
            return t;
        };
        ShopSkin.prototype.shop_label_money_i = function () {
            var t = new egret.gui.Label();
            this.shop_label_money = t;
            this.__s(t, ["height", "size", "textColor", "top", "verticalAlign", "width", "x"], [24, 16, 0xEBC22E, 8, "middle", 142, 198]);
            return t;
        };
        ShopSkin.prototype.shop_vip_i = function () {
            var t = new egret.gui.UIAsset();
            this.shop_vip = t;
            this.__s(t, ["source", "top", "x"], ["vip0", 12, 524]);
            return t;
        };
        ShopSkin.prototype.__3_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["source", "top", "x"], ["shop_bgimg", 8, 4]);
            return t;
        };
        ShopSkin._skinParts = ["shop_label_level", "shop_label_gold", "shop_label_money", "shop_btn_buymoney", "shop_btn_buy", "shop_btn_refresh", "shop_vip", "shop_label_gailv"];
        return ShopSkin;
    })(egret.gui.Skin);
    skins.ShopSkin = ShopSkin;
    ShopSkin.prototype.__class__ = "skins.ShopSkin";
})(skins || (skins = {}));
