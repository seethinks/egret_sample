class _0x0128
{
    public constructor() {}

    public parseData(obj:any):void
    {
        if(!obj) return;

        var inspireCount:number = Number(obj["inspireCount"]);

        if(inspireCount >= 0) Main.player.m_society.inspireCount = inspireCount;

        var rank:SocietyDialog = DialogManager.findDialog(SocietyDialog, "SocietyDialog");

        if(rank && rank.showing)
        {
            rank.onUpdate();
        }
    }
}