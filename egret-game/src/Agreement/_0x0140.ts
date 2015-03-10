class _0x0140
{

    public constructor() {}

    public parseData(obj:any)
    {
        if(!obj) return;
        var msgs:any[] = obj["arg"];
        if(msgs && msgs.length > 0){
            for(var i = msgs.length -1; i >= 0; i--){

                GameManager.worldChatMsgHH.push(msgs[i]);
            }
        }

        var fight:FightDialog = DialogManager.findDialog(FightDialog, "FightDialog", false);

        if(fight && fight.chat && fight.chat.visible)
        {
            for(var x in GameManager.worldChatMsgHH)
            {
                fight.chat.addItemsHH(GameManager.worldChatMsgHH[x]);
            }
            GameManager.worldChatMsgHH = [];
        }
    }
}
