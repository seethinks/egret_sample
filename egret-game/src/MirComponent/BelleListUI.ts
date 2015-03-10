class BelleListUI extends egret.gui.SkinnableComponent
{
    public constructor()
    {
        super();

        this.skinName = "skins.BelleListSkin";
    }

    public _group:egret.gui.Group;

    public _labels:egret.gui.Label;

    public partAdded(partName:string, instance:any):void
    {
        super.partAdded(partName, instance);
    }
}