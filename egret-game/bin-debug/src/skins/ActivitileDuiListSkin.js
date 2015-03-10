var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var skins;
(function (skins) {
    var ActivitileDuiListSkin = (function (_super) {
        __extends(ActivitileDuiListSkin, _super);
        function ActivitileDuiListSkin() {
            _super.call(this);
            this.__s = egret.gui.setProperties;
            this.__s(this, ["height", "width"], [160, 530]);
            this.elementsContent = [this.__3_i(), this._btn_get_i(), this._icon1_i(), this._icon3_i(), this._icon2_i(), this._label1_i(), this._label3_i(), this._label2_i(), this.__4_i(), this.__5_i(), this._vip_i()];
            this.states = [
                new egret.gui.State("normal", [
                ]),
                new egret.gui.State("disabled", [
                ])
            ];
        }
        Object.defineProperty(ActivitileDuiListSkin.prototype, "skinParts", {
            get: function () {
                return ActivitileDuiListSkin._skinParts;
            },
            enumerable: true,
            configurable: true
        });
        ActivitileDuiListSkin.prototype.__4_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["source", "x", "y"], ["act_jia", 268, 53]);
            return t;
        };
        ActivitileDuiListSkin.prototype.__5_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["source", "x", "y"], ["act_jian", 135, 46]);
            return t;
        };
        ActivitileDuiListSkin.prototype._btn_get_i = function () {
            var t = new egret.gui.UIAsset();
            this._btn_get = t;
            this.__s(t, ["source", "width", "x", "y"], ["act_get_btn", 77, 441, 47]);
            return t;
        };
        ActivitileDuiListSkin.prototype._icon1_i = function () {
            var t = new UIIcon();
            this._icon1 = t;
            this.__s(t, ["height", "skinName", "width", "x", "y"], [105, skins.IconSkin, 86, 46, 18]);
            return t;
        };
        ActivitileDuiListSkin.prototype._icon2_i = function () {
            var t = new UIIcon();
            this._icon2 = t;
            this.__s(t, ["height", "skinName", "width", "x", "y"], [105, skins.IconSkin, 86, 175, 18]);
            return t;
        };
        ActivitileDuiListSkin.prototype._icon3_i = function () {
            var t = new UIIcon();
            this._icon3 = t;
            this.__s(t, ["height", "skinName", "width", "x", "y"], [105, skins.IconSkin, 86, 306, 18]);
            return t;
        };
        ActivitileDuiListSkin.prototype._label1_i = function () {
            var t = new egret.gui.Label();
            this._label1 = t;
            this.__s(t, ["height", "size", "textAlign", "textColor", "verticalAlign", "width", "x", "y"], [21, 15, "center", 327131, "middle", 74, 51, 124]);
            return t;
        };
        ActivitileDuiListSkin.prototype._label2_i = function () {
            var t = new egret.gui.Label();
            this._label2 = t;
            this.__s(t, ["height", "size", "textAlign", "textColor", "verticalAlign", "width", "x", "y"], [21, 15, "center", 327131, "middle", 74, 179, 124]);
            return t;
        };
        ActivitileDuiListSkin.prototype._label3_i = function () {
            var t = new egret.gui.Label();
            this._label3 = t;
            this.__s(t, ["height", "size", "textAlign", "textColor", "verticalAlign", "width", "x", "y"], [21, 15, "center", 327131, "middle", 74, 311, 126]);
            return t;
        };
        ActivitileDuiListSkin.prototype._vip_i = function () {
            var t = new egret.gui.UIAsset();
            this._vip = t;
            this.__s(t, ["source", "x", "y"], ["vip0", 455, 107]);
            return t;
        };
        ActivitileDuiListSkin.prototype.__3_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["source", "x", "y"], ["list_bgimg", 0, 0]);
            return t;
        };
        ActivitileDuiListSkin._skinParts = ["_btn_get", "_icon1", "_icon3", "_icon2", "_label1", "_label3", "_label2", "_vip"];
        return ActivitileDuiListSkin;
    })(egret.gui.Skin);
    skins.ActivitileDuiListSkin = ActivitileDuiListSkin;
    ActivitileDuiListSkin.prototype.__class__ = "skins.ActivitileDuiListSkin";
})(skins || (skins = {}));
