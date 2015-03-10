var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var skins;
(function (skins) {
    var ChargeSkin = (function (_super) {
        __extends(ChargeSkin, _super);
        function ChargeSkin() {
            _super.call(this);
            this.__s = egret.gui.setProperties;
            this.__s(this, ["height", "width"], [645, 534]);
            this.elementsContent = [this.__3_i(), this.__4_i(), this._now_vipLv_i(), this._next_vipLv_i(), this._charge_ppt_i(), this._charge_ppt0_i(), this._vip_exp_i(), this._vip_xq_btn_i()];
            this.states = [
                new egret.gui.State("normal", [
                ]),
                new egret.gui.State("disabled", [
                ])
            ];
        }
        Object.defineProperty(ChargeSkin.prototype, "skinParts", {
            get: function () {
                return ChargeSkin._skinParts;
            },
            enumerable: true,
            configurable: true
        });
        ChargeSkin.prototype.__4_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["source", "width", "x", "y"], ["titile_bg", 534, 0, 0]);
            return t;
        };
        ChargeSkin.prototype._charge_ppt0_i = function () {
            var t = new egret.gui.Label();
            this._charge_ppt0 = t;
            this.__s(t, ["height", "size", "text", "textColor", "verticalAlign", "width", "x", "y"], [33, 26, "首次充值将获得三倍元宝", 587916, "middle", 311, 14, 600]);
            return t;
        };
        ChargeSkin.prototype._charge_ppt_i = function () {
            var t = new egret.gui.Label();
            this._charge_ppt = t;
            this.__s(t, ["height", "size", "textAlign", "textColor", "verticalAlign", "width", "x", "y"], [21, 16, "center", 2150405, "middle", 489, 19, 12]);
            return t;
        };
        ChargeSkin.prototype._next_vipLv_i = function () {
            var t = new egret.gui.UIAsset();
            this._next_vipLv = t;
            this.__s(t, ["x", "y"], [429, 55]);
            return t;
        };
        ChargeSkin.prototype._now_vipLv_i = function () {
            var t = new egret.gui.UIAsset();
            this._now_vipLv = t;
            this.__s(t, ["x", "y"], [40, 55]);
            return t;
        };
        ChargeSkin.prototype._vip_exp_i = function () {
            var t = new egret.gui.UIAsset();
            this._vip_exp = t;
            this.__s(t, ["source", "width", "x", "y"], ["exp", 2, 103, 62]);
            return t;
        };
        ChargeSkin.prototype._vip_xq_btn_i = function () {
            var t = new egret.gui.Button();
            this._vip_xq_btn = t;
            this.__s(t, ["label", "skinName", "x", "y"], ["VIP详情", skins.ButtonYellowSkin, 374, 591]);
            return t;
        };
        ChargeSkin.prototype.__3_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["height", "scale9Grid", "source", "top", "width", "x"], [504, egret.gui.getScale9Grid("59,21,355,64"), "my_panel_4", 87, 534, 0]);
            return t;
        };
        ChargeSkin._skinParts = ["_now_vipLv", "_next_vipLv", "_charge_ppt", "_charge_ppt0", "_vip_exp", "_vip_xq_btn"];
        return ChargeSkin;
    })(egret.gui.Skin);
    skins.ChargeSkin = ChargeSkin;
    ChargeSkin.prototype.__class__ = "skins.ChargeSkin";
})(skins || (skins = {}));
