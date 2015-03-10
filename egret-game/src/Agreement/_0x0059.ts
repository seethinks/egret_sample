class _0x0059
{

    public constructor(){}

    public parseData(obj:any):void
    {
        if(!obj)return;

        //alist:[{神器属性常量：神器属性值},{},{}]，hlist:[{heroid：psotion},{},{}]

        var alist:Array<any> = obj["alist"];

        var hlist:Array<any> = obj["hlist"];

        var dialog:BelleZhenfa = DialogManager.findDialog(BelleZhenfa, "BelleZhenfa");

        if(dialog)
        {
            dialog.alist = alist;

            dialog.hlist = {};

            if(hlist && hlist.length > 0)
            {
                for(var i = 0; i < hlist.length; i++)
                {
                    var obj = hlist[i];

                    dialog.hlist[obj["postion"]] = obj;
                }
            }

            if(dialog.showing)
            {
                dialog.onUpdate();
            }
        }
    }
}