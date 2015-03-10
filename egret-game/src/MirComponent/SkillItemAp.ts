class SkillItemAp extends egret.gui.ItemRenderer
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

    public partAdded(partName:string, instance:any):void
    {
        super.partAdded(partName, instance);

        if(instance == this.skill_panel2)
        {
            this.skill_panel2.visible = false;
        }

        if(instance == this.skill_btn)
        {
            this.skill_btn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
        }

        if(instance == this.skill_check)
        {
            this.skill_check.visible = false;
        }
    }

    private onClick(e:egret.TouchEvent):void
    {
        if(this.data && this.data["type"] != 3)
        {
            var url:string = "http://"+GameManager.server["ip"]+":"+GameManager.server["port"];

            var param:string = "type=0x0017&sid="+GameManager.SESSION_ID + "&ad="+Main.player.m_skillType+"&ud=1&objid=" + this.data["id"];

            HttpMessage.sendMsg(url, param);
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

                if (this.data["dp"] == "1")
                {
                    this.skill_btn.source = "skill_btn_frist";
                }
                else
                {
                    this.skill_btn.source = "skill_btn_up";
                }

                this.skill_icon.visible = true;

                this.skill_btn.visible = true;

                this.skill_panel1.visible = true;

                this.skill_panel2.visible = false;
            }
            else
            {
                var model:any = this.data;

                var level:number = model["openlevel"];

                if(Number(Main.player.level) >= level)
                {
                    this.skill_label.text = "\n\n点我装备技能";

                    this.skill_close.visible = false;
                }
                else
                {
                    this.skill_label.text = "\n\n达到" + level + "级解锁技能";

                    this.skill_close.visible = true;
                }

                this.skill_icon.visible = false;

                this.skill_btn.visible = false;

                this.skill_panel1.visible = false;

                this.skill_panel2.visible = true;
            }
        }
    }
}