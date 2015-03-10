var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var skins;
(function (skins) {
    var SocietyArrangeSkin = (function (_super) {
        __extends(SocietyArrangeSkin, _super);
        function SocietyArrangeSkin() {
            _super.call(this);
            this.__s = egret.gui.setProperties;
            this.__s(this, ["height", "width"], [689, 549]);
            this.elementsContent = [this.__3_i(), this.__4_i(), this.__5_i(), this._btn_manager_i(), this._btn_exit_i(), this._btn_buzhen_i(), this._label_level_i(), this._label_renshu_i(), this._title_index_i(), this._title_id_i(), this._title_level_i(), this._title_sname_i(), this._title_pname_i()];
            this.states = [
                new egret.gui.State("normal", [
                ]),
                new egret.gui.State("disabled", [
                ])
            ];
        }
        Object.defineProperty(SocietyArrangeSkin.prototype, "skinParts", {
            get: function () {
                return SocietyArrangeSkin._skinParts;
            },
            enumerable: true,
            configurable: true
        });
        SocietyArrangeSkin.prototype.__4_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["source", "x", "y"], ["title5", 8, 7]);
            return t;
        };
        SocietyArrangeSkin.prototype.__5_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["source", "x", "y"], ["list_bgImg", 0, 85]);
            return t;
        };
        SocietyArrangeSkin.prototype._btn_buzhen_i = function () {
            var t = new egret.gui.Button();
            this._btn_buzhen = t;
            this.__s(t, ["horizontalCenter", "label", "skinName", "y"], [0, "争霸赛布阵", skins.ButtonYellowSkin, 635]);
            return t;
        };
        SocietyArrangeSkin.prototype._btn_exit_i = function () {
            var t = new egret.gui.Button();
            this._btn_exit = t;
            this.__s(t, ["horizontalCenter", "label", "skinName", "y"], [-168, "退出行会", skins.ButtonRedSkin, 635]);
            return t;
        };
        SocietyArrangeSkin.prototype._btn_manager_i = function () {
            var t = new egret.gui.Button();
            this._btn_manager = t;
            this.__s(t, ["horizontalCenter", "label", "skinName", "y"], [169, "行会管理", skins.ButtonBlueSkin, 635]);
            return t;
        };
        SocietyArrangeSkin.prototype._label_level_i = function () {
            var t = new egret.gui.Label();
            this._label_level = t;
            this.__s(t, ["height", "size", "text", "textColor", "width", "x", "y"], [26, 20, "行会等级：2", 0x10B549, 229, 10, 72]);
            return t;
        };
        SocietyArrangeSkin.prototype._label_renshu_i = function () {
            var t = new egret.gui.Label();
            this._label_renshu = t;
            this.__s(t, ["height", "size", "text", "textAlign", "textColor", "width", "x", "y"], [26, 20, "行会人数：2/22", "right", 0x10B549, 229, 314, 72]);
            return t;
        };
        SocietyArrangeSkin.prototype._title_id_i = function () {
            var t = new egret.gui.Label();
            this._title_id = t;
            this.__s(t, ["height", "size", "text", "textColor", "x", "y"], [23, 18, "职位", 0xF3CB06, 118, 133]);
            return t;
        };
        SocietyArrangeSkin.prototype._title_index_i = function () {
            var t = new egret.gui.Label();
            this._title_index = t;
            this.__s(t, ["height", "size", "text", "textColor", "x", "y"], [23, 18, "状态", 0xF3CB06, 45, 133]);
            return t;
        };
        SocietyArrangeSkin.prototype._title_level_i = function () {
            var t = new egret.gui.Label();
            this._title_level = t;
            this.__s(t, ["height", "size", "text", "textColor", "x", "y"], [23, 18, "等级", 0xF3CB06, 180, 133]);
            return t;
        };
        SocietyArrangeSkin.prototype._title_pname_i = function () {
            var t = new egret.gui.Label();
            this._title_pname = t;
            this.__s(t, ["height", "size", "text", "textColor", "x", "y"], [23, 18, "战力", 0xF3CB06, 436, 133]);
            return t;
        };
        SocietyArrangeSkin.prototype._title_sname_i = function () {
            var t = new egret.gui.Label();
            this._title_sname = t;
            this.__s(t, ["height", "size", "text", "textColor", "x", "y"], [23, 18, "角色名", 0xF3CB06, 280, 133]);
            return t;
        };
        SocietyArrangeSkin.prototype.__3_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["source", "x", "y"], ["title_bgImg", 0, 0]);
            return t;
        };
        SocietyArrangeSkin._skinParts = ["_btn_manager", "_btn_exit", "_btn_buzhen", "_label_level", "_label_renshu", "_title_index", "_title_id", "_title_level", "_title_sname", "_title_pname"];
        return SocietyArrangeSkin;
    })(egret.gui.Skin);
    skins.SocietyArrangeSkin = SocietyArrangeSkin;
    SocietyArrangeSkin.prototype.__class__ = "skins.SocietyArrangeSkin";
})(skins || (skins = {}));
