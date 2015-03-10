class UIGameSet extends egret.gui.SkinnableComponent
{
    public constructor()
    {
        super();
        this.skinName = "skins.GameSetSkin";
    }

    public gs_btn_cancel:egret.gui.Button;

    public gs_btn_save:egret.gui.Button;

    public gs_check1:GameCheckBox;

    public gs_check6:GameCheckBox;

    public gs_check5:GameCheckBox;

    public gs_check4:GameCheckBox;

    public gs_check3:GameCheckBox;

    public gs_check2:GameCheckBox;

    public partAdded(partName:string, instance:any):void
    {
        super.partAdded(partName, instance);
    }
}