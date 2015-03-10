var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var skins;
(function (skins) {
    var BelleHeadSkin = (function (_super) {
        __extends(BelleHeadSkin, _super);
        function BelleHeadSkin() {
            _super.call(this);
            this.__s = egret.gui.setProperties;
            this.__s(this, ["height", "width"], [96, 98]);
            this.elementsContent = [this._bgimg_i(), this._head_i()];
            this.states = [
                new egret.gui.State("normal", [
                ]),
                new egret.gui.State("disabled", [
                ])
            ];
        }
        Object.defineProperty(BelleHeadSkin.prototype, "skinParts", {
            get: function () {
                return BelleHeadSkin._skinParts;
            },
            enumerable: true,
            configurable: true
        });
        BelleHeadSkin.prototype._head_i = function () {
            var t = new egret.gui.UIAsset();
            this._head = t;
            this.__s(t, ["x", "y"], [7, 7]);
            return t;
        };
        BelleHeadSkin.prototype._bgimg_i = function () {
            var t = new egret.gui.UIAsset();
            this._bgimg = t;
            this.__s(t, ["source", "x", "y"], ["belle_head_close", 0, 0]);
            return t;
        };
        BelleHeadSkin._skinParts = ["_bgimg", "_head"];
        return BelleHeadSkin;
    })(egret.gui.Skin);
    skins.BelleHeadSkin = BelleHeadSkin;
    BelleHeadSkin.prototype.__class__ = "skins.BelleHeadSkin";
})(skins || (skins = {}));
