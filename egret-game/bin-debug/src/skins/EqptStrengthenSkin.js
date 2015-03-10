var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var skins;
(function (skins) {
    var EqptStrengthenSkin = (function (_super) {
        __extends(EqptStrengthenSkin, _super);
        function EqptStrengthenSkin() {
            _super.call(this);
            this.__s = egret.gui.setProperties;
            this.__s(this, ["height", "width"], [592, 522]);
            this.elementsContent = [this.qh_btn_strengthen_i(), this.qh_btn_gaojixilian_i(), this.qh_btn_xilian_i(), this.__3_i(), this.__4_i(), this.__5_i(), this.xq_label_explain_i(), this.__6_i(), this.__7_i(), this.qh_label_property_i(), this.qh_label_next_i(), this.qh_icon_i(), this._label_bangding_i()];
            this.states = [
                new egret.gui.State("normal", [
                ]),
                new egret.gui.State("disabled", [
                ])
            ];
        }
        Object.defineProperty(EqptStrengthenSkin.prototype, "skinParts", {
            get: function () {
                return EqptStrengthenSkin._skinParts;
            },
            enumerable: true,
            configurable: true
        });
        EqptStrengthenSkin.prototype.__4_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["height", "horizontalCenter", "scale9Grid", "source", "width", "y"], [273, 1, egret.gui.getScale9Grid("59,21,355,64"), "my_panel_4", 522, 63]);
            return t;
        };
        EqptStrengthenSkin.prototype.__5_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["height", "horizontalCenter", "scale9Grid", "source", "width", "y"], [130, 0, egret.gui.getScale9Grid("59,21,355,64"), "my_panel_4", 522, 343]);
            return t;
        };
        EqptStrengthenSkin.prototype.__6_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["height", "scale9Grid", "source", "width", "x", "y"], [232, egret.gui.getScale9Grid("44,30,268,187"), "my_panel_1", 339, 162, 85]);
            return t;
        };
        EqptStrengthenSkin.prototype.__7_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["height", "horizontalCenter", "scale9Grid", "source", "width", "y"], [89, -1, egret.gui.getScale9Grid("44,30,268,187"), "my_panel_1", 484, 363]);
            return t;
        };
        EqptStrengthenSkin.prototype._label_bangding_i = function () {
            var t = new egret.gui.Label();
            this._label_bangding = t;
            this.__s(t, ["horizontalCenter", "size", "text", "textAlign", "textColor", "verticalAlign", "width", "y"], [0.5, 20, "首次强化可以绑定装备", "center", 521207, "middle", 413, 494]);
            return t;
        };
        EqptStrengthenSkin.prototype.qh_btn_gaojixilian_i = function () {
            var t = new egret.gui.Button();
            this.qh_btn_gaojixilian = t;
            this.__s(t, ["bottom", "label", "right", "skinName"], [0, "高级洗练", 40, skins.ButtonRedSkin]);
            return t;
        };
        EqptStrengthenSkin.prototype.qh_btn_strengthen_i = function () {
            var t = new egret.gui.Button();
            this.qh_btn_strengthen = t;
            this.__s(t, ["bottom", "horizontalCenter", "label", "skinName"], [0, 0.5, "强  化", skins.ButtonRedSkin]);
            return t;
        };
        EqptStrengthenSkin.prototype.qh_btn_xilian_i = function () {
            var t = new egret.gui.Button();
            this.qh_btn_xilian = t;
            this.__s(t, ["bottom", "horizontalCenter", "label", "left", "skinName"], [0, -146.5, "洗  练", 41, skins.ButtonBlueSkin]);
            return t;
        };
        EqptStrengthenSkin.prototype.qh_icon_i = function () {
            var t = new UIIcon();
            this.qh_icon = t;
            this.__s(t, ["left", "skinName", "top"], [31, skins.IconSkin, 90]);
            return t;
        };
        EqptStrengthenSkin.prototype.qh_label_next_i = function () {
            var t = new egret.gui.Label();
            this.qh_label_next = t;
            this.__s(t, ["height", "size", "textColor", "width", "x", "y"], [76, 20, 65280, 471, 24, 369]);
            return t;
        };
        EqptStrengthenSkin.prototype.qh_label_property_i = function () {
            var t = new egret.gui.Label();
            this.qh_label_property = t;
            this.__s(t, ["height", "size", "textColor", "width", "x", "y"], [217, 20, 16777215, 320, 172, 93]);
            return t;
        };
        EqptStrengthenSkin.prototype.__3_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["height", "horizontalCenter", "left", "right", "scale9Grid", "source", "top"], [57, 0, 0, 0, egret.gui.getScale9Grid("59,21,355,64"), "my_panel_4", 0]);
            return t;
        };
        EqptStrengthenSkin.prototype.xq_label_explain_i = function () {
            var t = new egret.gui.Label();
            this.xq_label_explain = t;
            this.__s(t, ["height", "horizontalCenter", "left", "right", "size", "text", "textAlign", "textColor", "top", "verticalAlign"], [32, -2, 14, 18, 18, "强化成功率为100%，熔炼强化过的装备可返还全部黑铁矿石", "center", 0x32FF00, 13, "middle"]);
            return t;
        };
        EqptStrengthenSkin._skinParts = ["qh_btn_strengthen", "qh_btn_gaojixilian", "qh_btn_xilian", "xq_label_explain", "qh_label_property", "qh_label_next", "qh_icon", "_label_bangding"];
        return EqptStrengthenSkin;
    })(egret.gui.Skin);
    skins.EqptStrengthenSkin = EqptStrengthenSkin;
    EqptStrengthenSkin.prototype.__class__ = "skins.EqptStrengthenSkin";
})(skins || (skins = {}));
