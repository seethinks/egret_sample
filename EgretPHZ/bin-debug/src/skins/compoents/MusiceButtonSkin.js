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
        var MusiceButtonSkin = (function (_super) {
            __extends(MusiceButtonSkin, _super);
            function MusiceButtonSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.elementsContent = [this.__7_i()];
                this.states = [
                    new egret.gui.State("up", []),
                    new egret.gui.State("down", [
                        new egret.gui.SetProperty("__7", "source", "music_down")
                    ]),
                    new egret.gui.State("disabled", []),
                    new egret.gui.State("upAndSelected", [
                        new egret.gui.SetProperty("__7", "source", "music_non_normal")
                    ]),
                    new egret.gui.State("downAndSelected", [
                        new egret.gui.SetProperty("__7", "source", "music_non_down")
                    ]),
                    new egret.gui.State("disabledAndSelected", [])
                ];
            }
            MusiceButtonSkin.prototype.__7_i = function () {
                var t = new egret.gui.UIAsset();
                this.__7 = t;
                t.source = "music_normal";
                return t;
            };
            return MusiceButtonSkin;
        })(egret.gui.Skin);
        compoents.MusiceButtonSkin = MusiceButtonSkin;
        MusiceButtonSkin.prototype.__class__ = "skins.compoents.MusiceButtonSkin";
    })(compoents = skins.compoents || (skins.compoents = {}));
})(skins || (skins = {}));
