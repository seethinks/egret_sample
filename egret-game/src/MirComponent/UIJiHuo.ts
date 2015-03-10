class UIJiHuo extends egret.gui.SkinnableComponent
{
    public constructor()
    {
        super();
        this.skinName = "skins.JiHuoSkin";
    }

    public _btn_jihuo:egret.gui.Button;

    public partAdded(partName:string, instance:any):void
    {
        super.partAdded(partName, instance);
    }
}