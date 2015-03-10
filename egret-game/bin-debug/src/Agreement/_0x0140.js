var _0x0140 = (function () {
    function _0x0140() {
    }
    _0x0140.prototype.parseData = function (obj) {
        if (!obj)
            return;
        var msgs = obj["arg"];
        if (msgs && msgs.length > 0) {
            for (var i = msgs.length - 1; i >= 0; i--) {
                GameManager.worldChatMsgHH.push(msgs[i]);
            }
        }
        var fight = DialogManager.findDialog(FightDialog, "FightDialog", false);
        if (fight && fight.chat && fight.chat.visible) {
            for (var x in GameManager.worldChatMsgHH) {
                fight.chat.addItemsHH(GameManager.worldChatMsgHH[x]);
            }
            GameManager.worldChatMsgHH = [];
        }
    };
    return _0x0140;
})();
_0x0140.prototype.__class__ = "_0x0140";
