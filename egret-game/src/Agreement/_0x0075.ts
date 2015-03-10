class _0x0075 {

    public constructor(){}

    public parseData(obj:any):void {
        if(!obj)return;

        var us:any = {};

        if(obj["bstone"]>0){
            us["bstone"] = obj["bstone"];
        }

        if(obj["money"]>0){
            us["money"] = obj["money"];
        }

        Main.player.playerUpdate(us);

        //删除装备
        for(var i in obj["ids"]){
            Main.player.m_items.delItemById(obj["ids"][i]);
        }
        Main.player.m_items.sortItems();


        DialogManager.Update(ItemBag, "ItemBag");
        DialogManager.Update(BatchSellDialog, "BatchSellDialog");

    }


}