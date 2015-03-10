var _0x0022 = (function () {
    function _0x0022() {
    }
    _0x0022.prototype.parseData = function (obj) {
        if (!obj)
            return;
        var goos = new Array();
        for (var i in obj["goods"]) {
            var item = new ShopItemData();
            item.update(obj["goods"][i]);
            goos.push(item);
        }
        obj["goods"] = goos;
        var shop = Main.player.m_shops["mall"];
        if (!shop) {
            shop = new ShopData();
            Main.player.m_shops["mall"] = shop;
        }
        shop.type = "mall";
        shop.update(obj);
        //刷新商店界面
        var dialog = DialogManager.findDialog(ShopDialog, "ShopDialog", false);
        if (dialog)
            dialog.onUpdate();
    };
    return _0x0022;
})();
_0x0022.prototype.__class__ = "_0x0022";
