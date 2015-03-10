var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var skins;
(function (skins) {
    var SkillCheckSkin = (function (_super) {
        __extends(SkillCheckSkin, _super);
        function SkillCheckSkin() {
            _super.call(this);
            this.__s = egret.gui.setProperties;
            this.__s(this, ["height", "width"], [65, 65]);
            this.elementsContent = [this._dizi_i(), this._duihao_i()];
            this._noopen_i();
            this.states = [
                new egret.gui.State("normal", [
                    new egret.gui.AddItems("_noopen", "", "last", "")
                ]),
                new egret.gui.State("disabled", [
                ])
            ];
        }
        Object.defineProperty(SkillCheckSkin.prototype, "skinParts", {
            get: function () {
                return SkillCheckSkin._skinParts;
            },
            enumerable: true,
            configurable: true
        });
        SkillCheckSkin.prototype._duihao_i = function () {
            var t = new egret.gui.UIAsset();
            this._duihao = t;
            this.__s(t, ["source", "x", "y"], ["skill_check", 0, 0]);
            return t;
        };
        SkillCheckSkin.prototype._noopen_i = function () {
            var t = new egret.gui.UIAsset();
            this._noopen = t;
            this.__s(t, ["source", "x", "y"], ["skill_no_check", 9, 10]);
            return t;
        };
        SkillCheckSkin.prototype._dizi_i = function () {
            var t = new egret.gui.UIAsset();
            this._dizi = t;
            this.__s(t, ["source", "x", "y"], ["skill_check_bg", 0, 0]);
            return t;
        };
        SkillCheckSkin._skinParts = ["_dizi", "_duihao", "_noopen"];
        return SkillCheckSkin;
    })(egret.gui.Skin);
    skins.SkillCheckSkin = SkillCheckSkin;
    SkillCheckSkin.prototype.__class__ = "skins.SkillCheckSkin";
})(skins || (skins = {}));
