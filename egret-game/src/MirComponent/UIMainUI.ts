class UIMainUI extends egret.gui.SkinnableComponent
{
    public constructor()
    {
        super();
        this.skinName = "skins.MainUiSkin";
    }

    public _ronglian:egret.gui.UIAsset;
    public _jingjichang:egret.gui.UIAsset;
    public _shangdian:egret.gui.UIAsset;
    public _chuangtianguan:egret.gui.UIAsset;
    public _hanghui:egret.gui.UIAsset;

    public _exp_title:egret.gui.UIAsset;
    public _shenglv_title:egret.gui.UIAsset;
    public main_img_vip:egret.gui.UIAsset;

    public main_label_money:egret.gui.Label;
    public main_label_fightvalue:egret.gui.Label;
    public main_label_name:egret.gui.Label;
    public main_label_frame:egret.gui.Label;
    public main_label_map:egret.gui.Label;
    public main_label_shenglv:egret.gui.Label;
    public main_label_level:egret.gui.Label;
    public main_label_gold:egret.gui.Label;
    public main_label_exp:egret.gui.Label;

    public _eff_hp:egret.gui.UIAsset;

    public _eff_mp:egret.gui.UIAsset;

    public _hp_group:egret.gui.Group;

    public _mp_group:egret.gui.Group;

    public niu_fa:egret.gui.UIAsset;

    public niu_dao:egret.gui.UIAsset;

    public _act_btn:egret.gui.UIAsset;

    public _act_eff:egret.gui.UIAsset;

    public _txt_num1:egret.gui.Label;

    public partAdded(partName:string, instance:any):void
    {
        super.partAdded(partName, instance);

        if(instance == this.niu_fa)
        {
            this.niu_fa.visible = false;
        }

        if(instance == this.niu_dao)
        {
            this.niu_dao.visible = false;
        }

        if(instance == this._shenglv_title)
        {
            this._shenglv_title.scaleX = -1;

            this._shenglv_title.scaleY = -1;
        }
    }
}