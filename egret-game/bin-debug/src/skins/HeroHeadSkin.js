var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var skins;
(function (skins) {
    var HeroHeadSkin = (function (_super) {
        __extends(HeroHeadSkin, _super);
        function HeroHeadSkin() {
            _super.call(this);
            this.__s = egret.gui.setProperties;
            this.__s(this, ["height", "width"], [108, 248]);
            this.elementsContent = [this._head_i(), this.__3_i(), this._hp_i(), this._text_name_i(), this._text_hp_i(), this._label_buff_i(), this._img_siwang_i()];
            this.states = [
                new egret.gui.State("normal", [
                ]),
                new egret.gui.State("disabled", [
                ])
            ];
        }
        Object.defineProperty(HeroHeadSkin.prototype, "skinParts", {
            get: function () {
                return HeroHeadSkin._skinParts;
            },
            enumerable: true,
            configurable: true
        });
        HeroHeadSkin.prototype._head_i = function () {
            var t = new egret.gui.UIAsset();
            this._head = t;
            this.__s(t, ["height", "source", "width", "x", "y"], [50, "y_0_2", 50, 37, 40]);
            return t;
        };
        HeroHeadSkin.prototype._hp_i = function () {
            var t = new egret.gui.UIAsset();
            this._hp = t;
            this.__s(t, ["source", "width", "x", "y"], ["hero_head_hp", 152, 77, 71]);
            return t;
        };
        HeroHeadSkin.prototype._img_siwang_i = function () {
            var t = new egret.gui.UIAsset();
            this._img_siwang = t;
            this.__s(t, ["source", "x", "y"], ["siwang", 87, 61]);
            return t;
        };
        HeroHeadSkin.prototype._label_buff_i = function () {
            var t = new egret.gui.Label();
            this._label_buff = t;
            this.__s(t, ["bold", "height", "size", "textColor", "verticalAlign", "width", "x", "y"], [true, 19, 14, 0x48A75C, "middle", 154, 93, 88]);
            return t;
        };
        HeroHeadSkin.prototype._text_hp_i = function () {
            var t = new egret.gui.Label();
            this._text_hp = t;
            this.__s(t, ["height", "size", "textAlign", "textColor", "verticalAlign", "width", "x", "y"], [15, 10, "center", 0xFFFFFF, "middle", 143, 84, 71]);
            return t;
        };
        HeroHeadSkin.prototype._text_name_i = function () {
            var t = new egret.gui.Label();
            this._text_name = t;
            this.__s(t, ["height", "size", "textColor", "verticalAlign", "width", "x", "y"], [22, 17, 15863262, "middle", 143, 97, 47]);
            return t;
        };
        HeroHeadSkin.prototype.__3_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["source", "x", "y"], ["hero_head_bg", 0, 0]);
            return t;
        };
        HeroHeadSkin._skinParts = ["_head", "_hp", "_text_name", "_text_hp", "_label_buff", "_img_siwang"];
        return HeroHeadSkin;
    })(egret.gui.Skin);
    skins.HeroHeadSkin = HeroHeadSkin;
    HeroHeadSkin.prototype.__class__ = "skins.HeroHeadSkin";
})(skins || (skins = {}));
