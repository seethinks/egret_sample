class _0x0091
{

    public constructor(){}

    public parseData(obj:any):void
    {
        if(!obj)return;

        Main.player.m_deulRank = obj["players"];

        var rank:DeulRankDialog = DialogManager.findDialog(DeulRankDialog, "DeulRankDialog");

        if(rank && rank.showing)
        {
            rank.onUpdate();
        }
    }
}