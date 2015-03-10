class _0x0094 {

    public constructor() {}

    public parseData(obj:any):void {

        if(!obj)return;

        Main.player.honor = obj["honor"];

        var shop:ShopData = Main.player.m_shops["duel"];
        if( !shop ){

            return;
        }

        var delk:number = -1;
        for(var k in shop.goods){
            var item:ShopItemData = shop.goods[k];

            if(item.id == obj["id"])
            {
                delk = k;
                break;
            }
        }
        if(delk > -1)shop.goods.splice(delk, 1);

        //刷新商店界面
        DialogManager.Update(DeulShop, "DeulShop");
//        var dialog:DeulShop = DialogManager.findDialog(DeulShop, "DeulShop", false);
//        if(dialog)dialog.delGood(ids);

    }

}