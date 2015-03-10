class UIBuyMoney extends egret.gui.SkinnableComponent
{
    public constructor()
    {
        super();
        this.skinName = "skins.BuyMoneySkin";
    }
    public btn_buy_all:egret.gui.Button;

    public btn_buy:egret.gui.Button;

    public label_money:egret.gui.Label;

    public label_gold:egret.gui.Label;

    public label_buy_num:egret.gui.Label;

    public label_vip_num:egret.gui.Label;

    public partAdded(partName:string, instance:any):void
    {
        super.partAdded(partName, instance);

    }
}