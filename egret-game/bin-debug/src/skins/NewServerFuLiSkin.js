var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var skins;
(function (skins) {
    var NewServerFuLiSkin = (function (_super) {
        __extends(NewServerFuLiSkin, _super);
        function NewServerFuLiSkin() {
            _super.call(this);
            this.__s = egret.gui.setProperties;
            this.__s(this, ["height", "width"], [619, 549]);
            this.elementsContent = [this.__3_i(), this.__4_i(), this._labels_i()];
            this.states = [
                new egret.gui.State("normal", [
                ]),
                new egret.gui.State("disabled", [
                ])
            ];
        }
        Object.defineProperty(NewServerFuLiSkin.prototype, "skinParts", {
            get: function () {
                return NewServerFuLiSkin._skinParts;
            },
            enumerable: true,
            configurable: true
        });
        NewServerFuLiSkin.prototype.__4_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["height", "scale9Grid", "source", "width", "x", "y"], [44, egret.gui.getScale9Grid("59,21,355,64"), "my_panel_4", 549, 0, 0]);
            return t;
        };
        NewServerFuLiSkin.prototype._labels_i = function () {
            var t = new egret.gui.Label();
            this._labels = t;
            this.__s(t, ["height", "size", "text", "textAlign", "textColor", "verticalAlign", "width", "x", "y"], [27, 21, "新服前五天，天天有惊喜!", "center", 586641, "middle", 537, 5, 7]);
            return t;
        };
        NewServerFuLiSkin.prototype.__3_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["height", "scale9Grid", "source", "width", "x", "y"], [572, egret.gui.getScale9Grid("59,21,355,64"), "my_panel_4", 549, 0, 48]);
            return t;
        };
        NewServerFuLiSkin._skinParts = ["_labels"];
        return NewServerFuLiSkin;
    })(egret.gui.Skin);
    skins.NewServerFuLiSkin = NewServerFuLiSkin;
    NewServerFuLiSkin.prototype.__class__ = "skins.NewServerFuLiSkin";
})(skins || (skins = {}));
