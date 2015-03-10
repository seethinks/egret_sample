var _0x0004 = (function () {
    function _0x0004() {
    }
    _0x0004.prototype.parseData = function (obj) {
        if (!obj)
            return;
        var eIds = [];
        var iIds = [];
        var hIds = [];
        for (var i in obj) {
            if (obj[i])
                continue;
            var ret = Main.player.m_items.delItemById(obj[i]);
            if (ret == 1)
                hIds.push(obj[i]);
            else if (ret == 2)
                eIds.push(obj[i]);
            else if (ret == 3)
                iIds.push(obj[i]);
        }
        Main.player.m_items.sortItems();
        DialogManager.Update(ItemBag, "ItemBag");
        DialogManager.Update(HeroEqpt, "HeroEqpt");
    };
    return _0x0004;
})();
_0x0004.prototype.__class__ = "_0x0004";
