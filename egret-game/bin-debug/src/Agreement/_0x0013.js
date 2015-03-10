var _0x0013 = (function () {
    function _0x0013() {
    }
    _0x0013.prototype.constuctor = function () {
    };
    _0x0013.prototype.parseData = function (obj) {
        if (!obj)
            return;
        var delList = obj["deletelist"];
        var addList = obj["items"];
        for (var i in delList) {
            Main.player.m_items.delItemById(delList[i]);
        }
        for (var i in addList) {
            var item = Main.player.m_items.addItem(addList[i]);
            if (item) {
                var msg = {};
                msg["t"] = "获得装备 Lv." + item.tpl.lv + item.tpl.name + " ";
                msg["q"] = item["qly"];
                GameManager.msgArr.push(msg);
            }
        }
        Main.player.m_items.sortItems();
        var rL = DialogManager.findDialog(EqptRongLian, "EqptRongLian", false);
        if (rL)
            rL.clear();
        DialogManager.Update(ItemBag, "ItemBag");
    };
    return _0x0013;
})();
_0x0013.prototype.__class__ = "_0x0013";
