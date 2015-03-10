class UIEqptStrengthen extends egret.gui.SkinnableComponent
{
    public constructor()
    {
        super();
        this.skinName = "skins.EqptStrengthenSkin";
    }

    public qh_btn_strengthen:egret.gui.Button;

    public xq_label_explain:egret.gui.Label;

    public qh_label_property:egret.gui.Label;

    public qh_label_next:egret.gui.Label;

    public qh_icon:UIIcon;

    public qh_btn_xilian:egret.gui.Button;

    public qh_btn_gaojixilian:egret.gui.Button;

    public _label_bangding:egret.gui.Label;

    public partAdded(partName:string, instance:any):void
    {
        super.partAdded(partName, instance);
    }
}