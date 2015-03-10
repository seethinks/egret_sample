var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var skins;
(function (skins) {
    var FristChangeSkin = (function (_super) {
        __extends(FristChangeSkin, _super);
        function FristChangeSkin() {
            _super.call(this);
            this.__s = egret.gui.setProperties;
            this.__s(this, ["height", "width"], [470, 552]);
            this.elementsContent = [this.__3_i(), this.__4_i(), this._icon2_i(), this._icon1_i(), this._btn_i(), this._label_i()];
            this.states = [
                new egret.gui.State("normal", [
                ]),
                new egret.gui.State("disabled", [
                ])
            ];
        }
        Object.defineProperty(FristChangeSkin.prototype, "skinParts", {
            get: function () {
                return FristChangeSkin._skinParts;
            },
            enumerable: true,
            configurable: true
        });
        FristChangeSkin.prototype.__4_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["source", "x", "y"], ["act_shouchong", 11, 9]);
            return t;
        };
        FristChangeSkin.prototype._btn_i = function () {
            var t = new egret.gui.Button();
            this._btn = t;
            this.__s(t, ["label", "skinName", "x", "y"], ["前往充值", skins.ButtonRedSkin, 318, 308]);
            return t;
        };
        FristChangeSkin.prototype._icon1_i = function () {
            var t = new UIIcon();
            this._icon1 = t;
            this.__s(t, ["height", "skinName", "width", "x", "y"], [100, skins.IconSkin, 81, 303, 175]);
            return t;
        };
        FristChangeSkin.prototype._icon2_i = function () {
            var t = new UIIcon();
            this._icon2 = t;
            this.__s(t, ["height", "skinName", "width", "x", "y"], [100, skins.IconSkin, 81, 410, 175]);
            return t;
        };
        FristChangeSkin.prototype._label_i = function () {
            var t = new egret.gui.Label();
            this._label = t;
            this.__s(t, ["height", "size", "textColor", "width", "x", "y"], [70, 18, 326031, 199, 292, 139]);
            return t;
        };
        FristChangeSkin.prototype.__3_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["bottom", "horizontalCenter", "left", "right", "scale9Grid", "source", "top", "x", "y"], [1, 0, 0, 0, egret.gui.getScale9Grid("59,21,355,64"), "my_panel_4", 0, 10, 10]);
            return t;
        };
        FristChangeSkin._skinParts = ["_icon2", "_icon1", "_btn", "_label"];
        return FristChangeSkin;
    })(egret.gui.Skin);
    skins.FristChangeSkin = FristChangeSkin;
    FristChangeSkin.prototype.__class__ = "skins.FristChangeSkin";
})(skins || (skins = {}));
