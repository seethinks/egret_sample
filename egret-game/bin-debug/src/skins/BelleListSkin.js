var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var skins;
(function (skins) {
    var BelleListSkin = (function (_super) {
        __extends(BelleListSkin, _super);
        function BelleListSkin() {
            _super.call(this);
            this.__s = egret.gui.setProperties;
            this.__s(this, ["height", "width"], [118, 634]);
            this.elementsContent = [this.__3_i(), this._group_i(), this._labels_i()];
            this.states = [
                new egret.gui.State("normal", [
                ]),
                new egret.gui.State("disabled", [
                ])
            ];
        }
        Object.defineProperty(BelleListSkin.prototype, "skinParts", {
            get: function () {
                return BelleListSkin._skinParts;
            },
            enumerable: true,
            configurable: true
        });
        BelleListSkin.prototype.__4_i = function () {
            var t = new egret.gui.HorizontalLayout();
            t.horizontalAlign = "center";
            return t;
        };
        BelleListSkin.prototype._group_i = function () {
            var t = new egret.gui.Group();
            this._group = t;
            this.__s(t, ["height", "width", "x", "y"], [97, 619, 7, 10]);
            t.layout = this.__4_i();
            return t;
        };
        BelleListSkin.prototype._labels_i = function () {
            var t = new egret.gui.Label();
            this._labels = t;
            this.__s(t, ["horizontalCenter", "size", "text", "textAlign", "textColor", "verticalAlign", "verticalCenter", "width"], [0, 21, "暂无可布阵美人（出战中的美人不可布阵）", "center", 391335, "middle", 0.5, 586]);
            return t;
        };
        BelleListSkin.prototype.__3_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["height", "scale9Grid", "source", "width", "x", "y"], [118, egret.gui.getScale9Grid("59,21,355,64"), "my_panel_4", 634, 0, 0]);
            return t;
        };
        BelleListSkin._skinParts = ["_group", "_labels"];
        return BelleListSkin;
    })(egret.gui.Skin);
    skins.BelleListSkin = BelleListSkin;
    BelleListSkin.prototype.__class__ = "skins.BelleListSkin";
})(skins || (skins = {}));
