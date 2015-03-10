class _0x0089
{

    public constructor() {}

    public parseData(obj:any):void
    {
        if(!obj) return;

        var godLevel = obj["godLevel"];

        var godUpExp = obj["godUpExp"];

        var dialog:ArmsEngulfDialog = DialogManager.findDialog(ArmsEngulfDialog, "ArmsEngulfDialog");

        if(dialog && dialog.showing)
        {
            Main.player.m_clickItme["godLevel"] = godLevel;

            Main.player.m_clickItme["godUpExp"] = godUpExp;

            if(obj["gevalue1"] && Main.player.m_clickItme["gevalue1"]) Main.player.m_clickItme["gevalue1"] = obj["gevalue1"];

            if(obj["gevalue2"] && Main.player.m_clickItme["gevalue2"]) Main.player.m_clickItme["gevalue2"] = obj["gevalue2"];

            dialog.onUpdate();

            GameManager.flyText({t:"吞噬成功！", q:1});
        }

        var delList:any = obj["deletelist"];

        for(var i in delList)
        {
            Main.player.m_items.delItemById(delList[i]);
        }

        Main.player.m_items.sortItems();

        var rL:ArmsEngulfDialog = DialogManager.findDialog(ArmsEngulfDialog, "ArmsEngulfDialog", false);
        if(rL) rL.clear();

        DialogManager.Update(ItemBag, "ItemBag");
    }
}