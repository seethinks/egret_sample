var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var skins;
(function (skins) {
    var BelleZhenFaSkin = (function (_super) {
        __extends(BelleZhenFaSkin, _super);
        function BelleZhenFaSkin() {
            _super.call(this);
            this.__s = egret.gui.setProperties;
            this.__s(this, ["height", "width"], [523, 556]);
            this.elementsContent = [this.__3_i(), this.__4_i(), this._head1_i(), this._head4_i(), this._head3_i(), this._head5_i(), this._head2_i(), this._label_p_i(), this._open5_i(), this._open4_i(), this._open3_i(), this._open2_i(), this._open1_i()];
            this.states = [
                new egret.gui.State("normal", [
                ]),
                new egret.gui.State("disabled", [
                ])
            ];
        }
        Object.defineProperty(BelleZhenFaSkin.prototype, "skinParts", {
            get: function () {
                return BelleZhenFaSkin._skinParts;
            },
            enumerable: true,
            configurable: true
        });
        BelleZhenFaSkin.prototype.__4_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["source", "x", "y"], ["zf_bgimg", 0, 0]);
            return t;
        };
        BelleZhenFaSkin.prototype._head1_i = function () {
            var t = new egret.gui.UIAsset();
            this._head1 = t;
            this.__s(t, ["x", "y"], [147, 28]);
            return t;
        };
        BelleZhenFaSkin.prototype._head2_i = function () {
            var t = new egret.gui.UIAsset();
            this._head2 = t;
            this.__s(t, ["x", "y"], [411, 29]);
            return t;
        };
        BelleZhenFaSkin.prototype._head3_i = function () {
            var t = new egret.gui.UIAsset();
            this._head3 = t;
            this.__s(t, ["x", "y"], [439, 230]);
            return t;
        };
        BelleZhenFaSkin.prototype._head4_i = function () {
            var t = new egret.gui.UIAsset();
            this._head4 = t;
            this.__s(t, ["x", "y"], [278, 332]);
            return t;
        };
        BelleZhenFaSkin.prototype._head5_i = function () {
            var t = new egret.gui.UIAsset();
            this._head5 = t;
            this.__s(t, ["x", "y"], [120, 230]);
            return t;
        };
        BelleZhenFaSkin.prototype._label_p_i = function () {
            var t = new egret.gui.Label();
            this._label_p = t;
            this.__s(t, ["height", "size", "textColor", "width", "x", "y"], [147, 19, 251382, 237, 20, 366]);
            return t;
        };
        BelleZhenFaSkin.prototype._open1_i = function () {
            var t = new egret.gui.Label();
            this._open1 = t;
            this.__s(t, ["height", "size", "text", "textAlign", "textColor", "verticalAlign", "width", "x", "y"], [42, 14, "15级开启", "center", 0xFFFFFF, "middle", 74, 151, 50]);
            return t;
        };
        BelleZhenFaSkin.prototype._open2_i = function () {
            var t = new egret.gui.Label();
            this._open2 = t;
            this.__s(t, ["height", "size", "text", "textAlign", "textColor", "verticalAlign", "width", "x", "y"], [42, 14, "25级开启", "center", 0xFFFFFF, "middle", 74, 417, 50]);
            return t;
        };
        BelleZhenFaSkin.prototype._open3_i = function () {
            var t = new egret.gui.Label();
            this._open3 = t;
            this.__s(t, ["height", "size", "text", "textAlign", "textColor", "verticalAlign", "width", "x", "y"], [42, 14, "35级开启", "center", 0xFFFFFF, "middle", 74, 445, 253]);
            return t;
        };
        BelleZhenFaSkin.prototype._open4_i = function () {
            var t = new egret.gui.Label();
            this._open4 = t;
            this.__s(t, ["height", "size", "text", "textAlign", "textColor", "verticalAlign", "width", "x", "y"], [42, 14, "45级开启", "center", 0xFFFFFF, "middle", 74, 282, 354]);
            return t;
        };
        BelleZhenFaSkin.prototype._open5_i = function () {
            var t = new egret.gui.Label();
            this._open5 = t;
            this.__s(t, ["height", "size", "text", "textAlign", "textColor", "verticalAlign", "width", "x", "y"], [42, 14, "55级开启", "center", 16777215, "middle", 74, 123, 253]);
            return t;
        };
        BelleZhenFaSkin.prototype.__3_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["height", "source", "x", "y"], [523, "belle_fazheng_bgimg", 0, 0]);
            return t;
        };
        BelleZhenFaSkin._skinParts = ["_head1", "_head4", "_head3", "_head5", "_head2", "_label_p", "_open5", "_open4", "_open3", "_open2", "_open1"];
        return BelleZhenFaSkin;
    })(egret.gui.Skin);
    skins.BelleZhenFaSkin = BelleZhenFaSkin;
    BelleZhenFaSkin.prototype.__class__ = "skins.BelleZhenFaSkin";
})(skins || (skins = {}));
