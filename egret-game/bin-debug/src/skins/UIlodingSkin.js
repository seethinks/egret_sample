var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var skins;
(function (skins) {
    var UIlodingSkin = (function (_super) {
        __extends(UIlodingSkin, _super);
        function UIlodingSkin() {
            _super.call(this);
            this.__s = egret.gui.setProperties;
            this.__s(this, ["height", "width"], [98, 511]);
            this.elementsContent = [this.__3_i(), this.__4_i()];
            this.states = [
                new egret.gui.State("normal", [
                ]),
                new egret.gui.State("disabled", [
                ])
            ];
        }
        UIlodingSkin.prototype.__3_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["source", "x", "y"], ["new_loding_bg", 0, 0]);
            return t;
        };
        UIlodingSkin.prototype.__4_i = function () {
            var t = new egret.gui.Label();
            this.__s(t, ["bold", "height", "horizontalCenter", "size", "text", "textAlign", "textColor", "verticalAlign", "width", "y"], [true, 29, 0, 24, "正在请求网络...", "center", 16777215, "middle", 511, 3]);
            return t;
        };
        return UIlodingSkin;
    })(egret.gui.Skin);
    skins.UIlodingSkin = UIlodingSkin;
    UIlodingSkin.prototype.__class__ = "skins.UIlodingSkin";
})(skins || (skins = {}));
