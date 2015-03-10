var _0x0009 = (function () {
    function _0x0009() {
    }
    _0x0009.prototype.parseData = function (obj) {
        if (!obj)
            return;
        var list = obj["list"];
        for (var i in list) {
            var data = list[i];
            if (!data)
                continue;
            var item = Main.player.m_items.findItemById(data["id"]);
            if (item) {
                item.update(data);
            }
            else {
                item = Main.player.m_items.addItem(data);
            }
            if (item.count < 1)
                Main.player.m_items.delItem(item);
            if (Main.player.m_clickItme && Main.player.m_clickItme["id"] == item.id) {
                Main.player.m_clickItme = item;
            }
            //获得装备评分
            if (Main.player.m_items.initOk && item && item.maxType == 2 && item.postion == 0 && (item.tpl["ejob"] == Main.player.job || item.tpl["ejob"] == 0)) {
                var oEq = Main.player.m_items.holdEq[item.tpl["ePostion"]];
                if (!oEq || item.grade > oEq.grade) {
                    if (Main.iconMeun)
                        Main.iconMeun.setShowWarn(true);
                    var heroEqpt = DialogManager.findDialog(HeroEqpt, "HeroEqpt");
                    if (heroEqpt) {
                        heroEqpt.addEqptWarm(item.tpl["ePostion"]);
                    }
                }
            }
        }
        Main.player.m_items.sortItems();
        DialogManager.Update(ItemBag, "ItemBag");
        DialogManager.Update(EqptDetails, "EqptDetails");
        DialogManager.Update(EqptDetailsBag, "EqptDetailsBag");
        DialogManager.Update(HeroEqpt, "HeroEqpt");
        DialogManager.Update(EqptBaptizeDIalog, "EqptBaptizeDIalog");
        DialogManager.Update(EqptStrengthen, "EqptStrengthen");
        var dialog = DialogManager.findDialog(BelleStart, "BelleStart", false);
        if (dialog && dialog.showing) {
            dialog.onUpdate();
        }
        if (Main.iconMeun)
            Main.iconMeun.setFull();
        if (Main.player.m_items.equips.length >= Main.player.m_bagSize) {
            if (Main.iconMeun)
                Main.iconMeun.setFull(true);
        }
    };
    return _0x0009;
})();
_0x0009.prototype.__class__ = "_0x0009";
