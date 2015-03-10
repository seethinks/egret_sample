class _0x0132
{

    public constructor() {}

    public parseData(obj:any):void
    {
        if(!obj) return;

        var p:PrisonDialog = DialogManager.findDialog(PrisonDialog, "PrisonDialog");

        if(p)
        {
            p.actList = obj["list"];

            if(p.showing)
            {
                p.onUpdate();
            }
            else
            {
                p.show();
            }
        }
    }
}
