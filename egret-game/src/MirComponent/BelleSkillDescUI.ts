class BelleSkillDescUI extends egret.gui.SkinnableComponent
{
    public constructor()
    {
        super();

        this.skinName = "skins.BelleSkillDescSkin";
    }

    public _btn_close:egret.gui.UIAsset;

    public _label_desc:egret.gui.Label;

    public _label_name:egret.gui.Label;

    public _label_mp:egret.gui.Label;

    public partAdded(partName:string, instance:any):void
    {
        super.partAdded(partName, instance);
    }
}