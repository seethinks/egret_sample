var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var skins;
(function (skins) {
    var EqptSelectListSkin = (function (_super) {
        __extends(EqptSelectListSkin, _super);
        function EqptSelectListSkin() {
            _super.call(this);
            this.__s = egret.gui.setProperties;
            this.__s(this, ["height", "width"], [160, 495]);
            this.elementsContent = [this.__3_i(), this._item_icon_i(), this._label_shuxing_i(), this._label_buwei_i(), this._check_i()];
            this.states = [
                new egret.gui.State("normal", [
                ]),
                new egret.gui.State("disabled", [
                ])
            ];
        }
        Object.defineProperty(EqptSelectListSkin.prototype, "skinParts", {
            get: function () {
                return EqptSelectListSkin._skinParts;
            },
            enumerable: true,
            configurable: true
        });
        EqptSelectListSkin.prototype._check_i = function () {
            var t = new UICheckBox();
            this._check = t;
            this.__s(t, ["label", "skinName", "x", "y"], ["复选框", skins.SkillCheckSkin, 393, 59]);
            return t;
        };
        EqptSelectListSkin.prototype._item_icon_i = function () {
            var t = new UIIcon();
            this._item_icon = t;
            this.__s(t, ["skinName", "x", "y"], [skins.IconSkin, 18, 14]);
            return t;
        };
        EqptSelectListSkin.prototype._label_buwei_i = function () {
            var t = new egret.gui.Label();
            this._label_buwei = t;
            this.__s(t, ["height", "size", "textAlign", "textColor", "width", "x", "y"], [23, 20, "right", 10983232, 125, 356, 15]);
            return t;
        };
        EqptSelectListSkin.prototype._label_shuxing_i = function () {
            var t = new egret.gui.Label();
            this._label_shuxing = t;
            this.__s(t, ["height", "size", "textColor", "width", "x", "y"], [130, 16, 16777215, 216, 136, 15]);
            return t;
        };
        EqptSelectListSkin.prototype.__3_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["height", "scale9Grid", "source", "width", "x", "y"], [160, egret.gui.getScale9Grid("59,21,355,64"), "my_panel_2", 496, 0, 0]);
            return t;
        };
        EqptSelectListSkin._skinParts = ["_item_icon", "_label_shuxing", "_label_buwei", "_check"];
        return EqptSelectListSkin;
    })(egret.gui.Skin);
    skins.EqptSelectListSkin = EqptSelectListSkin;
    EqptSelectListSkin.prototype.__class__ = "skins.EqptSelectListSkin";
})(skins || (skins = {}));
