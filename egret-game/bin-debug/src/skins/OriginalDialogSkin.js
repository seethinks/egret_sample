var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var skins;
(function (skins) {
    var OriginalDialogSkin = (function (_super) {
        __extends(OriginalDialogSkin, _super);
        function OriginalDialogSkin() {
            _super.call(this);
            this.__s = egret.gui.setProperties;
            this.__s(this, ["height", "width"], [961, 640]);
            this.elementsContent = [this._original_dialog_bg_i(), this.__3_i(), this.dialog_title_i(), this._title_i()];
            this.states = [
                new egret.gui.State("normal", [
                ]),
                new egret.gui.State("disabled", [
                ])
            ];
        }
        Object.defineProperty(OriginalDialogSkin.prototype, "skinParts", {
            get: function () {
                return OriginalDialogSkin._skinParts;
            },
            enumerable: true,
            configurable: true
        });
        OriginalDialogSkin.prototype._original_dialog_bg_i = function () {
            var t = new egret.gui.UIAsset();
            this._original_dialog_bg = t;
            this.__s(t, ["bottom", "horizontalCenter", "left", "right", "source", "top", "verticalCenter"], [0, 0, 0, 0, "game_main_bg", 0, 0]);
            return t;
        };
        OriginalDialogSkin.prototype._title_i = function () {
            var t = new egret.gui.Label();
            this._title = t;
            this.__s(t, ["height", "horizontalCenter", "size", "textAlign", "textColor", "top", "verticalAlign", "width"], [32, 0, 22, "center", 11840941, 20, "middle", 141]);
            return t;
        };
        OriginalDialogSkin.prototype.dialog_title_i = function () {
            var t = new egret.gui.UIAsset();
            this.dialog_title = t;
            this.__s(t, ["horizontalCenter", "source", "top"], [0, "dialog_title", 3]);
            return t;
        };
        OriginalDialogSkin.prototype.__3_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["bottom", "horizontalCenter", "left", "right", "source", "top"], [1, 0, 0, 0, "dialog_bg", 0]);
            return t;
        };
        OriginalDialogSkin._skinParts = ["_original_dialog_bg", "dialog_title", "_title"];
        return OriginalDialogSkin;
    })(egret.gui.Skin);
    skins.OriginalDialogSkin = OriginalDialogSkin;
    OriginalDialogSkin.prototype.__class__ = "skins.OriginalDialogSkin";
})(skins || (skins = {}));
