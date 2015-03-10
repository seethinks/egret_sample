class _0x0022 {

    public constructor() {}

    public parseData(obj:any):void {

        if(!obj)return;

        var goos:ShopItemData[] = new Array();
        for(var i in obj["goods"]){
           var item:ShopItemData = new ShopItemData();
            item.update(obj["goods"][i]);
            goos.push(item);
        }

        obj["goods"] = goos;

        var shop:ShopData = Main.player.m_shops["mall"];
        if(!shop) {
            shop = new ShopData();
            Main.player.m_shops["mall"] = shop;
        }

        shop.type = "mall";
        shop.update(obj);

        //刷新商店界面
        var dialog:ShopDialog = DialogManager.findDialog(ShopDialog, "ShopDialog", false);
        if(dialog)dialog.onUpdate();

    }

}