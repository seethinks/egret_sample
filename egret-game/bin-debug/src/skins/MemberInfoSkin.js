var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var skins;
(function (skins) {
    var MemberInfoSkin = (function (_super) {
        __extends(MemberInfoSkin, _super);
        function MemberInfoSkin() {
            _super.call(this);
            this.__s = egret.gui.setProperties;
            this.__s(this, ["height", "width"], [286, 522]);
            this.elementsContent = [this.__3_i(), this.__4_i(), this._head_i(), this._btn_tichu_i(), this._btn_renmin_i(), this._btn_close_i(), this._label_name_i(), this._label_gongxian_i(), this._label_fight_i(), this._label_job_i(), this.__5_i(), this.__6_i(), this.__7_i()];
            this.states = [
                new egret.gui.State("normal", [
                ]),
                new egret.gui.State("disabled", [
                ])
            ];
        }
        Object.defineProperty(MemberInfoSkin.prototype, "skinParts", {
            get: function () {
                return MemberInfoSkin._skinParts;
            },
            enumerable: true,
            configurable: true
        });
        MemberInfoSkin.prototype.__4_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["height", "source", "width", "x", "y"], [95, "player_head_bg", 96, 26, 23]);
            return t;
        };
        MemberInfoSkin.prototype.__5_i = function () {
            var t = new egret.gui.Label();
            this.__s(t, ["height", "size", "text", "textColor", "width", "x", "y"], [28, 23, "贡献", 0xFFFFFF, 53, 132, 139]);
            return t;
        };
        MemberInfoSkin.prototype.__6_i = function () {
            var t = new egret.gui.Label();
            this.__s(t, ["height", "size", "text", "textColor", "width", "x", "y"], [28, 23, "战力", 0xFFFFFF, 50, 132, 101]);
            return t;
        };
        MemberInfoSkin.prototype.__7_i = function () {
            var t = new egret.gui.Label();
            this.__s(t, ["height", "size", "text", "textColor", "width", "x", "y"], [28, 23, "职位", 0xFFFFFF, 50, 132, 62]);
            return t;
        };
        MemberInfoSkin.prototype._btn_close_i = function () {
            var t = new egret.gui.Button();
            this._btn_close = t;
            this.__s(t, ["horizontalCenter", "label", "skinName", "y"], [0.5, "关  闭", skins.ButtonRedSkin, 233]);
            return t;
        };
        MemberInfoSkin.prototype._btn_renmin_i = function () {
            var t = new egret.gui.Button();
            this._btn_renmin = t;
            this.__s(t, ["label", "right", "skinName", "y"], ["任命副会长", 35, skins.ButtonBlueSkin, 233]);
            return t;
        };
        MemberInfoSkin.prototype._btn_tichu_i = function () {
            var t = new egret.gui.Button();
            this._btn_tichu = t;
            this.__s(t, ["label", "left", "skinName", "y"], ["踢出公会", 35, skins.ButtonRedSkin, 233]);
            return t;
        };
        MemberInfoSkin.prototype._head_i = function () {
            var t = new egret.gui.UIAsset();
            this._head = t;
            this.__s(t, ["x", "y"], [32, 29]);
            return t;
        };
        MemberInfoSkin.prototype._label_fight_i = function () {
            var t = new egret.gui.Label();
            this._label_fight = t;
            this.__s(t, ["height", "size", "textColor", "width", "x", "y"], [28, 23, 838886, 300, 209, 101]);
            return t;
        };
        MemberInfoSkin.prototype._label_gongxian_i = function () {
            var t = new egret.gui.Label();
            this._label_gongxian = t;
            this.__s(t, ["height", "size", "textColor", "width", "x", "y"], [28, 23, 913764, 299, 209, 139]);
            return t;
        };
        MemberInfoSkin.prototype._label_job_i = function () {
            var t = new egret.gui.Label();
            this._label_job = t;
            this.__s(t, ["height", "size", "textColor", "width", "x", "y"], [28, 23, 13965262, 301, 208, 62]);
            return t;
        };
        MemberInfoSkin.prototype._label_name_i = function () {
            var t = new egret.gui.Label();
            this._label_name = t;
            this.__s(t, ["bold", "height", "size", "textColor", "width", "x", "y"], [true, 28, 23, 16777215, 377, 132, 23]);
            return t;
        };
        MemberInfoSkin.prototype.__3_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["height", "scale9Grid", "source", "width", "x", "y"], [222, egret.gui.getScale9Grid("59,21,355,64"), "my_panel_4", 522, 0, 0]);
            return t;
        };
        MemberInfoSkin._skinParts = ["_head", "_btn_tichu", "_btn_renmin", "_btn_close", "_label_name", "_label_gongxian", "_label_fight", "_label_job"];
        return MemberInfoSkin;
    })(egret.gui.Skin);
    skins.MemberInfoSkin = MemberInfoSkin;
    MemberInfoSkin.prototype.__class__ = "skins.MemberInfoSkin";
})(skins || (skins = {}));
