class NetLoding extends egret.gui.SkinnableComponent
{
    public constructor()
    {
        super();

        this.skinName = "skins.UIlodingSkin";

        this.touchChildren = false;

        this.touchEnabled = false;
    }

    public partAdded(partName:string, instance:any):void
    {
        super.partAdded(partName, instance);
    }
}