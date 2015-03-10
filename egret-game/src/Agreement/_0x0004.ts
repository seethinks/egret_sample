class _0x0004 {

    public constructor () {}

    public parseData(obj:any):void {
        if(!obj)return;

        var eIds:number[] = [];
        var iIds:number[] = [];
        var hIds:number[] = [];

        for(var i in obj) {
            if(obj[i])continue;

            var ret:number = Main.player.m_items.delItemById(obj[i]);

            if(ret == 1)hIds.push(obj[i]);
            else if(ret == 2)eIds.push(obj[i]);
            else if(ret == 3)iIds.push(obj[i]);
        }

        Main.player.m_items.sortItems();

        DialogManager.Update(ItemBag, "ItemBag");
        DialogManager.Update(HeroEqpt, "HeroEqpt");
    }

}