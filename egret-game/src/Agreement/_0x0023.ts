class _0x0023 {

    public constructor() {}

    public parseData(obj:any):void {

        if(!obj)return;

        var shop:ShopData = Main.player.m_shops["mall"];
        if( !shop ){

            //没有商城数据 请求商城数据
            return;
        }

        var ids:any = obj["ids"];

        for(var i in ids) {
            var delk:number = -1;
            for(var k in shop.goods){
                var item:ShopItemData = shop.goods[k];

                if(item.id == ids[i])
                {
                    delk = k;
                    break;
                }
            }
            if(delk > -1)shop.goods.splice(delk, 1);
        }

        delete obj["ids"];

        shop.update(obj);

        //刷新商店界面
        DialogManager.Update(ShopDialog, "ShopDialog");
//        var dialog:ShopDialog = DialogManager.findDialog(ShopDialog, "ShopDialog", false);
//        if(dialog)dialog.delGood(ids);

    }

}