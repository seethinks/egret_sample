class _0x0041
{

    public constructor() {}

    public parseData(obj:any)
    {

        if(!obj) return;

        var type:string = obj["tag"];

        Main.player.m_leaveResult = obj;

        if(GameManager.startGame){
            var result:ResultDialog = DialogManager.findDialog(ResultDialog, "ResultDialog");
            if(result) result.updateText(obj);
        }

    }
}
