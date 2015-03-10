var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var skins;
(function (skins) {
    var ChatSkin = (function (_super) {
        __extends(ChatSkin, _super);
        function ChatSkin() {
            _super.call(this);
            this.__s = egret.gui.setProperties;
            this.__s(this, ["height", "width"], [130, 640]);
            this.elementsContent = [this.chat_btn_set_i(), this.chat_btn_hanghui_i(), this.chat_btn_shijie_i(), this.chat_btn_fight_i(), this.__3_i(), this.chat_send_i(), this._btn_horn_i()];
            this.states = [
                new egret.gui.State("normal", [
                ]),
                new egret.gui.State("disabled", [
                ])
            ];
        }
        Object.defineProperty(ChatSkin.prototype, "skinParts", {
            get: function () {
                return ChatSkin._skinParts;
            },
            enumerable: true,
            configurable: true
        });
        ChatSkin.prototype._btn_horn_i = function () {
            var t = new egret.gui.UIAsset();
            this._btn_horn = t;
            this.__s(t, ["source", "x", "y"], ["horn_laba", 18, 7]);
            return t;
        };
        ChatSkin.prototype.chat_btn_fight_i = function () {
            var t = new egret.gui.Button();
            this.chat_btn_fight = t;
            this.__s(t, ["label", "skinName", "x", "y"], ["返回战斗", skins.ButtonYellowSkin, 481, 77]);
            return t;
        };
        ChatSkin.prototype.chat_btn_hanghui_i = function () {
            var t = new egret.gui.Button();
            this.chat_btn_hanghui = t;
            this.__s(t, ["height", "label", "skinName", "x", "y"], [53, "行会聊天", skins.ButtonBlueSkin, 169, 77]);
            return t;
        };
        ChatSkin.prototype.chat_btn_set_i = function () {
            var t = new egret.gui.Button();
            this.chat_btn_set = t;
            this.__s(t, ["label", "skinName", "x", "y"], ["聊天设置", skins.ButtonBlueSkin, 13, 77]);
            return t;
        };
        ChatSkin.prototype.chat_btn_shijie_i = function () {
            var t = new egret.gui.Button();
            this.chat_btn_shijie = t;
            this.__s(t, ["height", "label", "skinName", "x", "y"], [53, "世界聊天", skins.ButtonBlueSkin, 325, 77]);
            return t;
        };
        ChatSkin.prototype.chat_send_i = function () {
            var t = new egret.gui.Button();
            this.chat_send = t;
            this.__s(t, ["height", "label", "skinName", "width", "x", "y"], [47, "发  送", skins.ButtonBlueSkin, 115, 506, 10]);
            return t;
        };
        ChatSkin.prototype.__3_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["horizontalCenter", "source", "y"], [0, "chat_bg", 0]);
            return t;
        };
        ChatSkin._skinParts = ["chat_btn_set", "chat_btn_hanghui", "chat_btn_shijie", "chat_btn_fight", "chat_send", "_btn_horn"];
        return ChatSkin;
    })(egret.gui.Skin);
    skins.ChatSkin = ChatSkin;
    ChatSkin.prototype.__class__ = "skins.ChatSkin";
})(skins || (skins = {}));
