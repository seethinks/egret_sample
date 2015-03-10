var _0x0092 = (function () {
    function _0x0092() {
    }
    _0x0092.prototype.parseData = function (obj) {
        if (!obj)
            return;
        var count = Number(obj["refreshCount"]);
        Main.player.honor = obj["honor"];
        var goos = new Array();
        for (var i in obj["goods"]) {
            var item = new ShopItemData();
            item.createHonourShopItem(obj["goods"][i]);
            goos.push(item);
        }
        obj["goods"] = goos;
        var shop = Main.player.m_shops["duel"];
        if (!shop) {
            shop = new ShopData();
            Main.player.m_shops["duel"] = shop;
        }
        shop.type = "duel";
        shop.update(obj);
        //刷新商店界面
        var dialog = DialogManager.findDialog(DeulShop, "DeulShop");
        if (dialog && dialog.showing) {
            dialog.count = count;
            dialog.onUpdate();
        }
    };
    return _0x0092;
})();
_0x0092.prototype.__class__ = "_0x0092";
