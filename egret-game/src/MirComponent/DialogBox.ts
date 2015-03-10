class DialogBox extends egret.gui.SkinnableComponent
{
    public constructor()
    {
        super();
        this.skinName = "skins.DialogMessageBoxSkin";

        this.height = 720;
    }

    public _dialog_label:egret.gui.Label;

    public _btn_help:egret.gui.UIAsset;

    public _btn_close:egret.gui.UIAsset;

    public _dialogBoxPanel:egret.gui.UIAsset;

    public _sprite:egret.gui.UIAsset;

    public partAdded(partName:string, instance:any):void
    {
        super.partAdded(partName, instance);

        if(instance == this._dialog_label)
        {
            this._dialog_label.text = this.title;
        }
    }

    public setSize(_h:number = 0):void
    {

    }

    private title:string = "界面";

    public setTitle(_s:string):void
    {
        this.title = _s;

        if(this._dialog_label)
        {
            this._dialog_label.text = _s;
        }
    }
}