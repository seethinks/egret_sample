var _0x0094 = (function () {
    function _0x0094() {
    }
    _0x0094.prototype.parseData = function (obj) {
        if (!obj)
            return;
        Main.player.honor = obj["honor"];
        var shop = Main.player.m_shops["duel"];
        if (!shop) {
            return;
        }
        var delk = -1;
        for (var k in shop.goods) {
            var item = shop.goods[k];
            if (item.id == obj["id"]) {
                delk = k;
                break;
            }
        }
        if (delk > -1)
            shop.goods.splice(delk, 1);
        //刷新商店界面
        DialogManager.Update(DeulShop, "DeulShop");
        //        var dialog:DeulShop = DialogManager.findDialog(DeulShop, "DeulShop", false);
        //        if(dialog)dialog.delGood(ids);
    };
    return _0x0094;
})();
_0x0094.prototype.__class__ = "_0x0094";
