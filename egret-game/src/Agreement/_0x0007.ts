class _0x0007
{
    //战斗数据
    public constuctor()
    {

    }

    public parseData(obj:any):void
    {
        if(!obj) return;

        var fight:FightDialog = DialogManager.findDialog(FightDialog, "FightDialog");

        if(fight)
        {
            fight.startFight(obj);
        }
    }
}
