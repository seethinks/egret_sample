var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var skins;
(function (skins) {
    var BuyMoneySkin = (function (_super) {
        __extends(BuyMoneySkin, _super);
        function BuyMoneySkin() {
            _super.call(this);
            this.__s = egret.gui.setProperties;
            this.__s(this, ["height", "width"], [587, 535]);
            this.elementsContent = [this.__3_i(), this.__4_i(), this.__5_i(), this.btn_buy_all_i(), this.btn_buy_i(), this.label_money_i(), this.label_gold_i(), this.label_buy_num_i(), this.__6_i(), this.label_vip_num_i()];
            this.states = [
                new egret.gui.State("normal", [
                ]),
                new egret.gui.State("disabled", [
                ])
            ];
        }
        Object.defineProperty(BuyMoneySkin.prototype, "skinParts", {
            get: function () {
                return BuyMoneySkin._skinParts;
            },
            enumerable: true,
            configurable: true
        });
        BuyMoneySkin.prototype.__4_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["height", "scale9Grid", "source", "width", "x", "y"], [447, egret.gui.getScale9Grid("59,21,355,64"), "my_panel_4", 535, 0, 72]);
            return t;
        };
        BuyMoneySkin.prototype.__5_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["source", "x", "y"], ["buy_money", 9, 15]);
            return t;
        };
        BuyMoneySkin.prototype.__6_i = function () {
            var t = new egret.gui.Label();
            this.__s(t, ["height", "horizontalCenter", "size", "text", "textAlign", "textColor", "verticalAlign", "width", "y"], [29, 0, 19, "VIP等级越高，可以购买的次数越多", "center", 695795, "middle", 460, 17]);
            return t;
        };
        BuyMoneySkin.prototype.btn_buy_all_i = function () {
            var t = new egret.gui.Button();
            this.btn_buy_all = t;
            this.__s(t, ["label", "skinName", "x", "y"], ["购买全部", skins.ButtonYellowSkin, 47, 534]);
            return t;
        };
        BuyMoneySkin.prototype.btn_buy_i = function () {
            var t = new egret.gui.Button();
            this.btn_buy = t;
            this.__s(t, ["label", "skinName", "x", "y"], ["购  买", skins.ButtonRedSkin, 338, 534]);
            return t;
        };
        BuyMoneySkin.prototype.label_buy_num_i = function () {
            var t = new egret.gui.Label();
            this.label_buy_num = t;
            this.__s(t, ["height", "size", "text", "textAlign", "textColor", "verticalAlign", "width", "x", "y"], [29, 19, "剩余购买次数：1", "right", 16777215, "middle", 229, 291, 476]);
            return t;
        };
        BuyMoneySkin.prototype.label_gold_i = function () {
            var t = new egret.gui.Label();
            this.label_gold = t;
            this.__s(t, ["height", "size", "text", "textAlign", "textColor", "verticalAlign", "width", "x", "y"], [29, 19, "售价：77555", "center", 0xF3DF0A, "middle", 229, 160, 439]);
            return t;
        };
        BuyMoneySkin.prototype.label_money_i = function () {
            var t = new egret.gui.Label();
            this.label_money = t;
            this.__s(t, ["height", "size", "text", "textAlign", "textColor", "verticalAlign", "width", "x", "y"], [29, 19, "金币：77555", "center", 15982346, "middle", 229, 160, 394]);
            return t;
        };
        BuyMoneySkin.prototype.label_vip_num_i = function () {
            var t = new egret.gui.Label();
            this.label_vip_num = t;
            this.__s(t, ["height", "horizontalCenter", "size", "text", "textAlign", "textColor", "verticalAlign", "width", "y"], [29, 0, 19, "您当前为VIP0，每天可以购买1次", "center", 65280, "middle", 510, 82]);
            return t;
        };
        BuyMoneySkin.prototype.__3_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["height", "horizontalCenter", "scale9Grid", "source", "width", "y"], [64, 0.5, egret.gui.getScale9Grid("59,21,355,64"), "my_panel_4", 512, 0]);
            return t;
        };
        BuyMoneySkin._skinParts = ["btn_buy_all", "btn_buy", "label_money", "label_gold", "label_buy_num", "label_vip_num"];
        return BuyMoneySkin;
    })(egret.gui.Skin);
    skins.BuyMoneySkin = BuyMoneySkin;
    BuyMoneySkin.prototype.__class__ = "skins.BuyMoneySkin";
})(skins || (skins = {}));
