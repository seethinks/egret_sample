var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var skins;
(function (skins) {
    var MainUiSkin = (function (_super) {
        __extends(MainUiSkin, _super);
        function MainUiSkin() {
            _super.call(this);
            this.__s = egret.gui.setProperties;
            this.__s(this, ["height", "width"], [960, 640]);
            this.elementsContent = [this.__3_i(), this._jingjichang_i(), this.__4_i(), this.__5_i(), this._mp_group_i(), this._hp_group_i(), this.__6_i(), this.__7_i(), this.__8_i(), this._shenglv_title_i(), this._exp_title_i(), this.main_label_money_i(), this.main_label_fightvalue_i(), this.main_label_name_i(), this.main_label_frame_i(), this.main_label_map_i(), this.main_label_shenglv_i(), this.main_label_exp_i(), this.main_label_level_i(), this.main_label_gold_i(), this.main_img_vip_i(), this._hanghui_i(), this._ronglian_i(), this._shangdian_i(), this._chuangtianguan_i(), this.niu_fa_i(), this.niu_dao_i(), this._act_btn_i(), this._act_eff_i(), this.__9_i(), this.__10_i(), this.__11_i(), this.__12_i(), this._txt_num1_i()];
            this.states = [
                new egret.gui.State("normal", [
                ]),
                new egret.gui.State("disabled", [
                ])
            ];
        }
        Object.defineProperty(MainUiSkin.prototype, "skinParts", {
            get: function () {
                return MainUiSkin._skinParts;
            },
            enumerable: true,
            configurable: true
        });
        MainUiSkin.prototype.__11_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["source", "x", "y"], ["main_ui_fightvalue", 86, 51]);
            return t;
        };
        MainUiSkin.prototype.__12_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["source", "x", "y"], ["main_num1", 230, 278]);
            return t;
        };
        MainUiSkin.prototype.__3_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["source", "x", "y"], ["best_main_bg", 0, 0]);
            return t;
        };
        MainUiSkin.prototype.__4_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["horizontalCenter", "source", "top"], [0, "main_bg_head", -11]);
            return t;
        };
        MainUiSkin.prototype.__5_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["source", "x", "y"], ["mian_ui_xue", 247, 75]);
            return t;
        };
        MainUiSkin.prototype.__6_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["horizontalCenter", "source", "top"], [-23.5, "long_head", 0]);
            return t;
        };
        MainUiSkin.prototype.__7_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["source", "width", "x", "y"], ["mian_ui_bg_shenglv", 203, 427, 125]);
            return t;
        };
        MainUiSkin.prototype.__8_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["source", "width", "x", "y"], ["exp_bg", 198, 8, 126]);
            return t;
        };
        MainUiSkin.prototype.__9_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["source", "x", "y"], ["goldicon", 473, 149]);
            return t;
        };
        MainUiSkin.prototype._act_btn_i = function () {
            var t = new egret.gui.UIAsset();
            this._act_btn = t;
            this.__s(t, ["source", "x", "y"], ["act_icon", 546, 188]);
            return t;
        };
        MainUiSkin.prototype._act_eff_i = function () {
            var t = new egret.gui.UIAsset();
            this._act_eff = t;
            this.__s(t, ["height", "width", "x", "y"], [0, 0, 477, 105]);
            return t;
        };
        MainUiSkin.prototype._chuangtianguan_i = function () {
            var t = new egret.gui.UIAsset();
            this._chuangtianguan = t;
            this.__s(t, ["source", "x", "y"], ["chuangtianguan", 17, 419]);
            return t;
        };
        MainUiSkin.prototype._eff_hp_i = function () {
            var t = new egret.gui.UIAsset();
            this._eff_hp = t;
            this.__s(t, ["height", "width", "x", "y"], [120, 64, 0, 0]);
            return t;
        };
        MainUiSkin.prototype._eff_mp_i = function () {
            var t = new egret.gui.UIAsset();
            this._eff_mp = t;
            this.__s(t, ["height", "width", "x", "y"], [120, 64, 0, 0]);
            return t;
        };
        MainUiSkin.prototype._exp_title_i = function () {
            var t = new egret.gui.UIAsset();
            this._exp_title = t;
            this.__s(t, ["height", "source", "width", "x", "y"], [9, "exp_title", 0, 12, 129]);
            return t;
        };
        MainUiSkin.prototype._hanghui_i = function () {
            var t = new egret.gui.UIAsset();
            this._hanghui = t;
            this.__s(t, ["source", "x", "y"], ["hanghui", 88, 622]);
            return t;
        };
        MainUiSkin.prototype._hp_group_i = function () {
            var t = new egret.gui.Group();
            this._hp_group = t;
            this.__s(t, ["height", "width", "x", "y"], [240, 64, 250, 79]);
            t.elementsContent = [this._eff_hp_i()];
            return t;
        };
        MainUiSkin.prototype._jingjichang_i = function () {
            var t = new egret.gui.UIAsset();
            this._jingjichang = t;
            this.__s(t, ["source", "x", "y"], ["jingjichang", 208, 327]);
            return t;
        };
        MainUiSkin.prototype._mp_group_i = function () {
            var t = new egret.gui.Group();
            this._mp_group = t;
            this.__s(t, ["height", "width", "x", "y"], [240, 64, 318, 79]);
            t.elementsContent = [this._eff_mp_i()];
            return t;
        };
        MainUiSkin.prototype._ronglian_i = function () {
            var t = new egret.gui.UIAsset();
            this._ronglian = t;
            this.__s(t, ["source", "x", "y"], ["ronglian", 254, 519]);
            return t;
        };
        MainUiSkin.prototype._shangdian_i = function () {
            var t = new egret.gui.UIAsset();
            this._shangdian = t;
            this.__s(t, ["source", "x", "y"], ["shangdian", 425, 313]);
            return t;
        };
        MainUiSkin.prototype._shenglv_title_i = function () {
            var t = new egret.gui.UIAsset();
            this._shenglv_title = t;
            this.__s(t, ["source", "width", "x", "y"], ["main_ui_shenglv_title", 0, 627, 137]);
            return t;
        };
        MainUiSkin.prototype._txt_num1_i = function () {
            var t = new egret.gui.Label();
            this._txt_num1 = t;
            this.__s(t, ["bold", "height", "size", "textAlign", "textColor", "verticalAlign", "width", "x", "y"], [true, 21, 17, "center", 16384956, "middle", 117, 241, 311]);
            return t;
        };
        MainUiSkin.prototype.main_img_vip_i = function () {
            var t = new egret.gui.UIAsset();
            this.main_img_vip = t;
            this.__s(t, ["source", "top", "x"], ["vip0", 81, 493]);
            return t;
        };
        MainUiSkin.prototype.main_label_exp_i = function () {
            var t = new egret.gui.Label();
            this.main_label_exp = t;
            this.__s(t, ["height", "size", "text", "textAlign", "textColor", "top", "verticalAlign", "width", "x"], [25, 16, "经验：", "center", 16110914, 106, "middle", 167, 15]);
            return t;
        };
        MainUiSkin.prototype.main_label_fightvalue_i = function () {
            var t = new egret.gui.Label();
            this.main_label_fightvalue = t;
            this.__s(t, ["height", "size", "text", "textColor", "top", "verticalAlign", "width", "x"], [22, 19, "5275", 16325378, 47, "middle", 139, 121]);
            return t;
        };
        MainUiSkin.prototype.main_label_frame_i = function () {
            var t = new egret.gui.Label();
            this.main_label_frame = t;
            this.__s(t, ["height", "size", "textAlign", "textColor", "top", "verticalAlign", "width", "x"], [28, 19, "center", 2862292, 11, "middle", 172, 383]);
            return t;
        };
        MainUiSkin.prototype.main_label_gold_i = function () {
            var t = new egret.gui.Label();
            this.main_label_gold = t;
            this.__s(t, ["height", "size", "text", "textColor", "top", "verticalAlign", "width", "x"], [23, 19, "0", 16435483, 148, "middle", 134, 505]);
            return t;
        };
        MainUiSkin.prototype.main_label_level_i = function () {
            var t = new egret.gui.Label();
            this.main_label_level = t;
            this.__s(t, ["height", "size", "text", "textColor", "top", "verticalAlign", "width", "x"], [27, 19, "Lv.1", 15265176, 76, "middle", 61, 114]);
            return t;
        };
        MainUiSkin.prototype.main_label_map_i = function () {
            var t = new egret.gui.Label();
            this.main_label_map = t;
            this.__s(t, ["height", "size", "text", "textColor", "top", "verticalAlign", "width", "x"], [23, 19, "地图：", 13600858, 50, "middle", 134, 421]);
            return t;
        };
        MainUiSkin.prototype.main_label_money_i = function () {
            var t = new egret.gui.Label();
            this.main_label_money = t;
            this.__s(t, ["height", "size", "text", "textColor", "top", "verticalAlign", "width", "x"], [22, 19, "0", 16435483, 149, "middle", 134, 62]);
            return t;
        };
        MainUiSkin.prototype.main_label_name_i = function () {
            var t = new egret.gui.Label();
            this.main_label_name = t;
            this.__s(t, ["bold", "height", "size", "textAlign", "textColor", "top", "verticalAlign", "width", "x"], [true, 28, 19, "center", 2862292, 11, "middle", 208, 72]);
            return t;
        };
        MainUiSkin.prototype.main_label_shenglv_i = function () {
            var t = new egret.gui.Label();
            this.main_label_shenglv = t;
            this.__s(t, ["height", "size", "text", "textAlign", "textColor", "top", "verticalAlign", "width", "x"], [25, 16, "胜率:", "center", 4183401, 105, "middle", 161, 454]);
            return t;
        };
        MainUiSkin.prototype.niu_dao_i = function () {
            var t = new egret.gui.UIAsset();
            this.niu_dao = t;
            this.__s(t, ["source", "x", "y"], ["niu_dao", 7, 37]);
            return t;
        };
        MainUiSkin.prototype.niu_fa_i = function () {
            var t = new egret.gui.UIAsset();
            this.niu_fa = t;
            this.__s(t, ["source", "x", "y"], ["niu_fa", 7, 37]);
            return t;
        };
        MainUiSkin.prototype.__10_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["source", "x", "y"], ["moneyicon", 31, 149]);
            return t;
        };
        MainUiSkin._skinParts = ["_jingjichang", "_eff_mp", "_mp_group", "_eff_hp", "_hp_group", "_shenglv_title", "_exp_title", "main_label_money", "main_label_fightvalue", "main_label_name", "main_label_frame", "main_label_map", "main_label_shenglv", "main_label_exp", "main_label_level", "main_label_gold", "main_img_vip", "_hanghui", "_ronglian", "_shangdian", "_chuangtianguan", "niu_fa", "niu_dao", "_act_btn", "_act_eff", "_txt_num1"];
        return MainUiSkin;
    })(egret.gui.Skin);
    skins.MainUiSkin = MainUiSkin;
    MainUiSkin.prototype.__class__ = "skins.MainUiSkin";
})(skins || (skins = {}));
