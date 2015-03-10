class BelleHead extends egret.gui.SkinnableComponent
{
    public constructor()
    {
        super();

        this.skinName = "skins.BelleHeadSkin";

        this.touchChildren = true;
    }

    public _head:egret.gui.UIAsset;

    public _bgimg:egret.gui.UIAsset;

    public _key:number;

    public partAdded(partName:string, instance:any):void
    {
        super.partAdded(partName, instance);
    }
}