var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var skins;
(function (skins) {
    var BagTabSkin = (function (_super) {
        __extends(BagTabSkin, _super);
        function BagTabSkin() {
            _super.call(this);
            this.__s = egret.gui.setProperties;
            this.__s(this, ["height", "width"], [52, 139]);
            this.elementsContent = [this._img_i(), this._wenzi_i()];
            this.states = [
                new egret.gui.State("up", [
                    new egret.gui.SetProperty("_img", "x", 0),
                    new egret.gui.SetProperty("_img", "y", 8),
                    new egret.gui.SetProperty("", "width", 139),
                    new egret.gui.SetProperty("", "height", 52)
                ]),
                new egret.gui.State("over", [
                    new egret.gui.SetProperty("_img", "x", 0),
                    new egret.gui.SetProperty("_img", "y", 8),
                    new egret.gui.SetProperty("", "width", 139),
                    new egret.gui.SetProperty("", "height", 52)
                ]),
                new egret.gui.State("down", [
                    new egret.gui.SetProperty("_img", "y", 8),
                    new egret.gui.SetProperty("_img", "x", 0),
                    new egret.gui.SetProperty("", "width", 139),
                    new egret.gui.SetProperty("", "height", 52)
                ]),
                new egret.gui.State("disabled", [
                    new egret.gui.SetProperty("_img", "x", 0),
                    new egret.gui.SetProperty("_img", "y", 8),
                    new egret.gui.SetProperty("", "width", 139),
                    new egret.gui.SetProperty("", "height", 52)
                ]),
                new egret.gui.State("upAndSelected", [
                    new egret.gui.SetProperty("_img", "source", "btn_chek1"),
                    new egret.gui.SetProperty("_img", "x", 0),
                    new egret.gui.SetProperty("_img", "y", 0),
                    new egret.gui.SetProperty("", "width", 139),
                    new egret.gui.SetProperty("", "height", 52)
                ]),
                new egret.gui.State("overAndSelected", [
                    new egret.gui.SetProperty("_img", "source", "btn_chek1"),
                    new egret.gui.SetProperty("_img", "x", 0),
                    new egret.gui.SetProperty("_img", "y", 0),
                    new egret.gui.SetProperty("", "width", 139),
                    new egret.gui.SetProperty("", "height", 52)
                ]),
                new egret.gui.State("downAndSelected", [
                    new egret.gui.SetProperty("_img", "source", "btn_chek1"),
                    new egret.gui.SetProperty("_img", "x", 0),
                    new egret.gui.SetProperty("_img", "y", 0),
                    new egret.gui.SetProperty("", "width", 139),
                    new egret.gui.SetProperty("", "height", 52)
                ]),
                new egret.gui.State("disabledAndSelected", [
                    new egret.gui.SetProperty("_img", "source", "btn_chek1"),
                    new egret.gui.SetProperty("_img", "x", 0),
                    new egret.gui.SetProperty("_img", "y", 0),
                    new egret.gui.SetProperty("", "width", 139),
                    new egret.gui.SetProperty("", "height", 52)
                ])
            ];
        }
        Object.defineProperty(BagTabSkin.prototype, "skinParts", {
            get: function () {
                return BagTabSkin._skinParts;
            },
            enumerable: true,
            configurable: true
        });
        BagTabSkin.prototype._wenzi_i = function () {
            var t = new egret.gui.UIAsset();
            this._wenzi = t;
            this.__s(t, ["bottom", "horizontalCenter", "source"], [2, 0, "wenzi_wuping"]);
            return t;
        };
        BagTabSkin.prototype._img_i = function () {
            var t = new egret.gui.UIAsset();
            this._img = t;
            this.__s(t, ["bottom", "horizontalCenter", "source"], [-1, 0, "btn_chek2"]);
            return t;
        };
        BagTabSkin._skinParts = ["_img", "_wenzi"];
        return BagTabSkin;
    })(egret.gui.Skin);
    skins.BagTabSkin = BagTabSkin;
    BagTabSkin.prototype.__class__ = "skins.BagTabSkin";
})(skins || (skins = {}));
