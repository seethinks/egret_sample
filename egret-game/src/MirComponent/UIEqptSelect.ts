class UIEqptSelect extends egret.gui.SkinnableComponent
{
    public constructor()
    {
        super();
        this.skinName = "skins.EqptSelectSkin";
    }

    public _btn:egret.gui.Button;

    public partAdded(partName:string, instance:any):void
    {
        super.partAdded(partName, instance);
    }
}