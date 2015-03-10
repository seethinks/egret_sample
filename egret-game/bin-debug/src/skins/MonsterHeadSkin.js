var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var skins;
(function (skins) {
    var MonsterHeadSkin = (function (_super) {
        __extends(MonsterHeadSkin, _super);
        function MonsterHeadSkin() {
            _super.call(this);
            this.__s = egret.gui.setProperties;
            this.__s(this, ["height", "width"], [96, 281]);
            this.elementsContent = [this._head_i(), this.__3_i(), this._hp_i(), this._text_name_i(), this._text_hp_i(), this._label_buff_i(), this._img_siwang_i()];
            this.states = [
                new egret.gui.State("normal", [
                ]),
                new egret.gui.State("disabled", [
                ])
            ];
        }
        Object.defineProperty(MonsterHeadSkin.prototype, "skinParts", {
            get: function () {
                return MonsterHeadSkin._skinParts;
            },
            enumerable: true,
            configurable: true
        });
        MonsterHeadSkin.prototype._head_i = function () {
            var t = new egret.gui.UIAsset();
            this._head = t;
            this.__s(t, ["height", "source", "width", "x", "y"], [58, "m_1", 58, 201, 19]);
            return t;
        };
        MonsterHeadSkin.prototype._hp_i = function () {
            var t = new egret.gui.UIAsset();
            this._hp = t;
            this.__s(t, ["source", "width", "x", "y"], ["fight_boss_hp", 182, 28, 55]);
            return t;
        };
        MonsterHeadSkin.prototype._img_siwang_i = function () {
            var t = new egret.gui.UIAsset();
            this._img_siwang = t;
            this.__s(t, ["source", "x", "y"], ["siwang", 63, 47]);
            return t;
        };
        MonsterHeadSkin.prototype._label_buff_i = function () {
            var t = new egret.gui.Label();
            this._label_buff = t;
            this.__s(t, ["bold", "height", "size", "textAlign", "textColor", "verticalAlign", "width", "x", "y"], [true, 19, 14, "right", 0x48A75C, "middle", 173, 19, 76]);
            return t;
        };
        MonsterHeadSkin.prototype._text_hp_i = function () {
            var t = new egret.gui.Label();
            this._text_hp = t;
            this.__s(t, ["height", "size", "textAlign", "textColor", "verticalAlign", "width", "x", "y"], [19, 16, "center", 0xFFFFFF, "middle", 174, 25, 54]);
            return t;
        };
        MonsterHeadSkin.prototype._text_name_i = function () {
            var t = new egret.gui.Label();
            this._text_name = t;
            this.__s(t, ["height", "size", "textAlign", "textColor", "verticalAlign", "width", "x", "y"], [26, 19, "right", 16045066, "middle", 174, 12, 25]);
            return t;
        };
        MonsterHeadSkin.prototype.__3_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["source", "x", "y"], ["fight_boss_head", 0, 0]);
            return t;
        };
        MonsterHeadSkin._skinParts = ["_head", "_hp", "_text_name", "_text_hp", "_label_buff", "_img_siwang"];
        return MonsterHeadSkin;
    })(egret.gui.Skin);
    skins.MonsterHeadSkin = MonsterHeadSkin;
    MonsterHeadSkin.prototype.__class__ = "skins.MonsterHeadSkin";
})(skins || (skins = {}));
