var _0x0005 = (function () {
    function _0x0005() {
    }
    _0x0005.prototype.parseData = function (obj) {
        if (!obj)
            return;
        var list = obj["list"];
        var temp = [];
        for (var i in list) {
            if (!list[i])
                continue;
            var equip = Main.player.m_items.findItemById(list[i]["id"]);
            if (!equip)
                continue;
            //equip.postion = list[i]["postion"];
            equip.update(list[i]);
            temp.push(equip);
        }
        for (var i in temp) {
            Main.player.m_items.delItemById(temp[i].id);
            Main.player.m_items.addItem(temp[i].getData());
        }
        Main.player.m_items.sortItems();
        DialogManager.Update(ItemBag, "ItemBag");
        DialogManager.Update(HeroEqpt, "HeroEqpt");
        DialogManager.Update(BelleDialog, "BelleDialog");
    };
    return _0x0005;
})();
_0x0005.prototype.__class__ = "_0x0005";
