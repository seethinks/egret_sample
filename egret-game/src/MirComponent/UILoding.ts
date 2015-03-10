class UILoding extends egret.gui.SkinnableComponent
{
    public constructor()
    {
        super();
        this.skinName = "skins.LodingDilaogSkin";
    }

    public loding_title:egret.gui.UIAsset;

    public loding_label:egret.gui.Label;

    public partAdded(partName:string, instance:any):void
    {
        super.partAdded(partName, instance);
    }
}