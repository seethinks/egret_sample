var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var skins;
(function (skins) {
    var PrisonListSkin = (function (_super) {
        __extends(PrisonListSkin, _super);
        function PrisonListSkin() {
            _super.call(this);
            this.__s = egret.gui.setProperties;
            this.__s(this, ["height", "width"], [42, 525]);
            this.elementsContent = [this.__3_i(), this._label_level_i(), this._label_name_i(), this._label_fight_i(), this._label_pk_i()];
            this.states = [
                new egret.gui.State("normal", [
                ]),
                new egret.gui.State("disabled", [
                ])
            ];
        }
        Object.defineProperty(PrisonListSkin.prototype, "skinParts", {
            get: function () {
                return PrisonListSkin._skinParts;
            },
            enumerable: true,
            configurable: true
        });
        PrisonListSkin.prototype._label_fight_i = function () {
            var t = new egret.gui.Label();
            this._label_fight = t;
            this.__s(t, ["height", "size", "textAlign", "textColor", "verticalAlign", "width", "x", "y"], [29, 19, "center", 0xF1F604, "middle", 131, 232, 7]);
            return t;
        };
        PrisonListSkin.prototype._label_level_i = function () {
            var t = new egret.gui.Label();
            this._label_level = t;
            this.__s(t, ["height", "size", "textAlign", "textColor", "verticalAlign", "width", "x", "y"], [29, 19, "center", 0xF1F604, "middle", 65, 0, 7]);
            return t;
        };
        PrisonListSkin.prototype._label_name_i = function () {
            var t = new egret.gui.Label();
            this._label_name = t;
            this.__s(t, ["height", "size", "textAlign", "textColor", "verticalAlign", "width", "x", "y"], [29, 19, "center", 0xF1F604, "middle", 131, 88, 7]);
            return t;
        };
        PrisonListSkin.prototype._label_pk_i = function () {
            var t = new egret.gui.Label();
            this._label_pk = t;
            this.__s(t, ["height", "size", "textAlign", "textColor", "verticalAlign", "width", "x", "y"], [29, 19, "center", 0xF1F604, "middle", 131, 367, 7]);
            return t;
        };
        PrisonListSkin.prototype.__3_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["height", "source", "x", "y"], [42, "paihang_tiao", 0, 0]);
            return t;
        };
        PrisonListSkin._skinParts = ["_label_level", "_label_name", "_label_fight", "_label_pk"];
        return PrisonListSkin;
    })(egret.gui.Skin);
    skins.PrisonListSkin = PrisonListSkin;
    PrisonListSkin.prototype.__class__ = "skins.PrisonListSkin";
})(skins || (skins = {}));
