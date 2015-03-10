
class HeroEqpt extends Dialog
{
    private m_dialog:UIOriginalDialog;

    private m_UI:UIHeroEqpt;

    private iconAny:any = {};

    private iconWarn:any = {};

    public constructor()
    {
        super();
    }

    public createChildren():void
    {
        super.createChildren();

        this.m_dialog = new UIOriginalDialog();

        this.addElement(this.m_dialog);

        this.m_dialog.horizontalCenter = 0;

        this.m_dialog.top = 0;

        this.m_dialog.setTitle("装备");

        this.m_dialog._original_dialog_bg.source = "all_dialog_bg";

        this.m_UI = new UIHeroEqpt();

        this.addElement(this.m_UI);

        this.m_UI.horizontalCenter = 0;

        this.m_UI.top = 0;

        this.m_UI._btn_prop.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onClick,this);

        for(var i = 1; i <= 10; i++)
        {
            var icon:UIIcon = this.m_UI["eqpt_icon_" + i];

            icon.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClickIcon, this);

            icon.name = "" + i;

            this.iconAny[i] = icon;
        }

        this.m_UI.eqpt_hero.source = "hero_" + Main.player.sex + "_" + Main.player.job;

    }

    public addEqptWarm(postion:string):void
    {
        if(!this.initUI)
        {
            this.iconWarn[postion] = 1;
        }
        else
        {
            var icon:UIIcon = this.m_UI["eqpt_icon_" + postion];

            if(icon)
            {
                icon.setEqptVis(true);
            }
        }
    }

    private onClick(e:egret.TouchEvent):void
    {
        DialogManager.open(MorePropDialog, "MorePropDialog");
    }

    private onClickIcon(e:egret.TouchEvent):void
    {

        var icon:UIIcon = e.currentTarget;

        icon.setEqptVis(false);

        var index:number = Number(e.currentTarget.name);

        if(this.iconWarn[index]) delete this.iconWarn[index];

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

        if(!egret.localStorage.getItem("prompt1"))
        {
            Main.iconMeun.setFight(true);
        }
    }

    public onUpdatePlayer():void
    {
        if(!this.initUI) return;

        this.m_UI._player_hp_label.text = Main.player.hp +"/" +Main.player.hpmax;

        this.m_UI._player_mp_label.text = Main.player.mp +"/" +Main.player.mpmax;

        //血条蓝条处理

        this.m_UI._title_hp.width = Math.floor(Main.player.hp/Main.player.hpmax>1?192:Main.player.hp/Main.player.hpmax*192);

        this.m_UI._title_mp.width = Math.floor(Main.player.mp/Main.player.mpmax>1?196:Main.player.mp/Main.player.mpmax*196);

        this.m_UI._label_baoji.text = "暴击：" + Main.player.crit;

        this.m_UI._label_daoshugongji.text = "道术：" + Main.player.tois;

        this.m_UI._label_heroname.text = "lv."+Main.player.level+" " + Main.player.name;

        this.m_UI._label_heroname.textColor = GameManager.getNameColor();

        this.m_UI._label_mingzhong.text = "护甲：" + Main.player.armor;  //护甲

        this.m_UI._label_mofafangyu.text = "魔法防御：" + Main.player.mdef;

        this.m_UI._label_momagongji.text = "魔法：" + Main.player.magic;

        this.m_UI._label_naili.text = "耐力：" + Main.player.exer;

        this.m_UI._label_shanbi.text = "韧性：" + Main.player.ten;  //韧性

        this.m_UI._label_shanghai.text = "伤害：" + Main.player.hurtmin + "-" + Main.player.hurtmax;

        this.m_UI._label_wulifangyu.text = "防御：" + Main.player.def;

        this.m_UI._label_wuligongji.text = "攻击：" + Main.player.atk;

        this.m_UI._label_zhandouli.text = "战力：" + Main.player.fightvalue;

        this.m_UI._label_zhiye.text = "职业：" + GameManager.JOB_NAME[Number(Main.player.job)];
    }

    public onUpdate():void
    {
        var hold:any = Main.player.m_items.holdEq;
        for(var i in this.iconAny){
            var icon:UIIcon = this.iconAny[i];
            if(icon)
            {
                if(this.iconWarn[i]) icon.setEqptVis(true);

                var equip:Equip = hold[i];

                if(equip)
                {
                    if(i > 2)
                    {
                        equip["effect"] = 1;

                        icon.setGroupSize();
                    }

                    icon.data = equip;

                    icon.dataChanged();

                    icon.setItems(equip.tpl["icon"]);

                    icon.setQuality(equip.qly);

                    icon.setName("Lv." + equip.tpl["lv"]);

                    icon._labels.text = GameManager.EQPT_TYPE[i];
                }
                else
                {
                    icon.setCount("");

                    icon.setItems("test_icon");

                    icon.setName("");

                    icon.setQuality(0);

                    icon.setText("");

                    icon.setStrength("");

                    icon.setEffVis();

                    icon._group.removeAllElements();

                    icon.data = null;

                    if(i == 1 || i == 2)
                    {
                        if(!egret.localStorage.getItem("prompt1"))
                        {
                            icon.setEqptVis(true);
                        }
                    }
                }
                icon.setText(GameManager.EQPT_TYPE[i]);
            }
        }
    }

    public show()
    {
        super.show();

        this.onUpdate();

        this.onUpdatePlayer();
    }

    public hide()
    {
        super.hide();
    }
}
