var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var skins;
(function (skins) {
    var SocietyRankItemReaderSkin = (function (_super) {
        __extends(SocietyRankItemReaderSkin, _super);
        function SocietyRankItemReaderSkin() {
            _super.call(this);
            this.__s = egret.gui.setProperties;
            this.__s(this, ["height", "width"], [54, 524]);
            this.elementsContent = [this.__3_i(), this._value_index_i(), this._value_id_i(), this._value_level_i(), this._value_sname_i(), this._value_pname_i(), this._join_btn_i()];
            this.states = [
                new egret.gui.State("normal", [
                ]),
                new egret.gui.State("disabled", [
                ])
            ];
        }
        Object.defineProperty(SocietyRankItemReaderSkin.prototype, "skinParts", {
            get: function () {
                return SocietyRankItemReaderSkin._skinParts;
            },
            enumerable: true,
            configurable: true
        });
        SocietyRankItemReaderSkin.prototype._join_btn_i = function () {
            var t = new egret.gui.Button();
            this._join_btn = t;
            this.__s(t, ["height", "label", "skinName", "width", "x", "y"], [47, "加入", skins.ButtonBlueSkin, 82, 1, 4]);
            return t;
        };
        SocietyRankItemReaderSkin.prototype._value_id_i = function () {
            var t = new egret.gui.Label();
            this._value_id = t;
            this.__s(t, ["height", "size", "text", "textAlign", "textColor", "width", "x", "y"], [23, 18, "998", "center", 0xF3CB06, 75, 81, 18]);
            return t;
        };
        SocietyRankItemReaderSkin.prototype._value_index_i = function () {
            var t = new egret.gui.Label();
            this._value_index = t;
            this.__s(t, ["height", "size", "text", "textAlign", "textColor", "x", "y"], [23, 18, "100", "center", 0xF3CB06, 33, 18]);
            return t;
        };
        SocietyRankItemReaderSkin.prototype._value_level_i = function () {
            var t = new egret.gui.Label();
            this._value_level = t;
            this.__s(t, ["height", "size", "text", "textAlign", "textColor", "width", "x", "y"], [23, 18, "99", "center", 0xF3CB06, 50, 164, 18]);
            return t;
        };
        SocietyRankItemReaderSkin.prototype._value_pname_i = function () {
            var t = new egret.gui.Label();
            this._value_pname = t;
            this.__s(t, ["height", "size", "text", "textAlign", "textColor", "width", "x", "y"], [23, 18, "xxxxx", "center", 0xF3CB06, 120, 384, 18]);
            return t;
        };
        SocietyRankItemReaderSkin.prototype._value_sname_i = function () {
            var t = new egret.gui.Label();
            this._value_sname = t;
            this.__s(t, ["height", "size", "text", "textAlign", "textColor", "width", "x", "y"], [23, 18, "xxxxxx", "center", 0xF3CB06, 156, 225, 18]);
            return t;
        };
        SocietyRankItemReaderSkin.prototype.__3_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["source", "x", "y"], ["paihang_tiao", 0, 0]);
            return t;
        };
        SocietyRankItemReaderSkin._skinParts = ["_value_index", "_value_id", "_value_level", "_value_sname", "_value_pname", "_join_btn"];
        return SocietyRankItemReaderSkin;
    })(egret.gui.Skin);
    skins.SocietyRankItemReaderSkin = SocietyRankItemReaderSkin;
    SocietyRankItemReaderSkin.prototype.__class__ = "skins.SocietyRankItemReaderSkin";
})(skins || (skins = {}));
