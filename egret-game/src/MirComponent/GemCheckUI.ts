class GemCheckUI extends egret.gui.SkinnableComponent
{
    public constructor()
    {
        super();

        this.skinName = "skins.GemCheckSkin";

        this.touchChildren = true;

        this.touchEnabled = true;
    }

    public partAdded(partName:string, instance:any):void
    {
        super.partAdded(partName, instance);
    }
}