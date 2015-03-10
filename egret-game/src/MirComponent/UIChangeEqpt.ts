class UIChangeEqpt extends egret.gui.SkinnableComponent
{
    public constructor()
    {
        super();
        this.skinName = "skins.EqptChangeBoxSkin";
    }

    public xz_btn_close:egret.gui.Button;

    public xz_icon:UIIcon;

    public xz_label_property:egret.gui.Label;

    public xz_label_null:egret.gui.Label;

    public _panel1:egret.gui.UIAsset;

    public _panel2:egret.gui.UIAsset;

    public partAdded(partName:string, instance:any):void
    {
        super.partAdded(partName, instance);

    }
}