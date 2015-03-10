class UIMake extends egret.gui.SkinnableComponent
{
    public constructor()
    {
        super();
        this.skinName = "skins.EqptMakeSkin";
    }

    public make_itemlabel_propey:egret.gui.Label;

    public make_itemlabel_type:egret.gui.Label;

    public make_icon:UIIcon;

    public make_label_num:egret.gui.Label;

    public make_label_need:egret.gui.Label;

    public make_btn_refresh:egret.gui.Button;

    public make_btn_make:egret.gui.Button;

    public partAdded(partName:string, instance:any):void
    {
        super.partAdded(partName, instance);
    }
}