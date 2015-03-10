class PrisonUI extends egret.gui.SkinnableComponent
{
    public constructor()
    {
        super();

        this.skinName = "skins.PrisonSkin";
    }

    public _label_pk:egret.gui.Label;

    public _label_time:egret.gui.Label;

    public _btn_huilu:egret.gui.Button;

    public _btn_zhuilu:egret.gui.Button;

    public partAdded(partName:string, instance:any):void
    {
        super.partAdded(partName, instance);
    }
}