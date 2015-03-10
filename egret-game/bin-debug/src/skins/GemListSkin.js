var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var skins;
(function (skins) {
    var GemListSkin = (function (_super) {
        __extends(GemListSkin, _super);
        function GemListSkin() {
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
        Object.defineProperty(GemListSkin.prototype, "skinParts", {
            get: function () {
                return GemListSkin._skinParts;
            },
            enumerable: true,
            configurable: true
        });
        GemListSkin.prototype.__4_i = function () {
            var t = new egret.gui.Scroller();
            this.__s(t, ["percentHeight", "horizontalScrollPolicy", "percentWidth"], [100, "off", 100]);
            t.viewport = this.dataGroup_i();
            return t;
        };
        GemListSkin.prototype.dataGroup_i = function () {
            var t = new egret.gui.DataGroup();
            this.dataGroup = t;
            t.layout = this.__3_i();
            return t;
        };
        GemListSkin.prototype.__3_i = function () {
            var t = new egret.gui.TileLayout();
            t.requestedColumnCount = 4;
            return t;
        };
        GemListSkin._skinParts = ["dataGroup"];
        return GemListSkin;
    })(egret.gui.Skin);
    skins.GemListSkin = GemListSkin;
    GemListSkin.prototype.__class__ = "skins.GemListSkin";
})(skins || (skins = {}));
