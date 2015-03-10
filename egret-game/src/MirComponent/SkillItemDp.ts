class SkillItemDp extends egret.gui.ItemRenderer
{
    public constructor()
    {
        super();

        this.skinName = "skins.SkillItemReaderSkin";

        this.touchChildren = true;

        this.touchEnabled = true;
    }

    public skill_panel2:egret.gui.UIAsset;
    public skill_btn:egret.gui.UIAsset;
    public skill_panel1:egret.gui.UIAsset;
    public skill_icon:egret.gui.UIAsset;
    public skill_label:egret.gui.Label;
    public skill_check:UICheckBox;
    public skill_close:egret.gui.UIAsset;
    public _label_mp:egret.gui.Label;

    public partAdded(partName:string, instance:any):void
    {
        super.partAdded(partName, instance);

        if(instance == this.skill_panel2)
        {
            this.skill_panel2.visible = false;
        }

        if(instance == this.skill_btn)
        {
            this.skill_btn.visible = false;
        }

        if(instance == this.skill_check)
        {
            this.skill_check.visible = false;

            this.skill_check.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onCheck, this);
        }
    }

    private onCheck(e:egret.TouchEvent):void
    {
        var skillModel:any = GameManager.JSON_SKILLS[this.data.id];

        if(skillModel)
        {
            var level:number = Number(skillModel["openlevel"]);

            if(level <= Number(Main.player.level))
            {

                var num:number = this.skill_check.setCheck();

                this.data["postion"] = num;

                if(Main.player.m_skillType == 1)
                {
                    if(Number(num) == 0) this.data["ap"] = 0;
                    else this.data["ap"] = 1;
                }
                else if(Main.player.m_skillType == 2)
                {
                    if(Number(num) == 0) this.data["dp"] = 0;
                    else this.data["dp"] = 1;
                }
            }
        }
    }

    public dataChanged()
    {
        super.dataChanged();

        if(this.data)
        {
            var skillModel:any = GameManager.JSON_SKILLS[this.data.id];  //id  ap   dp

            if(skillModel)
            {
                this.skill_icon.source = "jineng_" + skillModel["planId"];

                var str:string = skillModel["name"] + "\n\n";

                str += skillModel["des"];

                this.skill_label.text = str;

                this._label_mp.text = "消耗：MP" + skillModel["consumemp"];

                var level:number = Number(skillModel["openlevel"]);

                if(level <= Number(Main.player.level))
                {
                    this.skill_check.setOpen(true);
                }
                else
                {
                    this.skill_check.setOpen(false);
                }

                this.skill_check.visible = true;

                this.skill_check._duihao.visible = false;

                this.skill_check.selectIndex = 0;

                this.data["postion"] = 0;

                if(Main.player.m_skillType == 1)
                {
                    if(Number(this.data["ap"]) > 0)
                    {
                        this.skill_check._duihao.visible = true;

                        this.skill_check.selectIndex = 1;

                        this.data["postion"] = 1;
                    }
                }
                else if(Main.player.m_skillType == 2)
                {
                    if(Number(this.data["dp"]) > 0)
                    {
                        this.skill_check._duihao.visible = true;

                        this.skill_check.selectIndex = 1;

                        this.data["postion"] = 1;
                    }
                }

                this.skill_icon.visible = true;

                this.skill_panel1.visible = true;

                this.skill_panel2.visible = false;
            }
            else
            {
                var model:any = this.data;

                var level:number = model["openlevel"];

                if(Number(Main.player.level) < level)
                {

                    this.skill_label.text = "\n\n达到" + level + "级解锁技能";
                }

                this.skill_icon.visible = false;

                this.skill_btn.visible = false;

                this.skill_panel1.visible = false;

                this.skill_panel2.visible = true;

                this.skill_check.visible = false;

                this._label_mp.text = "";
            }
        }
    }
}