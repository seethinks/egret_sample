class UISociety extends egret.gui.SkinnableComponent
{
    public constructor()
    {
        super();
        this.skinName = "skins.SocietySkin";
    }

    public _label_gonggao:egret.gui.Label;

    public _btn_open:egret.gui.Button;

    public _btn_chakan:egret.gui.Button;

    public _label_name:egret.gui.Label;

    public _label_exp:egret.gui.Label;

    public _label_guaiwu:egret.gui.Label;

    public _label_gongxian:egret.gui.Label;

    public _label_renshu:egret.gui.Label;

    public _label_id:egret.gui.Label;

    public _img_exp:egret.gui.UIAsset;

    public _label_desc:egret.gui.Label;

    public _label_time:egret.gui.Label;



    public _btn_gonxian:egret.gui.Button;

    public _btn_guwu:egret.gui.Button;

    public _label_guwu:egret.gui.Label;

    public _label_my_guwu:egret.gui.Label;

    public _boss_title_bg:egret.gui.UIAsset;

    public _boss_title:egret.gui.UIAsset;

    public _text_open:egret.gui.UIAsset;

    public partAdded(partName:string, instance:any):void
    {
        super.partAdded(partName, instance);

        if(instance == this._label_desc)
        {
            this._label_desc.visible = false;
        }

        if(instance == this._label_time)
        {
            this._label_time.visible = false;
        }

        if(instance == this._btn_gonxian)
        {
            this._btn_gonxian.visible = false;
        }

        if(instance == this._btn_guwu)
        {
            this._btn_guwu.visible = false;
        }

        if(instance == this._label_guwu)
        {
            this._label_guwu.visible = false;
        }

        if(instance == this._label_my_guwu)
        {
            this._label_my_guwu.visible = false;
        }

        if(instance == this._boss_title_bg)
        {
            this._boss_title_bg.visible = false;
        }

        if(instance == this._boss_title)
        {
            this._boss_title.visible = false;
        }
    }
}