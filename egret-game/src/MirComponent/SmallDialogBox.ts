class SmallDialogBox extends egret.gui.SkinnableComponent
{
    public constructor()
    {
        super();
        this.skinName = "skins.SmallDialogBoxSkin";
    }

    public _dialog_title:egret.gui.Label;
    public _dialog_panel:egret.gui.UIAsset;
    public _close_btn:egret.gui.UIAsset;

    public partAdded(partName:string, instance:any):void {
        super.partAdded(partName, instance);

        if(instance == this._dialog_title) {
            this._dialog_title.text = this._title;
        }

    }

    public setSize(_h:number = 0):void {    }

    private _title:string = "";

    public setTitle(_s:string):void {
        this._title = _s;

        if(this._dialog_title) {
            this._dialog_title.text = _s;
        }
    }
}