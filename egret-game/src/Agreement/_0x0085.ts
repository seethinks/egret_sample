class _0x0085 {

    public constructor() {}

    public parseData(obj:any):void
    {
        if(!obj) return;

        var dialog:EqptMakeDialog = DialogManager.findDialog(EqptMakeDialog, "EqptMakeDialog");

        if(dialog)
        {
            dialog.makeData = obj;

            if(dialog.showing)
            {
                dialog.onUpdate();
            }
        }
    }

}