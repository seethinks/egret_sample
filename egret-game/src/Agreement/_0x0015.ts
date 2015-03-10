class _0x0015
{
    public constuctor()
    {

    }

    public parseData(obj:any):void
    {
        if(!obj) return;

        var list:Array<any> = obj["skillarray"];

        if(list && list.length > 0)
        {
            Main.player.m_skillArr = list;

            var skill:SkillDialog = DialogManager.findDialog(SkillDialog, "SkillDialog");

            if(skill && skill.showing)
            {
                skill.onUpdate();
            }
        }
    }
}
