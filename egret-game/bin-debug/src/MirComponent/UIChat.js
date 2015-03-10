var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var UIChat = (function (_super) {
    __extends(UIChat, _super);
    function UIChat() {
        _super.call(this);
        this.skinName = "skins.ChatSkin";
    }
    UIChat.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
        if (instance == this.chat_btn_hanghui) {
        }
        if (instance == this.chat_btn_set) {
            this.chat_btn_set.visible = false;
        }
    };
    return UIChat;
})(egret.gui.SkinnableComponent);
UIChat.prototype.__class__ = "UIChat";
