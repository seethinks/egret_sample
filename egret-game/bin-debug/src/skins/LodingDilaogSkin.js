var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var skins;
(function (skins) {
    var LodingDilaogSkin = (function (_super) {
        __extends(LodingDilaogSkin, _super);
        function LodingDilaogSkin() {
            _super.call(this);
            this.__s = egret.gui.setProperties;
            this.__s(this, ["height", "width"], [101, 592]);
            this.elementsContent = [this.__3_i(), this.loding_title_i(), this.loding_label_i(), this.__4_i()];
            this.states = [
                new egret.gui.State("normal", [
                ]),
                new egret.gui.State("disabled", [
                ])
            ];
        }
        Object.defineProperty(LodingDilaogSkin.prototype, "skinParts", {
            get: function () {
                return LodingDilaogSkin._skinParts;
            },
            enumerable: true,
            configurable: true
        });
        LodingDilaogSkin.prototype.__4_i = function () {
            var t = new egret.gui.Label();
            this.__s(t, ["horizontalCenter", "size", "text", "textAlign", "textColor", "verticalAlign", "width", "y"], [0, 19, "请耐心等待正在加载，进入游戏后将赠送价值“888元”礼包", "center", 16777215, "middle", 582, 69]);
            return t;
        };
        LodingDilaogSkin.prototype.loding_label_i = function () {
            var t = new egret.gui.Label();
            this.loding_label = t;
            this.__s(t, ["height", "horizontalCenter", "size", "text", "textAlign", "textColor", "verticalAlign", "width", "y"], [28, 0.5, 17, "0%", "center", 16777215, "middle", 561, 42]);
            return t;
        };
        LodingDilaogSkin.prototype.loding_title_i = function () {
            var t = new egret.gui.UIAsset();
            this.loding_title = t;
            this.__s(t, ["height", "source", "width", "x", "y"], [16, "loding_title", 554, 18, 49]);
            return t;
        };
        LodingDilaogSkin.prototype.__3_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["autoScale", "source", "x", "y"], [false, "loding_bg", 0, 0]);
            return t;
        };
        LodingDilaogSkin._skinParts = ["loding_title", "loding_label"];
        return LodingDilaogSkin;
    })(egret.gui.Skin);
    skins.LodingDilaogSkin = LodingDilaogSkin;
    LodingDilaogSkin.prototype.__class__ = "skins.LodingDilaogSkin";
})(skins || (skins = {}));
