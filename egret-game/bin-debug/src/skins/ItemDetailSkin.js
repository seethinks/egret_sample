var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var skins;
(function (skins) {
    var ItemDetailSkin = (function (_super) {
        __extends(ItemDetailSkin, _super);
        function ItemDetailSkin() {
            _super.call(this);
            this.__s = egret.gui.setProperties;
            this.__s(this, ["height", "width"], [250, 440]);
            this.elementsContent = [this.__3_i(), this._item_btn_i(), this._item_icon_i(), this._item_detail_label_i()];
            this.states = [
                new egret.gui.State("normal", [
                ]),
                new egret.gui.State("disabled", [
                ])
            ];
        }
        Object.defineProperty(ItemDetailSkin.prototype, "skinParts", {
            get: function () {
                return ItemDetailSkin._skinParts;
            },
            enumerable: true,
            configurable: true
        });
        ItemDetailSkin.prototype._item_btn_i = function () {
            var t = new egret.gui.Button();
            this._item_btn = t;
            this.__s(t, ["bottom", "label", "skinName", "x"], [19, "按钮", skins.ButtonYellowSkin, 167]);
            return t;
        };
        ItemDetailSkin.prototype._item_detail_label_i = function () {
            var t = new egret.gui.Label();
            this._item_detail_label = t;
            this.__s(t, ["height", "horizontalCenter", "size", "textColor", "width", "y"], [100, 55.5, 18, 16447222, 280, 52]);
            return t;
        };
        ItemDetailSkin.prototype._item_icon_i = function () {
            var t = new UIIcon();
            this._item_icon = t;
            this.__s(t, ["skinName", "x", "y"], [skins.IconSkin, 14, 41]);
            return t;
        };
        ItemDetailSkin.prototype.__3_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["height", "scale9Grid", "source", "width", "x", "y"], [130, egret.gui.getScale9Grid("65,19,392,114"), "my_panel_2", 300, 127, 39]);
            return t;
        };
        ItemDetailSkin._skinParts = ["_item_btn", "_item_icon", "_item_detail_label"];
        return ItemDetailSkin;
    })(egret.gui.Skin);
    skins.ItemDetailSkin = ItemDetailSkin;
    ItemDetailSkin.prototype.__class__ = "skins.ItemDetailSkin";
})(skins || (skins = {}));
