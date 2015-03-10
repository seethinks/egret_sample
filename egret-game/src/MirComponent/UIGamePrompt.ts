class UIGamePrompt extends egret.gui.SkinnableComponent
{
    public constructor()
    {
        super();
        this.skinName = "skins.GamePromptSkin";
    }

    public help_label:egret.gui.Label;

    public _btn:egret.gui.Button;

    public partAdded(partName:string, instance:any):void
    {
        super.partAdded(partName, instance);
    }
}