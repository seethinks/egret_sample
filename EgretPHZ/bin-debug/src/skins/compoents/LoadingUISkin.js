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
        var LoadingUISkin = (function (_super) {
            __extends(LoadingUISkin, _super);
            function LoadingUISkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["height", "width"], [960, 640]);
                this.elementsContent = [this.__3_i(), this.__4_i(), this.progressBar_i()];
                this.states = [
                    new egret.gui.State("normal", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            Object.defineProperty(LoadingUISkin.prototype, "skinParts", {
                get: function () {
                    return LoadingUISkin._skinParts;
                },
                enumerable: true,
                configurable: true
            });
            LoadingUISkin.prototype.__4_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["horizontalCenter", "source", "y"], [0, "loading_logo2", 420]);
                return t;
            };
            LoadingUISkin.prototype.progressBar_i = function () {
                var t = new egret.gui.ProgressBar();
                this.progressBar = t;
                this.__s(t, ["horizontalCenter", "skinName", "value", "width", "y"], [0, skins.compoents.ProgrsessBarSkin, 20, 370, 674]);
                return t;
            };
            LoadingUISkin.prototype.__3_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["horizontalCenter", "source", "y"], [0, "loading_logo", 80]);
                return t;
            };
            LoadingUISkin._skinParts = ["progressBar"];
            return LoadingUISkin;
        })(egret.gui.Skin);
        compoents.LoadingUISkin = LoadingUISkin;
        LoadingUISkin.prototype.__class__ = "skins.compoents.LoadingUISkin";
    })(compoents = skins.compoents || (skins.compoents = {}));
})(skins || (skins = {}));
