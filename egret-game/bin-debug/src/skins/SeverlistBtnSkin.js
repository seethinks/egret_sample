var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var skins;
(function (skins) {
    var SeverlistBtnSkin = (function (_super) {
        __extends(SeverlistBtnSkin, _super);
        function SeverlistBtnSkin() {
            _super.call(this);
            this.__s = egret.gui.setProperties;
            this.__s(this, ["height", "width"], [66, 409]);
            this.elementsContent = [this.__4_i(), this.serverListLabel_i()];
            this.states = [
                new egret.gui.State("up", [
                ]),
                new egret.gui.State("down", [
                ]),
                new egret.gui.State("disabled", [
                ])
            ];
        }
        Object.defineProperty(SeverlistBtnSkin.prototype, "skinParts", {
            get: function () {
                return SeverlistBtnSkin._skinParts;
            },
            enumerable: true,
            configurable: true
        });
        SeverlistBtnSkin.prototype.serverListLabel_i = function () {
            var t = new egret.gui.Label();
            this.serverListLabel = t;
            this.__s(t, ["bottom", "left", "right", "size", "text", "textAlign", "textColor", "top", "verticalAlign"], [0, 0, 0, 41, "标签", "center", 9908529, 0, "middle"]);
            return t;
        };
        SeverlistBtnSkin.prototype.__4_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["bottom", "left", "right", "source", "top"], [0, 0, 0, "btn_sever", 0]);
            return t;
        };
        SeverlistBtnSkin._skinParts = ["serverListLabel"];
        return SeverlistBtnSkin;
    })(egret.gui.Skin);
    skins.SeverlistBtnSkin = SeverlistBtnSkin;
    SeverlistBtnSkin.prototype.__class__ = "skins.SeverlistBtnSkin";
})(skins || (skins = {}));
