class _0x0093
{

    public constructor(){}

    public parseData(obj:any):void
    {
        if(!obj)return;

        //{"type":"0x0093","data":{"gold":"96924950","vsCount":"6"}}
        Main.player.m_deulMyinfo["vsCount"] = obj["vsCount"];

        var dialog:DeulDialog = DialogManager.findDialog(DeulDialog, "DeulDialog");

        if(dialog && dialog.showing) dialog.onUpdate();

    }


}