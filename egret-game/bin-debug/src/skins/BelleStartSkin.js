var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var skins;
(function (skins) {
    var BelleStartSkin = (function (_super) {
        __extends(BelleStartSkin, _super);
        function BelleStartSkin() {
            _super.call(this);
            this.__s = egret.gui.setProperties;
            this.__s(this, ["height", "width"], [531, 519]);
            this.elementsContent = [this.__3_i(), this.__4_i(), this.__5_i(), this._btn_uplevel_i(), this._btn_uplevelall_i(), this.__6_i(), this._start_group_i(), this.__8_i(), this._title_exp_i(), this._label_prop0_i(), this._label_prop1_i(), this._label_desc_i(), this._f1_i(), this._f4_i(), this._f3_i(), this._f2_i(), this.__9_i(), this.__10_i(), this.__11_i(), this.__12_i(), this._label_exp_i(), this._icon1_i(), this._icon4_i(), this._icon3_i(), this._icon2_i(), this._count2_i(), this._count1_i(), this._count3_i(), this._count4_i(), this.__13_i()];
            this.states = [
                new egret.gui.State("normal", [
                ]),
                new egret.gui.State("disabled", [
                ])
            ];
        }
        Object.defineProperty(BelleStartSkin.prototype, "skinParts", {
            get: function () {
                return BelleStartSkin._skinParts;
            },
            enumerable: true,
            configurable: true
        });
        BelleStartSkin.prototype.__11_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["source", "x", "y"], ["start_icon_bgimg", 270, 336]);
            return t;
        };
        BelleStartSkin.prototype.__12_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["source", "x", "y"], ["start_icon_bgimg", 374, 336]);
            return t;
        };
        BelleStartSkin.prototype.__13_i = function () {
            var t = new egret.gui.Label();
            this.__s(t, ["height", "horizontalCenter", "size", "text", "textAlign", "textColor", "verticalAlign", "width", "y"], [20, 0.5, 16, "升星道具可通过商城和贡献兑换商店获得", "center", 456594, "middle", 426, 431]);
            return t;
        };
        BelleStartSkin.prototype.__3_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["height", "scale9Grid", "source", "width", "x", "y"], [308, egret.gui.getScale9Grid("59,21,355,64"), "my_panel_4", 519, 0, 153]);
            return t;
        };
        BelleStartSkin.prototype.__4_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["height", "scale9Grid", "source", "width", "x", "y"], [147, egret.gui.getScale9Grid("59,21,355,64"), "my_panel_4", 519, 0, 0]);
            return t;
        };
        BelleStartSkin.prototype.__5_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["horizontalCenter", "source", "y"], [0, "start_bgimg", 284]);
            return t;
        };
        BelleStartSkin.prototype.__6_i = function () {
            var t = new egret.gui.Label();
            this.__s(t, ["bold", "size", "text", "textColor", "width", "x", "y"], [true, 17, "当前星级：", 65280, 97, 10, 173]);
            return t;
        };
        BelleStartSkin.prototype.__7_i = function () {
            var t = new egret.gui.HorizontalLayout();
            return t;
        };
        BelleStartSkin.prototype.__8_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["horizontalCenter", "source", "y"], [0, "start_exp_bgimg", 216]);
            return t;
        };
        BelleStartSkin.prototype.__9_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["source", "x", "y"], ["start_icon_bgimg", 66, 336]);
            return t;
        };
        BelleStartSkin.prototype._btn_uplevel_i = function () {
            var t = new egret.gui.Button();
            this._btn_uplevel = t;
            this.__s(t, ["label", "skinName", "x", "y"], ["立即升星", skins.ButtonRedSkin, 45, 479]);
            return t;
        };
        BelleStartSkin.prototype._btn_uplevelall_i = function () {
            var t = new egret.gui.Button();
            this._btn_uplevelall = t;
            this.__s(t, ["label", "skinName", "x", "y"], ["一键升星", skins.ButtonRedSkin, 327, 479]);
            return t;
        };
        BelleStartSkin.prototype._count1_i = function () {
            var t = new egret.gui.Label();
            this._count1 = t;
            this.__s(t, ["bold", "height", "size", "textAlign", "textColor", "width", "x", "y"], [true, 23, 16, "right", 0xFFFFFF, 66, 77, 391]);
            return t;
        };
        BelleStartSkin.prototype._count2_i = function () {
            var t = new egret.gui.Label();
            this._count2 = t;
            this.__s(t, ["bold", "height", "size", "textAlign", "textColor", "width", "x", "y"], [true, 23, 16, "right", 16777215, 66, 178, 391]);
            return t;
        };
        BelleStartSkin.prototype._count3_i = function () {
            var t = new egret.gui.Label();
            this._count3 = t;
            this.__s(t, ["bold", "height", "size", "textAlign", "textColor", "width", "x", "y"], [true, 23, 16, "right", 0xFFFFFF, 66, 281, 391]);
            return t;
        };
        BelleStartSkin.prototype._count4_i = function () {
            var t = new egret.gui.Label();
            this._count4 = t;
            this.__s(t, ["bold", "height", "size", "textAlign", "textColor", "width", "x", "y"], [true, 23, 16, "right", 0xFFFFFF, 66, 385, 391]);
            return t;
        };
        BelleStartSkin.prototype._f1_i = function () {
            var t = new egret.gui.UIAsset();
            this._f1 = t;
            this.__s(t, ["height", "source", "width", "x", "y"], [101, "frier_huang", 97, 59, 326]);
            return t;
        };
        BelleStartSkin.prototype._f2_i = function () {
            var t = new egret.gui.UIAsset();
            this._f2 = t;
            this.__s(t, ["height", "source", "width", "x", "y"], [101, "frier_huang", 97, 159, 326]);
            return t;
        };
        BelleStartSkin.prototype._f3_i = function () {
            var t = new egret.gui.UIAsset();
            this._f3 = t;
            this.__s(t, ["height", "source", "width", "x", "y"], [101, "frier_huang", 97, 262, 326]);
            return t;
        };
        BelleStartSkin.prototype._f4_i = function () {
            var t = new egret.gui.UIAsset();
            this._f4 = t;
            this.__s(t, ["height", "source", "width", "x", "y"], [101, "frier_huang", 97, 367, 326]);
            return t;
        };
        BelleStartSkin.prototype._icon1_i = function () {
            var t = new egret.gui.UIAsset();
            this._icon1 = t;
            this.__s(t, ["height", "width", "x", "y"], [68, 67, 73, 343]);
            return t;
        };
        BelleStartSkin.prototype._icon2_i = function () {
            var t = new egret.gui.UIAsset();
            this._icon2 = t;
            this.__s(t, ["height", "width", "x", "y"], [68, 67, 174, 343]);
            return t;
        };
        BelleStartSkin.prototype._icon3_i = function () {
            var t = new egret.gui.UIAsset();
            this._icon3 = t;
            this.__s(t, ["height", "width", "x", "y"], [68, 67, 277, 343]);
            return t;
        };
        BelleStartSkin.prototype._icon4_i = function () {
            var t = new egret.gui.UIAsset();
            this._icon4 = t;
            this.__s(t, ["height", "width", "x", "y"], [68, 67, 381, 343]);
            return t;
        };
        BelleStartSkin.prototype._label_desc_i = function () {
            var t = new egret.gui.Label();
            this._label_desc = t;
            this.__s(t, ["bold", "height", "horizontalCenter", "size", "textAlign", "textColor", "verticalAlign", "width", "y"], [true, 35, 0, 19, "center", 16123233, "middle", 497, 284]);
            return t;
        };
        BelleStartSkin.prototype._label_exp_i = function () {
            var t = new egret.gui.Label();
            this._label_exp = t;
            this.__s(t, ["bold", "height", "horizontalCenter", "size", "textAlign", "textColor", "verticalAlign", "width", "y"], [true, 28, 0, 19, "center", 16777215, "middle", 497, 224]);
            return t;
        };
        BelleStartSkin.prototype._label_prop0_i = function () {
            var t = new egret.gui.Label();
            this._label_prop0 = t;
            this.__s(t, ["height", "size", "textColor", "verticalAlign", "width", "x", "y"], [123, 20, 195003, "middle", 239, 15, 11]);
            return t;
        };
        BelleStartSkin.prototype._label_prop1_i = function () {
            var t = new egret.gui.Label();
            this._label_prop1 = t;
            this.__s(t, ["height", "size", "textColor", "verticalAlign", "width", "x", "y"], [123, 20, 0x02F9BB, "middle", 262, 257, 11]);
            return t;
        };
        BelleStartSkin.prototype._start_group_i = function () {
            var t = new egret.gui.Group();
            this._start_group = t;
            this.__s(t, ["height", "horizontalCenter", "width", "y"], [25, -25.5, 278, 173]);
            t.layout = this.__7_i();
            t.elementsContent = [this.belle_start1_i(), this.belle_start2_i(), this.belle_start3_i(), this.belle_start4_i(), this.belle_start5_i(), this.belle_start6_i(), this.belle_start7_i(), this.belle_start8_i(), this.belle_start9_i(), this.belle_start10_i()];
            return t;
        };
        BelleStartSkin.prototype._title_exp_i = function () {
            var t = new egret.gui.UIAsset();
            this._title_exp = t;
            this.__s(t, ["source", "width", "x", "y"], ["start_exp_title", 464, 27, 232]);
            return t;
        };
        BelleStartSkin.prototype.belle_start10_i = function () {
            var t = new egret.gui.UIAsset();
            this.belle_start10 = t;
            this.__s(t, ["source", "x", "y"], ["belle_start_a", 85, 61]);
            return t;
        };
        BelleStartSkin.prototype.belle_start1_i = function () {
            var t = new egret.gui.UIAsset();
            this.belle_start1 = t;
            this.__s(t, ["source", "x", "y"], ["belle_start_a", 147, 96]);
            return t;
        };
        BelleStartSkin.prototype.belle_start2_i = function () {
            var t = new egret.gui.UIAsset();
            this.belle_start2 = t;
            this.__s(t, ["source", "x", "y"], ["belle_start_a", 96, 92]);
            return t;
        };
        BelleStartSkin.prototype.belle_start3_i = function () {
            var t = new egret.gui.UIAsset();
            this.belle_start3 = t;
            this.__s(t, ["source", "x", "y"], ["belle_start_a", 120, 148]);
            return t;
        };
        BelleStartSkin.prototype.belle_start4_i = function () {
            var t = new egret.gui.UIAsset();
            this.belle_start4 = t;
            this.__s(t, ["source", "x", "y"], ["belle_start_a", 61, 126]);
            return t;
        };
        BelleStartSkin.prototype.belle_start5_i = function () {
            var t = new egret.gui.UIAsset();
            this.belle_start5 = t;
            this.__s(t, ["source", "x", "y"], ["belle_start_a", 60, 162]);
            return t;
        };
        BelleStartSkin.prototype.belle_start6_i = function () {
            var t = new egret.gui.UIAsset();
            this.belle_start6 = t;
            this.__s(t, ["source", "x", "y"], ["belle_start_a", 153, 134]);
            return t;
        };
        BelleStartSkin.prototype.belle_start7_i = function () {
            var t = new egret.gui.UIAsset();
            this.belle_start7 = t;
            this.__s(t, ["source", "x", "y"], ["belle_start_a", 96, 137]);
            return t;
        };
        BelleStartSkin.prototype.belle_start8_i = function () {
            var t = new egret.gui.UIAsset();
            this.belle_start8 = t;
            this.__s(t, ["source", "x", "y"], ["belle_start_a", 40, 135]);
            return t;
        };
        BelleStartSkin.prototype.belle_start9_i = function () {
            var t = new egret.gui.UIAsset();
            this.belle_start9 = t;
            this.__s(t, ["source", "x", "y"], ["belle_start_a", 51, 97]);
            return t;
        };
        BelleStartSkin.prototype.__10_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["source", "x", "y"], ["start_icon_bgimg", 167, 336]);
            return t;
        };
        BelleStartSkin._skinParts = ["_btn_uplevel", "_btn_uplevelall", "belle_start1", "belle_start2", "belle_start3", "belle_start4", "belle_start5", "belle_start6", "belle_start7", "belle_start8", "belle_start9", "belle_start10", "_start_group", "_title_exp", "_label_prop0", "_label_prop1", "_label_desc", "_f1", "_f4", "_f3", "_f2", "_label_exp", "_icon1", "_icon4", "_icon3", "_icon2", "_count2", "_count1", "_count3", "_count4"];
        return BelleStartSkin;
    })(egret.gui.Skin);
    skins.BelleStartSkin = BelleStartSkin;
    BelleStartSkin.prototype.__class__ = "skins.BelleStartSkin";
})(skins || (skins = {}));
