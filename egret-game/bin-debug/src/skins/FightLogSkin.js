var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var skins;
(function (skins) {
    var FightLogSkin = (function (_super) {
        __extends(FightLogSkin, _super);
        function FightLogSkin() {
            _super.call(this);
            this.__s = egret.gui.setProperties;
            this.__s(this, ["height", "width"], [50, 578]);
            this.elementsContent = [this.log_label_i()];
            this.states = [
                new egret.gui.State("normal", [
                ]),
                new egret.gui.State("disabled", [
                ])
            ];
        }
        Object.defineProperty(FightLogSkin.prototype, "skinParts", {
            get: function () {
                return FightLogSkin._skinParts;
            },
            enumerable: true,
            configurable: true
        });
        FightLogSkin.prototype.log_label_i = function () {
            var t = new egret.gui.Label();
            this.log_label = t;
            this.__s(t, ["bold", "fontFamily", "height", "size", "textColor", "verticalAlign", "verticalCenter", "width", "x"], [true, "Arial", 40, 20, 983811, "middle", 0, 578, 0]);
            return t;
        };
        FightLogSkin._skinParts = ["log_label"];
        return FightLogSkin;
    })(egret.gui.Skin);
    skins.FightLogSkin = FightLogSkin;
    FightLogSkin.prototype.__class__ = "skins.FightLogSkin";
})(skins || (skins = {}));
