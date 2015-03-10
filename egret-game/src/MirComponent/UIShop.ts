class UIShop extends egret.gui.SkinnableComponent
{
    public constructor()
    {
        super();
        this.skinName = "skins.ShopSkin";
    }

    public shop_label_level:egret.gui.Label;

    public shop_label_gold:egret.gui.Label;

    public shop_label_money:egret.gui.Label;

    public shop_btn_buymoney:egret.gui.Button;

    public shop_btn_buy:egret.gui.Button;

    public shop_btn_refresh:egret.gui.Button;

    public shop_vip:egret.gui.UIAsset;

    public shop_label_gailv:egret.gui.Label;

    public partAdded(partName:string, instance:any):void
    {
        super.partAdded(partName, instance);
    }
}