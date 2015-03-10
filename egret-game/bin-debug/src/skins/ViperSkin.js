var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var skins;
(function (skins) {
    var ViperSkin = (function (_super) {
        __extends(ViperSkin, _super);
        function ViperSkin() {
            _super.call(this);
            this.__s = egret.gui.setProperties;
            this.__s(this, ["height", "width"], [639, 534]);
            this.elementsContent = [this.__3_i(), this.__4_i(), this.__5_i(), this._now_vipLv_i(), this._next_vipLv_i(), this._charge_ppt_i(), this._vip_exp_i(), this.vip_label_level_i(), this.vip_label_privilege_i(), this.vip_btn_left_i(), this.vip_btn_right_i(), this._charge_xq_btn_i()];
            this.states = [
                new egret.gui.State("normal", [
                ]),
                new egret.gui.State("disabled", [
                ])
            ];
        }
        Object.defineProperty(ViperSkin.prototype, "skinParts", {
            get: function () {
                return ViperSkin._skinParts;
            },
            enumerable: true,
            configurable: true
        });
        ViperSkin.prototype.__4_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["source", "width", "x", "y"], ["titile_bg", 534, 0, 0]);
            return t;
        };
        ViperSkin.prototype.__5_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["source", "x", "y"], ["vip_title_bg", 10, 94]);
            return t;
        };
        ViperSkin.prototype._charge_ppt_i = function () {
            var t = new egret.gui.Label();
            this._charge_ppt = t;
            this.__s(t, ["height", "size", "textAlign", "textColor", "verticalAlign", "width", "x", "y"], [21, 16, "center", 0x20D005, "middle", 489, 19, 12]);
            return t;
        };
        ViperSkin.prototype._charge_xq_btn_i = function () {
            var t = new egret.gui.Button();
            this._charge_xq_btn = t;
            this.__s(t, ["horizontalCenter", "label", "skinName", "y"], [0.5, "充  值", skins.ButtonYellowSkin, 586]);
            return t;
        };
        ViperSkin.prototype._next_vipLv_i = function () {
            var t = new egret.gui.UIAsset();
            this._next_vipLv = t;
            this.__s(t, ["x", "y"], [429, 55]);
            return t;
        };
        ViperSkin.prototype._now_vipLv_i = function () {
            var t = new egret.gui.UIAsset();
            this._now_vipLv = t;
            this.__s(t, ["x", "y"], [40, 55]);
            return t;
        };
        ViperSkin.prototype._vip_exp_i = function () {
            var t = new egret.gui.UIAsset();
            this._vip_exp = t;
            this.__s(t, ["source", "width", "x", "y"], ["exp", 2, 103, 62]);
            return t;
        };
        ViperSkin.prototype.__3_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["height", "scale9Grid", "source", "top", "width", "x"], [496, egret.gui.getScale9Grid("59,21,355,64"), "my_panel_4", 87, 534, 0]);
            return t;
        };
        ViperSkin.prototype.vip_btn_left_i = function () {
            var t = new egret.gui.UIAsset();
            this.vip_btn_left = t;
            this.__s(t, ["source", "x", "y"], ["vip_btn_left", 8, 294]);
            return t;
        };
        ViperSkin.prototype.vip_btn_right_i = function () {
            var t = new egret.gui.UIAsset();
            this.vip_btn_right = t;
            this.__s(t, ["source", "x", "y"], ["vip_btn_right", 445, 297]);
            return t;
        };
        ViperSkin.prototype.vip_label_level_i = function () {
            var t = new egret.gui.Label();
            this.vip_label_level = t;
            this.__s(t, ["horizontalCenter", "size", "text", "textAlign", "textColor", "width", "y"], [0, 22, "vip0等级特权", "center", 3844839, 189, 103]);
            return t;
        };
        ViperSkin.prototype.vip_label_privilege_i = function () {
            var t = new egret.gui.Label();
            this.vip_label_privilege = t;
            this.__s(t, ["height", "horizontalCenter", "size", "text", "textColor", "width", "y"], [408, 0.5, 22, "vip0等级特权", 16777215, 325, 158]);
            return t;
        };
        ViperSkin._skinParts = ["_now_vipLv", "_next_vipLv", "_charge_ppt", "_vip_exp", "vip_label_level", "vip_label_privilege", "vip_btn_left", "vip_btn_right", "_charge_xq_btn"];
        return ViperSkin;
    })(egret.gui.Skin);
    skins.ViperSkin = ViperSkin;
    ViperSkin.prototype.__class__ = "skins.ViperSkin";
})(skins || (skins = {}));
