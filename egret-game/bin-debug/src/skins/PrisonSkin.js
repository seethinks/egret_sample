var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var skins;
(function (skins) {
    var PrisonSkin = (function (_super) {
        __extends(PrisonSkin, _super);
        function PrisonSkin() {
            _super.call(this);
            this.__s = egret.gui.setProperties;
            this.__s(this, ["height", "width"], [661, 550]);
            this.elementsContent = [this.__3_i(), this._label_pk_i(), this._label_time_i(), this.__4_i(), this._btn_huilu_i(), this._btn_zhuilu_i()];
            this.states = [
                new egret.gui.State("normal", [
                ]),
                new egret.gui.State("disabled", [
                ])
            ];
        }
        Object.defineProperty(PrisonSkin.prototype, "skinParts", {
            get: function () {
                return PrisonSkin._skinParts;
            },
            enumerable: true,
            configurable: true
        });
        PrisonSkin.prototype.__4_i = function () {
            var t = new egret.gui.Label();
            this.__s(t, ["height", "size", "text", "textColor", "verticalAlign", "width", "x", "y"], [62, 18, "    进入监狱的玩家，离线时将无任何收益（包括装备）；在线时所获金币和经验将变为原有的一半；而pk值消退速度加快一倍。", 62249, "middle", 519, 13, 526]);
            return t;
        };
        PrisonSkin.prototype._btn_huilu_i = function () {
            var t = new egret.gui.Button();
            this._btn_huilu = t;
            this.__s(t, ["label", "left", "skinName", "y"], ["贿  赂", 70, skins.ButtonYellowSkin, 608]);
            return t;
        };
        PrisonSkin.prototype._btn_zhuilu_i = function () {
            var t = new egret.gui.Button();
            this._btn_zhuilu = t;
            this.__s(t, ["label", "right", "skinName", "y"], ["重金贿赂", 70, skins.ButtonRedSkin, 608]);
            return t;
        };
        PrisonSkin.prototype._label_pk_i = function () {
            var t = new egret.gui.Label();
            this._label_pk = t;
            this.__s(t, ["bold", "height", "size", "textColor", "verticalAlign", "width", "x", "y"], [true, 32, 19, 16451335, "middle", 211, 11, 64]);
            return t;
        };
        PrisonSkin.prototype._label_time_i = function () {
            var t = new egret.gui.Label();
            this._label_time = t;
            this.__s(t, ["bold", "height", "size", "textAlign", "textColor", "verticalAlign", "width", "x", "y"], [true, 32, 19, "right", 637018, "middle", 309, 234, 64]);
            return t;
        };
        PrisonSkin.prototype.__3_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["source", "x", "y"], ["jianyu_bgimg", 0, 0]);
            return t;
        };
        PrisonSkin._skinParts = ["_label_pk", "_label_time", "_btn_huilu", "_btn_zhuilu"];
        return PrisonSkin;
    })(egret.gui.Skin);
    skins.PrisonSkin = PrisonSkin;
    PrisonSkin.prototype.__class__ = "skins.PrisonSkin";
})(skins || (skins = {}));
