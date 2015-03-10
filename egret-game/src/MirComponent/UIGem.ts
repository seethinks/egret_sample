class UIGem extends egret.gui.SkinnableComponent
{
    public constructor()
    {
        super();
        this.skinName = "skins.GemInlayBoxSkin";
    }

    public xq_btn_remove:egret.gui.Button;

    public xq_label_explain:egret.gui.Label;

    public xq_label_k1:egret.gui.Label;

    public xq_label_s1:egret.gui.Label;

    public xq_label_s2:egret.gui.Label;

    public xq_label_s3:egret.gui.Label;

    public xq_label_s4:egret.gui.Label;

    public xq_label_k2:egret.gui.Label;

    public xq_label_k3:egret.gui.Label;

    public xq_label_k4:egret.gui.Label;

    public xq_label_eqptname:egret.gui.Label;

    public _bs_img1:egret.gui.UIAsset;

    public _bs_img2:egret.gui.UIAsset;

    public _bs_img3:egret.gui.UIAsset;

    public _bs_img4:egret.gui.UIAsset;

    public _icon:UIIcon;

    public _event1:egret.gui.UIAsset;

    public _event2:egret.gui.UIAsset;

    public _event3:egret.gui.UIAsset;

    public _event4:egret.gui.UIAsset;

    public partAdded(partName:string, instance:any):void
    {
        super.partAdded(partName, instance);

        if(instance == this._bs_img1)
        {
            this._bs_img1.touchEnabled = false;
        }

        if(instance == this._bs_img2)
        {
            this._bs_img2.touchEnabled = false;
        }

        if(instance == this._bs_img3)
        {
            this._bs_img3.touchEnabled = false;
        }

        if(instance == this._bs_img4)
        {
            this._bs_img4.touchEnabled = false;
        }
    }
}