var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var skins;
(function (skins) {
    var MapSkin = (function (_super) {
        __extends(MapSkin, _super);
        function MapSkin() {
            _super.call(this);
            this.__s = egret.gui.setProperties;
            this.__s(this, ["height", "width"], [720, 550]);
            this.elementsContent = [this.__3_i(), this.__4_i(), this._label_bossName_i(), this.map_btn_buy_i(), this.map_label_num_i(), this.__5_i()];
            this.states = [
                new egret.gui.State("normal", [
                ]),
                new egret.gui.State("disabled", [
                ])
            ];
        }
        Object.defineProperty(MapSkin.prototype, "skinParts", {
            get: function () {
                return MapSkin._skinParts;
            },
            enumerable: true,
            configurable: true
        });
        MapSkin.prototype.__4_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["source", "width", "x", "y"], ["map_list_smallbg", 533, 9, 588]);
            return t;
        };
        MapSkin.prototype.__5_i = function () {
            var t = new egret.gui.Label();
            this.__s(t, ["height", "size", "text", "textAlign", "textColor", "verticalAlign", "width", "x", "y"], [31, 25, "VIP1以上可以开启BOSS扫荡功能", "center", 911347, "middle", 550, 0, 0]);
            return t;
        };
        MapSkin.prototype._label_bossName_i = function () {
            var t = new egret.gui.Label();
            this._label_bossName = t;
            this.__s(t, ["height", "horizontalCenter", "size", "text", "textAlign", "textColor", "verticalAlign", "width", "y"], [27, 0, 18, "----挑战上一张地图BOSS胜利后开启下一张地图----", "center", 259051, "middle", 500, 609]);
            return t;
        };
        MapSkin.prototype.map_btn_buy_i = function () {
            var t = new egret.gui.Button();
            this.map_btn_buy = t;
            this.__s(t, ["label", "skinName", "x", "y"], ["购买次数", skins.ButtonYellowSkin, 353, 667]);
            return t;
        };
        MapSkin.prototype.map_label_num_i = function () {
            var t = new egret.gui.Label();
            this.map_label_num = t;
            this.__s(t, ["bold", "height", "size", "text", "textColor", "width", "x", "y"], [true, 26, 20, "今日剩余挑战BOSS次数：2", 1044467, 292, 1, 680]);
            return t;
        };
        MapSkin.prototype.__3_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["height", "scale9Grid", "source", "width", "x", "y"], [627, egret.gui.getScale9Grid("59,21,355,64"), "my_panel_4", 550, 0, 34]);
            return t;
        };
        MapSkin._skinParts = ["_label_bossName", "map_btn_buy", "map_label_num"];
        return MapSkin;
    })(egret.gui.Skin);
    skins.MapSkin = MapSkin;
    MapSkin.prototype.__class__ = "skins.MapSkin";
})(skins || (skins = {}));
