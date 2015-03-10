class JijinUI extends egret.gui.SkinnableComponent
{
    public constructor()
    {
        super();

        this.skinName = "skins.JijinSkin";
    }

    public _btn:egret.gui.Button;

    public _label_vip:egret.gui.Label;

    public _label_num:egret.gui.Label;

    public btn_tab1:UIBagTab;

    public btn_tab2:UIBagTab;

    public _img_bg:egret.gui.UIAsset;

    public partAdded(partName:string, instance:any):void
    {
        super.partAdded(partName, instance);
    }
}