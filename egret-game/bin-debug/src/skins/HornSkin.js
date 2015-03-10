var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var skins;
(function (skins) {
    var HornSkin = (function (_super) {
        __extends(HornSkin, _super);
        function HornSkin() {
            _super.call(this);
            this.__s = egret.gui.setProperties;
            this.__s(this, ["height", "width"], [54, 640]);
            this.elementsContent = [this._img_i(), this._laba_i()];
            this.states = [
                new egret.gui.State("normal", [
                ]),
                new egret.gui.State("disabled", [
                ])
            ];
        }
        Object.defineProperty(HornSkin.prototype, "skinParts", {
            get: function () {
                return HornSkin._skinParts;
            },
            enumerable: true,
            configurable: true
        });
        HornSkin.prototype._laba_i = function () {
            var t = new egret.gui.UIAsset();
            this._laba = t;
            this.__s(t, ["source", "x", "y"], ["horn_laba", 596, 2]);
            return t;
        };
        HornSkin.prototype._img_i = function () {
            var t = new egret.gui.UIAsset();
            this._img = t;
            this.__s(t, ["height", "source", "x", "y"], [54, "horn_bgimg", 0, 0]);
            return t;
        };
        HornSkin._skinParts = ["_img", "_laba"];
        return HornSkin;
    })(egret.gui.Skin);
    skins.HornSkin = HornSkin;
    HornSkin.prototype.__class__ = "skins.HornSkin";
})(skins || (skins = {}));
