class UIRongLian extends egret.gui.SkinnableComponent
{
    public constructor()
    {
        super();
        this.skinName = "skins.RongLinBoxSkin";
    }

    public rl_btn_cast_spe:egret.gui.Button;

    public rl_btn_cast:egret.gui.Button;

    public rl_btn_ronglin:egret.gui.Button;

    public rl_btn_screen:egret.gui.Button;

    public rl_label_rlnum:egret.gui.Label;

    public rl_icon_1:UIIcon;

    public rl_icon_2:UIIcon;

    public rl_icon_3:UIIcon;

    public rl_icon_4:UIIcon;

    public rl_icon_5:UIIcon;

    public rl_icon_6:UIIcon;

    public partAdded(partName:string, instance:any):void
    {
        super.partAdded(partName, instance);

        if(instance == this.rl_btn_cast_spe)
        {
            this.rl_btn_cast_spe.visible = false;
        }
    }
}