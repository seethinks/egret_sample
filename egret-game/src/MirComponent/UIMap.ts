class UIMap extends egret.gui.SkinnableComponent
{
    public constructor()
    {
        super();
        this.skinName = "skins.MapSkin";
    }

    public map_btn_buy:egret.gui.Button;

    public map_label_num:egret.gui.Label;

    public _label_bossName:egret.gui.Label;

    public partAdded(partName:string, instance:any):void
    {
        super.partAdded(partName, instance);

        if(instance == this.map_btn_buy)
        {

        }

        if(instance == this.map_label_num)
        {

        }
    }
}