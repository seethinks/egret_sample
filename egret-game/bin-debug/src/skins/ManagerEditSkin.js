var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var skins;
(function (skins) {
    var ManagerEditSkin = (function (_super) {
        __extends(ManagerEditSkin, _super);
        function ManagerEditSkin() {
            _super.call(this);
            this.__s = egret.gui.setProperties;
            this.__s(this, ["height", "width"], [403, 520]);
            this.elementsContent = [this.__3_i(), this.__4_i(), this.__5_i(), this.btn_false_i(), this.btn_true_i(), this._label_info_i(), this._text_i()];
            this.states = [
                new egret.gui.State("normal", [
                ]),
                new egret.gui.State("disabled", [
                ])
            ];
        }
        Object.defineProperty(ManagerEditSkin.prototype, "skinParts", {
            get: function () {
                return ManagerEditSkin._skinParts;
            },
            enumerable: true,
            configurable: true
        });
        ManagerEditSkin.prototype.__4_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["height", "horizontalCenter", "scale9Grid", "source", "width", "y"], [240, 0, egret.gui.getScale9Grid("59,21,355,64"), "my_panel_4", 520, 100]);
            return t;
        };
        ManagerEditSkin.prototype.__5_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["height", "horizontalCenter", "scale9Grid", "source", "width", "y"], [209, 0, egret.gui.getScale9Grid("16,8,96,10"), "hanghui_text_bg", 486, 115]);
            return t;
        };
        ManagerEditSkin.prototype._label_info_i = function () {
            var t = new egret.gui.Label();
            this._label_info = t;
            this.__s(t, ["height", "horizontalCenter", "size", "text", "textAlign", "textColor", "verticalAlign", "width", "y"], [28, 0, 21, "请设置您的公会公告，字数限制为40个字", "center", 0x00FF00, "middle", 488, 22]);
            return t;
        };
        ManagerEditSkin.prototype._text_i = function () {
            var t = new egret.gui.EditableText();
            this._text = t;
            this.__s(t, ["height", "horizontalCenter", "size", "textColor", "width", "y"], [194, 0, 21, 16777215, 470, 123]);
            return t;
        };
        ManagerEditSkin.prototype.btn_false_i = function () {
            var t = new egret.gui.Button();
            this.btn_false = t;
            this.__s(t, ["label", "skinName", "x", "y"], ["取  消", skins.ButtonRedSkin, 60, 350]);
            return t;
        };
        ManagerEditSkin.prototype.btn_true_i = function () {
            var t = new egret.gui.Button();
            this.btn_true = t;
            this.__s(t, ["label", "skinName", "x", "y"], ["确  定", skins.ButtonYellowSkin, 313, 350]);
            return t;
        };
        ManagerEditSkin.prototype.__3_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["height", "scale9Grid", "source", "width", "x", "y"], [77, egret.gui.getScale9Grid("59,21,355,64"), "my_panel_4", 520, 0, 0]);
            return t;
        };
        ManagerEditSkin._skinParts = ["btn_false", "btn_true", "_label_info", "_text"];
        return ManagerEditSkin;
    })(egret.gui.Skin);
    skins.ManagerEditSkin = ManagerEditSkin;
    ManagerEditSkin.prototype.__class__ = "skins.ManagerEditSkin";
})(skins || (skins = {}));
