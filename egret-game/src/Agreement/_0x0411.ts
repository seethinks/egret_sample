class _0x0411
{

    public constructor() {}

    public parseData(obj:any):void
    {
        if(!obj) return;

        var z:ZhuanPanDialog = DialogManager.findDialog(ZhuanPanDialog, "ZhuanPanDialog");

        if(z)
        {
            z.arg = obj["arg"];

            z.completeNum = Number(obj["completeNum"]);

            z.totalNum = Number(obj["totalNum"]);

            z.refreshNum();

            z.IsStart();
        }
    }
}
