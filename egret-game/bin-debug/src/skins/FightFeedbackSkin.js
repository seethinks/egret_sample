var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var skins;
(function (skins) {
    var FightFeedbackSkin = (function (_super) {
        __extends(FightFeedbackSkin, _super);
        function FightFeedbackSkin() {
            _super.call(this);
            this.__s = egret.gui.setProperties;
            this.__s(this, ["height", "width"], [612, 523]);
            this.elementsContent = [this.__3_i(), this.fk_label_i(), this.fk_button_i()];
            this.states = [
                new egret.gui.State("normal", [
                ]),
                new egret.gui.State("disabled", [
                ])
            ];
        }
        Object.defineProperty(FightFeedbackSkin.prototype, "skinParts", {
            get: function () {
                return FightFeedbackSkin._skinParts;
            },
            enumerable: true,
            configurable: true
        });
        FightFeedbackSkin.prototype.fk_button_i = function () {
            var t = new egret.gui.Button();
            this.fk_button = t;
            this.__s(t, ["bottom", "horizontalCenter", "label", "skinName"], [0, 0, "按钮", skins.ButtonYellowSkin]);
            return t;
        };
        FightFeedbackSkin.prototype.fk_label_i = function () {
            var t = new egret.gui.Label();
            this.fk_label = t;
            this.__s(t, ["bold", "height", "size", "text", "textColor", "width", "x", "y"], [true, 516, 18, "我是一个粉刷匠", 0x32FF00, 487, 19, 15]);
            return t;
        };
        FightFeedbackSkin.prototype.__3_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["bottom", "horizontalCenter", "left", "right", "scale9Grid", "source", "top"], [62, 0, 0, 0, egret.gui.getScale9Grid("59,21,355,64"), "my_panel_4", 0]);
            return t;
        };
        FightFeedbackSkin._skinParts = ["fk_label", "fk_button"];
        return FightFeedbackSkin;
    })(egret.gui.Skin);
    skins.FightFeedbackSkin = FightFeedbackSkin;
    FightFeedbackSkin.prototype.__class__ = "skins.FightFeedbackSkin";
})(skins || (skins = {}));
