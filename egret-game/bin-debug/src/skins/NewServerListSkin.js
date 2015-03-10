var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var skins;
(function (skins) {
    var NewServerListSkin = (function (_super) {
        __extends(NewServerListSkin, _super);
        function NewServerListSkin() {
            _super.call(this);
            this.__s = egret.gui.setProperties;
            this.__s(this, ["height", "width"], [119, 530]);
            this.elementsContent = [this.__3_i(), this._img_i()];
            this.states = [
                new egret.gui.State("normal", [
                ]),
                new egret.gui.State("disabled", [
                ])
            ];
        }
        Object.defineProperty(NewServerListSkin.prototype, "skinParts", {
            get: function () {
                return NewServerListSkin._skinParts;
            },
            enumerable: true,
            configurable: true
        });
        NewServerListSkin.prototype._img_i = function () {
            var t = new egret.gui.UIAsset();
            this._img = t;
            this.__s(t, ["source", "x", "y"], ["alist_1", 13, 10]);
            return t;
        };
        NewServerListSkin.prototype.__3_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["source", "x", "y"], ["shuangbeifuli_bg", 0, 0]);
            return t;
        };
        NewServerListSkin._skinParts = ["_img"];
        return NewServerListSkin;
    })(egret.gui.Skin);
    skins.NewServerListSkin = NewServerListSkin;
    NewServerListSkin.prototype.__class__ = "skins.NewServerListSkin";
})(skins || (skins = {}));
