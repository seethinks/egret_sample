class _0x0135
{

    public constructor() {}

    public parseData(obj:any):void
    {
        if(!obj) return;

        var list:Array<any> = obj["list"];

        var a:ActivityDialog = DialogManager.findDialog(ActivityDialog, "ActivityDialog");

        if(a)
        {
           a.huodongList = list;

           if(a.showing) a.onUpdate();
        }
    }
}
