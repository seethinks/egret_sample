var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var skins;
(function (skins) {
    var CreateHeroSkin = (function (_super) {
        __extends(CreateHeroSkin, _super);
        function CreateHeroSkin() {
            _super.call(this);
            this.__s = egret.gui.setProperties;
            this.__s(this, ["height", "width"], [960, 640]);
            this.elementsContent = [this.huang_nv_i(), this.huang_nan_i(), this.lan_zhanshi_i(), this.lan_fashi_i(), this.lan_daoshi_i(), this.btn_create_i(), this.btn_daoshi_i(), this.btn_fashi_i(), this.btn_nan_i(), this.btn_nv_i(), this.btn_zhanshi_i(), this.btn_changename_i(), this.hero_bg_i(), this.hero_name_i(), this.wenzi_nan_i(), this.wenzi_nv_i(), this.hero_zhanshi_i(), this.creat_text_1_i(), this.creat_text_2_i(), this.creat_text_3_i()];
            this.states = [
                new egret.gui.State("normal", [
                ]),
                new egret.gui.State("disabled", [
                ])
            ];
        }
        Object.defineProperty(CreateHeroSkin.prototype, "skinParts", {
            get: function () {
                return CreateHeroSkin._skinParts;
            },
            enumerable: true,
            configurable: true
        });
        CreateHeroSkin.prototype.btn_create_i = function () {
            var t = new egret.gui.UIAsset();
            this.btn_create = t;
            this.__s(t, ["source", "x", "y"], ["btn_create", 180, 831]);
            return t;
        };
        CreateHeroSkin.prototype.btn_daoshi_i = function () {
            var t = new egret.gui.UIAsset();
            this.btn_daoshi = t;
            this.__s(t, ["source", "x", "y"], ["btn_daoshi", 426, 690]);
            return t;
        };
        CreateHeroSkin.prototype.btn_fashi_i = function () {
            var t = new egret.gui.UIAsset();
            this.btn_fashi = t;
            this.__s(t, ["source", "x", "y"], ["btn_fashi", 228, 690]);
            return t;
        };
        CreateHeroSkin.prototype.btn_nan_i = function () {
            var t = new egret.gui.UIAsset();
            this.btn_nan = t;
            this.__s(t, ["source", "x", "y"], ["btn_man", 246, 590]);
            return t;
        };
        CreateHeroSkin.prototype.btn_nv_i = function () {
            var t = new egret.gui.UIAsset();
            this.btn_nv = t;
            this.__s(t, ["source", "x", "y"], ["btn_women", 335, 590]);
            return t;
        };
        CreateHeroSkin.prototype.btn_zhanshi_i = function () {
            var t = new egret.gui.UIAsset();
            this.btn_zhanshi = t;
            this.__s(t, ["source", "x", "y"], ["btn_zhanshi", 28, 689]);
            return t;
        };
        CreateHeroSkin.prototype.creat_text_1_i = function () {
            var t = new egret.gui.UIAsset();
            this.creat_text_1 = t;
            this.__s(t, ["source", "x", "y"], ["creat_text_1", 46, 663]);
            return t;
        };
        CreateHeroSkin.prototype.creat_text_2_i = function () {
            var t = new egret.gui.UIAsset();
            this.creat_text_2 = t;
            this.__s(t, ["source", "x", "y"], ["creat_text_2", 448, 663]);
            return t;
        };
        CreateHeroSkin.prototype.creat_text_3_i = function () {
            var t = new egret.gui.UIAsset();
            this.creat_text_3 = t;
            this.__s(t, ["source", "x", "y"], ["creat_text_3", 236, 663]);
            return t;
        };
        CreateHeroSkin.prototype.hero_bg_i = function () {
            var t = new egret.gui.UIAsset();
            this.hero_bg = t;
            this.__s(t, ["height", "source", "x", "y"], [534, "hero_bg", 96, 70]);
            return t;
        };
        CreateHeroSkin.prototype.hero_name_i = function () {
            var t = new egret.gui.UIAsset();
            this.hero_name = t;
            this.__s(t, ["height", "source", "width", "x", "y"], [56, "heroname", 476, 41, 771]);
            return t;
        };
        CreateHeroSkin.prototype.hero_zhanshi_i = function () {
            var t = new egret.gui.UIAsset();
            this.hero_zhanshi = t;
            this.__s(t, ["source", "x", "y"], ["hero_1_1", 82, 0]);
            return t;
        };
        CreateHeroSkin.prototype.huang_nan_i = function () {
            var t = new egret.gui.UIAsset();
            this.huang_nan = t;
            this.__s(t, ["source", "x", "y"], ["frier_huang", 239, 582]);
            return t;
        };
        CreateHeroSkin.prototype.huang_nv_i = function () {
            var t = new egret.gui.UIAsset();
            this.huang_nv = t;
            this.__s(t, ["source", "x", "y"], ["frier_huang", 328, 582]);
            return t;
        };
        CreateHeroSkin.prototype.lan_daoshi_i = function () {
            var t = new egret.gui.UIAsset();
            this.lan_daoshi = t;
            this.__s(t, ["source", "x", "y"], ["frier_lan", 415, 680]);
            return t;
        };
        CreateHeroSkin.prototype.lan_fashi_i = function () {
            var t = new egret.gui.UIAsset();
            this.lan_fashi = t;
            this.__s(t, ["source", "x", "y"], ["frier_lan", 217, 680]);
            return t;
        };
        CreateHeroSkin.prototype.lan_zhanshi_i = function () {
            var t = new egret.gui.UIAsset();
            this.lan_zhanshi = t;
            this.__s(t, ["source", "x", "y"], ["frier_lan", 17, 679]);
            return t;
        };
        CreateHeroSkin.prototype.btn_changename_i = function () {
            var t = new egret.gui.UIAsset();
            this.btn_changename = t;
            this.__s(t, ["source", "x", "y"], ["change_heroname", 524, 770]);
            return t;
        };
        CreateHeroSkin.prototype.wenzi_nan_i = function () {
            var t = new egret.gui.UIAsset();
            this.wenzi_nan = t;
            this.__s(t, ["source", "x", "y"], ["wenzi_nan", 207, 608]);
            return t;
        };
        CreateHeroSkin.prototype.wenzi_nv_i = function () {
            var t = new egret.gui.UIAsset();
            this.wenzi_nv = t;
            this.__s(t, ["source", "x", "y"], ["wenzi_nv", 414, 607]);
            return t;
        };
        CreateHeroSkin._skinParts = ["huang_nv", "huang_nan", "lan_zhanshi", "lan_fashi", "lan_daoshi", "btn_create", "btn_daoshi", "btn_fashi", "btn_nan", "btn_nv", "btn_zhanshi", "btn_changename", "hero_bg", "hero_name", "wenzi_nan", "wenzi_nv", "hero_zhanshi", "creat_text_1", "creat_text_2", "creat_text_3"];
        return CreateHeroSkin;
    })(egret.gui.Skin);
    skins.CreateHeroSkin = CreateHeroSkin;
    CreateHeroSkin.prototype.__class__ = "skins.CreateHeroSkin";
})(skins || (skins = {}));
