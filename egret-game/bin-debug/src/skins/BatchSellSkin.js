var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var skins;
(function (skins) {
    var BatchSellSkin = (function (_super) {
        __extends(BatchSellSkin, _super);
        function BatchSellSkin() {
            _super.call(this);
            this.__s = egret.gui.setProperties;
            this.__s(this, ["height", "width"], [323, 408]);
            this.elementsContent = [this.__3_i(), this.__4_i(), this.__5_i(), this.__6_i(), this.__7_i(), this.__8_i(), this._close_btn_i(), this._white_label_i(), this._white_btn_i(), this._green_label_i(), this._green_btn_i(), this._violet_label_i(), this._violet_btn_i(), this._blue_label_i(), this._blue_btn_i()];
            this.states = [
                new egret.gui.State("normal", [
                ]),
                new egret.gui.State("disabled", [
                ])
            ];
        }
        Object.defineProperty(BatchSellSkin.prototype, "skinParts", {
            get: function () {
                return BatchSellSkin._skinParts;
            },
            enumerable: true,
            configurable: true
        });
        BatchSellSkin.prototype.__4_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["height", "scale9Grid", "source", "width", "x", "y"], [101, egret.gui.getScale9Grid("56,17,340,102"), "my_panel_3", 188, 209, 158]);
            return t;
        };
        BatchSellSkin.prototype.__5_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["height", "scale9Grid", "source", "width", "x", "y"], [101, egret.gui.getScale9Grid("56,17,340,102"), "my_panel_3", 188, 8, 158]);
            return t;
        };
        BatchSellSkin.prototype.__6_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["height", "scale9Grid", "source", "width", "x", "y"], [30, egret.gui.getScale9Grid("44,30,268,187"), "my_panel_1", 314, 46, 9]);
            return t;
        };
        BatchSellSkin.prototype.__7_i = function () {
            var t = new egret.gui.Label();
            this.__s(t, ["size", "text", "textAlign", "textColor", "verticalAlign", "width", "x", "y"], [18, "卖出装备可获得金币", "center", 1634564, "middle", 310, 47, 10]);
            return t;
        };
        BatchSellSkin.prototype.__8_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["height", "scale9Grid", "source", "width", "x", "y"], [101, egret.gui.getScale9Grid("56,17,340,102"), "my_panel_3", 188, 210, 51]);
            return t;
        };
        BatchSellSkin.prototype._blue_btn_i = function () {
            var t = new egret.gui.Button();
            this._blue_btn = t;
            this.__s(t, ["height", "horizontalCenter", "label", "skinName", "verticalCenter", "width"], [42, -109.5, "卖出", skins.ButtonBlueSkin, 66.5, 109]);
            return t;
        };
        BatchSellSkin.prototype._blue_label_i = function () {
            var t = new egret.gui.Label();
            this._blue_label = t;
            this.__s(t, ["height", "size", "textAlign", "textColor", "width", "x", "y"], [24, 18, "center", 458751, 162, 20, 171]);
            return t;
        };
        BatchSellSkin.prototype._close_btn_i = function () {
            var t = new egret.gui.Button();
            this._close_btn = t;
            this.__s(t, ["bottom", "horizontalCenter", "label", "skinName"], [3, 0.5, "关闭", skins.ButtonRedSkin]);
            return t;
        };
        BatchSellSkin.prototype._green_btn_i = function () {
            var t = new egret.gui.Button();
            this._green_btn = t;
            this.__s(t, ["height", "horizontalCenter", "label", "skinName", "verticalCenter", "width"], [42, 99.5, "卖出", skins.ButtonBlueSkin, -40.5, 109]);
            return t;
        };
        BatchSellSkin.prototype._green_label_i = function () {
            var t = new egret.gui.Label();
            this._green_label = t;
            this.__s(t, ["height", "size", "textAlign", "textColor", "width", "x", "y"], [24, 18, "center", 2279688, 162, 222, 67]);
            return t;
        };
        BatchSellSkin.prototype._violet_btn_i = function () {
            var t = new egret.gui.Button();
            this._violet_btn = t;
            this.__s(t, ["height", "horizontalCenter", "label", "skinName", "verticalCenter", "width"], [42, 99.5, "卖出", skins.ButtonBlueSkin, 64.5, 109]);
            return t;
        };
        BatchSellSkin.prototype._violet_label_i = function () {
            var t = new egret.gui.Label();
            this._violet_label = t;
            this.__s(t, ["height", "size", "textAlign", "textColor", "width", "x", "y"], [24, 18, "center", 12584615, 162, 224, 171]);
            return t;
        };
        BatchSellSkin.prototype._white_btn_i = function () {
            var t = new egret.gui.Button();
            this._white_btn = t;
            this.__s(t, ["height", "horizontalCenter", "label", "skinName", "verticalCenter", "width"], [42, -108.5, "卖出", skins.ButtonBlueSkin, -39.5, 109]);
            return t;
        };
        BatchSellSkin.prototype._white_label_i = function () {
            var t = new egret.gui.Label();
            this._white_label = t;
            this.__s(t, ["height", "size", "textAlign", "textColor", "width", "x", "y"], [24, 18, "center", 16447222, 162, 20, 67]);
            return t;
        };
        BatchSellSkin.prototype.__3_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["height", "scale9Grid", "source", "width", "x", "y"], [101, egret.gui.getScale9Grid("56,17,340,102"), "my_panel_3", 188, 9, 52]);
            return t;
        };
        BatchSellSkin._skinParts = ["_close_btn", "_white_label", "_white_btn", "_green_label", "_green_btn", "_violet_label", "_violet_btn", "_blue_label", "_blue_btn"];
        return BatchSellSkin;
    })(egret.gui.Skin);
    skins.BatchSellSkin = BatchSellSkin;
    BatchSellSkin.prototype.__class__ = "skins.BatchSellSkin";
})(skins || (skins = {}));
