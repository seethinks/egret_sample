class MainIconMenu extends egret.gui.SkinnableComponent
{
    public constructor()
    {
        super();
        this.skinName = "skins.MainIconMeunSkin";

        this.touchChildren = true;

        this.touchEnabled = true;
    }

    public _eqptwarn:egret.gui.UIAsset;

    public _mailwarn:egret.gui.UIAsset;

    public _bagwarn:egret.gui.UIAsset;

    public _giftwarn:egret.gui.UIAsset;

    public _skillwarn:egret.gui.UIAsset;

    public _main_btn_bag:egret.gui.UIAsset;

    public _main_btn_eqpt:egret.gui.UIAsset;

    public _main_btn_fight:egret.gui.UIAsset;

    public _main_btn_help:egret.gui.UIAsset;

    public _main_btn_hero:egret.gui.UIAsset;

    public _main_btn_idea:egret.gui.UIAsset;

    public _main_btn_mail:egret.gui.UIAsset;

    public _main_btn_myinfo:egret.gui.UIAsset;

    public _main_btn_notice:egret.gui.UIAsset;

    public _main_btn_recharge:egret.gui.UIAsset;

    public _main_btn_skill:egret.gui.UIAsset;

    public _mian_btn_mian:egret.gui.UIAsset;

    /** 行会 **/

    public group_hanghui:egret.gui.Group;

    public icon_gongxianduihuan:egret.gui.UIAsset;

    public icon_guaiwugongcheng:egret.gui.UIAsset;

    public icon_hanghuichengyuan:egret.gui.UIAsset;

    public icon_hanghuipaihang:egret.gui.UIAsset;

    public icon_hanghuiqiandao:egret.gui.UIAsset;

    public icon_hanghuizhengba:egret.gui.UIAsset;

    public _bag_full:egret.gui.UIAsset;

    public _fightwarn:egret.gui.UIAsset;

    public _bellewarn:egret.gui.UIAsset;

    public partAdded(partName:string, instance:any):void
    {
        super.partAdded(partName, instance);

        if(instance == this._bellewarn)
        {
            this._bellewarn.visible = this.belle;

            this._bellewarn.touchEnabled = false;
        }

        if(instance == this._eqptwarn)
        {
            this._eqptwarn.visible = this.b;

            this._eqptwarn.touchEnabled = false;
        }

        if(instance == this._mailwarn)
        {
            this._mailwarn.visible = this.m;

            this._mailwarn.touchEnabled = false;
        }

        if(instance == this._bagwarn)
        {
            this._bagwarn.visible = this.i;

            this._bagwarn.touchEnabled = false;
        }

        if(instance == this._giftwarn)
        {
            this._giftwarn.visible = this.g;

            this._giftwarn.touchEnabled = false;
        }

        if(instance == this._bag_full)
        {
            this._bag_full.visible = this.full;

            this._bag_full.touchEnabled = false;
        }

        if(instance == this._skillwarn)
        {
            this._skillwarn.visible = this.skill;

            this._skillwarn.touchEnabled = false;
        }

        if(instance == this._fightwarn)
        {
            this._fightwarn.visible = false;

            this._fightwarn.touchEnabled = false;
        }

    }

    private belle:boolean = false;

    public setBelleWarn(_b:boolean = false):void
    {
        this.belle = _b;

        if(this._bellewarn) this._bellewarn.visible = _b;
    }

    private b:boolean = false;

    public setEqptWarn(_b:boolean = false):void
    {
        this.b = _b;

        if(this._eqptwarn) this._eqptwarn.visible = _b;
    }

    private m:boolean = false;

    public setMailWarn(_m:boolean = false):void
    {
        this.m = _m;

        if(this._mailwarn) this._mailwarn.visible = _m;
    }

    private i:boolean = false;

    public setBagWarn(_b:boolean = false):void
    {
        this.i = _b;

        if(this._bagwarn) this._bagwarn.visible = _b;
    }

    private g:boolean = false;

    public setGiftWarn(_m:boolean = false):void
    {
        this.g = _m;

        if(this._giftwarn) this._giftwarn.visible = _m;
    }


    private full:boolean = false;

    public setFull(b:boolean = false):void
    {
        this.full = b;

        if(this._bag_full) this._bag_full.visible = b;
    }

    private skill:boolean = false;

    public setSkill(b:boolean = false):void
    {
        this.skill = b;

        if(this._skillwarn) this._skillwarn.visible = b;
    }

    private fight:boolean = false;

    public setFight(b:boolean = false):void
    {
        this.fight = b;

        if(this._fightwarn) this._fightwarn.visible = b;
    }
}