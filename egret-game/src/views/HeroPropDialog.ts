class HeroPropDialog extends Dialog {

    private _dialog:DialogBox;

    private m_UI:UIHelp;

    private taskList1:egret.gui.List = new egret.gui.List();

    private dp:egret.gui.ArrayCollection = new egret.gui.ArrayCollection();

    public constructor()
    {
        super();
    }

    public createChildren():void
    {
        super.createChildren();

        this._dialog = new DialogBox();

        this.addElement(this._dialog);

        this._dialog.horizontalCenter = 0;

        this.m_UI = new UIHelp();

        this.addElement(this.m_UI);

        this.m_UI.horizontalCenter = 0;

        this._dialog._btn_close.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouch,this);

        this._dialog._btn_help.visible = false;

        this._dialog.setTitle("详细属性");

        this.top = 30;

        this.m_UI.top = this.top + 50;

        this.taskList1.skinName = "skins.ListSkin";

        this.taskList1.horizontalCenter = 0;

        this.taskList1.itemRenderer = new egret.gui.ClassFactory(UIHelpItem);

        this.taskList1.itemRendererSkinName = "skins.HelpItemSkin";

        this.taskList1.dataProvider = this.dp;

        this.addElement(this.taskList1);

        this.taskList1.top = this.m_UI.top + 7;

        this.taskList1.width = 478;

        this.taskList1.height = 585;

    }

    private onTouch(e:egret.TouchEvent):void
    {
        this.hide();
    }

    public onUpdate():void
    {
        this.dp.removeAll();
        this.dp.addItem({"text":""});

        var sm:SuperWoman = Main.player.m_heros.heros[Main.player.m_operateObjid];

        if(!sm) return;

        var text:string = "Lv."+sm.level + " "+sm.name+"["+GameManager.JOB_NAME[sm.job]+"]";
        var color:number = 0x2753e5;
        var size:number = 18;
        this.dp.addItem({"text":text, "color":color, "size":size});
        text = "战力： "+ sm.fightvalue;
        color = 0xf66026;
        this.dp.addItem({"text":text, "color":color, "size":size});
        text = "属性：总属性值[效果]";
        color = 0x2753e5;
        this.dp.addItem({"text":text, "color":color, "size":size});
        text = "";
        this.dp.addItem({"text":text, "color":color, "size":size});
        text = "基础属性";
        color = 0xffffff;
        size = 30;
        this.dp.addItem({"text":text, "color":color, "size":size});
        text = "";
        this.dp.addItem({"text":text, "color":color, "size":size});

        text = "攻击："+sm.atk + " [防御+"+sm.atk+" 命中+"+ Math.floor(sm.atk*0.6)+"]";
        color = 0xa129f5;
        size = 18;
        this.dp.addItem({"text":text, "color":color, "size":size});
        if(sm.job == 1){
            text = "(主属性：[最小伤害+" + Math.floor(sm.atk/2) + " 最大伤害+"+sm.atk+"])";
            this.dp.addItem({"text":text, "color":color, "size":size});
        }

        text = "道术："+sm.tois + " [暴击+"+sm.tois+" 闪避+"+ Math.floor(sm.tois*0.2)+"]";
        this.dp.addItem({"text":text, "color":color, "size":size});
        if(sm.job == 2){
            text = "(主属性：[最小伤害+" + Math.floor(sm.tois/2) + " 最大伤害+"+sm.tois+"])";
            this.dp.addItem({"text":text, "color":color, "size":size});
        }

        text = "魔法："+sm.magic + " [魔法防御+"+sm.magic+" 每回合回复+"+ Math.floor(Math.sqrt(sm.magic/3))+"MP]";
        this.dp.addItem({"text":text, "color":color, "size":size});
        if(sm.job == 3){
            text = "(主属性：[最小伤害+" + Math.floor(sm.magic/2) + " 最大伤害+"+sm.magic+"])";
            this.dp.addItem({"text":text, "color":color, "size":size});
        }

        text = "耐力："+sm.exer + "[HP+"+sm.exer*10+" 韧性+"+ sm.exer+"]";
        this.dp.addItem({"text":text, "color":color, "size":size});
        text = "生命值："+sm.hp;
        this.dp.addItem({"text":text, "color":color, "size":size});
        text = "魔法值："+sm.mp;
        this.dp.addItem({"text":text, "color":color, "size":size});
        text = "";
        this.dp.addItem({"text":text, "color":color, "size":size});
        text = "战斗属性";
        color = 0xffffff;
        size = 30;
        this.dp.addItem({"text":text, "color":color, "size":size});
        text = "";
        this.dp.addItem({"text":text, "color":color, "size":size});
        text = "["+"对"+sm.level+"级敌人的效果"+"]";
        color = 0xa129f5;
        size = 18;
        this.dp.addItem({"text":text, "color":color, "size":size});
        text = "最小伤害："+sm.hurtmin;
        this.dp.addItem({"text":text, "color":color, "size":size});
        text = "最大伤害："+sm.hurtmax;
        this.dp.addItem({"text":text, "color":color, "size":size});

        var rate:number = sm.armor / (Number(Number(10*sm.level*sm.level)+Number(60*sm.level+240))*8);
        text = "护甲："+sm.armor + " [减少"+(Math.round(rate*1000)/10).toFixed(1)+"%受到的伤害]";
        this.dp.addItem({"text":text, "color":color, "size":size});

        rate = sm.def / (Number(Number(10*sm.level*sm.level)+Number(60*sm.level+240))*4);
        text = "防御："+sm.def + " [减少"+(Math.round(rate*1000)/10).toFixed(1)+"%受到的物理伤害]";
        this.dp.addItem({"text":text, "color":color, "size":size});

        rate = sm.mdef / (Number(Number(10*sm.level*sm.level)+Number(60*sm.level+240))*4);
        text = "魔法防御："+sm.mdef + " [减少"+(Math.round(rate*1000)/10).toFixed(1)+"%受到的魔法伤害]";
        this.dp.addItem({"text":text, "color":color, "size":size});

        rate = 5 + Number(sm.crit / (Number(Number(10*sm.level*sm.level)+Number(60*sm.level+240))/40));
        text = "暴击："+sm.crit + " [攻击造成暴击的概率"+(Math.round(rate*100)/100).toFixed(1)+"%]";
        this.dp.addItem({"text":text, "color":color, "size":size});

        rate = sm.hit / (Number(Number(10*sm.level*sm.level)+Number(60*sm.level+240))*0.6/25);
        text = "命中："+sm.hit + " [攻击命中目标的概率提高"+(Math.round(rate*100)/100).toFixed(1)+"%]";
        this.dp.addItem({"text":text, "color":color, "size":size});

        rate = 5 + Number(sm.ten / (Number(Number(10*sm.level*sm.level)+Number(60*sm.level+240))/40));
        text = "韧性："+sm.ten + " [降低被暴击的概率"+(Math.round(rate*100)/100).toFixed(1)+"%]";
        this.dp.addItem({"text":text, "color":color, "size":size});

        rate = sm.dodge / (Number(Number(10*sm.level*sm.level)+Number(60*sm.level+240))*0.2/25);
        text = "闪避："+sm.dodge + " [提高闪避攻击几率"+(Math.round(rate*100)/100).toFixed(1)+"%]";
        this.dp.addItem({"text":text, "color":color, "size":size});

        text = "";
        this.dp.addItem({"text":text, "color":color, "size":size});
        text = "特殊属性";
        color = 0xffffff;
        size = 30;
        this.dp.addItem({"text":text, "color":color, "size":size});
        text = "";
        this.dp.addItem({"text":text, "color":color, "size":size});
        color = 0xF92338;
        size = 18;
        var p_id = sm.tpl["star" + sm.starlevel];
        var godatt = GameManager.JSON_HERO_GODATT[p_id];
        var attkey:number = Number(godatt["attkey"]);
        var attvalue:number = Number(godatt["attvalue"]);
        text = "" + GameManager.GetGodEqDesc(attkey, attvalue);

        this.dp.addItem({"text":text, "color":color, "size":size});

        text = "";
        this.dp.addItem({"text":text, "color":color, "size":size});
        text = "神器属性";
        color = 0xffffff;
        size = 30;
        this.dp.addItem({"text":text, "color":color, "size":size});
        text = "";
        this.dp.addItem({"text":text, "color":color, "size":size});
        color = 0xF92338;
        size = 18;

        var hold = Main.player.m_items.swholdEq[sm.id];

        for(var pos in hold)
        {
            var equip:Equip = hold[pos];

            if(!equip)continue;

            if(equip.godEq> 0){
                if(equip.gevalue1 > 0){
                    text = GameManager.GetGodEqDesc(Number(equip.gekey1), equip.gevalue1);
                    this.dp.addItem({"text":text, "color":color, "size":size});
                }
                if(equip.gevalue2> 0){
                    text = GameManager.GetGodEqDesc(Number(equip.gekey2), equip.gevalue2);
                    this.dp.addItem({"text":text, "color":color, "size":size});
                }
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
        super.hide();
    }

}