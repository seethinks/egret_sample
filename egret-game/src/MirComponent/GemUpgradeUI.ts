class GemUpgradeUI extends egret.gui.SkinnableComponent
{
    public constructor()
    {
        super();
        this.skinName = "skins.GemUpgradeSkin";
    }

    public xq_btn_upgrade:egret.gui.Button;

    public xq_label_explain:egret.gui.Label;

    public _name1:egret.gui.Label;

    public xq_label_eqptname:egret.gui.Label;

    public _bs_img1:egret.gui.UIAsset;

    public _icon:UIIcon;

    public _label:egret.gui.Label;

    public partAdded(partName:string, instance:any):void
    {
        super.partAdded(partName, instance);

        if(instance == this._bs_img1)
        {
            this._bs_img1.touchEnabled = false;
        }
    }
}