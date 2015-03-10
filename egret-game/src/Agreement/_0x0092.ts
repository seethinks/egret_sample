class _0x0092 {

    public constructor(){}

    public parseData(obj:any):void {
        if(!obj)return;

        var count:number = Number(obj["refreshCount"]);

        Main.player.honor = obj["honor"];

        var goos:ShopItemData[] = new Array();
        for(var i in obj["goods"]){
            var item:ShopItemData = new ShopItemData();
            item.createHonourShopItem(obj["goods"][i]);
            goos.push(item);
        }

        obj["goods"] = goos;

        var shop:ShopData = Main.player.m_shops["duel"];
        if(!shop) {
            shop = new ShopData();
            Main.player.m_shops["duel"] = shop;
        }

        shop.type = "duel";
        shop.update(obj);

        //刷新商店界面
        var dialog:DeulShop = DialogManager.findDialog(DeulShop, "DeulShop");
        if(dialog && dialog.showing)
        {
            dialog.count = count;

            dialog.onUpdate();
        }
    }


}