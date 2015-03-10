class OpenServerList extends egret.gui.ItemRenderer
{
    public constructor()
    {
        super();

        this.skinName = "skins.NewServerListSkin";

        this.touchChildren = true;

        this.touchEnabled = true;
    }

    public _img:egret.gui.UIAsset;

    public partAdded(partName:string, instance:any):void
    {
        super.partAdded(partName, instance);
    }

    public dataChanged()
    {
        super.dataChanged();

        if(this.data && this._img)
        {
            this._img.source = "alist_" + this.data["num"];
        }
    }
}