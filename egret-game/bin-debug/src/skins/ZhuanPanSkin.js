var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var skins;
(function (skins) {
    var ZhuanPanSkin = (function (_super) {
        __extends(ZhuanPanSkin, _super);
        function ZhuanPanSkin() {
            _super.call(this);
            this.__s = egret.gui.setProperties;
            this.__s(this, ["height", "width"], [644, 552]);
            this.elementsContent = [this.__3_i(), this.__4_i(), this._label_time_i(), this.__5_i(), this._img_i(), this.__6_i(), this._label_desc_i(), this._btn_refresh_i(), this._icon4_i(), this._icon1_i(), this._icon2_i(), this._icon3_i(), this._icon5_i(), this._icon6_i(), this._btn_start_i()];
            this.states = [
                new egret.gui.State("normal", [
                ]),
                new egret.gui.State("disabled", [
                ])
            ];
        }
        Object.defineProperty(ZhuanPanSkin.prototype, "skinParts", {
            get: function () {
                return ZhuanPanSkin._skinParts;
            },
            enumerable: true,
            configurable: true
        });
        ZhuanPanSkin.prototype.__4_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["height", "scale9Grid", "source", "width", "x", "y"], [601, egret.gui.getScale9Grid("59,21,355,64"), "my_panel_4", 552, 0, 43]);
            return t;
        };
        ZhuanPanSkin.prototype.__5_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["source", "x", "y"], ["zhuanpan_bg", 8, 50]);
            return t;
        };
        ZhuanPanSkin.prototype.__6_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["source", "x", "y"], ["zhuanpan_quan", 36, 78]);
            return t;
        };
        ZhuanPanSkin.prototype._btn_refresh_i = function () {
            var t = new egret.gui.Button();
            this._btn_refresh = t;
            this.__s(t, ["height", "horizontalCenter", "label", "skinName", "width", "y"], [46, 185.5, "刷    新", skins.ButtonRedSkin, 131, 589]);
            return t;
        };
        ZhuanPanSkin.prototype._btn_start_i = function () {
            var t = new egret.gui.UIAsset();
            this._btn_start = t;
            this.__s(t, ["source", "x", "y"], ["btn_txt_start", 242, 298]);
            return t;
        };
        ZhuanPanSkin.prototype._icon1_i = function () {
            var t = new UIIcon();
            this._icon1 = t;
            this.__s(t, ["height", "skinName", "width", "x", "y"], [99, skins.IconSkin, 81, 234, 108]);
            return t;
        };
        ZhuanPanSkin.prototype._icon2_i = function () {
            var t = new UIIcon();
            this._icon2 = t;
            this.__s(t, ["height", "skinName", "width", "x", "y"], [99, skins.IconSkin, 81, 385, 200]);
            return t;
        };
        ZhuanPanSkin.prototype._icon3_i = function () {
            var t = new UIIcon();
            this._icon3 = t;
            this.__s(t, ["height", "skinName", "width", "x", "y"], [99, skins.IconSkin, 81, 385, 363]);
            return t;
        };
        ZhuanPanSkin.prototype._icon4_i = function () {
            var t = new UIIcon();
            this._icon4 = t;
            this.__s(t, ["height", "skinName", "width", "x", "y"], [99, skins.IconSkin, 81, 234, 449]);
            return t;
        };
        ZhuanPanSkin.prototype._icon5_i = function () {
            var t = new UIIcon();
            this._icon5 = t;
            this.__s(t, ["height", "skinName", "width", "x", "y"], [99, skins.IconSkin, 81, 87, 363]);
            return t;
        };
        ZhuanPanSkin.prototype._icon6_i = function () {
            var t = new UIIcon();
            this._icon6 = t;
            this.__s(t, ["height", "skinName", "width", "x", "y"], [99, skins.IconSkin, 81, 87, 200]);
            return t;
        };
        ZhuanPanSkin.prototype._img_i = function () {
            var t = new egret.gui.UIAsset();
            this._img = t;
            this.__s(t, ["source", "x", "y"], ["zhuanpan_zhibiao", 274, 313]);
            return t;
        };
        ZhuanPanSkin.prototype._label_desc_i = function () {
            var t = new egret.gui.Label();
            this._label_desc = t;
            this.__s(t, ["bold", "height", "size", "textColor", "verticalAlign", "width", "x", "y"], [true, 42, 15, 457075, "middle", 357, 11, 588]);
            return t;
        };
        ZhuanPanSkin.prototype._label_time_i = function () {
            var t = new egret.gui.Label();
            this._label_time = t;
            this.__s(t, ["height", "horizontalCenter", "size", "textColor", "verticalAlign", "width", "y"], [23, 0, 16, 12715511, "middle", 524, 9]);
            return t;
        };
        ZhuanPanSkin.prototype.__3_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["height", "scale9Grid", "source", "width", "x", "y"], [42, egret.gui.getScale9Grid("59,21,355,64"), "my_panel_4", 552, 0, 0]);
            return t;
        };
        ZhuanPanSkin._skinParts = ["_label_time", "_img", "_label_desc", "_btn_refresh", "_icon4", "_icon1", "_icon2", "_icon3", "_icon5", "_icon6", "_btn_start"];
        return ZhuanPanSkin;
    })(egret.gui.Skin);
    skins.ZhuanPanSkin = ZhuanPanSkin;
    ZhuanPanSkin.prototype.__class__ = "skins.ZhuanPanSkin";
})(skins || (skins = {}));
