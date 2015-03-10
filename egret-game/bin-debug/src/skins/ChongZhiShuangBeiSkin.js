var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var skins;
(function (skins) {
    var ChongZhiShuangBeiSkin = (function (_super) {
        __extends(ChongZhiShuangBeiSkin, _super);
        function ChongZhiShuangBeiSkin() {
            _super.call(this);
            this.__s = egret.gui.setProperties;
            this.__s(this, ["height", "width"], [406, 545]);
            this.elementsContent = [this.__3_i(), this.__4_i(), this.__5_i(), this._btn_i(), this._label_time_i()];
            this.states = [
                new egret.gui.State("normal", [
                ]),
                new egret.gui.State("disabled", [
                ])
            ];
        }
        Object.defineProperty(ChongZhiShuangBeiSkin.prototype, "skinParts", {
            get: function () {
                return ChongZhiShuangBeiSkin._skinParts;
            },
            enumerable: true,
            configurable: true
        });
        ChongZhiShuangBeiSkin.prototype.__4_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["source", "x", "y"], ["chongzhishuangbei", 7, 59]);
            return t;
        };
        ChongZhiShuangBeiSkin.prototype.__5_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["height", "scale9Grid", "source", "width", "x", "y"], [43, egret.gui.getScale9Grid("59,21,355,64"), "my_panel_4", 545, 1, 0]);
            return t;
        };
        ChongZhiShuangBeiSkin.prototype._btn_i = function () {
            var t = new egret.gui.Button();
            this._btn = t;
            this.__s(t, ["label", "skinName", "x", "y"], ["前往充值", skins.ButtonRedSkin, 197, 293]);
            return t;
        };
        ChongZhiShuangBeiSkin.prototype._label_time_i = function () {
            var t = new egret.gui.Label();
            this._label_time = t;
            this.__s(t, ["height", "horizontalCenter", "size", "text", "textAlign", "textColor", "verticalAlign", "width", "y"], [24, 0, 20, "2015-01-09  00：00 至 2015-01-11  23：00", "center", 457890, "middle", 527, 8]);
            return t;
        };
        ChongZhiShuangBeiSkin.prototype.__3_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["height", "scale9Grid", "source", "width", "x", "y"], [354, egret.gui.getScale9Grid("59,21,355,64"), "my_panel_4", 545, 0, 52]);
            return t;
        };
        ChongZhiShuangBeiSkin._skinParts = ["_btn", "_label_time"];
        return ChongZhiShuangBeiSkin;
    })(egret.gui.Skin);
    skins.ChongZhiShuangBeiSkin = ChongZhiShuangBeiSkin;
    ChongZhiShuangBeiSkin.prototype.__class__ = "skins.ChongZhiShuangBeiSkin";
})(skins || (skins = {}));
