var _0x0410 = (function () {
    function _0x0410() {
    }
    _0x0410.prototype.parseData = function (obj) {
        if (!obj)
            return;
        var delList = obj["itemIds"];
        for (var i in delList) {
            Main.player.m_items.delItemById(delList[i]);
        }
        Main.player.m_items.sortItems();
        DialogManager.Update(ItemBag, "ItemBag");
        var dialog = DialogManager.findDialog(BelleStart, "BelleStart", false);
        if (dialog && dialog.showing) {
            dialog.onUpdate();
        }
    };
    return _0x0410;
})();
_0x0410.prototype.__class__ = "_0x0410";
