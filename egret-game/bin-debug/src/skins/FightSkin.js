var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var skins;
(function (skins) {
    var FightSkin = (function (_super) {
        __extends(FightSkin, _super);
        function FightSkin() {
            _super.call(this);
            this.__s = egret.gui.setProperties;
            this.__s(this, ["height", "width"], [798, 640]);
            this.elementsContent = [this.__3_i(), this._btn_fight_census_i(), this._btn_fight_statistics_i(), this.__4_i(), this._btn_cut_fight_i(), this._btn_fast_fight_i(), this._btn_fight_set_i(), this._btn_fight_chat_i(), this._btn_new_event_i(), this._mapwarn_i(), this.fight_souxun_i(), this.fight_label_time_i(), this.fight_label_log_i(), this.fight_label_boss_i(), this._map_name_i(), this._fight_img_i()];
            this.states = [
                new egret.gui.State("normal", [
                ]),
                new egret.gui.State("disabled", [
                ])
            ];
        }
        Object.defineProperty(FightSkin.prototype, "skinParts", {
            get: function () {
                return FightSkin._skinParts;
            },
            enumerable: true,
            configurable: true
        });
        FightSkin.prototype.__4_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["horizontalCenter", "source", "top"], [0, "img_vs", 0]);
            return t;
        };
        FightSkin.prototype._btn_cut_fight_i = function () {
            var t = new egret.gui.Button();
            this._btn_cut_fight = t;
            this.__s(t, ["bottom", "height", "label", "left", "skinName"], [0, 53, "切换地图", 3, skins.ButtonBlueSkin]);
            return t;
        };
        FightSkin.prototype._btn_fast_fight_i = function () {
            var t = new egret.gui.Button();
            this._btn_fast_fight = t;
            this.__s(t, ["bottom", "label", "left", "skinName"], [0, "快速战斗", 157, skins.ButtonRedSkin]);
            return t;
        };
        FightSkin.prototype._btn_fight_census_i = function () {
            var t = new egret.gui.UIAsset();
            this._btn_fight_census = t;
            this.__s(t, ["height", "right", "source", "top", "width"], [91, -150, "btn_fight_census", 200, 255]);
            return t;
        };
        FightSkin.prototype._btn_fight_chat_i = function () {
            var t = new egret.gui.Button();
            this._btn_fight_chat = t;
            this.__s(t, ["bottom", "label", "right", "skinName"], [0, "聊天频道", 26, skins.ButtonYellowSkin]);
            return t;
        };
        FightSkin.prototype._btn_fight_set_i = function () {
            var t = new egret.gui.Button();
            this._btn_fight_set = t;
            this.__s(t, ["bottom", "height", "label", "right", "skinName"], [0, 53, "战斗设置", 181, skins.ButtonRedSkin]);
            return t;
        };
        FightSkin.prototype._btn_fight_statistics_i = function () {
            var t = new egret.gui.UIAsset();
            this._btn_fight_statistics = t;
            this.__s(t, ["height", "left", "source", "top", "width"], [91, -148, "btn_fight_statistics", 199, 255]);
            return t;
        };
        FightSkin.prototype._btn_new_event_i = function () {
            var t = new egret.gui.UIAsset();
            this._btn_new_event = t;
            this.__s(t, ["bottom", "right", "source"], [12, 13, "btn_new_event"]);
            return t;
        };
        FightSkin.prototype._fight_img_i = function () {
            var t = new egret.gui.UIAsset();
            this._fight_img = t;
            this.__s(t, ["source", "x", "y"], ["fight_img_1", 196, 117]);
            return t;
        };
        FightSkin.prototype._map_name_i = function () {
            var t = new egret.gui.Label();
            this._map_name = t;
            this.__s(t, ["height", "size", "textAlign", "textColor", "verticalAlign", "width", "x", "y"], [24, 18, "center", 575012, "middle", 121, 261, 270]);
            return t;
        };
        FightSkin.prototype._mapwarn_i = function () {
            var t = new egret.gui.UIAsset();
            this._mapwarn = t;
            this.__s(t, ["bottom", "right", "source"], [12, 485, "btn_new_event"]);
            return t;
        };
        FightSkin.prototype.fight_label_boss_i = function () {
            var t = new egret.gui.Label();
            this.fight_label_boss = t;
            this.__s(t, ["bold", "fontFamily", "height", "size", "textAlign", "textColor", "verticalAlign", "width", "x", "y"], [true, "SimSun", 30, 26, "center", 14548054, "middle", 444, 99, 189]);
            return t;
        };
        FightSkin.prototype.fight_label_log_i = function () {
            var t = new egret.gui.Label();
            this.fight_label_log = t;
            this.__s(t, ["bold", "bottom", "fontFamily", "horizontalCenter", "left", "right", "textColor", "top"], [true, 81, "Arial", 3, 34, 28, 4595491, 303]);
            return t;
        };
        FightSkin.prototype.fight_label_time_i = function () {
            var t = new egret.gui.Label();
            this.fight_label_time = t;
            this.__s(t, ["bold", "fontFamily", "height", "horizontalCenter", "italic", "size", "textAlign", "textColor", "top", "verticalAlign", "width"], [true, "Arial", 47, 0, true, 40, "center", 5750304, 128, "middle", 244]);
            return t;
        };
        FightSkin.prototype.fight_souxun_i = function () {
            var t = new egret.gui.UIAsset();
            this.fight_souxun = t;
            this.__s(t, ["source", "top", "x"], ["fight_souxun", 188, 238]);
            return t;
        };
        FightSkin.prototype.__3_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["bottom", "horizontalCenter", "source", "top", "width"], [59, 0, "fight_bgImgae", 0, 635]);
            return t;
        };
        FightSkin._skinParts = ["_btn_fight_census", "_btn_fight_statistics", "_btn_cut_fight", "_btn_fast_fight", "_btn_fight_set", "_btn_fight_chat", "_btn_new_event", "_mapwarn", "fight_souxun", "fight_label_time", "fight_label_log", "fight_label_boss", "_map_name", "_fight_img"];
        return FightSkin;
    })(egret.gui.Skin);
    skins.FightSkin = FightSkin;
    FightSkin.prototype.__class__ = "skins.FightSkin";
})(skins || (skins = {}));
