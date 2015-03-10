class _0x0008
{
    //背包信息
    public constructor () {}

    public parseData(obj:any):void
    {
        if(!obj) return;

        Main.player.m_bagSize = obj["size"];

        var manager:ItemManager = Main.player.m_items;

        manager.clear();

        for(var i in obj["itemarray"]) {

            var data:any = obj["itemarray"][i];
            if(!data)continue;

            manager.addItem(data);

        }

        manager.sortItems();

        manager.initOk = true;

        DialogManager.Update(ItemBag, "ItemBag");

        DialogManager.Update(HeroEqpt, "HeroEqpt");

        if(Main.iconMeun) Main.iconMeun.setFull();

        if(Main.player.m_items.equips.length >= Main.player.m_bagSize)
        {
            if(Main.iconMeun) Main.iconMeun.setFull(true);
        }
    }
}
