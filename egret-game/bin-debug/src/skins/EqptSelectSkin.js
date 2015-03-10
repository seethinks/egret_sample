var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var skins;
(function (skins) {
    var EqptSelectSkin = (function (_super) {
        __extends(EqptSelectSkin, _super);
        function EqptSelectSkin() {
            _super.call(this);
            this.__s = egret.gui.setProperties;
            this.__s(this, ["height", "width"], [607, 522]);
            this.elementsContent = [this.__3_i(), this._btn_i()];
            this.states = [
                new egret.gui.State("normal", [
                ]),
                new egret.gui.State("disabled", [
                ])
            ];
        }
        Object.defineProperty(EqptSelectSkin.prototype, "skinParts", {
            get: function () {
                return EqptSelectSkin._skinParts;
            },
            enumerable: true,
            configurable: true
        });
        EqptSelectSkin.prototype._btn_i = function () {
            var t = new egret.gui.Button();
            this._btn = t;
            this.__s(t, ["bottom", "horizontalCenter", "label", "skinName"], [0, 0.5, "确  定", skins.ButtonYellowSkin]);
            return t;
        };
        EqptSelectSkin.prototype.__3_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["height", "scale9Grid", "source", "width", "x", "y"], [541, egret.gui.getScale9Grid("59,21,355,64"), "my_panel_4", 522, 0, 0]);
            return t;
        };
        EqptSelectSkin._skinParts = ["_btn"];
        return EqptSelectSkin;
    })(egret.gui.Skin);
    skins.EqptSelectSkin = EqptSelectSkin;
    EqptSelectSkin.prototype.__class__ = "skins.EqptSelectSkin";
})(skins || (skins = {}));
