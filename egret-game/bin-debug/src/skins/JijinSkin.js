var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var skins;
(function (skins) {
    var JijinSkin = (function (_super) {
        __extends(JijinSkin, _super);
        function JijinSkin() {
            _super.call(this);
            this.__s = egret.gui.setProperties;
            this.__s(this, ["height", "width"], [631, 542]);
            this.elementsContent = [this.__3_i(), this.__4_i(), this._img_bg_i(), this.btn_tab1_i(), this.btn_tab2_i(), this._label_vip_i(), this._label_num_i(), this._btn_i()];
            this.states = [
                new egret.gui.State("normal", [
                ]),
                new egret.gui.State("disabled", [
                ])
            ];
        }
        Object.defineProperty(JijinSkin.prototype, "skinParts", {
            get: function () {
                return JijinSkin._skinParts;
            },
            enumerable: true,
            configurable: true
        });
        JijinSkin.prototype.__4_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["height", "scale9Grid", "source", "width", "x", "y"], [215, egret.gui.getScale9Grid("56,17,340,102"), "my_panel_3", 517, 13, 64]);
            return t;
        };
        JijinSkin.prototype._btn_i = function () {
            var t = new egret.gui.Button();
            this._btn = t;
            this.__s(t, ["label", "skinName", "x", "y"], ["购    买", skins.ButtonRedSkin, 368, 183]);
            return t;
        };
        JijinSkin.prototype._img_bg_i = function () {
            var t = new egret.gui.UIAsset();
            this._img_bg = t;
            this.__s(t, ["source", "x", "y"], ["act_fund", 19, 71]);
            return t;
        };
        JijinSkin.prototype._label_num_i = function () {
            var t = new egret.gui.Label();
            this._label_num = t;
            this.__s(t, ["height", "size", "textAlign", "textColor", "verticalAlign", "width", "x", "y"], [29, 18, "center", 0x04F7AA, "middle", 91, 43, 194]);
            return t;
        };
        JijinSkin.prototype._label_vip_i = function () {
            var t = new egret.gui.Label();
            this._label_vip = t;
            this.__s(t, ["height", "size", "text", "textColor", "verticalAlign", "width", "x", "y"], [29, 18, "达到VIP2可购买，您当前VIP0", 325546, "middle", 501, 21, 243]);
            return t;
        };
        JijinSkin.prototype.btn_tab1_i = function () {
            var t = new UIBagTab();
            this.btn_tab1 = t;
            this.__s(t, ["skinName", "x", "y"], [skins.BagTabSkin, 19, 0]);
            return t;
        };
        JijinSkin.prototype.btn_tab2_i = function () {
            var t = new UIBagTab();
            this.btn_tab2 = t;
            this.__s(t, ["skinName", "x", "y"], [skins.BagTabSkin, 158, 0]);
            return t;
        };
        JijinSkin.prototype.__3_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["height", "scale9Grid", "source", "width", "x", "y"], [578, egret.gui.getScale9Grid("59,21,355,64"), "my_panel_4", 542, 0, 53]);
            return t;
        };
        JijinSkin._skinParts = ["_img_bg", "btn_tab1", "btn_tab2", "_label_vip", "_label_num", "_btn"];
        return JijinSkin;
    })(egret.gui.Skin);
    skins.JijinSkin = JijinSkin;
    JijinSkin.prototype.__class__ = "skins.JijinSkin";
})(skins || (skins = {}));
