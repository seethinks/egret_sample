class _0x0120
{
    public constructor() {}

    public parseData(obj:any):void
    {
        if(!obj) return;

        if(obj["deleteId"])
        {
            var delId:any = obj["deleteId"];

            Main.player.m_items.delItemById(delId);

            Main.player.m_items.sortItems();

            DialogManager.Update(ItemBag, "ItemBag");
        }

        Main.player.m_clickItme["hole1"] = obj["hole1"];

        Main.player.m_clickItme["hole2"] = obj["hole2"];

        Main.player.m_clickItme["hole3"] = obj["hole3"];

        Main.player.m_clickItme["hole4"] = obj["hole4"];

        var gem:GemSetDialog = DialogManager.findDialog(GemSetDialog, "GemSetDialog");

        if(gem && gem.showing)
        {
            gem.onUpdate();
        }
    }
}