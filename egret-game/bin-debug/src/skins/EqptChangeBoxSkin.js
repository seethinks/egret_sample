var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var skins;
(function (skins) {
    var EqptChangeBoxSkin = (function (_super) {
        __extends(EqptChangeBoxSkin, _super);
        function EqptChangeBoxSkin() {
            _super.call(this);
            this.__s = egret.gui.setProperties;
            this.__s(this, ["height", "width"], [647, 540]);
            this.elementsContent = [this._panel1_i(), this._panel2_i(), this.xz_label_property_i(), this.xz_btn_close_i(), this.xz_icon_i(), this.xz_label_null_i()];
            this.states = [
                new egret.gui.State("normal", [
                ]),
                new egret.gui.State("disabled", [
                ])
            ];
        }
        Object.defineProperty(EqptChangeBoxSkin.prototype, "skinParts", {
            get: function () {
                return EqptChangeBoxSkin._skinParts;
            },
            enumerable: true,
            configurable: true
        });
        EqptChangeBoxSkin.prototype._panel2_i = function () {
            var t = new egret.gui.UIAsset();
            this._panel2 = t;
            this.__s(t, ["bottom", "height", "horizontalCenter", "left", "right", "scale9Grid", "source"], [72, 575, 0, 1, 1, egret.gui.getScale9Grid("59,21,355,64"), "my_panel_4"]);
            return t;
        };
        EqptChangeBoxSkin.prototype._panel1_i = function () {
            var t = new egret.gui.UIAsset();
            this._panel1 = t;
            this.__s(t, ["height", "horizontalCenter", "left", "right", "scale9Grid", "source", "top"], [218, 0, 1, 1, egret.gui.getScale9Grid("59,21,355,64"), "my_panel_4", 1]);
            return t;
        };
        EqptChangeBoxSkin.prototype.xz_btn_close_i = function () {
            var t = new egret.gui.Button();
            this.xz_btn_close = t;
            this.__s(t, ["bottom", "horizontalCenter", "label", "skinName"], [12, -1.5, "关  闭", skins.ButtonRedSkin]);
            return t;
        };
        EqptChangeBoxSkin.prototype.xz_icon_i = function () {
            var t = new UIIcon();
            this.xz_icon = t;
            this.__s(t, ["skinName", "top", "x"], [skins.IconSkin, 49, 28]);
            return t;
        };
        EqptChangeBoxSkin.prototype.xz_label_null_i = function () {
            var t = new egret.gui.Label();
            this.xz_label_null = t;
            this.__s(t, ["horizontalCenter", "text", "textAlign", "textColor", "verticalAlign", "verticalCenter", "width"], [-3, "暂无可穿戴装备", "center", 10955820, "middle", 59.5, 440]);
            return t;
        };
        EqptChangeBoxSkin.prototype.xz_label_property_i = function () {
            var t = new egret.gui.Label();
            this.xz_label_property = t;
            this.__s(t, ["height", "size", "textColor", "width", "x", "y"], [176, 20, 0xFFFFFF, 341, 160, 21]);
            return t;
        };
        EqptChangeBoxSkin._skinParts = ["_panel1", "_panel2", "xz_label_property", "xz_btn_close", "xz_icon", "xz_label_null"];
        return EqptChangeBoxSkin;
    })(egret.gui.Skin);
    skins.EqptChangeBoxSkin = EqptChangeBoxSkin;
    EqptChangeBoxSkin.prototype.__class__ = "skins.EqptChangeBoxSkin";
})(skins || (skins = {}));
