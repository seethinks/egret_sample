class UIArmsEngulf extends egret.gui.SkinnableComponent
{
    public constructor()
    {
        super();
        this.skinName = "skins.TunShiBoxSkin";

        this.touchChildren = true;

        this.touchEnabled = true;
    }

    public ts_icon_5:UIIcon;

    public ts_icon_1:UIIcon;

    public ts_icon_2:UIIcon;

    public ts_icon_3:UIIcon;

    public ts_icon_6:UIIcon;

    public ts_icon_4:UIIcon;

    public ts_label_property:egret.gui.Label;

    public ts_title_exp:egret.gui.UIAsset;

    public ts_label_level:egret.gui.Label;

    public ts_label_exp:egret.gui.Label;

    public ts_btn_screen:egret.gui.Button;

    public ts_btn_tunshi:egret.gui.Button;

    public ts_icon_zhu:UIIcon;

    public ts_label_money:egret.gui.Label;

    public partAdded(partName:string, instance:any):void
    {
        super.partAdded(partName, instance);
    }
}