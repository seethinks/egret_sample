var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var skins;
(function (skins) {
    var SocietySkin = (function (_super) {
        __extends(SocietySkin, _super);
        function SocietySkin() {
            _super.call(this);
            this.__s = egret.gui.setProperties;
            this.__s(this, ["height", "width"], [670, 607]);
            this.elementsContent = [this.__3_i(), this._label_gonggao_i(), this._btn_open_i(), this._btn_gonxian_i(), this._btn_guwu_i(), this._btn_chakan_i(), this._label_name_i(), this._label_exp_i(), this._label_guaiwu_i(), this._label_gongxian_i(), this._label_renshu_i(), this._label_id_i(), this._img_exp_i(), this._label_time_i(), this._label_desc_i(), this._label_guwu_i(), this._label_my_guwu_i(), this._boss_title_i(), this._boss_title_bg_i(), this._text_open_i()];
            this.states = [
                new egret.gui.State("normal", [
                ]),
                new egret.gui.State("disabled", [
                ])
            ];
        }
        Object.defineProperty(SocietySkin.prototype, "skinParts", {
            get: function () {
                return SocietySkin._skinParts;
            },
            enumerable: true,
            configurable: true
        });
        SocietySkin.prototype._boss_title_bg_i = function () {
            var t = new egret.gui.UIAsset();
            this._boss_title_bg = t;
            this.__s(t, ["source", "x", "y"], ["_boss_title_bgimg", 22, 548]);
            return t;
        };
        SocietySkin.prototype._boss_title_i = function () {
            var t = new egret.gui.UIAsset();
            this._boss_title = t;
            this.__s(t, ["source", "width", "x", "y"], ["_boss_title", 244, 42, 555]);
            return t;
        };
        SocietySkin.prototype._btn_chakan_i = function () {
            var t = new egret.gui.Button();
            this._btn_chakan = t;
            this.__s(t, ["label", "skinName", "x", "y"], ["赛事进程", skins.ButtonRedSkin, 368, 595]);
            return t;
        };
        SocietySkin.prototype._btn_gonxian_i = function () {
            var t = new egret.gui.Button();
            this._btn_gonxian = t;
            this.__s(t, ["height", "label", "skinName", "width", "x", "y"], [46, "贡献排行", skins.ButtonBlueSkin, 118, 30, 599]);
            return t;
        };
        SocietySkin.prototype._btn_guwu_i = function () {
            var t = new egret.gui.Button();
            this._btn_guwu = t;
            this.__s(t, ["height", "label", "skinName", "width", "x", "y"], [46, "鼓  舞", skins.ButtonYellowSkin, 118, 161, 599]);
            return t;
        };
        SocietySkin.prototype._btn_open_i = function () {
            var t = new egret.gui.Button();
            this._btn_open = t;
            this.__s(t, ["label", "skinName", "x", "y"], ["开  启", skins.ButtonRedSkin, 78, 595]);
            return t;
        };
        SocietySkin.prototype._img_exp_i = function () {
            var t = new egret.gui.UIAsset();
            this._img_exp = t;
            this.__s(t, ["height", "source", "width", "x", "y"], [7, "exp_title", 595, 0, 45]);
            return t;
        };
        SocietySkin.prototype._label_desc_i = function () {
            var t = new egret.gui.Label();
            this._label_desc = t;
            this.__s(t, ["text", "textAlign", "textColor", "width", "x", "y"], ["怪物撤退倒计时", "center", 647412, 226, 43, 346]);
            return t;
        };
        SocietySkin.prototype._label_exp_i = function () {
            var t = new egret.gui.Label();
            this._label_exp = t;
            this.__s(t, ["height", "size", "text", "textAlign", "textColor", "width", "x", "y"], [19, 16, "经验：1000/10000", "right", 0xEFBF15, 199, 397, 24]);
            return t;
        };
        SocietySkin.prototype._label_gonggao_i = function () {
            var t = new egret.gui.Label();
            this._label_gonggao = t;
            this.__s(t, ["height", "size", "text", "textColor", "width", "x", "y"], [86, 16, "公会公告：", 4420581, 513, 38, 62]);
            return t;
        };
        SocietySkin.prototype._label_gongxian_i = function () {
            var t = new egret.gui.Label();
            this._label_gongxian = t;
            this.__s(t, ["height", "size", "text", "textAlign", "textColor", "width", "x", "y"], [19, 16, "怪物经验（贡献）：1444", "center", 16777215, 267, 22, 516]);
            return t;
        };
        SocietySkin.prototype._label_guaiwu_i = function () {
            var t = new egret.gui.Label();
            this._label_guaiwu = t;
            this.__s(t, ["height", "size", "text", "textAlign", "textColor", "width", "x", "y"], [19, 16, "Lv50  怪物", "center", 0xEFBF15, 268, 22, 494]);
            return t;
        };
        SocietySkin.prototype._label_guwu_i = function () {
            var t = new egret.gui.Label();
            this._label_guwu = t;
            this.__s(t, ["height", "size", "textColor", "width", "x", "y"], [21, 16, 362232, 238, 34, 496]);
            return t;
        };
        SocietySkin.prototype._label_id_i = function () {
            var t = new egret.gui.Label();
            this._label_id = t;
            this.__s(t, ["height", "horizontalCenter", "size", "text", "textAlign", "textColor", "verticalAlign", "width", "y"], [19, 0, 16, "公会ID：12345", "center", 4420581, "middle", 199, 24]);
            return t;
        };
        SocietySkin.prototype._label_my_guwu_i = function () {
            var t = new egret.gui.Label();
            this._label_my_guwu = t;
            this.__s(t, ["height", "size", "textColor", "width", "x", "y"], [21, 16, 14616056, 238, 34, 524]);
            return t;
        };
        SocietySkin.prototype._label_name_i = function () {
            var t = new egret.gui.Label();
            this._label_name = t;
            this.__s(t, ["height", "size", "text", "textColor", "width", "x", "y"], [19, 16, "Lv.3  神墓", 15712021, 199, 3, 24]);
            return t;
        };
        SocietySkin.prototype._label_renshu_i = function () {
            var t = new egret.gui.Label();
            this._label_renshu = t;
            this.__s(t, ["height", "size", "text", "textAlign", "textColor", "width", "x", "y"], [19, 16, "人数：10/20", "right", 2158357, 199, 397, 3]);
            return t;
        };
        SocietySkin.prototype._label_time_i = function () {
            var t = new egret.gui.Label();
            this._label_time = t;
            this.__s(t, ["bold", "size", "text", "textAlign", "textColor", "width", "x", "y"], [true, 30, "05:35:02", "center", 65280, 247, 31, 386]);
            return t;
        };
        SocietySkin.prototype._text_open_i = function () {
            var t = new egret.gui.UIAsset();
            this._text_open = t;
            this.__s(t, ["source", "x", "y"], ["_text_open", 26, 542]);
            return t;
        };
        SocietySkin.prototype.__3_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["source", "x", "y"], ["hanghui_bgimg", 0, 0]);
            return t;
        };
        SocietySkin._skinParts = ["_label_gonggao", "_btn_open", "_btn_gonxian", "_btn_guwu", "_btn_chakan", "_label_name", "_label_exp", "_label_guaiwu", "_label_gongxian", "_label_renshu", "_label_id", "_img_exp", "_label_time", "_label_desc", "_label_guwu", "_label_my_guwu", "_boss_title", "_boss_title_bg", "_text_open"];
        return SocietySkin;
    })(egret.gui.Skin);
    skins.SocietySkin = SocietySkin;
    SocietySkin.prototype.__class__ = "skins.SocietySkin";
})(skins || (skins = {}));
