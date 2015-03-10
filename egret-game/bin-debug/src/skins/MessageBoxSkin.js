var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var skins;
(function (skins) {
    var MessageBoxSkin = (function (_super) {
        __extends(MessageBoxSkin, _super);
        function MessageBoxSkin() {
            _super.call(this);
            this.__s = egret.gui.setProperties;
            this.__s(this, ["height", "width"], [275, 522]);
            this.elementsContent = [this.__3_i(), this.msg_label_i(), this.msg_btn_false_i(), this.msg_btn_true_i()];
            this.states = [
                new egret.gui.State("normal", [
                ]),
                new egret.gui.State("disabled", [
                ])
            ];
        }
        Object.defineProperty(MessageBoxSkin.prototype, "skinParts", {
            get: function () {
                return MessageBoxSkin._skinParts;
            },
            enumerable: true,
            configurable: true
        });
        MessageBoxSkin.prototype.msg_btn_false_i = function () {
            var t = new egret.gui.Button();
            this.msg_btn_false = t;
            this.__s(t, ["bottom", "label", "skinName", "x"], [0, "取  消", skins.ButtonRedSkin, 64]);
            return t;
        };
        MessageBoxSkin.prototype.msg_btn_true_i = function () {
            var t = new egret.gui.Button();
            this.msg_btn_true = t;
            this.__s(t, ["bottom", "label", "skinName", "x"], [0, "确  定", skins.ButtonYellowSkin, 313]);
            return t;
        };
        MessageBoxSkin.prototype.msg_label_i = function () {
            var t = new egret.gui.Label();
            this.msg_label = t;
            this.__s(t, ["height", "horizontalCenter", "size", "text", "textColor", "width", "y"], [158, 0, 25, "我是一个粉刷匠", 0x32FF00, 486, 27]);
            return t;
        };
        MessageBoxSkin.prototype.__3_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["height", "scale9Grid", "source", "width", "x"], [213, egret.gui.getScale9Grid("59,21,355,64"), "my_panel_4", 522, 0]);
            return t;
        };
        MessageBoxSkin._skinParts = ["msg_label", "msg_btn_false", "msg_btn_true"];
        return MessageBoxSkin;
    })(egret.gui.Skin);
    skins.MessageBoxSkin = MessageBoxSkin;
    MessageBoxSkin.prototype.__class__ = "skins.MessageBoxSkin";
})(skins || (skins = {}));
