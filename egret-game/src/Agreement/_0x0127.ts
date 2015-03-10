class _0x0127
{
    public constructor() {}

    public parseData(obj:any):void
    {
        if(!obj) return;

        var list:Array<any> = obj["list"];

        var my = obj["players"];

        if(list && list.length > 0)
        {
            var rank:SocietyBossDevote = DialogManager.findDialog(SocietyBossDevote, "SocietyBossDevote");

            if(rank)
            {
                rank.bossList = list;

                rank.show();
            }
        }
    }
}