
class BelleDialog extends Dialog
{
    private dialog:UIOriginalDialog;

    private m_UI:UIBelle;

    private iconList:any = {};

    private now_sm:SuperWoman;

    private skilldesc:BelleSkillDesc;

    private btn_help:egret.gui.UIAsset;

    public constructor()
    {
        super();
    }

    public createChildren():void
    {
        super.createChildren();

        this.dialog = new UIOriginalDialog();

        this.addElement(this.dialog);

        this.dialog.horizontalCenter = 0;

        this.dialog.top = 0;

        this.dialog.setTitle("美人");

        this.btn_help = new egret.gui.UIAsset();

        this.btn_help.source = "skill_help";

        this.addElement(this.btn_help);

        this.btn_help.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onHelp, this);

        this.btn_help.top = 2;

        this.btn_help.left = 0;

        this.m_UI = new UIBelle();

        this.addElement(this.m_UI);

        this.m_UI.horizontalCenter = 0;

        this.m_UI.top = 60;

        this.m_UI.belle_btn_check.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);

        this.m_UI.belle_btn_stutas.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);

        this.m_UI.belle_btn_upstart.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);

        this.m_UI.belle_btn_zhengfa.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);

        for(var i = 1; i<=6; i++)
        {
            if(i == 1 || i == 2 || i == 4 || i == 6)
            {
                var icon:UIIcon = this.m_UI["belle_icon" + i];

                this.iconList[i] = icon;

                icon.addEventListener(egret.TouchEvent.TOUCH_TAP, this.clickEqpt, this);

                icon.name = "" + i;
            }

            var head:BelleHead = this.m_UI["_hero_icon_" + i];

            if(head)
            {
                head.addEventListener(egret.TouchEvent.TOUCH_TAP, this.changeHero, this);
            }
        }

        this.skilldesc = new BelleSkillDesc();
    }

    private onHelp(e:egret.TouchEvent):void
    {
        var help:HelpDialog = DialogManager.findDialog(HelpDialog, "HelpDialog");

        if(help)
        {
            help.index = 10;

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

    private onZhenfa(e:egret.TouchEvent):void
    {

    }

    private changeHero(e:egret.TouchEvent):void
    {
        var head:BelleHead = e.currentTarget;

        if(head && head._key > 0)
        {
            Main.player.m_operateObjid = head._key;

            this.onUpdate();
        }
    }

    private clickEqpt(e:egret.TouchEvent):void
    {
        var icon:UIIcon = e.currentTarget;

        var index:number = Number(e.currentTarget.name);

        Main.player.m_clickIndex = index;

        if(icon.data)
        {
            Main.player.m_clickItme = icon.data;

            DialogManager.open(EqptDetails, "EqptDetails");
        }
        else
        {
            Main.player.m_clickItme = null;

            DialogManager.open(EqptChangeDialog, "EqptChangeDialog");
        }
    }

    private onClick(e:egret.TouchEvent):void
    {
        switch (e.target)
        {
            case this.m_UI.belle_btn_check:
                DialogManager.open(HeroPropDialog, "HeroPropDialog");
                break;
            case this.m_UI.belle_btn_stutas:
                if(Number(this.now_sm.postion) > 0)
                {
                    GameManager.flyText({t:"阵法中的美人不能出战！", q:1});
                    return;
                }

                var url:string = "http://"+GameManager.server["ip"]+":"+GameManager.server["port"];

                var num:number = 0;

                if(this.now_sm.action > 0)
                {
                    num = 0;
                }
                else
                {
                    num = 1;
                }

                var param:string = "type=0x0057&sid="+GameManager.SESSION_ID + "&heroId=" +Main.player.m_operateObjid+ "&action=" + num;

                HttpMessage.sendMsg(url, param);
                break;
            case this.m_UI.belle_btn_upstart:
                DialogManager.open(BelleStart, "BelleStart");
                break;
            case this.m_UI.belle_btn_zhengfa:
                DialogManager.open(BelleZhenfa, "BelleZhenfa");
                break;
        }
    }

    public updateEqpt():void
    {
        var hold:any = Main.player.m_items.swholdEq[this.now_sm.id];

        for(var i in this.iconList)
        {
            var icon:UIIcon = this.iconList[i];

            if(icon && hold)
            {
                var equip:Equip = hold[i];

                if(equip)
                {
                    equip["effect"] = 1;

                    icon.setGroupSize();

                    icon.data = equip;

                    icon.dataChanged();

                    icon.setName("Lv." + equip.tpl["lv"]);

                    icon._labels.text = GameManager.EQPT_TYPE[i];
                }
            }
        }
    }

    private clear():void
    {
        for(var i in this.iconList)
        {
            var icon:UIIcon = this.iconList[i];

            icon.setCount("");

            icon.setItems("test_icon");

            icon.setName("");

            icon.setQuality(0);

            icon.setText("");

            icon.setStrength("");

            icon.setEffVis();

            icon._group.removeAllElements();

            icon.data = null;

            icon.setText(GameManager.EQPT_TYPE[i]);
        }
    }

    private skillDesc(e:egret.TouchEvent):void
    {
        var img:egret.gui.UIAsset = e.currentTarget;

        if(img)
        {
            if(img.source == "test_icon")
            {
                return;
            }
            else
            {
                this.addElement(this.skilldesc);

                this.skilldesc.y = 540;

                this.skilldesc.horizontalCenter = 0;

                var id = e.currentTarget.name;

                var skillModel = GameManager.JSON_SKILLS[id];

                this.skilldesc.skillModel = skillModel;

                this.skilldesc.update();
            }
        }
    }

    public onUpdate():void
    {
        if(!this.initUI)return;

        var index:number = 0;

        if(this.skilldesc && this.skilldesc.parent)
        {
            this.removeElement(this.skilldesc);
        }

        for(var k in Main.player.m_heros.heros)
        {

            var sm:SuperWoman = Main.player.m_heros.heros[k];

            if (!sm)continue;

            index++;

            if (Main.player.m_operateObjid == 0) Main.player.m_operateObjid = sm.id;

            var icon:BelleHead = this.m_UI["_hero_icon_" + index];

            icon._head.source = "hero_head_" + sm.templateid;

            icon._key = k;

            if (k == Main.player.m_operateObjid)
            {
                icon._bgimg.source = "belle_head_bg";

                this.m_UI.belle_hero.source = "hero_body_" + sm.templateid;

                this.m_UI.belle_label_name.text = "Lv." + sm.level + " [" + GameManager.JOB_NAME[sm.job] + "] " + sm.name;
                this.m_UI.belle_label_fightnum.text = "战斗力:" + sm.fightvalue;
                this.m_UI.belle_label_hp.text = "" + sm.hp;
                this.m_UI.belle_label_mp.text = "" + sm.mp;
                this.m_UI.belle_label_hurt.text = "伤害: " + sm.hurtmin + " - " + sm.hurtmax;

                var skill:any = sm.tpl;

                for(var i = 1; i <= 4; i++)
                {
                    var level:number = Number(skill["skilllevel" + i]);

                    var id = skill["skillid" + i];

                    var skillModel = GameManager.JSON_SKILLS[id];

                    var img:egret.gui.UIAsset = this.m_UI["belle_skill" + i];

                    img.name = "" + id;

                    if(Number(sm.starlevel) >= Number(level))
                    {
                        img.source = skillModel["icon"];

                        img.addEventListener(egret.TouchEvent.TOUCH_TAP, this.skillDesc, this);
                    }
                    else
                    {
                        img.source = "test_icon";
                    }
                }

                var p_id = skill["star" + sm.starlevel];

                var godatt = GameManager.JSON_HERO_GODATT[p_id];

                var attkey:number = Number(godatt["attkey"]);

                var attvalue:number = Number(godatt["attvalue"]);

                this.m_UI._label_p.text = "" + GameManager.GetGodEqDesc(attkey, attvalue);

                this.now_sm = sm;

                this.clear();

                this.updateEqpt();

                if (sm.action > 0)
                {
                    this.m_UI.belle_btn_stutas._setLabel("休息");
                }
                else
                {
                    this.m_UI.belle_btn_stutas._setLabel("出战");
                }

                for (var i = 1; i <= 10; i++)
                {
                    var star:egret.gui.UIAsset = this.m_UI["belle_start" + i];

                    if (i > sm.starlevel)
                    {
                        star.source = "belle_start_a";
                    }
                    else
                    {
                        star.source = "belle_start_l";
                    }
                }
            }
            else
            {
                icon._bgimg.source = "belle_head_close";
            }

        }

    }

    public show()
    {
        super.show();

        this.onUpdate();
    }

    public hide()
    {
        Main.player.m_operateObjid = 0;
        super.hide();
    }
}
