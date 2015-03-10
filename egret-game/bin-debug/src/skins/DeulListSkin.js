var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var skins;
(function (skins) {
    var DeulListSkin = (function (_super) {
        __extends(DeulListSkin, _super);
        function DeulListSkin() {
            _super.call(this);
            this.__s = egret.gui.setProperties;
            this.__s(this, ["height", "width"], [145, 533]);
            this.elementsContent = [this.__3_i(), this.deul_img_head_i(), this.deul_img_job_i(), this.deul_label_name_i(), this.deul_btn_change_i(), this.rank_img_bg_i(), this.rank_img_i(), this.deul_label_level_i()];
            this.states = [
                new egret.gui.State("normal", [
                ]),
                new egret.gui.State("disabled", [
                ])
            ];
        }
        Object.defineProperty(DeulListSkin.prototype, "skinParts", {
            get: function () {
                return DeulListSkin._skinParts;
            },
            enumerable: true,
            configurable: true
        });
        DeulListSkin.prototype.deul_btn_change_i = function () {
            var t = new egret.gui.UIAsset();
            this.deul_btn_change = t;
            this.__s(t, ["source", "x", "y"], ["deul_btn_challenge", 429, 17]);
            return t;
        };
        DeulListSkin.prototype.deul_img_head_i = function () {
            var t = new egret.gui.UIAsset();
            this.deul_img_head = t;
            this.__s(t, ["x", "y"], [21, 30]);
            return t;
        };
        DeulListSkin.prototype.deul_img_job_i = function () {
            var t = new egret.gui.UIAsset();
            this.deul_img_job = t;
            this.__s(t, ["x", "y"], [-5, 85]);
            return t;
        };
        DeulListSkin.prototype.deul_label_level_i = function () {
            var t = new egret.gui.Label();
            this.deul_label_level = t;
            this.__s(t, ["height", "size", "text", "textAlign", "textColor", "verticalAlign", "width", "x", "y"], [20, 16, "Lv.99", "center", 13825798, "bottom", 83, 22, 117]);
            return t;
        };
        DeulListSkin.prototype.deul_label_name_i = function () {
            var t = new egret.gui.Label();
            this.deul_label_name = t;
            this.__s(t, ["height", "size", "text", "textColor", "width", "x", "y"], [108, 16, "PK不乱发型【杀杀人，跳跳舞】", 16777215, 373, 141, 18]);
            return t;
        };
        DeulListSkin.prototype.rank_img_bg_i = function () {
            var t = new egret.gui.UIAsset();
            this.rank_img_bg = t;
            this.__s(t, ["height", "source", "width", "x", "y"], [74, "player_head_bg", 75, 426, 36]);
            return t;
        };
        DeulListSkin.prototype.rank_img_i = function () {
            var t = new egret.gui.UIAsset();
            this.rank_img = t;
            this.__s(t, ["x", "y"], [432, 42]);
            return t;
        };
        DeulListSkin.prototype.__3_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["source", "x", "y"], ["deul_list_bg", 0, 5]);
            return t;
        };
        DeulListSkin._skinParts = ["deul_img_head", "deul_img_job", "deul_label_name", "deul_btn_change", "rank_img_bg", "rank_img", "deul_label_level"];
        return DeulListSkin;
    })(egret.gui.Skin);
    skins.DeulListSkin = DeulListSkin;
    DeulListSkin.prototype.__class__ = "skins.DeulListSkin";
})(skins || (skins = {}));
