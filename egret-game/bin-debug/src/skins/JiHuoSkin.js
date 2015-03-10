var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var skins;
(function (skins) {
    var JiHuoSkin = (function (_super) {
        __extends(JiHuoSkin, _super);
        function JiHuoSkin() {
            _super.call(this);
            this.__s = egret.gui.setProperties;
            this.elementsContent = [this.__3_i(), this._btn_jihuo_i()];
            this.states = [
                new egret.gui.State("normal", [
                ]),
                new egret.gui.State("disabled", [
                ])
            ];
        }
        Object.defineProperty(JiHuoSkin.prototype, "skinParts", {
            get: function () {
                return JiHuoSkin._skinParts;
            },
            enumerable: true,
            configurable: true
        });
        JiHuoSkin.prototype._btn_jihuo_i = function () {
            var t = new egret.gui.Button();
            this._btn_jihuo = t;
            this.__s(t, ["horizontalCenter", "label", "skinName", "y"], [-3.5, "激活账号", skins.ButtonBlueSkin, 79]);
            return t;
        };
        JiHuoSkin.prototype.__3_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["height", "scale9Grid", "source", "width", "x", "y"], [76, egret.gui.getScale9Grid("59,21,355,64"), "my_panel_4", 400, 0, 0]);
            return t;
        };
        JiHuoSkin._skinParts = ["_btn_jihuo"];
        return JiHuoSkin;
    })(egret.gui.Skin);
    skins.JiHuoSkin = JiHuoSkin;
    JiHuoSkin.prototype.__class__ = "skins.JiHuoSkin";
})(skins || (skins = {}));
