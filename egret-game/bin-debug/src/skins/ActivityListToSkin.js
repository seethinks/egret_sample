var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var skins;
(function (skins) {
    var ActivityListToSkin = (function (_super) {
        __extends(ActivityListToSkin, _super);
        function ActivityListToSkin() {
            _super.call(this);
            this.__s = egret.gui.setProperties;
            this.__s(this, ["height", "width"], [136, 507]);
            this.elementsContent = [this.__3_i(), this.act_img_i(), this._btn_look_i()];
            this.states = [
                new egret.gui.State("normal", [
                ]),
                new egret.gui.State("disabled", [
                ])
            ];
        }
        Object.defineProperty(ActivityListToSkin.prototype, "skinParts", {
            get: function () {
                return ActivityListToSkin._skinParts;
            },
            enumerable: true,
            configurable: true
        });
        ActivityListToSkin.prototype._btn_look_i = function () {
            var t = new egret.gui.Button();
            this._btn_look = t;
            this.__s(t, ["height", "label", "skinName", "verticalCenter", "width", "x"], [51, "查看详情", skins.ButtonGreenSkin, 27.5, 137, 356]);
            return t;
        };
        ActivityListToSkin.prototype.act_img_i = function () {
            var t = new egret.gui.UIAsset();
            this.act_img = t;
            this.__s(t, ["height", "width", "x", "y"], [122, 493, 7, 7]);
            return t;
        };
        ActivityListToSkin.prototype.__3_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["scale9Grid", "source", "width"], [egret.gui.getScale9Grid("56,17,340,102"), "my_panel_3", 507]);
            return t;
        };
        ActivityListToSkin._skinParts = ["act_img", "_btn_look"];
        return ActivityListToSkin;
    })(egret.gui.Skin);
    skins.ActivityListToSkin = ActivityListToSkin;
    ActivityListToSkin.prototype.__class__ = "skins.ActivityListToSkin";
})(skins || (skins = {}));
