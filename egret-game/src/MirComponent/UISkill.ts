class UISkill extends egret.gui.SkinnableComponent
{
    public constructor()
    {
        super();
        this.skinName = "skins.SkillSkin";
    }

    public skill_btn_jnzj:egret.gui.Button;

    public skill_btn_jjjn:egret.gui.Button;

    public skill_btn_ghjn:egret.gui.Button;

    public partAdded(partName:string, instance:any):void
    {
        super.partAdded(partName, instance);
        if(instance == this.skill_btn_jnzj)
        {
            this.skill_btn_jnzj.visible = false;
        }

    }
}