var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var skins;
(function (skins) {
    var MailItemReaderSkin = (function (_super) {
        __extends(MailItemReaderSkin, _super);
        function MailItemReaderSkin() {
            _super.call(this);
            this.__s = egret.gui.setProperties;
            this.__s(this, ["height", "width"], [136, 507]);
            this.elementsContent = [this.__3_i(), this.__4_i(), this.mail_label_i(), this.mail_btn_look_i(), this.mail_btn_del_i(), this.mail_btn_del_end_i(), this.mail_btn_get_i()];
            this.states = [
                new egret.gui.State("normal", [
                ]),
                new egret.gui.State("disabled", [
                ])
            ];
        }
        Object.defineProperty(MailItemReaderSkin.prototype, "skinParts", {
            get: function () {
                return MailItemReaderSkin._skinParts;
            },
            enumerable: true,
            configurable: true
        });
        MailItemReaderSkin.prototype.__4_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["height", "scale9Grid", "source", "width", "x", "y"], [115, egret.gui.getScale9Grid("65,19,392,114"), "my_panel_2", 378, 10, 11]);
            return t;
        };
        MailItemReaderSkin.prototype.mail_btn_del_end_i = function () {
            var t = new egret.gui.Button();
            this.mail_btn_del_end = t;
            this.__s(t, ["height", "horizontalCenter", "label", "skinName", "verticalCenter", "width"], [46, 194, "删  除", skins.ButtonRedSkin, -2, 102]);
            return t;
        };
        MailItemReaderSkin.prototype.mail_btn_del_i = function () {
            var t = new egret.gui.Button();
            this.mail_btn_del = t;
            this.__s(t, ["height", "horizontalCenter", "label", "skinName", "width", "y"], [46, 194, "删  除", skins.ButtonRedSkin, 102, 78]);
            return t;
        };
        MailItemReaderSkin.prototype.mail_btn_get_i = function () {
            var t = new egret.gui.UIAsset();
            this.mail_btn_get = t;
            this.__s(t, ["source", "x", "y"], ["sq_btn_lingqu", 433, 6]);
            return t;
        };
        MailItemReaderSkin.prototype.mail_btn_look_i = function () {
            var t = new egret.gui.Button();
            this.mail_btn_look = t;
            this.__s(t, ["height", "horizontalCenter", "label", "skinName", "width", "y"], [46, 194, "查  看", skins.ButtonGreenSkin, 102, 18]);
            return t;
        };
        MailItemReaderSkin.prototype.mail_label_i = function () {
            var t = new egret.gui.Label();
            this.mail_label = t;
            this.__s(t, ["height", "size", "textColor", "width", "x", "y"], [96, 20, 5432988, 362, 18, 20]);
            return t;
        };
        MailItemReaderSkin.prototype.__3_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["scale9Grid", "source", "width"], [egret.gui.getScale9Grid("56,17,340,102"), "my_panel_3", 507]);
            return t;
        };
        MailItemReaderSkin._skinParts = ["mail_label", "mail_btn_look", "mail_btn_del", "mail_btn_del_end", "mail_btn_get"];
        return MailItemReaderSkin;
    })(egret.gui.Skin);
    skins.MailItemReaderSkin = MailItemReaderSkin;
    MailItemReaderSkin.prototype.__class__ = "skins.MailItemReaderSkin";
})(skins || (skins = {}));
