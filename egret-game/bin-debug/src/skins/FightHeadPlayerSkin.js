var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var skins;
(function (skins) {
    var FightHeadPlayerSkin = (function (_super) {
        __extends(FightHeadPlayerSkin, _super);
        function FightHeadPlayerSkin() {
            _super.call(this);
            this.__s = egret.gui.setProperties;
            this.__s(this, ["height", "width"], [97, 281]);
            this.elementsContent = [this._head_i(), this.__3_i(), this._hp_i(), this._mp_i(), this._text_name_i(), this._text_hp_i(), this._label_buff_i(), this._img_siwang_i()];
            this.states = [
                new egret.gui.State("normal", [
                ]),
                new egret.gui.State("disabled", [
                ])
            ];
        }
        Object.defineProperty(FightHeadPlayerSkin.prototype, "skinParts", {
            get: function () {
                return FightHeadPlayerSkin._skinParts;
            },
            enumerable: true,
            configurable: true
        });
        FightHeadPlayerSkin.prototype._head_i = function () {
            var t = new egret.gui.UIAsset();
            this._head = t;
            this.__s(t, ["height", "source", "width", "x", "y"], [54, "y_0_1", 54, 25, 22]);
            return t;
        };
        FightHeadPlayerSkin.prototype._hp_i = function () {
            var t = new egret.gui.UIAsset();
            this._hp = t;
            this.__s(t, ["source", "width", "x", "y"], ["player_hp", 181, 84, 43]);
            return t;
        };
        FightHeadPlayerSkin.prototype._img_siwang_i = function () {
            var t = new egret.gui.UIAsset();
            this._img_siwang = t;
            this.__s(t, ["source", "x", "y"], ["siwang", 95, 35]);
            return t;
        };
        FightHeadPlayerSkin.prototype._label_buff_i = function () {
            var t = new egret.gui.Label();
            this._label_buff = t;
            this.__s(t, ["bold", "height", "size", "textColor", "verticalAlign", "width", "x", "y"], [true, 19, 14, 4761436, "middle", 173, 89, 76]);
            return t;
        };
        FightHeadPlayerSkin.prototype._mp_i = function () {
            var t = new egret.gui.UIAsset();
            this._mp = t;
            this.__s(t, ["source", "width", "x", "y"], ["player_mp", 162, 75, 61]);
            return t;
        };
        FightHeadPlayerSkin.prototype._text_hp_i = function () {
            var t = new egret.gui.Label();
            this._text_hp = t;
            this.__s(t, ["bold", "height", "size", "textAlign", "textColor", "verticalAlign", "width", "x", "y"], [true, 19, 16, "center", 0xFFFFFF, "middle", 174, 86, 41]);
            return t;
        };
        FightHeadPlayerSkin.prototype._text_name_i = function () {
            var t = new egret.gui.Label();
            this._text_name = t;
            this.__s(t, ["height", "size", "textColor", "verticalAlign", "width", "x", "y"], [22, 17, 16320107, "middle", 174, 89, 16]);
            return t;
        };
        FightHeadPlayerSkin.prototype.__3_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["source", "x", "y"], ["fight_head_bg", 0, 0]);
            return t;
        };
        FightHeadPlayerSkin._skinParts = ["_head", "_hp", "_mp", "_text_name", "_text_hp", "_label_buff", "_img_siwang"];
        return FightHeadPlayerSkin;
    })(egret.gui.Skin);
    skins.FightHeadPlayerSkin = FightHeadPlayerSkin;
    FightHeadPlayerSkin.prototype.__class__ = "skins.FightHeadPlayerSkin";
})(skins || (skins = {}));
