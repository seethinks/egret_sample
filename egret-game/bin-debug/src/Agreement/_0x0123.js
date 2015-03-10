var _0x0123 = (function () {
    function _0x0123() {
    }
    _0x0123.prototype.parseData = function (obj) {
        if (!obj)
            return;
        if (obj["item"]) {
            var item = obj["item"];
            var id = item["id"];
            var count = item["count"];
            if (Number(count) <= 0) {
                Main.player.m_items.delItemById(id);
                Main.player.m_items.sortItems();
                DialogManager.Update(ItemBag, "ItemBag");
                Main.player.m_clickItme = null;
            }
            else {
                Main.player.m_clickItme.count = count;
            }
        }
        if (obj["name"]) {
            GameManager.flyText({ t: "获得" + obj["name"] + " * 1", q: 1 });
        }
        var dialog = DialogManager.findDialog(GemUpgradeDialog, "GemUpgradeDialog");
        if (dialog && dialog.showing) {
            dialog.onUpdate();
        }
    };
    return _0x0123;
})();
_0x0123.prototype.__class__ = "_0x0123";
