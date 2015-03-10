var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var skins;
(function (skins) {
    var ButtonGreenSkin = (function (_super) {
        __extends(ButtonGreenSkin, _super);
        function ButtonGreenSkin() {
            _super.call(this);
            this.__s = egret.gui.setProperties;
            this.__s(this, ["height", "width"], [53, 147]);
            this.elementsContent = [this.__5_i(), this.labelDisplay_i()];
            this.states = [
                new egret.gui.State("up", [
                    new egret.gui.SetProperty("__5", "y", 0),
                    new egret.gui.SetProperty("__5", "x", 0),
                    new egret.gui.SetProperty("__5", "right", 0),
                    new egret.gui.SetProperty("__5", "bottom", 0)
                ]),
                new egret.gui.State("over", [
                    new egret.gui.SetProperty("__5", "y", 0),
                    new egret.gui.SetProperty("__5", "x", 0),
                    new egret.gui.SetProperty("__5", "right", 0),
                    new egret.gui.SetProperty("__5", "bottom", 0)
                ]),
                new egret.gui.State("down", [
                    new egret.gui.SetProperty("__5", "width", 134),
                    new egret.gui.SetProperty("__5", "height", 49),
                    new egret.gui.SetProperty("__5", "left", 7),
                    new egret.gui.SetProperty("__5", "horizontalCenter", 0.5),
                    new egret.gui.SetProperty("__5", "top", 2)
                ]),
                new egret.gui.State("disabled", [
                    new egret.gui.SetProperty("__5", "y", 0),
                    new egret.gui.SetProperty("__5", "x", 0),
                    new egret.gui.SetProperty("__5", "right", 0),
                    new egret.gui.SetProperty("__5", "bottom", 0)
                ])
            ];
        }
        Object.defineProperty(ButtonGreenSkin.prototype, "skinParts", {
            get: function () {
                return ButtonGreenSkin._skinParts;
            },
            enumerable: true,
            configurable: true
        });
        ButtonGreenSkin.prototype.labelDisplay_i = function () {
            var t = new egret.gui.Label();
            this.labelDisplay = t;
            this.__s(t, ["bottom", "left", "right", "size", "textAlign", "textColor", "top", "verticalAlign"], [0, 0, 0, 20, "center", 16777215, 0, "middle"]);
            return t;
        };
        ButtonGreenSkin.prototype.__5_i = function () {
            var t = new egret.gui.UIAsset();
            this.__5 = t;
            this.__s(t, ["left", "scale9Grid", "source", "top"], [0, egret.gui.getScale9Grid("28,14,90,19"), "current_btn_green", 0]);
            return t;
        };
        ButtonGreenSkin._skinParts = ["labelDisplay"];
        return ButtonGreenSkin;
    })(egret.gui.Skin);
    skins.ButtonGreenSkin = ButtonGreenSkin;
    ButtonGreenSkin.prototype.__class__ = "skins.ButtonGreenSkin";
})(skins || (skins = {}));
