var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var skins;
(function (skins) {
    var MainIconMeunSkin = (function (_super) {
        __extends(MainIconMeunSkin, _super);
        function MainIconMeunSkin() {
            _super.call(this);
            this.__s = egret.gui.setProperties;
            this.__s(this, ["height", "width"], [215, 640]);
            this.elementsContent = [this.__3_i(), this._main_btn_bag_i(), this._main_btn_eqpt_i(), this._main_btn_fight_i(), this._main_btn_help_i(), this._main_btn_hero_i(), this._main_btn_idea_i(), this._main_btn_mail_i(), this._main_btn_myinfo_i(), this._main_btn_notice_i(), this._main_btn_recharge_i(), this._main_btn_skill_i(), this._mian_btn_mian_i(), this._mailwarn_i(), this.group_hanghui_i(), this._eqptwarn_i(), this._fightwarn_i(), this._bagwarn_i(), this._giftwarn_i(), this._skillwarn_i(), this._bellewarn_i(), this._bag_full_i()];
            this.states = [
                new egret.gui.State("normal", [
                ]),
                new egret.gui.State("disabled", [
                    new egret.gui.SetProperty("_main_btn_hero", "bottom", 0)
                ])
            ];
        }
        Object.defineProperty(MainIconMeunSkin.prototype, "skinParts", {
            get: function () {
                return MainIconMeunSkin._skinParts;
            },
            enumerable: true,
            configurable: true
        });
        MainIconMeunSkin.prototype.__4_i = function () {
            var t = new egret.gui.BasicLayout();
            return t;
        };
        MainIconMeunSkin.prototype._bag_full_i = function () {
            var t = new egret.gui.UIAsset();
            this._bag_full = t;
            this.__s(t, ["source", "x", "y"], ["bg_full", 382, 100]);
            return t;
        };
        MainIconMeunSkin.prototype._bagwarn_i = function () {
            var t = new egret.gui.UIAsset();
            this._bagwarn = t;
            this.__s(t, ["source", "x", "y"], ["btn_new_event", 382, 100]);
            return t;
        };
        MainIconMeunSkin.prototype._bellewarn_i = function () {
            var t = new egret.gui.UIAsset();
            this._bellewarn = t;
            this.__s(t, ["source", "x", "y"], ["btn_new_event", 592, 97]);
            return t;
        };
        MainIconMeunSkin.prototype._eqptwarn_i = function () {
            var t = new egret.gui.UIAsset();
            this._eqptwarn = t;
            this.__s(t, ["source", "x", "y"], ["btn_new_event", 276, 97]);
            return t;
        };
        MainIconMeunSkin.prototype._fightwarn_i = function () {
            var t = new egret.gui.UIAsset();
            this._fightwarn = t;
            this.__s(t, ["source", "x", "y"], ["btn_new_event", 171, 97]);
            return t;
        };
        MainIconMeunSkin.prototype._giftwarn_i = function () {
            var t = new egret.gui.UIAsset();
            this._giftwarn = t;
            this.__s(t, ["source", "x", "y"], ["btn_new_event", 363, 0]);
            return t;
        };
        MainIconMeunSkin.prototype._mailwarn_i = function () {
            var t = new egret.gui.UIAsset();
            this._mailwarn = t;
            this.__s(t, ["source", "x", "y"], ["btn_new_event", 190, 0]);
            return t;
        };
        MainIconMeunSkin.prototype._main_btn_bag_i = function () {
            var t = new egret.gui.UIAsset();
            this._main_btn_bag = t;
            this.__s(t, ["bottom", "source", "x"], [3, "main_btn_bag", 318]);
            return t;
        };
        MainIconMeunSkin.prototype._main_btn_eqpt_i = function () {
            var t = new egret.gui.UIAsset();
            this._main_btn_eqpt = t;
            this.__s(t, ["bottom", "source", "x"], [3, "main_btn_eqpt", 213]);
            return t;
        };
        MainIconMeunSkin.prototype._main_btn_fight_i = function () {
            var t = new egret.gui.UIAsset();
            this._main_btn_fight = t;
            this.__s(t, ["bottom", "source", "x"], [3, "main_btn_fight", 109]);
            return t;
        };
        MainIconMeunSkin.prototype._main_btn_help_i = function () {
            var t = new egret.gui.UIAsset();
            this._main_btn_help = t;
            this.__s(t, ["bottom", "source", "x"], [123, "main_btn_help", 496]);
            return t;
        };
        MainIconMeunSkin.prototype._main_btn_hero_i = function () {
            var t = new egret.gui.UIAsset();
            this._main_btn_hero = t;
            this.__s(t, ["bottom", "source", "x"], [3, "main_btn_hero", 528]);
            return t;
        };
        MainIconMeunSkin.prototype._main_btn_idea_i = function () {
            var t = new egret.gui.UIAsset();
            this._main_btn_idea = t;
            this.__s(t, ["bottom", "source", "x"], [123, "main_btn_idea", 322]);
            return t;
        };
        MainIconMeunSkin.prototype._main_btn_mail_i = function () {
            var t = new egret.gui.UIAsset();
            this._main_btn_mail = t;
            this.__s(t, ["bottom", "source", "x"], [123, "main_btn_mail", 147]);
            return t;
        };
        MainIconMeunSkin.prototype._main_btn_myinfo_i = function () {
            var t = new egret.gui.UIAsset();
            this._main_btn_myinfo = t;
            this.__s(t, ["bottom", "source", "x"], [123, "main_btn_myinfo", 59]);
            return t;
        };
        MainIconMeunSkin.prototype._main_btn_notice_i = function () {
            var t = new egret.gui.UIAsset();
            this._main_btn_notice = t;
            this.__s(t, ["bottom", "source", "x"], [123, "main_btn_notice", 235]);
            return t;
        };
        MainIconMeunSkin.prototype._main_btn_recharge_i = function () {
            var t = new egret.gui.UIAsset();
            this._main_btn_recharge = t;
            this.__s(t, ["bottom", "source", "x"], [123, "main_btn_recharge", 409]);
            return t;
        };
        MainIconMeunSkin.prototype._main_btn_skill_i = function () {
            var t = new egret.gui.UIAsset();
            this._main_btn_skill = t;
            this.__s(t, ["bottom", "source", "x"], [3, "main_btn_skill", 423]);
            return t;
        };
        MainIconMeunSkin.prototype._mian_btn_mian_i = function () {
            var t = new egret.gui.UIAsset();
            this._mian_btn_mian = t;
            this.__s(t, ["bottom", "source", "x"], [3, "mian_btn_mian", 5]);
            return t;
        };
        MainIconMeunSkin.prototype._skillwarn_i = function () {
            var t = new egret.gui.UIAsset();
            this._skillwarn = t;
            this.__s(t, ["source", "x", "y"], ["btn_new_event", 487, 97]);
            return t;
        };
        MainIconMeunSkin.prototype.group_hanghui_i = function () {
            var t = new egret.gui.Group();
            this.group_hanghui = t;
            this.__s(t, ["bottom", "height", "width", "x"], [122, 87, 524, 58]);
            t.layout = this.__4_i();
            t.elementsContent = [this.icon_gongxianduihuan_i(), this.icon_guaiwugongcheng_i(), this.icon_hanghuichengyuan_i(), this.icon_hanghuipaihang_i(), this.icon_hanghuiqiandao_i(), this.icon_hanghuizhengba_i()];
            return t;
        };
        MainIconMeunSkin.prototype.icon_gongxianduihuan_i = function () {
            var t = new egret.gui.UIAsset();
            this.icon_gongxianduihuan = t;
            this.__s(t, ["source", "x", "y"], ["gongxianduihuan", 264, 1]);
            return t;
        };
        MainIconMeunSkin.prototype.icon_guaiwugongcheng_i = function () {
            var t = new egret.gui.UIAsset();
            this.icon_guaiwugongcheng = t;
            this.__s(t, ["source", "x", "y"], ["guaiwugongcheng", 176, 1]);
            return t;
        };
        MainIconMeunSkin.prototype.icon_hanghuichengyuan_i = function () {
            var t = new egret.gui.UIAsset();
            this.icon_hanghuichengyuan = t;
            this.__s(t, ["source", "x", "y"], ["hanghuichengyuan", 352, 1]);
            return t;
        };
        MainIconMeunSkin.prototype.icon_hanghuipaihang_i = function () {
            var t = new egret.gui.UIAsset();
            this.icon_hanghuipaihang = t;
            this.__s(t, ["source", "x", "y"], ["hanghuipaihang", 438, 1]);
            return t;
        };
        MainIconMeunSkin.prototype.icon_hanghuiqiandao_i = function () {
            var t = new egret.gui.UIAsset();
            this.icon_hanghuiqiandao = t;
            this.__s(t, ["source", "x", "y"], ["hanghuiqiandao", 1, 2]);
            return t;
        };
        MainIconMeunSkin.prototype.icon_hanghuizhengba_i = function () {
            var t = new egret.gui.UIAsset();
            this.icon_hanghuizhengba = t;
            this.__s(t, ["source", "x", "y"], ["hanghuizhengba", 88, 2]);
            return t;
        };
        MainIconMeunSkin.prototype.__3_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["bottom", "horizontalCenter", "source"], [0, 0, "main_icon_bg"]);
            return t;
        };
        MainIconMeunSkin._skinParts = ["_main_btn_bag", "_main_btn_eqpt", "_main_btn_fight", "_main_btn_help", "_main_btn_hero", "_main_btn_idea", "_main_btn_mail", "_main_btn_myinfo", "_main_btn_notice", "_main_btn_recharge", "_main_btn_skill", "_mian_btn_mian", "_mailwarn", "icon_gongxianduihuan", "icon_guaiwugongcheng", "icon_hanghuichengyuan", "icon_hanghuipaihang", "icon_hanghuiqiandao", "icon_hanghuizhengba", "group_hanghui", "_eqptwarn", "_fightwarn", "_bagwarn", "_giftwarn", "_skillwarn", "_bellewarn", "_bag_full"];
        return MainIconMeunSkin;
    })(egret.gui.Skin);
    skins.MainIconMeunSkin = MainIconMeunSkin;
    MainIconMeunSkin.prototype.__class__ = "skins.MainIconMeunSkin";
})(skins || (skins = {}));
