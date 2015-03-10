var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var skins;
(function (skins) {
    var HelpItemSkin = (function (_super) {
        __extends(HelpItemSkin, _super);
        function HelpItemSkin() {
            _super.call(this);
            this.__s = egret.gui.setProperties;
            this.__s(this, ["height", "width"], [23, 478]);
            this.elementsContent = [this._labels_i()];
            this.states = [
                new egret.gui.State("normal", [
                ]),
                new egret.gui.State("disabled", [
                ])
            ];
        }
        Object.defineProperty(HelpItemSkin.prototype, "skinParts", {
            get: function () {
                return HelpItemSkin._skinParts;
            },
            enumerable: true,
            configurable: true
        });
        HelpItemSkin.prototype._labels_i = function () {
            var t = new egret.gui.Label();
            this._labels = t;
            this.__s(t, ["bold", "height", "size", "textColor", "width", "x", "y"], [true, 23, 18, 0x00FF00, 478, 0, 0]);
            return t;
        };
        HelpItemSkin._skinParts = ["_labels"];
        return HelpItemSkin;
    })(egret.gui.Skin);
    skins.HelpItemSkin = HelpItemSkin;
    HelpItemSkin.prototype.__class__ = "skins.HelpItemSkin";
})(skins || (skins = {}));
