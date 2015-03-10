class UIViper extends egret.gui.SkinnableComponent
{
    public constructor()
    {
        super();
        this.skinName = "skins.ViperSkin";
    }

    public _charge_ppt:egret.gui.Label;

    public _vip_exp:egret.gui.UIAsset; //320

    public _now_vipLv:egret.gui.UIAsset;

    public _next_vipLv:egret.gui.UIAsset;

    public _charge_xq_btn:egret.gui.Button;

    public vip_label_level:egret.gui.Label;

    public vip_label_privilege:egret.gui.Label;

    public vip_btn_left:egret.gui.UIAsset;

    public vip_btn_right:egret.gui.UIAsset;

    public partAdded(partName:string, instance:any):void
    {
        super.partAdded(partName, instance);
    }
}