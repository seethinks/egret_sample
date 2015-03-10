var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var skins;
(function (skins) {
    var PageLoadSkin = (function (_super) {
        __extends(PageLoadSkin, _super);
        function PageLoadSkin() {
            _super.call(this);
            this.__s = egret.gui.setProperties;
            this.__s(this, ["height", "width"], [246, 522]);
            this.elementsContent = [this.__3_i(), this.btn_android_i(), this.btn_ios_i(), this.label_desc_i(), this.__4_i()];
            this.states = [
                new egret.gui.State("normal", [
                ]),
                new egret.gui.State("disabled", [
                ])
            ];
        }
        Object.defineProperty(PageLoadSkin.prototype, "skinParts", {
            get: function () {
                return PageLoadSkin._skinParts;
            },
            enumerable: true,
            configurable: true
        });
        PageLoadSkin.prototype.__4_i = function () {
            var t = new egret.gui.Label();
            this.__s(t, ["horizontalCenter", "text", "textAlign", "textColor", "verticalAlign", "width", "y"], [0.5, "快捷下载", "center", 16777215, "middle", 275, 24]);
            return t;
        };
        PageLoadSkin.prototype.btn_android_i = function () {
            var t = new egret.gui.Button();
            this.btn_android = t;
            this.__s(t, ["label", "skinName", "x", "y"], ["安卓下载", skins.ButtonBlueSkin, 80, 163]);
            return t;
        };
        PageLoadSkin.prototype.btn_ios_i = function () {
            var t = new egret.gui.Button();
            this.btn_ios = t;
            this.__s(t, ["label", "skinName", "x", "y"], ["苹果下载", skins.ButtonGreenSkin, 295, 163]);
            return t;
        };
        PageLoadSkin.prototype.label_desc_i = function () {
            var t = new egret.gui.Label();
            this.label_desc = t;
            this.__s(t, ["height", "horizontalCenter", "size", "text", "textColor", "width", "y"], [73, 0.5, 19, "    请您根据您的手机类型选择需要的快捷方式，下载成功您将通过手机桌面图标直接进入游戏！（该功能无法在微信中使用，请点击右上角使用浏览器打开进行下载）", 718720, 491, 70]);
            return t;
        };
        PageLoadSkin.prototype.__3_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["height", "scale9Grid", "source", "width", "x", "y"], [246, egret.gui.getScale9Grid("59,21,355,64"), "my_panel_4", 522, 0, 0]);
            return t;
        };
        PageLoadSkin._skinParts = ["btn_android", "btn_ios", "label_desc"];
        return PageLoadSkin;
    })(egret.gui.Skin);
    skins.PageLoadSkin = PageLoadSkin;
    PageLoadSkin.prototype.__class__ = "skins.PageLoadSkin";
})(skins || (skins = {}));
