class _0x0412
{

    public constructor() {}

    public parseData(obj:any):void
    {
        if(!obj) return;

        var z:ZhuanPanDialog = DialogManager.findDialog(ZhuanPanDialog, "ZhuanPanDialog");

        if(z && z.showing)
        {
            z.arr = obj["arg"];

            z.completeNum = Number(obj["completeNum"]);

            z.totalNum = Number(obj["totalNum"]);

            z.onUpdate();
        }
    }
}
