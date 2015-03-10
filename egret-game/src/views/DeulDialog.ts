
class DeulDialog extends Dialog
{
    private dialog:UIOriginalDialog;

    private m_UI:UIDeul;

    private taskList1:egret.gui.List = new egret.gui.List();

    private dp:egret.gui.ArrayCollection = new egret.gui.ArrayCollection();

    private isStop:boolean = true;

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

        this.dialog.setTitle("竞技场");

        this.m_UI = new UIDeul();

        this.addElement(this.m_UI);

        this.m_UI.horizontalCenter = 0;

        this.m_UI.top = 60;

        this.taskList1.skinName = "skins.ListSkin";

        this.taskList1.width = 540;

        this.taskList1.height = 443;

        this.taskList1.horizontalCenter = 0;

        this.taskList1.top = 252;

        this.addElement(this.taskList1);

        this.taskList1.itemRenderer = new egret.gui.ClassFactory(UIDeulList);

        this.taskList1.itemRendererSkinName = "skins.DeulListSkin";

        this.taskList1.dataProvider = this.dp;

        //this.taskList1.addEventListener(egret.gui.ListEvent.ITEM_CLICK, this.clickItem, this);

        this.m_UI.deul_btn_rank.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onRank, this);

        this.m_UI.deul_btn_exchange.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onShop, this);

        this.m_UI.deul_btn_huan.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onHuan, this);

        this.m_UI.deul_btn_buy.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onBuy, this);
    }

    private onBuy(e:egret.TouchEvent):void
    {
        GameManager.msgBox.showMsg(function(r)
        {
            if(r)
            {
                var url:string = "http://"+GameManager.server["ip"]+":"+GameManager.server["port"];

                var param:string = "type=0x0093&sid="+GameManager.SESSION_ID;

                HttpMessage.sendMsg(url, param);

//                if(GameManager.dataEyes)GameManager.dataEyes.pushEvent("购买竞技场次数", 1,
//                    {pname:Main.player.name, sid:GameManager.server.sid, cost:50});
            }

        }, "您确定花费50元宝购买一次挑战次数？");
    }

    private onHuan(e:egret.TouchEvent):void
    {
        var url:string = "http://"+GameManager.server["ip"]+":"+GameManager.server["port"];

        var param:string = "type=0x0090&sid="+GameManager.SESSION_ID;

        HttpMessage.sendMsg(url, param);
    }

    private onRank(e:egret.TouchEvent):void
    {
        DialogManager.open(DeulRankDialog, "DeulRankDialog");
    }

    private onShop(e:egret.TouchEvent):void
    {
        DialogManager.open(DeulShop, "DeulShop");
    }

    public onUpdate():void  //"myInfo":{"rank":"3","vsCount":"5","honor":500,"prestige":500,"gold":350}
    {
        this.dp.removeAll();

        if(Main.player.m_deuiList)
        {
            var list:Array<any> = Main.player.m_deuiList;

            list.sort(this.sortArr);

            for(var i = 0; i < list.length; i++)
            {
                var obj:any = list[i];

                this.dp.addItem(obj);
            }
        }
        else
        {
            var url:string = "http://"+GameManager.server["ip"]+":"+GameManager.server["port"];

            var param:string = "type=0x0090&sid="+GameManager.SESSION_ID;

            HttpMessage.sendMsg(url, param);
        }


        this.m_UI.deul_head.source = "f_" + Main.player.sex + "_" + Main.player.job;

        this.m_UI.deul_label_names.text = "Lv."+Main.player.level +" " + Main.player.name + "\n\n";

        this.m_UI.deul_label_names.textColor = GameManager.getNameColor();

        if(Main.player.m_deulMyinfo)
        {
            var str:string = "排名" + Main.player.m_deulMyinfo["rank"] + " 战力" + Main.player.fightvalue + "\n\n";

            str += "排名奖励: " + "元宝" + Main.player.m_deulMyinfo["gold"] + " 荣誉" + Main.player.m_deulMyinfo["honor"] + " 声望" + Main.player.m_deulMyinfo["prestige"];

            this.m_UI.deul_label_name.text = str;

            this.m_UI.deul_label_num.text = "今日剩余挑战次数：" + Main.player.m_deulMyinfo["vsCount"];
        }
    }

    private sortArr(a:any, b:any):number
    {
        var ranka:number = Number(a["rank"]);

        var rankb:number = Number(b["rank"]);

        if(ranka > rankb) return 1;
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
