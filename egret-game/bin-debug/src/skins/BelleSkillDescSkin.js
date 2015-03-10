var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var skins;
(function (skins) {
    var BelleSkillDescSkin = (function (_super) {
        __extends(BelleSkillDescSkin, _super);
        function BelleSkillDescSkin() {
            _super.call(this);
            this.__s = egret.gui.setProperties;
            this.__s(this, ["height", "width"], [98, 409]);
            this.elementsContent = [this.__3_i(), this._btn_close_i(), this._label_desc_i(), this._label_name_i(), this._label_mp_i()];
            this.states = [
                new egret.gui.State("normal", [
                ]),
                new egret.gui.State("disabled", [
                ])
            ];
        }
        Object.defineProperty(BelleSkillDescSkin.prototype, "skinParts", {
            get: function () {
                return BelleSkillDescSkin._skinParts;
            },
            enumerable: true,
            configurable: true
        });
        BelleSkillDescSkin.prototype._btn_close_i = function () {
            var t = new egret.gui.UIAsset();
            this._btn_close = t;
            this.__s(t, ["height", "source", "width", "x", "y"], [31, "skill_btn_close", 34, 375, 0]);
            return t;
        };
        BelleSkillDescSkin.prototype._label_desc_i = function () {
            var t = new egret.gui.Label();
            this._label_desc = t;
            this.__s(t, ["height", "size", "textColor", "width", "x", "y"], [51, 17, 16777215, 393, 9, 41]);
            return t;
        };
        BelleSkillDescSkin.prototype._label_mp_i = function () {
            var t = new egret.gui.Label();
            this._label_mp = t;
            this.__s(t, ["bold", "height", "size", "textAlign", "textColor", "verticalAlign", "width", "x", "y"], [true, 27, 20, "right", 0x03B7F9, "middle", 161, 206, 6]);
            return t;
        };
        BelleSkillDescSkin.prototype._label_name_i = function () {
            var t = new egret.gui.Label();
            this._label_name = t;
            this.__s(t, ["bold", "height", "size", "textColor", "verticalAlign", "width", "x", "y"], [true, 27, 20, 243705, "middle", 191, 9, 6]);
            return t;
        };
        BelleSkillDescSkin.prototype.__3_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["source", "x", "y"], ["skill_list_bg2", 0, 0]);
            return t;
        };
        BelleSkillDescSkin._skinParts = ["_btn_close", "_label_desc", "_label_name", "_label_mp"];
        return BelleSkillDescSkin;
    })(egret.gui.Skin);
    skins.BelleSkillDescSkin = BelleSkillDescSkin;
    BelleSkillDescSkin.prototype.__class__ = "skins.BelleSkillDescSkin";
})(skins || (skins = {}));
