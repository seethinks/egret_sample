var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var skins;
(function (skins) {
    var WanBaChargeSkin = (function (_super) {
        __extends(WanBaChargeSkin, _super);
        function WanBaChargeSkin() {
            _super.call(this);
            this.__s = egret.gui.setProperties;
            this.__s(this, ["height", "width"], [643, 534]);
            this.elementsContent = [this.__3_i(), this.__4_i(), this._now_vipLv_i(), this._next_vipLv_i(), this._charge_ppt_i()];
            this.states = [
                new egret.gui.State("normal", [
                ]),
                new egret.gui.State("disabled", [
                ])
            ];
        }
        Object.defineProperty(WanBaChargeSkin.prototype, "skinParts", {
            get: function () {
                return WanBaChargeSkin._skinParts;
            },
            enumerable: true,
            configurable: true
        });
        WanBaChargeSkin.prototype.__4_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["height", "scale9Grid", "source", "width", "x", "y"], [55, egret.gui.getScale9Grid("59,21,355,64"), "my_panel_4", 534, 0, 0]);
            return t;
        };
        WanBaChargeSkin.prototype._charge_ppt_i = function () {
            var t = new egret.gui.Label();
            this._charge_ppt = t;
            this.__s(t, ["height", "size", "textAlign", "textColor", "verticalAlign", "width", "x", "y"], [21, 16, "center", 0x20D005, "middle", 489, 19, 16]);
            return t;
        };
        WanBaChargeSkin.prototype._next_vipLv_i = function () {
            var t = new egret.gui.UIAsset();
            this._next_vipLv = t;
            this.__s(t, ["x", "y"], [429, 55]);
            return t;
        };
        WanBaChargeSkin.prototype._now_vipLv_i = function () {
            var t = new egret.gui.UIAsset();
            this._now_vipLv = t;
            this.__s(t, ["x", "y"], [40, 55]);
            return t;
        };
        WanBaChargeSkin.prototype.__3_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["height", "scale9Grid", "source", "top", "width", "x"], [588, egret.gui.getScale9Grid("59,21,355,64"), "my_panel_4", 55, 534, 0]);
            return t;
        };
        WanBaChargeSkin._skinParts = ["_now_vipLv", "_next_vipLv", "_charge_ppt"];
        return WanBaChargeSkin;
    })(egret.gui.Skin);
    skins.WanBaChargeSkin = WanBaChargeSkin;
    WanBaChargeSkin.prototype.__class__ = "skins.WanBaChargeSkin";
})(skins || (skins = {}));
