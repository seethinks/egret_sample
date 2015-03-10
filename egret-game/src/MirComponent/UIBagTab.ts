class UIBagTab extends egret.gui.SkinnableComponent
{
    public constructor()
    {
        super();
        this.skinName = "skins.BagTabSkin";

        this.touchChildren = true;

        this.touchEnabled = true;
    }

    public _wenzi:egret.gui.UIAsset;

    public _img:egret.gui.UIAsset;

    public partAdded(partName:string, instance:any):void
    {
        super.partAdded(partName, instance);

        if (instance == this._wenzi)
        {
            this.setText(this.str);
        }

        if(instance == this._img)
        {
            this.setSouoce(this.souce);
        }
    }

    private str:string = "";

    public setText(_str:string):void
    {
        this.str = _str;

        if(this._wenzi)
        {
            this._wenzi.source = _str;
        }
    }

    private souce:string = "";

    public setSouoce(_souce:string = ""):void
    {
        this.souce = _souce;

        if(this._img)
        {
            this._img.source = _souce;
        }
    }
}