var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var skins;
(function (skins) {
    var GameSetSkin = (function (_super) {
        __extends(GameSetSkin, _super);
        function GameSetSkin() {
            _super.call(this);
            this.__s = egret.gui.setProperties;
            this.__s(this, ["height", "width"], [566, 468]);
            this.elementsContent = [this.__3_i(), this.__4_i(), this.gs_btn_cancel_i(), this.gs_btn_save_i(), this.gs_check1_i(), this.gs_check6_i(), this.gs_check5_i(), this.gs_check4_i(), this.gs_check3_i(), this.gs_check2_i()];
            this.states = [
                new egret.gui.State("normal", [
                ]),
                new egret.gui.State("disabled", [
                ])
            ];
        }
        Object.defineProperty(GameSetSkin.prototype, "skinParts", {
            get: function () {
                return GameSetSkin._skinParts;
            },
            enumerable: true,
            configurable: true
        });
        GameSetSkin.prototype.__4_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["horizontalCenter", "source", "y"], [0, "eqpt_sell_bg", 19]);
            return t;
        };
        GameSetSkin.prototype.gs_btn_cancel_i = function () {
            var t = new egret.gui.Button();
            this.gs_btn_cancel = t;
            this.__s(t, ["bottom", "label", "skinName", "x"], [0, "取消保存", skins.ButtonBlueSkin, 53]);
            return t;
        };
        GameSetSkin.prototype.gs_btn_save_i = function () {
            var t = new egret.gui.Button();
            this.gs_btn_save = t;
            this.__s(t, ["bottom", "label", "skinName", "x"], [0, "保存设置", skins.ButtonRedSkin, 267]);
            return t;
        };
        GameSetSkin.prototype.gs_check1_i = function () {
            var t = new GameCheckBox();
            this.gs_check1 = t;
            this.__s(t, ["skinName", "x", "y"], [skins.GameCheckBoxSkin, 408, 61]);
            return t;
        };
        GameSetSkin.prototype.gs_check2_i = function () {
            var t = new GameCheckBox();
            this.gs_check2 = t;
            this.__s(t, ["skinName", "x", "y"], [skins.GameCheckBoxSkin, 408, 119]);
            return t;
        };
        GameSetSkin.prototype.gs_check3_i = function () {
            var t = new GameCheckBox();
            this.gs_check3 = t;
            this.__s(t, ["skinName", "x", "y"], [skins.GameCheckBoxSkin, 408, 179]);
            return t;
        };
        GameSetSkin.prototype.gs_check4_i = function () {
            var t = new GameCheckBox();
            this.gs_check4 = t;
            this.__s(t, ["skinName", "x", "y"], [skins.GameCheckBoxSkin, 408, 235]);
            return t;
        };
        GameSetSkin.prototype.gs_check5_i = function () {
            var t = new GameCheckBox();
            this.gs_check5 = t;
            this.__s(t, ["skinName", "x", "y"], [skins.GameCheckBoxSkin, 408, 289]);
            return t;
        };
        GameSetSkin.prototype.gs_check6_i = function () {
            var t = new GameCheckBox();
            this.gs_check6 = t;
            this.__s(t, ["skinName", "x", "y"], [skins.GameCheckBoxSkin, 408, 407]);
            return t;
        };
        GameSetSkin.prototype.__3_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["height", "scale9Grid", "source", "width", "x", "y"], [498, egret.gui.getScale9Grid("59,21,355,64"), "my_panel_4", 470, -1, 0]);
            return t;
        };
        GameSetSkin._skinParts = ["gs_btn_cancel", "gs_btn_save", "gs_check1", "gs_check6", "gs_check5", "gs_check4", "gs_check3", "gs_check2"];
        return GameSetSkin;
    })(egret.gui.Skin);
    skins.GameSetSkin = GameSetSkin;
    GameSetSkin.prototype.__class__ = "skins.GameSetSkin";
})(skins || (skins = {}));
