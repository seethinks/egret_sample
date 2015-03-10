var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var skins;
(function (skins) {
    var ShopListSkin = (function (_super) {
        __extends(ShopListSkin, _super);
        function ShopListSkin() {
            _super.call(this);
            this.__s = egret.gui.setProperties;
            this.elementsContent = [this.__4_i()];
            this.states = [
                new egret.gui.State("normal", [
                ]),
                new egret.gui.State("disabled", [
                ])
            ];
        }
        Object.defineProperty(ShopListSkin.prototype, "skinParts", {
            get: function () {
                return ShopListSkin._skinParts;
            },
            enumerable: true,
            configurable: true
        });
        ShopListSkin.prototype.__4_i = function () {
            var t = new egret.gui.Scroller();
            this.__s(t, ["percentHeight", "horizontalScrollPolicy", "percentWidth"], [100, "off", 100]);
            t.viewport = this.dataGroup_i();
            return t;
        };
        ShopListSkin.prototype.dataGroup_i = function () {
            var t = new egret.gui.DataGroup();
            this.dataGroup = t;
            t.layout = this.__3_i();
            return t;
        };
        ShopListSkin.prototype.__3_i = function () {
            var t = new egret.gui.TileLayout();
            t.requestedColumnCount = 3;
            return t;
        };
        ShopListSkin._skinParts = ["dataGroup"];
        return ShopListSkin;
    })(egret.gui.Skin);
    skins.ShopListSkin = ShopListSkin;
    ShopListSkin.prototype.__class__ = "skins.ShopListSkin";
})(skins || (skins = {}));
