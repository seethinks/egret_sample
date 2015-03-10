var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var skins;
(function (skins) {
    var SmallDialogBoxSkin = (function (_super) {
        __extends(SmallDialogBoxSkin, _super);
        function SmallDialogBoxSkin() {
            _super.call(this);
            this.__s = egret.gui.setProperties;
            this.__s(this, ["height", "width"], [300, 500]);
            this.elementsContent = [this._dialog_panel_i(), this._dialog_title_i(), this._close_btn_i()];
            this.states = [
                new egret.gui.State("normal", [
                ]),
                new egret.gui.State("disabled", [
                ])
            ];
        }
        Object.defineProperty(SmallDialogBoxSkin.prototype, "skinParts", {
            get: function () {
                return SmallDialogBoxSkin._skinParts;
            },
            enumerable: true,
            configurable: true
        });
        SmallDialogBoxSkin.prototype._dialog_panel_i = function () {
            var t = new egret.gui.UIAsset();
            this._dialog_panel = t;
            this.__s(t, ["bottom", "horizontalCenter", "scale9Grid", "source", "top", "verticalCenter", "width"], [0, 0, egret.gui.getScale9Grid("184,116,175,48"), "small_dialog_bg", 0, 0, 500]);
            return t;
        };
        SmallDialogBoxSkin.prototype._dialog_title_i = function () {
            var t = new egret.gui.Label();
            this._dialog_title = t;
            this.__s(t, ["height", "size", "textAlign", "width", "x", "y"], [26, 20, "center", 210, 147, 22]);
            return t;
        };
        SmallDialogBoxSkin.prototype._close_btn_i = function () {
            var t = new egret.gui.UIAsset();
            this._close_btn = t;
            this.__s(t, ["height", "source", "width", "x", "y"], [35, "skill_btn_close", 35, 452, 22]);
            return t;
        };
        SmallDialogBoxSkin._skinParts = ["_dialog_panel", "_dialog_title", "_close_btn"];
        return SmallDialogBoxSkin;
    })(egret.gui.Skin);
    skins.SmallDialogBoxSkin = SmallDialogBoxSkin;
    SmallDialogBoxSkin.prototype.__class__ = "skins.SmallDialogBoxSkin";
})(skins || (skins = {}));
