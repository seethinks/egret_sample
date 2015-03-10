class _0x0013
{
    public constuctor()
    {

    }

    public parseData(obj:any):void {
        if(!obj) return;

        var delList:any = obj["deletelist"];
        var addList:any = obj["items"];

        for(var i in delList){
            Main.player.m_items.delItemById(delList[i]);
        }
        for(var i in addList){
            var item:ItemBase = Main.player.m_items.addItem(addList[i]);

            if(item){

                var msg:any = {};
                msg["t"] = "获得装备 Lv."+item.tpl.lv+item.tpl.name+" ";
                msg["q"] = item["qly"];
                GameManager.msgArr.push(msg);
            }

        }

        Main.player.m_items.sortItems();

        var rL:EqptRongLian = DialogManager.findDialog(EqptRongLian, "EqptRongLian", false);
        if(rL)rL.clear();

        DialogManager.Update(ItemBag, "ItemBag");


    }
}
