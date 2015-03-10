class _0x0058
{

    public constructor(){}

    public parseData(obj:any):void
    {
        if(!obj)return;

        var msgs:any[] = obj["arg"];

        if(msgs && msgs.length > 0)
        {
            for(var i = msgs.length -1; i >= 0; i--)
            {
                GameManager.hornList.push(msgs[i]);
            }
        }
    }
}