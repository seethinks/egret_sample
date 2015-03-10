var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var skins;
(function (skins) {
    var TileListSkin = (function (_super) {
        __extends(TileListSkin, _super);
        function TileListSkin() {
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
        Object.defineProperty(TileListSkin.prototype, "skinParts", {
            get: function () {
                return TileListSkin._skinParts;
            },
            enumerable: true,
            configurable: true
        });
        TileListSkin.prototype.__4_i = function () {
            var t = new egret.gui.Scroller();
            this.__s(t, ["percentHeight", "horizontalScrollPolicy", "percentWidth"], [100, "off", 100]);
            t.viewport = this.dataGroup_i();
            return t;
        };
        TileListSkin.prototype.dataGroup_i = function () {
            var t = new egret.gui.DataGroup();
            this.dataGroup = t;
            t.layout = this.__3_i();
            return t;
        };
        TileListSkin.prototype.__3_i = function () {
            var t = new egret.gui.TileLayout();
            t.requestedColumnCount = 5;
            return t;
        };
        TileListSkin._skinParts = ["dataGroup"];
        return TileListSkin;
    })(egret.gui.Skin);
    skins.TileListSkin = TileListSkin;
    TileListSkin.prototype.__class__ = "skins.TileListSkin";
})(skins || (skins = {}));
