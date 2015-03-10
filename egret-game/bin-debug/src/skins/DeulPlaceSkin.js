var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var skins;
(function (skins) {
    var DeulPlaceSkin = (function (_super) {
        __extends(DeulPlaceSkin, _super);
        function DeulPlaceSkin() {
            _super.call(this);
            this.__s = egret.gui.setProperties;
            this.__s(this, ["height", "width"], [720, 607]);
            this.elementsContent = [this.__3_i(), this.__4_i(), this.deul_btn_rank_i(), this.deul_btn_exchange_i(), this.deul_head_i(), this.deul_label_name_i(), this.deul_label_names_i(), this.__5_i(), this.deul_btn_buy_i(), this.deul_btn_huan_i(), this.deul_label_num_i()];
            this.states = [
                new egret.gui.State("normal", [
                ]),
                new egret.gui.State("disabled", [
                ])
            ];
        }
        Object.defineProperty(DeulPlaceSkin.prototype, "skinParts", {
            get: function () {
                return DeulPlaceSkin._skinParts;
            },
            enumerable: true,
            configurable: true
        });
        DeulPlaceSkin.prototype.__4_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["source", "x", "y"], ["deul_btn_jingji", 16, 0]);
            return t;
        };
        DeulPlaceSkin.prototype.__5_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["height", "scale9Grid", "source", "width", "x", "y"], [448, egret.gui.getScale9Grid("59,21,355,64"), "my_panel_4", 553, 23, 187]);
            return t;
        };
        DeulPlaceSkin.prototype.deul_btn_buy_i = function () {
            var t = new egret.gui.Button();
            this.deul_btn_buy = t;
            this.__s(t, ["label", "skinName", "x", "y"], ["购买次数", skins.ButtonYellowSkin, 269, 666]);
            return t;
        };
        DeulPlaceSkin.prototype.deul_btn_exchange_i = function () {
            var t = new egret.gui.UIAsset();
            this.deul_btn_exchange = t;
            this.__s(t, ["source", "x", "y"], ["deul_btn_duihuan", 298, 7]);
            return t;
        };
        DeulPlaceSkin.prototype.deul_btn_huan_i = function () {
            var t = new egret.gui.Button();
            this.deul_btn_huan = t;
            this.__s(t, ["label", "skinName", "x", "y"], ["换一批", skins.ButtonBlueSkin, 422, 665]);
            return t;
        };
        DeulPlaceSkin.prototype.deul_btn_rank_i = function () {
            var t = new egret.gui.UIAsset();
            this.deul_btn_rank = t;
            this.__s(t, ["source", "x", "y"], ["deul_btn_paihang", 157, 7]);
            return t;
        };
        DeulPlaceSkin.prototype.deul_head_i = function () {
            var t = new egret.gui.UIAsset();
            this.deul_head = t;
            this.__s(t, ["x", "y"], [30, 72]);
            return t;
        };
        DeulPlaceSkin.prototype.deul_label_name_i = function () {
            var t = new egret.gui.Label();
            this.deul_label_name = t;
            this.__s(t, ["height", "size", "textColor", "width", "x", "y"], [64, 18, 16777215, 418, 140, 95]);
            return t;
        };
        DeulPlaceSkin.prototype.deul_label_names_i = function () {
            var t = new egret.gui.Label();
            this.deul_label_names = t;
            this.__s(t, ["height", "size", "textColor", "width", "x", "y"], [23, 18, 0xFFFFFF, 418, 140, 71]);
            return t;
        };
        DeulPlaceSkin.prototype.deul_label_num_i = function () {
            var t = new egret.gui.Label();
            this.deul_label_num = t;
            this.__s(t, ["size", "text", "textColor", "width", "x", "y"], [22, "今日剩余挑战次数：3", 16777215, 222, 23, 676]);
            return t;
        };
        DeulPlaceSkin.prototype.__3_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["source", "x", "y"], ["deul_bgImg", 0, 52]);
            return t;
        };
        DeulPlaceSkin._skinParts = ["deul_btn_rank", "deul_btn_exchange", "deul_head", "deul_label_name", "deul_label_names", "deul_btn_buy", "deul_btn_huan", "deul_label_num"];
        return DeulPlaceSkin;
    })(egret.gui.Skin);
    skins.DeulPlaceSkin = DeulPlaceSkin;
    DeulPlaceSkin.prototype.__class__ = "skins.DeulPlaceSkin";
})(skins || (skins = {}));
