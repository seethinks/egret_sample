class UINotice extends egret.gui.SkinnableComponent
{
    public constructor()
    {
        super();
        this.skinName = "skins.FightFeedbackSkin";
    }

    public fk_button:egret.gui.Button;

    public fk_label:egret.gui.Label;

    public partAdded(partName:string, instance:any):void
    {
        super.partAdded(partName, instance);

        if(instance == this.fk_button)
        {
            this.fk_button._setLabel("确 定");
        }
        if(instance == this.fk_label)
        {
            this.fk_label.text = "狂挂传奇【大梦初醒】1服震撼开启";
        }
    }
}