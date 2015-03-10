var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var skins;
(function (skins) {
    var ActivityListSkin = (function (_super) {
        __extends(ActivityListSkin, _super);
        function ActivityListSkin() {
            _super.call(this);
            this.__s = egret.gui.setProperties;
            this.__s(this, ["height", "width"], [136, 507]);
            this.elementsContent = [this.__3_i(), this.__4_i(), this.__5_i(), this.act_label_i(), this.act_label_name_i(), this.act_btn_draw_i(), this.gift_icon_i(), this._no_reach_i(), this.gift_img_i()];
            this.states = [
                new egret.gui.State("normal", [
                ]),
                new egret.gui.State("disabled", [
                ])
            ];
        }
        Object.defineProperty(ActivityListSkin.prototype, "skinParts", {
            get: function () {
                return ActivityListSkin._skinParts;
            },
            enumerable: true,
            configurable: true
        });
        ActivityListSkin.prototype.__4_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["height", "scale9Grid", "source", "width", "x", "y"], [84, egret.gui.getScale9Grid("65,19,392,114"), "my_panel_2", 84, 12, 31]);
            return t;
        };
        ActivityListSkin.prototype.__5_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["height", "scale9Grid", "source", "width", "x", "y"], [115, egret.gui.getScale9Grid("65,19,392,114"), "my_panel_2", 321, 106, 11]);
            return t;
        };
        ActivityListSkin.prototype._no_reach_i = function () {
            var t = new egret.gui.UIAsset();
            this._no_reach = t;
            this.__s(t, ["source", "verticalCenter", "x"], ["not_reach", 0, 429]);
            return t;
        };
        ActivityListSkin.prototype.act_btn_draw_i = function () {
            var t = new egret.gui.UIAsset();
            this.act_btn_draw = t;
            this.__s(t, ["source", "x", "y"], ["sq_btn_lingqu", 433, 6]);
            return t;
        };
        ActivityListSkin.prototype.act_label_i = function () {
            var t = new egret.gui.Label();
            this.act_label = t;
            this.__s(t, ["height", "size", "textColor", "width", "x", "y"], [63, 17, 0x52E69C, 298, 116, 53]);
            return t;
        };
        ActivityListSkin.prototype.act_label_name_i = function () {
            var t = new egret.gui.Label();
            this.act_label_name = t;
            this.__s(t, ["height", "size", "textColor", "width", "x", "y"], [31, 22, 13083708, 299, 116, 18]);
            return t;
        };
        ActivityListSkin.prototype.gift_icon_i = function () {
            var t = new egret.gui.UIAsset();
            this.gift_icon = t;
            this.__s(t, ["height", "source", "width", "x", "y"], [74, "gift_icon_1", 74, 17, 37]);
            return t;
        };
        ActivityListSkin.prototype.gift_img_i = function () {
            var t = new egret.gui.UIAsset();
            this.gift_img = t;
            this.__s(t, ["source", "x", "y"], ["gift_img_1", 8, 87]);
            return t;
        };
        ActivityListSkin.prototype.__3_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["scale9Grid", "source", "width"], [egret.gui.getScale9Grid("56,17,340,102"), "my_panel_3", 507]);
            return t;
        };
        ActivityListSkin._skinParts = ["act_label", "act_label_name", "act_btn_draw", "gift_icon", "_no_reach", "gift_img"];
        return ActivityListSkin;
    })(egret.gui.Skin);
    skins.ActivityListSkin = ActivityListSkin;
    ActivityListSkin.prototype.__class__ = "skins.ActivityListSkin";
})(skins || (skins = {}));
