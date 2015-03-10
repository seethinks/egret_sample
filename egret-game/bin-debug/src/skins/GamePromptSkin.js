var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var skins;
(function (skins) {
    var GamePromptSkin = (function (_super) {
        __extends(GamePromptSkin, _super);
        function GamePromptSkin() {
            _super.call(this);
            this.__s = egret.gui.setProperties;
            this.__s(this, ["height", "width"], [600, 522]);
            this.elementsContent = [this.__3_i(), this.help_label_i(), this.help_label0_i(), this._btn_i()];
            this.states = [
                new egret.gui.State("normal", [
                ]),
                new egret.gui.State("disabled", [
                ])
            ];
        }
        Object.defineProperty(GamePromptSkin.prototype, "skinParts", {
            get: function () {
                return GamePromptSkin._skinParts;
            },
            enumerable: true,
            configurable: true
        });
        GamePromptSkin.prototype._btn_i = function () {
            var t = new egret.gui.Button();
            this._btn = t;
            this.__s(t, ["bottom", "horizontalCenter", "label", "skinName"], [0, 0, "确  定", skins.ButtonYellowSkin]);
            return t;
        };
        GamePromptSkin.prototype.help_label0_i = function () {
            var t = new egret.gui.Label();
            this.help_label0 = t;
            this.__s(t, ["height", "horizontalCenter", "size", "text", "textAlign", "textColor", "verticalAlign", "width", "y"], [52, 0, 47, "请! 注! 意!", "center", 16711680, "middle", 478, 16]);
            return t;
        };
        GamePromptSkin.prototype.help_label_i = function () {
            var t = new egret.gui.Label();
            this.help_label = t;
            this.__s(t, ["height", "size", "textColor", "width", "x", "y"], [404, 18, 65441, 478, 25, 92]);
            return t;
        };
        GamePromptSkin.prototype.__3_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["bottom", "left", "right", "scale9Grid", "source", "top"], [67, 0, 0, egret.gui.getScale9Grid("59,21,355,64"), "my_panel_4", 0]);
            return t;
        };
        GamePromptSkin._skinParts = ["help_label", "help_label0", "_btn"];
        return GamePromptSkin;
    })(egret.gui.Skin);
    skins.GamePromptSkin = GamePromptSkin;
    GamePromptSkin.prototype.__class__ = "skins.GamePromptSkin";
})(skins || (skins = {}));
