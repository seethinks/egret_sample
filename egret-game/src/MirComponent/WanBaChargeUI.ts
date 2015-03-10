class WanBaChargeUI extends egret.gui.SkinnableComponent
{
    public constructor()
    {
        super();
        this.skinName = "skins.WanBaChargeSkin";
    }

    public _charge_ppt:egret.gui.Label;

    public partAdded(partName:string, instance:any):void
    {
        super.partAdded(partName, instance);
    }
}