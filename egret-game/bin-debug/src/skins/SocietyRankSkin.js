var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var skins;
(function (skins) {
    var SocietyRankSkin = (function (_super) {
        __extends(SocietyRankSkin, _super);
        function SocietyRankSkin() {
            _super.call(this);
            this.__s = egret.gui.setProperties;
            this.__s(this, ["height", "width"], [694, 550]);
            this.elementsContent = [this.__3_i(), this.__4_i(), this.__5_i(), this._btn_close_i(), this._label_level_i(), this._label_renshu_i(), this._title_index_i(), this._title_id_i(), this._title_level_i(), this._title_sname_i(), this._title_pname_i(), this._create_btn_i()];
            this.states = [
                new egret.gui.State("normal", [
                ]),
                new egret.gui.State("disabled", [
                ])
            ];
        }
        Object.defineProperty(SocietyRankSkin.prototype, "skinParts", {
            get: function () {
                return SocietyRankSkin._skinParts;
            },
            enumerable: true,
            configurable: true
        });
        SocietyRankSkin.prototype.__4_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["source", "x", "y"], ["title4", 7, 7]);
            return t;
        };
        SocietyRankSkin.prototype.__5_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["source", "x", "y"], ["list_bgImg", 0, 85]);
            return t;
        };
        SocietyRankSkin.prototype._btn_close_i = function () {
            var t = new egret.gui.Button();
            this._btn_close = t;
            this.__s(t, ["horizontalCenter", "label", "skinName", "y"], [0, "关  闭", skins.ButtonRedSkin, 641]);
            return t;
        };
        SocietyRankSkin.prototype._create_btn_i = function () {
            var t = new egret.gui.Button();
            this._create_btn = t;
            this.__s(t, ["bottom", "enabled", "label", "right", "skinName"], [0, true, "创建帮会", 0, skins.ButtonYellowSkin]);
            return t;
        };
        SocietyRankSkin.prototype._label_level_i = function () {
            var t = new egret.gui.Label();
            this._label_level = t;
            this.__s(t, ["height", "size", "textColor", "width", "x", "y"], [26, 20, 1094985, 229, 10, 72]);
            return t;
        };
        SocietyRankSkin.prototype._label_renshu_i = function () {
            var t = new egret.gui.Label();
            this._label_renshu = t;
            this.__s(t, ["height", "size", "textAlign", "textColor", "width", "x", "y"], [26, 20, "right", 0x10B549, 229, 314, 72]);
            return t;
        };
        SocietyRankSkin.prototype._title_id_i = function () {
            var t = new egret.gui.Label();
            this._title_id = t;
            this.__s(t, ["height", "size", "text", "textColor", "width", "x", "y"], [23, 18, "ID", 0xF3CB06, 24, 113, 133]);
            return t;
        };
        SocietyRankSkin.prototype._title_index_i = function () {
            var t = new egret.gui.Label();
            this._title_index = t;
            this.__s(t, ["height", "size", "text", "textColor", "width", "x", "y"], [23, 18, "排名", 15977222, 42, 40, 133]);
            return t;
        };
        SocietyRankSkin.prototype._title_level_i = function () {
            var t = new egret.gui.Label();
            this._title_level = t;
            this.__s(t, ["height", "size", "text", "textColor", "width", "x", "y"], [23, 18, "等级", 0xF3CB06, 42, 175, 133]);
            return t;
        };
        SocietyRankSkin.prototype._title_pname_i = function () {
            var t = new egret.gui.Label();
            this._title_pname = t;
            this.__s(t, ["height", "size", "text", "textColor", "width", "x", "y"], [23, 18, "会长", 0xF3CB06, 42, 431, 133]);
            return t;
        };
        SocietyRankSkin.prototype._title_sname_i = function () {
            var t = new egret.gui.Label();
            this._title_sname = t;
            this.__s(t, ["height", "size", "text", "textColor", "width", "x", "y"], [23, 18, "行会名称", 0xF3CB06, 78, 275, 133]);
            return t;
        };
        SocietyRankSkin.prototype.__3_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["source", "x", "y"], ["title_bgImg", 0, 0]);
            return t;
        };
        SocietyRankSkin._skinParts = ["_btn_close", "_label_level", "_label_renshu", "_title_index", "_title_id", "_title_level", "_title_sname", "_title_pname", "_create_btn"];
        return SocietyRankSkin;
    })(egret.gui.Skin);
    skins.SocietyRankSkin = SocietyRankSkin;
    SocietyRankSkin.prototype.__class__ = "skins.SocietyRankSkin";
})(skins || (skins = {}));
