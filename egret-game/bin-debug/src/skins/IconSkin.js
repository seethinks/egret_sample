var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var skins;
(function (skins) {
    var IconSkin = (function (_super) {
        __extends(IconSkin, _super);
        function IconSkin() {
            _super.call(this);
            this.__s = egret.gui.setProperties;
            this.__s(this, ["height", "width"], [127, 105]);
            this.elementsContent = [this._icon_i(), this._quality_i(), this._labels_i(), this._items_i(), this._count_i(), this._eqpetName_i(), this._strength_i(), this._newEqpt_i(), this._effect_i(), this._group_i()];
            this.states = [
                new egret.gui.State("up", [
                ]),
                new egret.gui.State("over", [
                ]),
                new egret.gui.State("down", [
                ]),
                new egret.gui.State("disabled", [
                ])
            ];
        }
        Object.defineProperty(IconSkin.prototype, "skinParts", {
            get: function () {
                return IconSkin._skinParts;
            },
            enumerable: true,
            configurable: true
        });
        IconSkin.prototype._count_i = function () {
            var t = new egret.gui.Label();
            this._count = t;
            this.__s(t, ["bottom", "height", "right", "size", "textAlign", "textColor", "verticalAlign", "width"], [30, 20, 10, 18, "right", 16777215, "middle", 84]);
            return t;
        };
        IconSkin.prototype._effect_i = function () {
            var t = new egret.gui.UIAsset();
            this._effect = t;
            this.__s(t, ["x", "y"], [0, 0]);
            return t;
        };
        IconSkin.prototype._eqpetName_i = function () {
            var t = new egret.gui.Label();
            this._eqpetName = t;
            this.__s(t, ["bold", "bottom", "height", "horizontalCenter", "size", "textAlign", "textColor", "verticalAlign", "width"], [true, 0, 21, 0, 16, "center", 16777215, "middle", 103]);
            return t;
        };
        IconSkin.prototype._group_i = function () {
            var t = new egret.gui.Group();
            this._group = t;
            this.__s(t, ["bottom", "height", "horizontalCenter", "width"], [29, 21, 0, 93]);
            t.layout = this.__5_i();
            return t;
        };
        IconSkin.prototype._icon_i = function () {
            var t = new egret.gui.UIAsset();
            this._icon = t;
            this.__s(t, ["bottom", "left", "right", "source", "top"], [21, 0, 0, "icon_bg", 0]);
            return t;
        };
        IconSkin.prototype._items_i = function () {
            var t = new egret.gui.UIAsset();
            this._items = t;
            this.__s(t, ["bottom", "left", "right", "source", "top"], [33, 10, 11, "test_icon", 8]);
            return t;
        };
        IconSkin.prototype._labels_i = function () {
            var t = new egret.gui.Label();
            this._labels = t;
            this.__s(t, ["height", "horizontalCenter", "size", "textAlign", "textColor", "verticalAlign", "verticalCenter", "width"], [39, 0.5, 16, "center", 12498614, "middle", -11, 88]);
            return t;
        };
        IconSkin.prototype._newEqpt_i = function () {
            var t = new egret.gui.UIAsset();
            this._newEqpt = t;
            this.__s(t, ["height", "horizontalCenter", "source", "verticalCenter", "width"], [48, 0, "btn_new_event", -8.5, 47]);
            return t;
        };
        IconSkin.prototype._quality_i = function () {
            var t = new egret.gui.UIAsset();
            this._quality = t;
            this.__s(t, ["bottom", "left", "right", "source", "top"], [21, 0, 0, "test_icon", 0]);
            return t;
        };
        IconSkin.prototype._strength_i = function () {
            var t = new egret.gui.Label();
            this._strength = t;
            this.__s(t, ["height", "right", "size", "textAlign", "textColor", "top", "width"], [29, 12, 23, "right", 16777215, 9, 61]);
            return t;
        };
        IconSkin.prototype.__5_i = function () {
            var t = new egret.gui.HorizontalLayout();
            this.__s(t, ["gap", "horizontalAlign"], [0, "center"]);
            return t;
        };
        IconSkin._skinParts = ["_icon", "_quality", "_labels", "_items", "_count", "_eqpetName", "_strength", "_newEqpt", "_effect", "_group"];
        return IconSkin;
    })(egret.gui.Skin);
    skins.IconSkin = IconSkin;
    IconSkin.prototype.__class__ = "skins.IconSkin";
})(skins || (skins = {}));
