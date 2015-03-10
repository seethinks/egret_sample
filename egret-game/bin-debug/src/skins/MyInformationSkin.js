var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var skins;
(function (skins) {
    var MyInformationSkin = (function (_super) {
        __extends(MyInformationSkin, _super);
        function MyInformationSkin() {
            _super.call(this);
            this.__s = egret.gui.setProperties;
            this.__s(this, ["height", "width"], [583, 522]);
            this.elementsContent = [this.__3_i(), this.__4_i(), this.__5_i(), this.__6_i(), this.my_head_img_i(), this.__7_i(), this.__8_i(), this.my_vip_img_i(), this.my_btn_ghqm_i(), this.my_btn_ghch_i(), this.my_btn_vip_i(), this.my_btn_logout_i(), this.my_btn_voice_i(), this.my_label_1_i(), this.my_label_name_i(), this.my_label_2_i(), this._bind_acc_i()];
            this.states = [
                new egret.gui.State("normal", [
                ]),
                new egret.gui.State("disabled", [
                ])
            ];
        }
        Object.defineProperty(MyInformationSkin.prototype, "skinParts", {
            get: function () {
                return MyInformationSkin._skinParts;
            },
            enumerable: true,
            configurable: true
        });
        MyInformationSkin.prototype.__4_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["height", "horizontalCenter", "scale9Grid", "source", "width", "y"], [305, 0.5, egret.gui.getScale9Grid("56,17,340,102"), "my_panel_3", 501, 9]);
            return t;
        };
        MyInformationSkin.prototype.__5_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["height", "horizontalCenter", "scale9Grid", "source", "width", "y"], [133, 0.5, egret.gui.getScale9Grid("56,17,340,102"), "my_panel_3", 501, 319]);
            return t;
        };
        MyInformationSkin.prototype.__6_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["height", "horizontalCenter", "scale9Grid", "source", "width", "y"], [95, -190.5, egret.gui.getScale9Grid("59,21,355,64"), "my_panel_4", 95, 23]);
            return t;
        };
        MyInformationSkin.prototype.__7_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["height", "scale9Grid", "source", "width", "x", "y"], [275, egret.gui.getScale9Grid("65,19,392,114"), "my_panel_2", 365, 132, 25]);
            return t;
        };
        MyInformationSkin.prototype.__8_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["height", "scale9Grid", "source", "width", "x", "y"], [95, egret.gui.getScale9Grid("65,19,392,114"), "my_panel_2", 474, 24, 340]);
            return t;
        };
        MyInformationSkin.prototype._bind_acc_i = function () {
            var t = new egret.gui.Button();
            this._bind_acc = t;
            this.__s(t, ["bottom", "label", "skinName", "x"], [0, "绑定账号", skins.ButtonYellowSkin, 188]);
            return t;
        };
        MyInformationSkin.prototype.my_btn_ghch_i = function () {
            var t = new egret.gui.Button();
            this.my_btn_ghch = t;
            this.__s(t, ["horizontalCenter", "label", "skinName", "y"], [0, "下载快捷方式", skins.ButtonBlueSkin, 470]);
            return t;
        };
        MyInformationSkin.prototype.my_btn_ghqm_i = function () {
            var t = new egret.gui.Button();
            this.my_btn_ghqm = t;
            this.__s(t, ["label", "skinName", "x", "y"], ["更换签名", skins.ButtonBlueSkin, 16, 470]);
            return t;
        };
        MyInformationSkin.prototype.my_btn_logout_i = function () {
            var t = new egret.gui.Button();
            this.my_btn_logout = t;
            this.__s(t, ["label", "skinName", "x", "y"], ["注  销", skins.ButtonRedSkin, 16, 530]);
            return t;
        };
        MyInformationSkin.prototype.my_btn_vip_i = function () {
            var t = new egret.gui.Button();
            this.my_btn_vip = t;
            this.__s(t, ["label", "skinName", "x", "y"], ["VIP详情", skins.ButtonYellowSkin, 359, 470]);
            return t;
        };
        MyInformationSkin.prototype.my_btn_voice_i = function () {
            var t = new egret.gui.Button();
            this.my_btn_voice = t;
            this.__s(t, ["label", "skinName", "x", "y"], ["开启声音", skins.ButtonBlueSkin, 359, 530]);
            return t;
        };
        MyInformationSkin.prototype.my_head_img_i = function () {
            var t = new egret.gui.UIAsset();
            this.my_head_img = t;
            this.__s(t, ["source", "x", "y"], ["player_head", 29, 28]);
            return t;
        };
        MyInformationSkin.prototype.my_label_1_i = function () {
            var t = new egret.gui.Label();
            this.my_label_1 = t;
            this.__s(t, ["height", "size", "textColor", "width", "x", "y"], [221, 19, 16777215, 345, 143, 68]);
            return t;
        };
        MyInformationSkin.prototype.my_label_2_i = function () {
            var t = new egret.gui.Label();
            this.my_label_2 = t;
            this.__s(t, ["height", "size", "text", "textColor", "width", "x", "y"], [79, 19, "还未设置签名", 16777215, 455, 33, 349]);
            return t;
        };
        MyInformationSkin.prototype.my_label_name_i = function () {
            var t = new egret.gui.Label();
            this.my_label_name = t;
            this.__s(t, ["height", "size", "textColor", "width", "x", "y"], [31, 19, 0xFFFFFF, 345, 143, 36]);
            return t;
        };
        MyInformationSkin.prototype.my_vip_img_i = function () {
            var t = new egret.gui.UIAsset();
            this.my_vip_img = t;
            this.__s(t, ["source", "x", "y"], ["vip0", 45, 126]);
            return t;
        };
        MyInformationSkin.prototype.__3_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["height", "horizontalCenter", "scale9Grid", "source", "width", "y"], [462, -0.5, egret.gui.getScale9Grid("59,21,355,64"), "my_panel_4", 523, 0]);
            return t;
        };
        MyInformationSkin._skinParts = ["my_head_img", "my_vip_img", "my_btn_ghqm", "my_btn_ghch", "my_btn_vip", "my_btn_logout", "my_btn_voice", "my_label_1", "my_label_name", "my_label_2", "_bind_acc"];
        return MyInformationSkin;
    })(egret.gui.Skin);
    skins.MyInformationSkin = MyInformationSkin;
    MyInformationSkin.prototype.__class__ = "skins.MyInformationSkin";
})(skins || (skins = {}));
