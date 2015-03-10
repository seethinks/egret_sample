class HornUI extends egret.gui.SkinnableComponent
{
    public constructor()
    {
        super();
        this.skinName = "skins.HornSkin";
    }

    public _img:egret.gui.UIAsset;

    public _laba:egret.gui.UIAsset;

    public partAdded(partName:string, instance:any):void
    {
        super.partAdded(partName, instance);

        if(instance == this._laba)
        {
            this._laba.visible = false;
        }
    }
}