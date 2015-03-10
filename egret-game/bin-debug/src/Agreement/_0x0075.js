var _0x0075 = (function () {
    function _0x0075() {
    }
    _0x0075.prototype.parseData = function (obj) {
        if (!obj)
            return;
        var us = {};
        if (obj["bstone"] > 0) {
            us["bstone"] = obj["bstone"];
        }
        if (obj["money"] > 0) {
            us["money"] = obj["money"];
        }
        Main.player.playerUpdate(us);
        for (var i in obj["ids"]) {
            Main.player.m_items.delItemById(obj["ids"][i]);
        }
        Main.player.m_items.sortItems();
        DialogManager.Update(ItemBag, "ItemBag");
        DialogManager.Update(BatchSellDialog, "BatchSellDialog");
    };
    return _0x0075;
})();
_0x0075.prototype.__class__ = "_0x0075";
