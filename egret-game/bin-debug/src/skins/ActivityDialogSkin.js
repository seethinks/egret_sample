var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var skins;
(function (skins) {
    var ActivityDialogSkin = (function (_super) {
        __extends(ActivityDialogSkin, _super);
        function ActivityDialogSkin() {
            _super.call(this);
            this.__s = egret.gui.setProperties;
            this.__s(this, ["height", "width"], [601, 522]);
            this.elementsContent = [this.__3_i(), this._btn_cdkey_i()];
            this.states = [
                new egret.gui.State("normal", [
                ]),
                new egret.gui.State("disabled", [
                ])
            ];
        }
        Object.defineProperty(ActivityDialogSkin.prototype, "skinParts", {
            get: function () {
                return ActivityDialogSkin._skinParts;
            },
            enumerable: true,
            configurable: true
        });
        ActivityDialogSkin.prototype._btn_cdkey_i = function () {
            var t = new egret.gui.Button();
            this._btn_cdkey = t;
            this.__s(t, ["label", "skinName", "x", "y"], ["CDkey兑换", skins.ButtonBlueSkin, 369, 4]);
            return t;
        };
        ActivityDialogSkin.prototype.__3_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["bottom", "left", "right", "scale9Grid", "source", "top"], [1, 0, 0, egret.gui.getScale9Grid("59,21,355,64"), "my_panel_4", 59]);
            return t;
        };
        ActivityDialogSkin._skinParts = ["_btn_cdkey"];
        return ActivityDialogSkin;
    })(egret.gui.Skin);
    skins.ActivityDialogSkin = ActivityDialogSkin;
    ActivityDialogSkin.prototype.__class__ = "skins.ActivityDialogSkin";
})(skins || (skins = {}));
