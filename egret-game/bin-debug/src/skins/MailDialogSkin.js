var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var skins;
(function (skins) {
    var MailDialogSkin = (function (_super) {
        __extends(MailDialogSkin, _super);
        function MailDialogSkin() {
            _super.call(this);
            this.__s = egret.gui.setProperties;
            this.__s(this, ["height", "width"], [596, 523]);
            this.elementsContent = [this.__3_i(), this.__4_i(), this.xq_label_explain_i()];
            this.states = [
                new egret.gui.State("normal", [
                ]),
                new egret.gui.State("disabled", [
                ])
            ];
        }
        Object.defineProperty(MailDialogSkin.prototype, "skinParts", {
            get: function () {
                return MailDialogSkin._skinParts;
            },
            enumerable: true,
            configurable: true
        });
        MailDialogSkin.prototype.__4_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["bottom", "left", "right", "scale9Grid", "source", "top"], [1, 0, 0, egret.gui.getScale9Grid("59,21,355,64"), "my_panel_4", 59]);
            return t;
        };
        MailDialogSkin.prototype.__3_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["height", "horizontalCenter", "left", "right", "scale9Grid", "source", "top"], [57, 0, 1, 0, egret.gui.getScale9Grid("59,21,355,64"), "my_panel_4", 0]);
            return t;
        };
        MailDialogSkin.prototype.xq_label_explain_i = function () {
            var t = new egret.gui.Label();
            this.xq_label_explain = t;
            this.__s(t, ["height", "horizontalCenter", "left", "right", "size", "text", "textAlign", "textColor", "top", "verticalAlign"], [32, 0.5, 47, 46, 16, "奖励领取后邮件将自动删除，系统自动清理七天前的邮件", "center", 0x32FF00, 13, "middle"]);
            return t;
        };
        MailDialogSkin._skinParts = ["xq_label_explain"];
        return MailDialogSkin;
    })(egret.gui.Skin);
    skins.MailDialogSkin = MailDialogSkin;
    MailDialogSkin.prototype.__class__ = "skins.MailDialogSkin";
})(skins || (skins = {}));
