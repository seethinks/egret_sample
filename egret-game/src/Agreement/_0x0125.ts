class _0x0125
{
    public constructor() {}

    public parseData(obj:any):void
    {
        if(!obj) return;

        var countdown = obj["countdown"];

        Main.player.m_society.countdown = Number(countdown);
    }
}