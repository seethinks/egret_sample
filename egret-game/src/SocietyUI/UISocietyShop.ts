/**
 * 帮会商店
 */
class UISocietyShop extends egret.gui.SkinnableComponent
{
    public constructor()
    {
        super();
        this.skinName = "skins.SocietyShopSkin";
    }

    public _label_shop:egret.gui.Label;

    public _btn_refrsh:egret.gui.Button;

    public partAdded(partName:string, instance:any):void
    {
        super.partAdded(partName, instance);

        if(instance == this._btn_refrsh)
        {
            this._btn_refrsh.visible = false;
        }

    }

}