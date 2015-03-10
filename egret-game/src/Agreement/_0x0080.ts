class _0x0080 {

    public constructor(){}

    public parseData(data:any):void {
        if(!data)return;

        var ud:any = {"gold":data["gold"], "m_bagSize":data["size"]};

        Main.player.playerUpdate(ud);

        DialogManager.Update(ItemBag, "ItemBag");

    }

}