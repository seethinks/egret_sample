var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var skins;
(function (skins) {
    var GemInlayBoxSkin = (function (_super) {
        __extends(GemInlayBoxSkin, _super);
        function GemInlayBoxSkin() {
            _super.call(this);
            this.__s = egret.gui.setProperties;
            this.__s(this, ["height", "width"], [645, 522]);
            this.elementsContent = [this.__3_i(), this.xq_btn_remove_i(), this.__4_i(), this.xq_label_explain_i(), this.xq_label_k1_i(), this.xq_label_s1_i(), this.xq_label_s2_i(), this.xq_label_s3_i(), this.xq_label_s4_i(), this.xq_label_k2_i(), this.xq_label_k3_i(), this.xq_label_k4_i(), this.xq_label_eqptname_i(), this._icon_i(), this._event1_i(), this._event2_i(), this._event3_i(), this._event4_i(), this._bs_img1_i(), this._bs_img4_i(), this._bs_img3_i(), this._bs_img2_i()];
            this.states = [
                new egret.gui.State("normal", [
                ]),
                new egret.gui.State("disabled", [
                ])
            ];
        }
        Object.defineProperty(GemInlayBoxSkin.prototype, "skinParts", {
            get: function () {
                return GemInlayBoxSkin._skinParts;
            },
            enumerable: true,
            configurable: true
        });
        GemInlayBoxSkin.prototype.__4_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["height", "horizontalCenter", "scale9Grid", "source", "top", "width"], [57, 0, egret.gui.getScale9Grid("59,21,355,64"), "my_panel_4", 0, 522]);
            return t;
        };
        GemInlayBoxSkin.prototype._bs_img1_i = function () {
            var t = new egret.gui.UIAsset();
            this._bs_img1 = t;
            this.__s(t, ["x", "y"], [40, 377]);
            return t;
        };
        GemInlayBoxSkin.prototype._bs_img2_i = function () {
            var t = new egret.gui.UIAsset();
            this._bs_img2 = t;
            this.__s(t, ["x", "y"], [163, 377]);
            return t;
        };
        GemInlayBoxSkin.prototype._bs_img3_i = function () {
            var t = new egret.gui.UIAsset();
            this._bs_img3 = t;
            this.__s(t, ["x", "y"], [287, 377]);
            return t;
        };
        GemInlayBoxSkin.prototype._bs_img4_i = function () {
            var t = new egret.gui.UIAsset();
            this._bs_img4 = t;
            this.__s(t, ["x", "y"], [410, 376]);
            return t;
        };
        GemInlayBoxSkin.prototype._event1_i = function () {
            var t = new egret.gui.UIAsset();
            this._event1 = t;
            this.__s(t, ["source", "x", "y"], ["xq_bgimg", 33, 370]);
            return t;
        };
        GemInlayBoxSkin.prototype._event2_i = function () {
            var t = new egret.gui.UIAsset();
            this._event2 = t;
            this.__s(t, ["source", "x", "y"], ["xq_bgimg", 156, 370]);
            return t;
        };
        GemInlayBoxSkin.prototype._event3_i = function () {
            var t = new egret.gui.UIAsset();
            this._event3 = t;
            this.__s(t, ["source", "x", "y"], ["xq_bgimg", 280, 370]);
            return t;
        };
        GemInlayBoxSkin.prototype._event4_i = function () {
            var t = new egret.gui.UIAsset();
            this._event4 = t;
            this.__s(t, ["source", "x", "y"], ["xq_bgimg", 403, 370]);
            return t;
        };
        GemInlayBoxSkin.prototype._icon_i = function () {
            var t = new UIIcon();
            this._icon = t;
            this.__s(t, ["horizontalCenter", "skinName", "y"], [0, skins.IconSkin, 192]);
            return t;
        };
        GemInlayBoxSkin.prototype.__3_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["height", "horizontalCenter", "left", "right", "source", "top"], [514, 0.5, 2, 1, "sq_xiangqian_bg", 73]);
            return t;
        };
        GemInlayBoxSkin.prototype.xq_btn_remove_i = function () {
            var t = new egret.gui.Button();
            this.xq_btn_remove = t;
            this.__s(t, ["bottom", "horizontalCenter", "label", "skinName"], [2, 0.5, "一键卸下", skins.ButtonRedSkin]);
            return t;
        };
        GemInlayBoxSkin.prototype.xq_label_eqptname_i = function () {
            var t = new egret.gui.Label();
            this.xq_label_eqptname = t;
            this.__s(t, ["height", "horizontalCenter", "size", "textAlign", "textColor", "top", "verticalAlign", "width"], [33, 0, 25, "center", 16777215, 110, "middle", 390]);
            return t;
        };
        GemInlayBoxSkin.prototype.xq_label_explain_i = function () {
            var t = new egret.gui.Label();
            this.xq_label_explain = t;
            this.__s(t, ["height", "horizontalCenter", "size", "text", "textAlign", "textColor", "top", "verticalAlign", "width"], [32, 0, 18, "人物20级解锁开孔功能", "center", 3342080, 13, "middle", 430]);
            return t;
        };
        GemInlayBoxSkin.prototype.xq_label_k1_i = function () {
            var t = new egret.gui.Label();
            this.xq_label_k1 = t;
            this.__s(t, ["height", "left", "size", "textAlign", "textColor", "top", "verticalAlign", "width"], [26, 23, 20, "center", 16777215, 476, "middle", 99]);
            return t;
        };
        GemInlayBoxSkin.prototype.xq_label_k2_i = function () {
            var t = new egret.gui.Label();
            this.xq_label_k2 = t;
            this.__s(t, ["height", "left", "size", "textAlign", "textColor", "top", "verticalAlign", "width"], [26, 147, 20, "center", 0xFFFFFF, 475, "middle", 99]);
            return t;
        };
        GemInlayBoxSkin.prototype.xq_label_k3_i = function () {
            var t = new egret.gui.Label();
            this.xq_label_k3 = t;
            this.__s(t, ["height", "right", "size", "textAlign", "textColor", "top", "verticalAlign", "width"], [26, 151, 20, "center", 0xFFFFFF, 476, "middle", 99]);
            return t;
        };
        GemInlayBoxSkin.prototype.xq_label_k4_i = function () {
            var t = new egret.gui.Label();
            this.xq_label_k4 = t;
            this.__s(t, ["height", "right", "size", "textAlign", "textColor", "top", "verticalAlign", "width"], [26, 27, 20, "center", 0xFFFFFF, 476, "middle", 99]);
            return t;
        };
        GemInlayBoxSkin.prototype.xq_label_s1_i = function () {
            var t = new egret.gui.Label();
            this.xq_label_s1 = t;
            this.__s(t, ["height", "left", "size", "textAlign", "textColor", "top", "verticalAlign", "width"], [26, 23, 20, "center", 0xFFFFFF, 526, "middle", 99]);
            return t;
        };
        GemInlayBoxSkin.prototype.xq_label_s2_i = function () {
            var t = new egret.gui.Label();
            this.xq_label_s2 = t;
            this.__s(t, ["height", "left", "size", "textAlign", "textColor", "verticalAlign", "verticalCenter", "width"], [26, 147, 20, "center", 0xFFFFFF, "middle", 216.5, 99]);
            return t;
        };
        GemInlayBoxSkin.prototype.xq_label_s3_i = function () {
            var t = new egret.gui.Label();
            this.xq_label_s3 = t;
            this.__s(t, ["height", "right", "size", "textAlign", "textColor", "top", "verticalAlign", "width"], [26, 152, 20, "center", 0xFFFFFF, 526, "middle", 99]);
            return t;
        };
        GemInlayBoxSkin.prototype.xq_label_s4_i = function () {
            var t = new egret.gui.Label();
            this.xq_label_s4 = t;
            this.__s(t, ["height", "right", "size", "textAlign", "textColor", "top", "verticalAlign", "width"], [26, 27, 20, "center", 0xFFFFFF, 526, "middle", 99]);
            return t;
        };
        GemInlayBoxSkin._skinParts = ["xq_btn_remove", "xq_label_explain", "xq_label_k1", "xq_label_s1", "xq_label_s2", "xq_label_s3", "xq_label_s4", "xq_label_k2", "xq_label_k3", "xq_label_k4", "xq_label_eqptname", "_icon", "_event1", "_event2", "_event3", "_event4", "_bs_img1", "_bs_img4", "_bs_img3", "_bs_img2"];
        return GemInlayBoxSkin;
    })(egret.gui.Skin);
    skins.GemInlayBoxSkin = GemInlayBoxSkin;
    GemInlayBoxSkin.prototype.__class__ = "skins.GemInlayBoxSkin";
})(skins || (skins = {}));
