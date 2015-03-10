class OpenServerUI extends egret.gui.SkinnableComponent
{
    public constructor()
    {
        super();

        this.skinName = "skins.NewServerFuLiSkin";

        this.touchChildren = false;

        this.touchEnabled = false;
    }

    public _labels:egret.gui.Label;

    public partAdded(partName:string, instance:any):void
    {
        super.partAdded(partName, instance);

        if(instance == this._labels)
        {
            this._labels.touchChildren = false;

            this._labels.touchEnabled = false;
        }
    }
}