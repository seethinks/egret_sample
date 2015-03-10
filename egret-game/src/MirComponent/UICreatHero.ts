class UICreatHero extends egret.gui.SkinnableComponent
{
    public constructor()
    {
        super();
        this.skinName = "skins.CreateHeroSkin";
    }

    public huang_nv:egret.gui.UIAsset;
    public huang_nan:egret.gui.UIAsset;
    public lan_fashi:egret.gui.UIAsset;
    public lan_daoshi:egret.gui.UIAsset;
    public btn_create:egret.gui.UIAsset;
    public btn_daoshi:egret.gui.UIAsset;
    public btn_fashi:egret.gui.UIAsset;
    public btn_nan:egret.gui.UIAsset;
    public btn_nv:egret.gui.UIAsset;
    public btn_zhanshi:egret.gui.UIAsset;
    public btn_changename:egret.gui.UIAsset;
    public lan_zhanshi:egret.gui.UIAsset;
    public hero_name:egret.gui.UIAsset;
    public hero_zhanshi:egret.gui.UIAsset;
    public creat_text_1:egret.gui.UIAsset;
    public creat_text_2:egret.gui.UIAsset;
    public creat_text_3:egret.gui.UIAsset;
    public partAdded(partName:string, instance:any):void
    {
        super.partAdded(partName, instance);

        if (instance == this.lan_fashi)
        {
            this.lan_fashi.visible = false;
        }

        if (instance == this.lan_daoshi)
        {
            this.lan_daoshi.visible = false;
        }

        if (instance == this.huang_nv)
        {
            this.huang_nv.visible = false;
        }

        if(instance == this.creat_text_2)
        {
            this.creat_text_2.visible = false;
        }

        if(instance == this.creat_text_3)
        {
            this.creat_text_3.visible = false;
        }
    }
}