class _0x0047
{

    public constructor() {}

    public parseData(obj:any)
    {
        if(!obj) return;

        var msgs:any[] = obj["arg"];
        if(msgs && msgs.length > 0){
            for(var i = msgs.length -1; i >= 0; i--)
            {
                GameManager.worldChatMsg.push(msgs[i]);
            }
        }

        var fight:FightDialog = DialogManager.findDialog(FightDialog, "FightDialog", false);

        if(fight && fight.chat && fight.chat.visible)
        {

            for(var x in GameManager.worldChatMsg)
            {
                fight.chat.addItems(GameManager.worldChatMsg[x]);
            }

            GameManager.worldChatMsg = [];
        }
    }
}
