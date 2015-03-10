var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var skins;
(function (skins) {
    var ManagerSetSkin = (function (_super) {
        __extends(ManagerSetSkin, _super);
        function ManagerSetSkin() {
            _super.call(this);
            this.__s = egret.gui.setProperties;
            this.__s(this, ["height", "width"], [403, 520]);
            this.elementsContent = [this.__3_i(), this.__4_i(), this.btn_false_i(), this.btn_true_i(), this.__5_i(), this.__6_i(), this.__7_i(), this._text_i()];
            this.states = [
                new egret.gui.State("normal", [
                ]),
                new egret.gui.State("disabled", [
                ])
            ];
        }
        Object.defineProperty(ManagerSetSkin.prototype, "skinParts", {
            get: function () {
                return ManagerSetSkin._skinParts;
            },
            enumerable: true,
            configurable: true
        });
        ManagerSetSkin.prototype.__4_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["height", "scale9Grid", "source", "width", "x", "y"], [159, egret.gui.getScale9Grid("59,21,355,64"), "my_panel_4", 520, 0, 181]);
            return t;
        };
        ManagerSetSkin.prototype.__5_i = function () {
            var t = new egret.gui.Label();
            this.__s(t, ["height", "size", "text", "textColor", "width", "x", "y"], [28, 21, "请设置您的公会要求下限", 65280, 488, 18, 14]);
            return t;
        };
        ManagerSetSkin.prototype.__6_i = function () {
            var t = new egret.gui.Label();
            this.__s(t, ["height", "size", "text", "textColor", "width", "x", "y"], [86, 21, "      例如1000，就表示战力达到1000的玩家才可以申请入会。", 16777215, 488, 19, 60]);
            return t;
        };
        ManagerSetSkin.prototype.__7_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["height", "horizontalCenter", "scale9Grid", "source", "width", "y"], [39, 0, egret.gui.getScale9Grid("16,8,96,10"), "hanghui_text_bg", 356, 239]);
            return t;
        };
        ManagerSetSkin.prototype._text_i = function () {
            var t = new egret.gui.EditableText();
            this._text = t;
            this.__s(t, ["height", "horizontalCenter", "size", "textAlign", "textColor", "verticalAlign", "width", "y"], [36, 0, 21, "center", 0xFFFFFF, "middle", 338, 240]);
            return t;
        };
        ManagerSetSkin.prototype.btn_false_i = function () {
            var t = new egret.gui.Button();
            this.btn_false = t;
            this.__s(t, ["label", "skinName", "x", "y"], ["取  消", skins.ButtonRedSkin, 60, 350]);
            return t;
        };
        ManagerSetSkin.prototype.btn_true_i = function () {
            var t = new egret.gui.Button();
            this.btn_true = t;
            this.__s(t, ["label", "skinName", "x", "y"], ["确  定", skins.ButtonYellowSkin, 313, 350]);
            return t;
        };
        ManagerSetSkin.prototype.__3_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["height", "scale9Grid", "source", "width", "x", "y"], [159, egret.gui.getScale9Grid("59,21,355,64"), "my_panel_4", 520, 0, 0]);
            return t;
        };
        ManagerSetSkin._skinParts = ["btn_false", "btn_true", "_text"];
        return ManagerSetSkin;
    })(egret.gui.Skin);
    skins.ManagerSetSkin = ManagerSetSkin;
    ManagerSetSkin.prototype.__class__ = "skins.ManagerSetSkin";
})(skins || (skins = {}));
