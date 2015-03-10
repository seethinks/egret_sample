class UICharge extends egret.gui.SkinnableComponent
{
    public constructor()
    {
        super();
        this.skinName = "skins.ChargeSkin";
    }

    public _charge_ppt:egret.gui.Label;
    public _vip_exp:egret.gui.UIAsset; //320
    public _now_vipLv:egret.gui.UIAsset;
    public _next_vipLv:egret.gui.UIAsset;
    public _vip_xq_btn:egret.gui.Button;

    public partAdded(partName:string, instance:any):void
    {
        super.partAdded(partName, instance);
    }
}