class UIMy extends egret.gui.SkinnableComponent
{
    public constructor()
    {
        super();
        this.skinName = "skins.MyInformationSkin";
    }

    public my_vip_img:egret.gui.UIAsset;
    public my_btn_ghqm:egret.gui.Button;
    public my_btn_ghch:egret.gui.Button;
    public my_btn_vip:egret.gui.Button;
    public my_btn_logout:egret.gui.Button;
    public my_btn_voice:egret.gui.Button;
    public my_label_1:egret.gui.Label;

    public my_label_2:egret.gui.Label;
    public my_head_img:egret.gui.UIAsset;

    public _bind_acc:egret.gui.Button;

    public my_label_name:egret.gui.Label;

    public partAdded(partName:string, instance:any):void
    {
        super.partAdded(partName, instance);

        if(instance == this.my_btn_ghch)
        {
            //this.my_btn_ghch.visible = false;
        }
    }
}