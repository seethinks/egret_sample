class DialogManager
{
    private static dict = {};

    public constructor()
    {

    }

    public static allUpdate():void
    {
        for(var d in DialogManager.dict)
        {
            var dialog:Dialog = DialogManager.dict[d];

            if(dialog && dialog.showing)
            {
                dialog.onUpdatePlayer();
            }
        }
    }

    public static open(dialogClass:any, dialogName:string, up:boolean = false)
    {

        if (DialogManager.dict[dialogName] == null)
        {
            var dialog:Dialog = new dialogClass();

            dialog.show();

            DialogManager.dict[dialogName] = dialog;
        }
        else
        {
            DialogManager.dict[dialogName].show();
        }

        egret.ExternalInterface.call("pt_tdce", dialogName); //TD采集点开界面
//        if(GameManager.dataEyes)GameManager.dataEyes.pushEvent("open_dialog", 1, {dialogName:dialogName});
    }

    public static clear():void
    {
        for(var a in DialogManager.dict)
        {
            if(DialogManager.dict[a])
            {
                var _d:Dialog = DialogManager.dict[a];
                if(_d.parent) _d.hide();
            }
        }
    }

    public static Update(_class:any, _className:string, isOnlyShow:boolean = true):void
    {
        if(_class && _className)
        {
            if(DialogManager.dict[_className])
            {
                if(isOnlyShow && !DialogManager.dict[_className].showing)return;
                DialogManager.dict[_className].onUpdate();
            }
        }
    }

    public static findDialog(_class:any, _className:string, isNew:boolean = true):any
    {
        if(_class && _className)
        {
            if(DialogManager.dict[_className])
            {
                return DialogManager.dict[_className];
            }
            else if(isNew)
            {
                return DialogManager.dict[_className] = new _class();
            }
        }
        return null;
    }
}






