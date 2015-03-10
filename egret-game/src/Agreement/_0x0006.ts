class _0x0006
{
    //
    public constuctor()
    {

    }

    public parseData(obj:any):void
    {
        if(!obj) return;

        Main.player.playerUpdate(obj);

        if(obj["vipRewards"])
        {
            DialogManager.Update(MapDialog, "MapDialog", true);
            DialogManager.Update(BuyMoneyDialog, "BuyMoneyDialog", true);
        }
    }
}
