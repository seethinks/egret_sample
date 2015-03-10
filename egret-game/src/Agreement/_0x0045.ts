class _0x0045
{

    public constructor() {}

    public parseData(obj:any)
    {
        if(!obj) return;

        Main.player.m_gameSet["1"] = obj["a1"];

        Main.player.m_gameSet["2"] = obj["a2"];

        Main.player.m_gameSet["3"] = obj["a3"];

        Main.player.m_gameSet["4"] = obj["a4"];

        Main.player.m_gameSet["5"] = obj["a5"];

        Main.player.m_gameSet["6"] = obj["a6"];

        var gc:GameSetDialog = DialogManager.findDialog(GameSetDialog, "GameSetDialog");

        if(gc && gc.showing) gc.onUpdate();
    }
}
