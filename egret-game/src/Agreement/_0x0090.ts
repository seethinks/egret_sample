class _0x0090
{

    public constructor(){}

    public parseData(obj:any):void
    {
        if(!obj)return;

        Main.player.m_deuiList = new Array<any>();

        var list = obj["vsPlayers"];

        Main.player.m_deulMyinfo = obj["myInfo"];

        if(!list) return;

        for(var i = 0; i < list.length; i++)
        {
            Main.player.m_deuiList.push(list[i]);
        }

        var deul:DeulDialog = DialogManager.findDialog(DeulDialog, "DeulDialog");

        if(deul && deul.showing)
        {
            deul.onUpdate();
        }
    }


}