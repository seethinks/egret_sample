class _0x0124
{
    public constructor() {}

    public parseData(obj:any):void
    {
        if(!obj) return;

        if(obj["signature"])
        {
            Main.player.signature = obj["signature"];

            var d:MyInformation = DialogManager.findDialog(MyInformation, "MyInformation");

            if(d&&d.showing)
            {
                d.setSignature();
            }
        }
    }
}