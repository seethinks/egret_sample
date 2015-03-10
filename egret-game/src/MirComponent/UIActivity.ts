class UIActivity extends egret.gui.SkinnableComponent
{
    public constructor()
    {
        super();
        this.skinName = "skins.ActivityDialogSkin";

        this.touchChildren = true;

        this.touchEnabled = true;
    }

    public _tab_1:UIBagTab;

    public _tab_2:UIBagTab;

    public _btn_cdkey:egret.gui.Button;

    public partAdded(partName:string, instance:any):void
    {
        super.partAdded(partName, instance);
    }
}