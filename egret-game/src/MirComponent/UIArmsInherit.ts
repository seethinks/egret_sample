class UIArmsInherit extends egret.gui.SkinnableComponent
{
    public constructor()
    {
        super();
        this.skinName = "skins.ChuanchengBoxSkin";

        this.touchChildren = true;

        this.touchEnabled = true;
    }

    public ch_label_property:egret.gui.Label;

    public ch_label_money:egret.gui.Label;

    public ch_btn_chuancheng:egret.gui.Button;

    public cc_icon_from:UIIcon;

    public cc_icon_to:UIIcon;

    public partAdded(partName:string, instance:any):void
    {
        super.partAdded(partName, instance);
    }
}