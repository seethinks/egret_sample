class _0x0410
{

    public constructor() {}

    public parseData(obj:any):void
    {
        if(!obj) return;

        var delList:any = obj["itemIds"];

        for(var i in delList)
        {
            Main.player.m_items.delItemById(delList[i]);
        }

        Main.player.m_items.sortItems();

        DialogManager.Update(ItemBag, "ItemBag");

        var dialog:BelleStart = DialogManager.findDialog(BelleStart, "BelleStart", false);

        if(dialog && dialog.showing)
        {
            dialog.onUpdate();
        }
    }
}
