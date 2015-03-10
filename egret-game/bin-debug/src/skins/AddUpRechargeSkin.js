var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var skins;
(function (skins) {
    var AddUpRechargeSkin = (function (_super) {
        __extends(AddUpRechargeSkin, _super);
        function AddUpRechargeSkin() {
            _super.call(this);
            this.__s = egret.gui.setProperties;
            this.__s(this, ["height", "width"], [624, 550]);
            this.elementsContent = [this.__3_i(), this.__4_i(), this.__5_i(), this.head_bgimg_i(), this.__6_i(), this._label_time_i(), this._label_desc_i(), this._label_chage_i()];
            this.states = [
                new egret.gui.State("normal", [
                ]),
                new egret.gui.State("disabled", [
                ])
            ];
        }
        Object.defineProperty(AddUpRechargeSkin.prototype, "skinParts", {
            get: function () {
                return AddUpRechargeSkin._skinParts;
            },
            enumerable: true,
            configurable: true
        });
        AddUpRechargeSkin.prototype.__4_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["height", "scale9Grid", "source", "width", "x", "y"], [572, egret.gui.getScale9Grid("59,21,355,64"), "my_panel_4", 550, 0, 51]);
            return t;
        };
        AddUpRechargeSkin.prototype.__5_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["height", "horizontalCenter", "scale9Grid", "source", "width", "y"], [145, 0, egret.gui.getScale9Grid("56,17,340,102"), "my_panel_3", 532, 61]);
            return t;
        };
        AddUpRechargeSkin.prototype.__6_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["height", "source", "width", "x", "y"], [32, "vip_title_bg", 246, 302, 169]);
            return t;
        };
        AddUpRechargeSkin.prototype._label_chage_i = function () {
            var t = new egret.gui.Label();
            this._label_chage = t;
            this.__s(t, ["height", "horizontalCenter", "size", "textAlign", "textColor", "width", "y"], [27, 0, 21, "right", 0xFFFFFF, 508, 171]);
            return t;
        };
        AddUpRechargeSkin.prototype._label_desc_i = function () {
            var t = new egret.gui.Label();
            this._label_desc = t;
            this.__s(t, ["height", "horizontalCenter", "size", "textColor", "width", "y"], [96, 0, 17, 14412297, 502, 68]);
            return t;
        };
        AddUpRechargeSkin.prototype._label_time_i = function () {
            var t = new egret.gui.Label();
            this._label_time = t;
            this.__s(t, ["height", "size", "textColor", "verticalAlign", "width", "x", "y"], [23, 16, 391110, "middle", 524, 11, 12]);
            return t;
        };
        AddUpRechargeSkin.prototype.head_bgimg_i = function () {
            var t = new egret.gui.UIAsset();
            this.head_bgimg = t;
            this.__s(t, ["height", "horizontalCenter", "width", "y"], [133, 0, 518, 67]);
            return t;
        };
        AddUpRechargeSkin.prototype.__3_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["height", "scale9Grid", "source", "width", "x", "y"], [48, egret.gui.getScale9Grid("59,21,355,64"), "my_panel_4", 550, 0, 0]);
            return t;
        };
        AddUpRechargeSkin._skinParts = ["head_bgimg", "_label_time", "_label_desc", "_label_chage"];
        return AddUpRechargeSkin;
    })(egret.gui.Skin);
    skins.AddUpRechargeSkin = AddUpRechargeSkin;
    AddUpRechargeSkin.prototype.__class__ = "skins.AddUpRechargeSkin";
})(skins || (skins = {}));
