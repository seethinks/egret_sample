class _0x0088
{

    public constructor() {}

    public parseData(obj:any):void
    {
        if(!obj) return;

//        var godId:number = Number(obj["godId"]);
//
//        var eqptId:number = Number(obj["equipId"]);
//
//
//        var god:any = Main.player.m_items.findItemById(godId);
//
//        var eqpt:any = Main.player.m_items.findItemById(eqptId);
//
//        var dialog:ArmsInheritDialog = DialogManager.findDialog(ArmsInheritDialog, "ArmsInheritDialog");
//
//        if(dialog && dialog.showing)
//        {
//            Main.player.m_clickItme = god;
//
//            dialog.onUpdate();
//
//            dialog.setItem(eqpt);
//        }

        GameManager.flyText({t:"传承成功！", q:1});
    }
}