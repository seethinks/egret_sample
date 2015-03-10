var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var skins;
(function (skins) {
    var HelpSkin = (function (_super) {
        __extends(HelpSkin, _super);
        function HelpSkin() {
            _super.call(this);
            this.__s = egret.gui.setProperties;
            this.__s(this, ["height", "width"], [600, 514]);
            this.elementsContent = [this.__3_i(), this.help_label_i()];
            this.states = [
                new egret.gui.State("normal", [
                ]),
                new egret.gui.State("disabled", [
                ])
            ];
        }
        Object.defineProperty(HelpSkin.prototype, "skinParts", {
            get: function () {
                return HelpSkin._skinParts;
            },
            enumerable: true,
            configurable: true
        });
        HelpSkin.prototype.help_label_i = function () {
            var t = new egret.gui.Label();
            this.help_label = t;
            this.__s(t, ["height", "size", "textColor", "width", "x", "y"], [561, 18, 65280, 478, 18, 21]);
            return t;
        };
        HelpSkin.prototype.__3_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["bottom", "left", "right", "scale9Grid", "source", "top"], [0, 0, 0, egret.gui.getScale9Grid("59,21,355,64"), "my_panel_4", 0]);
            return t;
        };
        HelpSkin._skinParts = ["help_label"];
        return HelpSkin;
    })(egret.gui.Skin);
    skins.HelpSkin = HelpSkin;
    HelpSkin.prototype.__class__ = "skins.HelpSkin";
})(skins || (skins = {}));
