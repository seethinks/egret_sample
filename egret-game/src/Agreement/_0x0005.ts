class _0x0005
{

    public constructor () {}

    public parseData(obj:any):void
    {
        if(!obj) return;

        var list:any = obj["list"];
        var temp:ItemBase[] = [];

        for(var i in list) {

            if(!list[i])continue;

            var equip:ItemBase = Main.player.m_items.findItemById(list[i]["id"]);
            if(!equip)continue;

            //equip.postion = list[i]["postion"];
            equip.update(list[i]);

            temp.push(equip);
        }

        for(var i in temp){
            Main.player.m_items.delItemById(temp[i].id);
            Main.player.m_items.addItem(temp[i].getData());
        }

        Main.player.m_items.sortItems();

        DialogManager.Update(ItemBag, "ItemBag");
        DialogManager.Update(HeroEqpt, "HeroEqpt");

        DialogManager.Update(BelleDialog, "BelleDialog");
    }
}
