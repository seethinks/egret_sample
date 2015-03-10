class UIDeul extends egret.gui.SkinnableComponent
{
    public constructor()
    {
        super();
        this.skinName = "skins.DeulPlaceSkin";
    }

    public deul_btn_rank:egret.gui.UIAsset;

    public deul_btn_exchange:egret.gui.UIAsset;

    public deul_head:egret.gui.UIAsset;

    public deul_label_name:egret.gui.Label;

    public deul_btn_buy:egret.gui.Button;

    public deul_btn_huan:egret.gui.Button;

    public deul_label_num:egret.gui.Label;

    public deul_label_names:egret.gui.Label;

    public partAdded(partName:string, instance:any):void
    {
        super.partAdded(partName, instance);

    }
}