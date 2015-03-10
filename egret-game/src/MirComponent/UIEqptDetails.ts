class UIEqptDetails extends egret.gui.SkinnableComponent
{
    public constructor()
    {
        super();
        this.skinName = "skins.EqptDetailsSkin";
    }

    public xz_itembtn_qianghua:egret.gui.Button;

    public xz_itembtn_genghuan:egret.gui.Button;

    public xz_itembtn_xiangqian:egret.gui.Button;

    public xz_itembtn_chuancheng:egret.gui.Button;

    public xz_itembtn_tunshi:egret.gui.Button;

    public xz_itembtn_xiexia:egret.gui.Button;

    public xz_itembtn_xilian:egret.gui.Button;

    public xz_itemlabel_propey:egret.gui.Label;

    public xz_itemlabel_type:egret.gui.Label;

    public xz_itemlabel_name:egret.gui.Label;

    public xz_icon:UIIcon;

    public partAdded(partName:string, instance:any):void
    {
        super.partAdded(partName, instance);

        if(instance == this.xz_itemlabel_name)
        {

        }

        if(instance == this.xz_itemlabel_propey)
        {

        }

        if(instance == this.xz_itemlabel_type)
        {

        }
    }
}