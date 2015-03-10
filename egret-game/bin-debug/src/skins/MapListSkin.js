var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var skins;
(function (skins) {
    var MapListSkin = (function (_super) {
        __extends(MapListSkin, _super);
        function MapListSkin() {
            _super.call(this);
            this.__s = egret.gui.setProperties;
            this.__s(this, ["height", "width"], [136, 533]);
            this.elementsContent = [this.__3_i(), this.map_btn_challenge_i(), this.map_bg_img_i(), this.__4_i(), this.map_label_name_i(), this.map_label_level_i(), this.map_label_ing_i()];
            this.states = [
                new egret.gui.State("normal", [
                ]),
                new egret.gui.State("disabled", [
                ])
            ];
        }
        Object.defineProperty(MapListSkin.prototype, "skinParts", {
            get: function () {
                return MapListSkin._skinParts;
            },
            enumerable: true,
            configurable: true
        });
        MapListSkin.prototype.__4_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["source", "x", "y"], ["any_text_bg", 319, 14]);
            return t;
        };
        MapListSkin.prototype.map_bg_img_i = function () {
            var t = new egret.gui.UIAsset();
            this.map_bg_img = t;
            this.__s(t, ["source", "x", "y"], ["map_1", 139, 13]);
            return t;
        };
        MapListSkin.prototype.map_btn_challenge_i = function () {
            var t = new egret.gui.UIAsset();
            this.map_btn_challenge = t;
            this.__s(t, ["source", "x", "y"], ["btn_kill_boss", 21, 25]);
            return t;
        };
        MapListSkin.prototype.map_label_ing_i = function () {
            var t = new egret.gui.Label();
            this.map_label_ing = t;
            this.__s(t, ["height", "size", "text", "textAlign", "textColor", "width", "x", "y"], [21, 18, "当前地图挂机中", "center", 8056836, 371, 142, 96]);
            return t;
        };
        MapListSkin.prototype.map_label_level_i = function () {
            var t = new egret.gui.Label();
            this.map_label_level = t;
            this.__s(t, ["height", "size", "text", "textAlign", "textColor", "verticalAlign", "width", "x", "y"], [25, 19, "10 - 20", "center", 2670574, "middle", 143, 343, 60]);
            return t;
        };
        MapListSkin.prototype.map_label_name_i = function () {
            var t = new egret.gui.Label();
            this.map_label_name = t;
            this.__s(t, ["height", "size", "text", "textAlign", "textColor", "verticalAlign", "width", "x", "y"], [25, 20, "银杏小村", "center", 16777215, "middle", 143, 344, 23]);
            return t;
        };
        MapListSkin.prototype.__3_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["source", "x", "y"], ["map_list_bg", 0, 0]);
            return t;
        };
        MapListSkin._skinParts = ["map_btn_challenge", "map_bg_img", "map_label_name", "map_label_level", "map_label_ing"];
        return MapListSkin;
    })(egret.gui.Skin);
    skins.MapListSkin = MapListSkin;
    MapListSkin.prototype.__class__ = "skins.MapListSkin";
})(skins || (skins = {}));
