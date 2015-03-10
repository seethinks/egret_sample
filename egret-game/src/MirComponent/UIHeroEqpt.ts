class UIHeroEqpt extends egret.gui.SkinnableComponent
{
    public constructor()
    {
        super();
        this.skinName = "skins.HeroDialogSkin";
    }

    public _title_mp:egret.gui.UIAsset;

    public _title_hp:egret.gui.UIAsset;

    public _player_mp_label:egret.gui.Label;
    public _player_hp_label:egret.gui.Label;

    public _btn_prop:egret.gui.UIAsset;

    public _label_wuligongji:egret.gui.Label;

    public _label_daoshugongji:egret.gui.Label;

    public _label_heroname:egret.gui.Label;

    public _label_zhandouli:egret.gui.Label;

    public _label_momagongji:egret.gui.Label;

    public _label_shanghai:egret.gui.Label;

    public _label_wulifangyu:egret.gui.Label;

    public _label_mofafangyu:egret.gui.Label;

    public _label_mingzhong:egret.gui.Label;

    public _label_shanbi:egret.gui.Label;

    public _label_baoji:egret.gui.Label;

    public _label_naili:egret.gui.Label;

    public _label_zhiye:egret.gui.Label;

    public eqpt_icon_1:UIIcon;

    public eqpt_icon_2:UIIcon;

    public eqpt_icon_3:UIIcon;

    public eqpt_icon_4:UIIcon;

    public eqpt_icon_5:UIIcon;

    public eqpt_icon_6:UIIcon;

    public eqpt_icon_7:UIIcon;

    public eqpt_icon_8:UIIcon;

    public eqpt_icon_9:UIIcon;

    public eqpt_icon_10:UIIcon;

    public eqpt_hero:egret.gui.UIAsset;

    public partAdded(partName:string, instance:any):void
    {
        super.partAdded(partName, instance);
    }
}