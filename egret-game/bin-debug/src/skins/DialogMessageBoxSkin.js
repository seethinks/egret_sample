var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var skins;
(function (skins) {
    var DialogMessageBoxSkin = (function (_super) {
        __extends(DialogMessageBoxSkin, _super);
        function DialogMessageBoxSkin() {
            _super.call(this);
            this.__s = egret.gui.setProperties;
            this.__s(this, ["height", "width"], [286, 600]);
            this.elementsContent = [this._dialogBoxPanel_i(), this._dialog_label_i(), this._btn_help_i(), this._btn_close_i()];
            this.states = [
                new egret.gui.State("normal", [
                ]),
                new egret.gui.State("disabled", [
                ])
            ];
        }
        Object.defineProperty(DialogMessageBoxSkin.prototype, "skinParts", {
            get: function () {
                return DialogMessageBoxSkin._skinParts;
            },
            enumerable: true,
            configurable: true
        });
        DialogMessageBoxSkin.prototype._btn_help_i = function () {
            var t = new egret.gui.UIAsset();
            this._btn_help = t;
            this.__s(t, ["left", "source", "top"], [4, "skill_help", 20]);
            return t;
        };
        DialogMessageBoxSkin.prototype._dialogBoxPanel_i = function () {
            var t = new egret.gui.UIAsset();
            this._dialogBoxPanel = t;
            this.__s(t, ["bottom", "left", "right", "scale9Grid", "source", "top"], [0, 0, 0, egret.gui.getScale9Grid("184,116,175,48"), "small_dialog_bg", 0]);
            return t;
        };
        DialogMessageBoxSkin.prototype._dialog_label_i = function () {
            var t = new egret.gui.Label();
            this._dialog_label = t;
            this.__s(t, ["height", "horizontalCenter", "size", "text", "textAlign", "textColor", "top", "verticalAlign", "width"], [37, 0, 25, "DialogBox", "center", 16777215, 17, "middle", 258]);
            return t;
        };
        DialogMessageBoxSkin.prototype._btn_close_i = function () {
            var t = new egret.gui.UIAsset();
            this._btn_close = t;
            this.__s(t, ["source", "x", "y"], ["skill_btn_close", 542, 16]);
            return t;
        };
        DialogMessageBoxSkin._skinParts = ["_dialogBoxPanel", "_dialog_label", "_btn_help", "_btn_close"];
        return DialogMessageBoxSkin;
    })(egret.gui.Skin);
    skins.DialogMessageBoxSkin = DialogMessageBoxSkin;
    DialogMessageBoxSkin.prototype.__class__ = "skins.DialogMessageBoxSkin";
})(skins || (skins = {}));
