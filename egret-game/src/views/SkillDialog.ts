
class SkillDialog extends Dialog
{
    private m_UI:UIOriginalDialog;

    private m_skill:UISkill;

    private taskList1:egret.gui.List = new egret.gui.List();

    private dp:egret.gui.ArrayCollection = new egret.gui.ArrayCollection();

    public skillAp:SkillApDialog;

    public skillDp:SkillDpDialog;

    private skillModel:any;

    private btn_help:egret.gui.UIAsset;

    public constructor()
    {
        super();

        egret.Injector.mapClass("egret.gui.IAssetAdapter",AssetAdapter);
    }

    public createChildren():void
    {
        super.createChildren();

        this.m_UI = new UIOriginalDialog();

        this.addElement(this.m_UI);

        this.m_UI.setTitle("作战技能");

        this.m_UI.horizontalCenter = 0;

        this.m_UI.top = 0;

        this.btn_help = new egret.gui.UIAsset();

        this.btn_help.source = "skill_help";

        this.addElement(this.btn_help);

        this.btn_help.top = 2;

        this.btn_help.left = 0;

        this.btn_help.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onHelp, this);

        this.m_skill = new UISkill();

        this.addElement(this.m_skill);

        this.m_skill.horizontalCenter = 0;

        this.m_skill.top = 100;

        this.skillAp = new SkillApDialog();

        this.skillAp.horizontalCenter = 0;

        this.skillDp = new SkillDpDialog();

        this.skillDp.horizontalCenter = 0;

        this.taskList1.skinName = "skins.ListSkin";

        this.taskList1.height = 550;

        this.taskList1.horizontalCenter = 0;

        this.taskList1.top = 130;

        this.taskList1.itemRenderer = new egret.gui.ClassFactory(SkillItemReader);

        this.taskList1.itemRendererSkinName = "skins.SkillItemReaderSkin";

        this.taskList1.dataProvider = this.dp;

        this.addElement(this.taskList1);

        this.m_skill.skill_btn_ghjn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);

        this.m_skill.skill_btn_jjjn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);

        this.m_skill.skill_btn_jnzj.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);

        this.taskList1.addEventListener(egret.gui.ListEvent.ITEM_CLICK, this.clickItem, this);

        for(var i = 0; i < 4;i++)
        {
            this.dp.addItem({});
        }
    }

    private onHelp(e:egret.TouchEvent):void
    {
        var help:HelpDialog = DialogManager.findDialog(HelpDialog, "HelpDialog");

        if(help)
        {
            help.index = 1;

            if(help.showing)
            {
                help.showText();
            }
            else
            {
                help.show();
            }
        }
    }

    private clickItem(e:egret.gui.ListEvent):void
    {
        if(!e.item["ap"])
        {
            this.showDialog("SkillDpDialog");
        }
    }

    public onClick(e:egret.TouchEvent):void
    {
        switch (e.target)
        {
            case this.m_skill.skill_btn_ghjn:
                this.showDialog("SkillDpDialog");
                break;
            case this.m_skill.skill_btn_jjjn:
                this.showDialog("SkillApDialog");
                break;
            case this.m_skill.skill_btn_jnzj:

                break;
        }
    }

    public showDialog(dName:string = "SkillApDialog"):void
    {
        switch (dName)
        {
            case "SkillApDialog":

                this.addElement(this.skillAp);

                this.skillAp.top = 40;

                if(this.skillDp.parent) this.removeElement(this.skillDp);

                this.skillAp.onUpdate();

                Main.player.m_skillType = 2;

                break;
            case "SkillDpDialog":

                this.addElement(this.skillDp);

                this.skillDp.top = 40;

                this.skillDp.onUpdate();

                break;
        }
    }

    private onTouch(e:egret.TouchEvent):void
    {

    }

    public onUpdate():void
    {
        this.dp.removeAll();

        var skillModel = {};

        for(var job in GameManager.JSON_SKILLS)
        {
            var m = GameManager.JSON_SKILLS[job];

            if(m["job"] == Main.player.job)
            {
                skillModel[job] = m;
            }
        }

        var list:Array<any> = Main.player.m_skillArr;

        list.sort(this.sortArr);

        var j:number = 0;

        for(var key in skillModel)
        {
            if(j >= 4) break;

            var obj:any = skillModel[key];

            if(list[j])
            {
                var skill = list[j];

                if(Number(skill["ap"]) > 0)
                {
                    obj = skill;
                }
            }

            obj["type"] = 1;

            this.dp.addItem(obj);

            j++;
        }

        if(this.skillAp && this.skillAp.isInit) this.skillAp.onUpdate();
    }

    private sortArr(a:any, b:any):number
    {
        var adp:number = a["ap"];

        var bdp:number = b["ap"];

        if(Number(adp) == 0)
        {
            return 1;
        }

        if(Number(adp) > Number(bdp) && Number(bdp) != 0)
        {
            return 1;
        }
        else return -1;

    }

    public show()
    {
        super.show();

        this.onUpdate();

        Main.player.m_skillType = 1;

        Main.iconMeun.setSkill();
    }

    public hide()
    {
        super.hide();

        if(this.skillDp.parent) this.removeElement(this.skillDp);

        if(this.skillAp.parent) this.removeElement(this.skillAp);
    }
}
