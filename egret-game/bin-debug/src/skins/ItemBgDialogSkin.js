var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var skins;
(function (skins) {
    var ItemBgDialogSkin = (function (_super) {
        __extends(ItemBgDialogSkin, _super);
        function ItemBgDialogSkin() {
            _super.call(this);
            this.__s = egret.gui.setProperties;
            this.__s(this, ["height", "width"], [746, 640]);
            this.elementsContent = [this.__3_i(), this._btn_kzbg_i(), this._btn_plmc_i(), this._btn_zbsx_i(), this.bag_size_label_i(), this.bstone_count_label_i(), this.btn_tab1_i(), this.btn_tab2_i(), this._eqptwarn_i(), this._itemwarn_i()];
            this.states = [
                new egret.gui.State("normal", [
                ]),
                new egret.gui.State("disabled", [
                ])
            ];
        }
        Object.defineProperty(ItemBgDialogSkin.prototype, "skinParts", {
            get: function () {
                return ItemBgDialogSkin._skinParts;
            },
            enumerable: true,
            configurable: true
        });
        ItemBgDialogSkin.prototype._btn_kzbg_i = function () {
            var t = new egret.gui.UIAsset();
            this._btn_kzbg = t;
            this.__s(t, ["source", "x", "y"], ["btn_kzbb", 512, 226]);
            return t;
        };
        ItemBgDialogSkin.prototype._btn_plmc_i = function () {
            var t = new egret.gui.UIAsset();
            this._btn_plmc = t;
            this.__s(t, ["source", "x", "y"], ["btn_plmc", 32, 170]);
            return t;
        };
        ItemBgDialogSkin.prototype._btn_zbsx_i = function () {
            var t = new egret.gui.UIAsset();
            this._btn_zbsx = t;
            this.__s(t, ["source", "x", "y"], ["btn_zbsx", 201, 170]);
            return t;
        };
        ItemBgDialogSkin.prototype._eqptwarn_i = function () {
            var t = new egret.gui.UIAsset();
            this._eqptwarn = t;
            this.__s(t, ["source", "x", "y"], ["btn_new_event", 123, 76]);
            return t;
        };
        ItemBgDialogSkin.prototype._itemwarn_i = function () {
            var t = new egret.gui.UIAsset();
            this._itemwarn = t;
            this.__s(t, ["source", "x", "y"], ["btn_new_event", 264, 76]);
            return t;
        };
        ItemBgDialogSkin.prototype.bag_size_label_i = function () {
            var t = new egret.gui.Label();
            this.bag_size_label = t;
            this.__s(t, ["height", "size", "text", "textAlign", "textColor", "verticalAlign", "width", "x", "y"], [25, 20, "100/100", "center", 16579065, "middle", 95, 413, 236]);
            return t;
        };
        ItemBgDialogSkin.prototype.bstone_count_label_i = function () {
            var t = new egret.gui.Label();
            this.bstone_count_label = t;
            this.__s(t, ["bold", "height", "size", "text", "textColor", "verticalAlign", "width", "x", "y"], [true, 25, 20, "黑铁矿石：0", 848580, "middle", 400, 52, 272]);
            return t;
        };
        ItemBgDialogSkin.prototype.btn_tab1_i = function () {
            var t = new UIBagTab();
            this.btn_tab1 = t;
            this.__s(t, ["skinName", "x", "y"], [skins.BagTabSkin, 23, 81]);
            return t;
        };
        ItemBgDialogSkin.prototype.btn_tab2_i = function () {
            var t = new UIBagTab();
            this.btn_tab2 = t;
            this.__s(t, ["skinName", "x", "y"], [skins.BagTabSkin, 162, 81]);
            return t;
        };
        ItemBgDialogSkin.prototype.__3_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["source", "x", "y"], ["itembg_bg", 0, 134]);
            return t;
        };
        ItemBgDialogSkin._skinParts = ["_btn_kzbg", "_btn_plmc", "_btn_zbsx", "bag_size_label", "bstone_count_label", "btn_tab1", "btn_tab2", "_eqptwarn", "_itemwarn"];
        return ItemBgDialogSkin;
    })(egret.gui.Skin);
    skins.ItemBgDialogSkin = ItemBgDialogSkin;
    ItemBgDialogSkin.prototype.__class__ = "skins.ItemBgDialogSkin";
})(skins || (skins = {}));
