class ZhuanPanUI extends egret.gui.SkinnableComponent
{
    public constructor()
    {
        super();

        this.skinName = "skins.ZhuanPanSkin";
    }

    public _icon1:UIIcon;

    public _icon2:UIIcon;

    public _icon3:UIIcon;

    public _icon4:UIIcon;

    public _icon5:UIIcon;

    public _icon6:UIIcon;

    public _btn_refresh:egret.gui.Button;

    public _label_desc:egret.gui.Label;

    public _img:egret.gui.UIAsset;

    public _label_time:egret.gui.Label;

    public _btn_start:egret.gui.UIAsset;

    public partAdded(partName:string, instance:any):void
    {
        super.partAdded(partName, instance);
    }
}