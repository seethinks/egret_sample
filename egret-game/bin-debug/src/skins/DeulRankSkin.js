var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var skins;
(function (skins) {
    var DeulRankSkin = (function (_super) {
        __extends(DeulRankSkin, _super);
        function DeulRankSkin() {
            _super.call(this);
            this.__s = egret.gui.setProperties;
            this.__s(this, ["height", "width"], [674, 553]);
            this.elementsContent = [this.__3_i(), this.__4_i(), this.rank_labels_i(), this._btn_refrsh_i()];
            this.states = [
                new egret.gui.State("normal", [
                ]),
                new egret.gui.State("disabled", [
                ])
            ];
        }
        Object.defineProperty(DeulRankSkin.prototype, "skinParts", {
            get: function () {
                return DeulRankSkin._skinParts;
            },
            enumerable: true,
            configurable: true
        });
        DeulRankSkin.prototype.__4_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["height", "horizontalCenter", "scale9Grid", "source", "width", "y"], [56, 0, egret.gui.getScale9Grid("59,21,355,64"), "my_panel_4", 515, 0]);
            return t;
        };
        DeulRankSkin.prototype._btn_refrsh_i = function () {
            var t = new egret.gui.Button();
            this._btn_refrsh = t;
            this.__s(t, ["horizontalCenter", "label", "skinName", "y"], [0, "刷  新", skins.ButtonBlueSkin, 621]);
            return t;
        };
        DeulRankSkin.prototype.rank_labels_i = function () {
            var t = new egret.gui.Label();
            this.rank_labels = t;
            this.__s(t, ["size", "text", "textAlign", "textColor", "verticalAlign", "width", "x", "y"], [16, "竞技场前20名英雄", "center", 1882601, "middle", 535, 10, 16]);
            return t;
        };
        DeulRankSkin.prototype.__3_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["height", "scale9Grid", "source", "width", "x", "y"], [553, egret.gui.getScale9Grid("59,21,355,64"), "my_panel_4", 553, 0, 62]);
            return t;
        };
        DeulRankSkin._skinParts = ["rank_labels", "_btn_refrsh"];
        return DeulRankSkin;
    })(egret.gui.Skin);
    skins.DeulRankSkin = DeulRankSkin;
    DeulRankSkin.prototype.__class__ = "skins.DeulRankSkin";
})(skins || (skins = {}));
