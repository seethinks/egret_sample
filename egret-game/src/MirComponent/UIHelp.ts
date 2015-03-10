class UIHelp extends egret.gui.SkinnableComponent
{
    public constructor()
    {
        super();
        this.skinName = "skins.HelpSkin";
    }

    public help_label:egret.gui.Label;

    public partAdded(partName:string, instance:any):void
    {
        super.partAdded(partName, instance);
    }
}