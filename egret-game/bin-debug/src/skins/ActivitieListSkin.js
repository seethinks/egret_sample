var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var skins;
(function (skins) {
    var ActivitieListSkin = (function (_super) {
        __extends(ActivitieListSkin, _super);
        function ActivitieListSkin() {
            _super.call(this);
            this.__s = egret.gui.setProperties;
            this.__s(this, ["height", "width"], [160, 530]);
            this.elementsContent = [this.__3_i(), this._weidacheng_i(), this._btn_get_i(), this._label_text_i(), this._icon1_i(), this._icon3_i(), this._icon2_i()];
            this.states = [
                new egret.gui.State("normal", [
                ]),
                new egret.gui.State("disabled", [
                ])
            ];
        }
        Object.defineProperty(ActivitieListSkin.prototype, "skinParts", {
            get: function () {
                return ActivitieListSkin._skinParts;
            },
            enumerable: true,
            configurable: true
        });
        ActivitieListSkin.prototype._btn_get_i = function () {
            var t = new egret.gui.UIAsset();
            this._btn_get = t;
            this.__s(t, ["source", "width", "x", "y"], ["sq_btn_lingqu", 77, 441, 11]);
            return t;
        };
        ActivitieListSkin.prototype._icon1_i = function () {
            var t = new UIIcon();
            this._icon1 = t;
            this.__s(t, ["height", "skinName", "width", "x", "y"], [105, skins.IconSkin, 86, 46, 43]);
            return t;
        };
        ActivitieListSkin.prototype._icon2_i = function () {
            var t = new UIIcon();
            this._icon2 = t;
            this.__s(t, ["height", "skinName", "width", "x", "y"], [105, skins.IconSkin, 86, 175, 43]);
            return t;
        };
        ActivitieListSkin.prototype._icon3_i = function () {
            var t = new UIIcon();
            this._icon3 = t;
            this.__s(t, ["height", "skinName", "width", "x", "y"], [105, skins.IconSkin, 86, 306, 43]);
            return t;
        };
        ActivitieListSkin.prototype._label_text_i = function () {
            var t = new egret.gui.Label();
            this._label_text = t;
            this.__s(t, ["height", "size", "textColor", "width", "x", "y"], [24, 17, 16777215, 415, 13, 13]);
            return t;
        };
        ActivitieListSkin.prototype._weidacheng_i = function () {
            var t = new egret.gui.UIAsset();
            this._weidacheng = t;
            this.__s(t, ["source", "x", "y"], ["weidachen", 441, 64]);
            return t;
        };
        ActivitieListSkin.prototype.__3_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["source", "x", "y"], ["list_bgimg", 0, 0]);
            return t;
        };
        ActivitieListSkin._skinParts = ["_weidacheng", "_btn_get", "_label_text", "_icon1", "_icon3", "_icon2"];
        return ActivitieListSkin;
    })(egret.gui.Skin);
    skins.ActivitieListSkin = ActivitieListSkin;
    ActivitieListSkin.prototype.__class__ = "skins.ActivitieListSkin";
})(skins || (skins = {}));
