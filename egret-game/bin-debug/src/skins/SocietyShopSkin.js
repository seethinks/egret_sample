var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var skins;
(function (skins) {
    var SocietyShopSkin = (function (_super) {
        __extends(SocietyShopSkin, _super);
        function SocietyShopSkin() {
            _super.call(this);
            this.__s = egret.gui.setProperties;
            this.__s(this, ["height", "width"], [627, 531]);
            this.elementsContent = [this.__3_i(), this.__4_i(), this._label_shop_i(), this._btn_refrsh_i()];
            this.states = [
                new egret.gui.State("normal", [
                ]),
                new egret.gui.State("disabled", [
                ])
            ];
        }
        Object.defineProperty(SocietyShopSkin.prototype, "skinParts", {
            get: function () {
                return SocietyShopSkin._skinParts;
            },
            enumerable: true,
            configurable: true
        });
        SocietyShopSkin.prototype.__4_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["height", "horizontalCenter", "scale9Grid", "source", "width"], [89, 0.5, egret.gui.getScale9Grid("59,21,355,64"), "my_panel_4", 502]);
            return t;
        };
        SocietyShopSkin.prototype._btn_refrsh_i = function () {
            var t = new egret.gui.Button();
            this._btn_refrsh = t;
            this.__s(t, ["horizontalCenter", "label", "skinName", "y"], [0, "刷  新", skins.ButtonBlueSkin, 561]);
            return t;
        };
        SocietyShopSkin.prototype._label_shop_i = function () {
            var t = new egret.gui.Label();
            this._label_shop = t;
            this.__s(t, ["height", "size", "text", "textAlign", "textColor", "verticalAlign", "width", "x", "y"], [30, 17, "当前贡献/总贡献：200/300", "center", 16777215, "middle", 474, 28, 28]);
            return t;
        };
        SocietyShopSkin.prototype.__3_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["height", "horizontalCenter", "scale9Grid", "source", "width", "y"], [532, 0, egret.gui.getScale9Grid("59,21,355,64"), "my_panel_4", 531, 94]);
            return t;
        };
        SocietyShopSkin._skinParts = ["_label_shop", "_btn_refrsh"];
        return SocietyShopSkin;
    })(egret.gui.Skin);
    skins.SocietyShopSkin = SocietyShopSkin;
    SocietyShopSkin.prototype.__class__ = "skins.SocietyShopSkin";
})(skins || (skins = {}));
