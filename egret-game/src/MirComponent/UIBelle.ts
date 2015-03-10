class UIBelle extends egret.gui.SkinnableComponent
{
    public constructor()
    {
        super();
        this.skinName = "skins.BelleSkin";
    }

    public belle_hero:egret.gui.UIAsset;
    public belle_hp:egret.gui.UIAsset;
    public belle_mp:egret.gui.UIAsset;
    public belle_skill1:egret.gui.UIAsset;
    public belle_skill4:egret.gui.UIAsset;
    public belle_skill3:egret.gui.UIAsset;
    public belle_skill2:egret.gui.UIAsset;
    public belle_start1:egret.gui.UIAsset;
    public belle_start2:egret.gui.UIAsset;
    public belle_start3:egret.gui.UIAsset;
    public belle_start4:egret.gui.UIAsset;
    public belle_start5:egret.gui.UIAsset;
    public belle_start6:egret.gui.UIAsset;
    public belle_start7:egret.gui.UIAsset;
    public belle_start8:egret.gui.UIAsset;
    public belle_start9:egret.gui.UIAsset;
    public belle_start10:egret.gui.UIAsset;

    public belle_icon1:UIIcon;
    public belle_icon4:UIIcon;
    public belle_icon2:UIIcon;
    public belle_icon6:UIIcon;

    public _hero_icon_1:BelleHead;
    public _hero_icon_2:BelleHead;
    public _hero_icon_3:BelleHead;
    public _hero_icon_4:BelleHead;
    public _hero_icon_5:BelleHead;
    public _hero_icon_6:BelleHead;

    public belle_label_hp:egret.gui.Label;
    public belle_label_mp:egret.gui.Label;
    public belle_label_name:egret.gui.Label;
    public belle_label_fightnum:egret.gui.Label;
    public belle_label_hurt:egret.gui.Label;

    public belle_btn_zhengfa:egret.gui.Button;
    public belle_btn_stutas:egret.gui.Button;
    public belle_btn_upstart:egret.gui.Button;
    public belle_btn_check:egret.gui.Button;

    public _label_p:egret.gui.Label;

    public partAdded(partName:string, instance:any):void
    {
        super.partAdded(partName, instance);

    }
}