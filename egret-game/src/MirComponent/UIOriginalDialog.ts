class UIOriginalDialog extends egret.gui.SkinnableComponent
{
    public constructor()
    {
        super();
        this.skinName = "skins.OriginalDialogSkin";
    }

    public _title:egret.gui.Label;

    public _original_dialog_bg:egret.gui.UIAsset;

    public dialog_title:egret.gui.UIAsset;

    public partAdded(partName:string, instance:any):void
    {
        super.partAdded(partName, instance);

        if (instance == this._title)
        {
            this.setTitle(this.str);
        }
    }

    private str:string = "";

    public setTitle(_str:string):void
    {
        this.str = _str;

        if(this._title)
        {
            this._title.text = "" + _str;
        }
    }

    private bool:boolean = false;

    public setTitleVis(_bool:boolean = false):void
    {
        this.bool = _bool;

        if(this.dialog_title)
        {
            this.dialog_title.visible = _bool;
        }
    }
}