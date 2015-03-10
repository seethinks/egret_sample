var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var skins;
(function (skins) {
    var GameCheckBoxSkin = (function (_super) {
        __extends(GameCheckBoxSkin, _super);
        function GameCheckBoxSkin() {
            _super.call(this);
            this.__s = egret.gui.setProperties;
            this.__s(this, ["height", "width"], [41, 41]);
            this.elementsContent = [this._check_bg_i(), this._check_gou_i()];
            this.states = [
                new egret.gui.State("normal", [
                ]),
                new egret.gui.State("disabled", [
                ])
            ];
        }
        Object.defineProperty(GameCheckBoxSkin.prototype, "skinParts", {
            get: function () {
                return GameCheckBoxSkin._skinParts;
            },
            enumerable: true,
            configurable: true
        });
        GameCheckBoxSkin.prototype._check_gou_i = function () {
            var t = new egret.gui.UIAsset();
            this._check_gou = t;
            this.__s(t, ["source", "x", "y"], ["game_set_chek", 0, 0]);
            return t;
        };
        GameCheckBoxSkin.prototype._check_bg_i = function () {
            var t = new egret.gui.UIAsset();
            this._check_bg = t;
            this.__s(t, ["source", "x", "y"], ["game_set_bg", 0, 0]);
            return t;
        };
        GameCheckBoxSkin._skinParts = ["_check_bg", "_check_gou"];
        return GameCheckBoxSkin;
    })(egret.gui.Skin);
    skins.GameCheckBoxSkin = GameCheckBoxSkin;
    GameCheckBoxSkin.prototype.__class__ = "skins.GameCheckBoxSkin";
})(skins || (skins = {}));
