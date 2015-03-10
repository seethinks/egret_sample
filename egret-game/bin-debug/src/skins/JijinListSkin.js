var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var skins;
(function (skins) {
    var JijinListSkin = (function (_super) {
        __extends(JijinListSkin, _super);
        function JijinListSkin() {
            _super.call(this);
            this.__s = egret.gui.setProperties;
            this.__s(this, ["height", "width"], [128, 516]);
            this.elementsContent = [this.__3_i(), this._icon_i(), this._labels_i(), this._btn_i()];
            this.states = [
                new egret.gui.State("normal", [
                ]),
                new egret.gui.State("disabled", [
                ])
            ];
        }
        Object.defineProperty(JijinListSkin.prototype, "skinParts", {
            get: function () {
                return JijinListSkin._skinParts;
            },
            enumerable: true,
            configurable: true
        });
        JijinListSkin.prototype._btn_i = function () {
            var t = new egret.gui.UIAsset();
            this._btn = t;
            this.__s(t, ["source", "x", "y"], ["jijin_ling", 401, 41]);
            return t;
        };
        JijinListSkin.prototype._icon_i = function () {
            var t = new UIIcon();
            this._icon = t;
            this.__s(t, ["height", "skinName", "width", "x", "y"], [99, skins.IconSkin, 81, 13, 20]);
            return t;
        };
        JijinListSkin.prototype._labels_i = function () {
            var t = new egret.gui.Label();
            this._labels = t;
            this.__s(t, ["height", "size", "textColor", "width", "x", "y"], [93, 18, 260494, 291, 102, 20]);
            return t;
        };
        JijinListSkin.prototype.__3_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["height", "scale9Grid", "source", "width", "x", "y"], [128, egret.gui.getScale9Grid("56,17,340,102"), "my_panel_3", 517, 0, 0]);
            return t;
        };
        JijinListSkin._skinParts = ["_icon", "_labels", "_btn"];
        return JijinListSkin;
    })(egret.gui.Skin);
    skins.JijinListSkin = JijinListSkin;
    JijinListSkin.prototype.__class__ = "skins.JijinListSkin";
})(skins || (skins = {}));
