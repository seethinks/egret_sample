var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var skins;
(function (skins) {
    var compoents;
    (function (compoents) {
        var ButtonSkin = (function (_super) {
            __extends(ButtonSkin, _super);
            function ButtonSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.elementsContent = [this.labelDisplay_i()];
                this.__4_i();
                this.__5_i();
                this.states = [
                    new egret.gui.State("up", [
                        new egret.gui.AddItems("__5", "", "before", "labelDisplay")
                    ]),
                    new egret.gui.State("down", [
                        new egret.gui.AddItems("__4", "", "before", "labelDisplay")
                    ]),
                    new egret.gui.State("disabled", [
                        new egret.gui.AddItems("__5", "", "before", "labelDisplay")
                    ])
                ];
            }
            Object.defineProperty(ButtonSkin.prototype, "skinParts", {
                get: function () {
                    return ButtonSkin._skinParts;
                },
                enumerable: true,
                configurable: true
            });
            ButtonSkin.prototype.__5_i = function () {
                var t = new egret.gui.UIAsset();
                this.__5 = t;
                this.__s(t, ["scale9Grid", "source", "width", "x", "y"], [egret.gui.getScale9Grid("37,37,20,15"), "custom_normal", 166, 0, 0]);
                return t;
            };
            ButtonSkin.prototype.labelDisplay_i = function () {
                var t = new egret.gui.Label();
                this.labelDisplay = t;
                this.__s(t, ["fontFamily", "horizontalCenter", "text", "textColor", "verticalCenter"], ["宋体", 0, "按钮", 0x477606, -1]);
                return t;
            };
            ButtonSkin.prototype.__4_i = function () {
                var t = new egret.gui.UIAsset();
                this.__4 = t;
                this.__s(t, ["scale9Grid", "source", "width", "x", "y"], [egret.gui.getScale9Grid("37,37,20,15"), "custom_down", 166, 0, 0]);
                return t;
            };
            ButtonSkin._skinParts = ["labelDisplay"];
            return ButtonSkin;
        })(egret.gui.Skin);
        compoents.ButtonSkin = ButtonSkin;
        ButtonSkin.prototype.__class__ = "skins.compoents.ButtonSkin";
    })(compoents = skins.compoents || (skins.compoents = {}));
})(skins || (skins = {}));
