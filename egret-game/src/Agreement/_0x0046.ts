class _0x0046
{

    public constructor() {}

    public parseData(obj:any)
    {
        if(!obj) return;

        var list:Array<any> = obj["arg"];

        if(list && list.length > 0)
        {
            var dialog:GiftDialog = DialogManager.findDialog(GiftDialog, "GiftDialog");

            if(dialog)
            {
                list.sort(function(x:any, y:any){
                    if(y["tag"] > x["tag"]){
                        return 1;
                    }else if(y["tag"] == x["tag"]){
                        if(y["type"] < x["type"]){
                            return 1;
                        }
                    }
                    return -1;
                });
                dialog.actList = list;

                if(dialog.showing) dialog.onUpdate();

                for(var i in list)
                {
                    var obj = list[i];

                    if(Number(obj["tag"]) == 1)
                    {
                        if(!dialog.showing) Main.iconMeun.setGift(true);
                        break;
                    }
                }
            }
        }
    }
}
