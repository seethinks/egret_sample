var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var skins;
(function (skins) {
    var SocietyCreatSkin = (function (_super) {
        __extends(SocietyCreatSkin, _super);
        function SocietyCreatSkin() {
            _super.call(this);
            this.__s = egret.gui.setProperties;
            this.__s(this, ["height", "width"], [302, 473]);
            this.elementsContent = [this.__3_i(), this.__4_i(), this.btn_cancel_i(), this.btn_create_i(), this.__5_i(), this.__6_i(), this.__7_i(), this._name_input_i()];
            this.states = [
                new egret.gui.State("normal", [
                ]),
                new egret.gui.State("disabled", [
                ])
            ];
        }
        Object.defineProperty(SocietyCreatSkin.prototype, "skinParts", {
            get: function () {
                return SocietyCreatSkin._skinParts;
            },
            enumerable: true,
            configurable: true
        });
        SocietyCreatSkin.prototype.__4_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["height", "horizontalCenter", "scale9Grid", "source", "y"], [134, 0, egret.gui.getScale9Grid("59,21,355,64"), "my_panel_4", 99]);
            return t;
        };
        SocietyCreatSkin.prototype.__5_i = function () {
            var t = new egret.gui.Label();
            this.__s(t, ["horizontalCenter", "size", "text", "textAlign", "textColor", "verticalAlign", "width", "y"], [-0.5, 21, "创建行会需消耗300元宝", "center", 65280, "middle", 444, 26]);
            return t;
        };
        SocietyCreatSkin.prototype.__6_i = function () {
            var t = new egret.gui.Label();
            this.__s(t, ["size", "text", "textAlign", "textColor", "x", "y"], [20, "行会名称：", "right", 2549257, 39, 152]);
            return t;
        };
        SocietyCreatSkin.prototype.__7_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["height", "scale9Grid", "source", "width", "x", "y"], [48, egret.gui.getScale9Grid("65,19,392,114"), "my_panel_2", 300, 133, 134]);
            return t;
        };
        SocietyCreatSkin.prototype._name_input_i = function () {
            var t = new egret.gui.UIAsset();
            this._name_input = t;
            this.__s(t, ["height", "width", "x", "y"], [30, 271, 148, 143]);
            return t;
        };
        SocietyCreatSkin.prototype.btn_cancel_i = function () {
            var t = new egret.gui.Button();
            this.btn_cancel = t;
            this.__s(t, ["horizontalCenter", "label", "skinName", "y"], [-129, "取  消", skins.ButtonRedSkin, 249]);
            return t;
        };
        SocietyCreatSkin.prototype.btn_create_i = function () {
            var t = new egret.gui.Button();
            this.btn_create = t;
            this.__s(t, ["horizontalCenter", "label", "skinName", "y"], [127, "创建行会", skins.ButtonYellowSkin, 249]);
            return t;
        };
        SocietyCreatSkin.prototype.__3_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["height", "horizontalCenter", "scale9Grid", "source", "y"], [81, 0, egret.gui.getScale9Grid("59,21,355,64"), "my_panel_4", 0]);
            return t;
        };
        SocietyCreatSkin._skinParts = ["btn_cancel", "btn_create", "_name_input"];
        return SocietyCreatSkin;
    })(egret.gui.Skin);
    skins.SocietyCreatSkin = SocietyCreatSkin;
    SocietyCreatSkin.prototype.__class__ = "skins.SocietyCreatSkin";
})(skins || (skins = {}));
