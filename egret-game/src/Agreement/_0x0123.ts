class _0x0123
{
    public constructor() {}

    public parseData(obj:any):void
    {
        if(!obj) return;

        if(obj["item"])
        {
            var item = obj["item"];

            var id = item["id"];

            var count = item["count"];

            if(Number(count) <= 0)
            {
                Main.player.m_items.delItemById(id);

                Main.player.m_items.sortItems();

                DialogManager.Update(ItemBag, "ItemBag");

                Main.player.m_clickItme = null;
            }
            else
            {
                Main.player.m_clickItme.count = count;
            }

        }

        if(obj["name"])
        {
            GameManager.flyText({t:"获得"+obj["name"]+" * 1", q:1});
        }

        var dialog:GemUpgradeDialog = DialogManager.findDialog(GemUpgradeDialog, "GemUpgradeDialog");

        if(dialog && dialog.showing)
        {
            dialog.onUpdate();
        }
    }
}