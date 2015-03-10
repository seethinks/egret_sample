var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var skins;
(function (skins) {
    var GemCheckSkin = (function (_super) {
        __extends(GemCheckSkin, _super);
        function GemCheckSkin() {
            _super.call(this);
            this.__s = egret.gui.setProperties;
            this.__s(this, ["height", "width"], [600, 470]);
            this.elementsContent = [this.__3_i(), this.__4_i(), this.xq_label_explain_i()];
            this.states = [
                new egret.gui.State("normal", [
                ]),
                new egret.gui.State("disabled", [
                ])
            ];
        }
        Object.defineProperty(GemCheckSkin.prototype, "skinParts", {
            get: function () {
                return GemCheckSkin._skinParts;
            },
            enumerable: true,
            configurable: true
        });
        GemCheckSkin.prototype.__4_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["height", "horizontalCenter", "scale9Grid", "source", "width", "y"], [536, 0, egret.gui.getScale9Grid("59,21,355,64"), "my_panel_4", 470, 64]);
            return t;
        };
        GemCheckSkin.prototype.__3_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["height", "horizontalCenter", "scale9Grid", "source", "width", "y"], [57, 0, egret.gui.getScale9Grid("59,21,355,64"), "my_panel_4", 470, 0]);
            return t;
        };
        GemCheckSkin.prototype.xq_label_explain_i = function () {
            var t = new egret.gui.Label();
            this.xq_label_explain = t;
            this.__s(t, ["height", "horizontalCenter", "size", "text", "textAlign", "textColor", "verticalAlign", "width", "y"], [32, 0, 18, "点击你想要的宝石即可镶嵌到装备", "center", 0x32FF00, "middle", 430, 15]);
            return t;
        };
        GemCheckSkin._skinParts = ["xq_label_explain"];
        return GemCheckSkin;
    })(egret.gui.Skin);
    skins.GemCheckSkin = GemCheckSkin;
    GemCheckSkin.prototype.__class__ = "skins.GemCheckSkin";
})(skins || (skins = {}));
