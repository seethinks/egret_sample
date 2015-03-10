var _0x0008 = (function () {
    //背包信息
    function _0x0008() {
    }
    _0x0008.prototype.parseData = function (obj) {
        if (!obj)
            return;
        Main.player.m_bagSize = obj["size"];
        var manager = Main.player.m_items;
        manager.clear();
        for (var i in obj["itemarray"]) {
            var data = obj["itemarray"][i];
            if (!data)
                continue;
            manager.addItem(data);
        }
        manager.sortItems();
        manager.initOk = true;
        DialogManager.Update(ItemBag, "ItemBag");
        DialogManager.Update(HeroEqpt, "HeroEqpt");
        if (Main.iconMeun)
            Main.iconMeun.setFull();
        if (Main.player.m_items.equips.length >= Main.player.m_bagSize) {
            if (Main.iconMeun)
                Main.iconMeun.setFull(true);
        }
    };
    return _0x0008;
})();
_0x0008.prototype.__class__ = "_0x0008";
