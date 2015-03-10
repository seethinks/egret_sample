var _0x0047 = (function () {
    function _0x0047() {
    }
    _0x0047.prototype.parseData = function (obj) {
        if (!obj)
            return;
        var msgs = obj["arg"];
        if (msgs && msgs.length > 0) {
            for (var i = msgs.length - 1; i >= 0; i--) {
                GameManager.worldChatMsg.push(msgs[i]);
            }
        }
        var fight = DialogManager.findDialog(FightDialog, "FightDialog", false);
        if (fight && fight.chat && fight.chat.visible) {
            for (var x in GameManager.worldChatMsg) {
                fight.chat.addItems(GameManager.worldChatMsg[x]);
            }
            GameManager.worldChatMsg = [];
        }
    };
    return _0x0047;
})();
_0x0047.prototype.__class__ = "_0x0047";
