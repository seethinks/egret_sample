var _0x0080 = (function () {
    function _0x0080() {
    }
    _0x0080.prototype.parseData = function (data) {
        if (!data)
            return;
        var ud = { "gold": data["gold"], "m_bagSize": data["size"] };
        Main.player.playerUpdate(ud);
        DialogManager.Update(ItemBag, "ItemBag");
    };
    return _0x0080;
})();
_0x0080.prototype.__class__ = "_0x0080";
