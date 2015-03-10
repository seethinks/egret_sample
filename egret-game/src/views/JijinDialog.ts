
class JijinDialog extends Dialog
{
    private m_dialog:DialogBox;

    private m_UI:JijinUI;

    private taskList1:egret.gui.List = new egret.gui.List();

    private dp:egret.gui.ArrayCollection = new egret.gui.ArrayCollection();

    public obj:any;

    public actList:any;

    public constructor()
    {
        super();
    }

    public createChildren():void
    {
        super.createChildren();

        this.m_dialog = new DialogBox();

        this.addElement(this.m_dialog);

        this.m_dialog.horizontalCenter = 0;

        this.m_dialog.setTitle("基金活动");

        this.m_dialog._btn_close.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouch,this);

        this.m_dialog._btn_help.visible = false;

        this.m_UI = new JijinUI();

        this.addElement(this.m_UI);

        this.m_UI.horizontalCenter = 0;

        this.m_UI._btn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onBuy,this);

        this.top = 30;

        this.m_UI.top = this.top + 50;

        this.taskList1.skinName = "skins.ListSkin";

        this.taskList1.horizontalCenter = 0;

        this.taskList1.itemRenderer = new egret.gui.ClassFactory(JijinList);

        this.taskList1.itemRendererSkinName = "skins.JijinListSkin";

        this.taskList1.dataProvider = this.dp;

        this.addElement(this.taskList1);

        this.taskList1.top = this.m_UI.top + 277;

        this.taskList1.width = 517;

        this.taskList1.height = 344;

        this.m_UI.btn_tab1.setText("tab_txt_jijin");

        this.m_UI.btn_tab2.setText("tab_txt_tongqing");

        this.m_UI.btn_tab1.setSouoce("btn_chek1");

        this.m_UI.btn_tab2.setSouoce("btn_chek2");

        this.m_UI.btn_tab1.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTab1, this);

        this.m_UI.btn_tab2.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTab2, this);

        this.m_UI._label_num.visible = false;

        this.m_dialog.height = 720;
    }

    private onTab1(e:egret.TouchEvent):void
    {
        this.m_UI.btn_tab1.setSouoce("btn_chek1");

        this.m_UI.btn_tab2.setSouoce("btn_chek2");

        var url:string = "http://"+GameManager.server["ip"]+":"+GameManager.server["port"];

        var param:string = "type=0x0136&sid="+GameManager.SESSION_ID + "&activityType=fund";

        HttpMessage.sendMsg(url, param);

        this.m_UI._img_bg.source = "act_fund";

        this.m_UI._btn._setLabel("购    买");

        this.m_UI._btn.y = 183;

        this.m_UI._label_num.visible = false;

        this.obj["activityType"] = "fund";
    }

    private onTab2(e:egret.TouchEvent):void
    {
        this.m_UI.btn_tab1.setSouoce("btn_chek2");

        this.m_UI.btn_tab2.setSouoce("btn_chek1");

        var url:string = "http://"+GameManager.server["ip"]+":"+GameManager.server["port"];

        var param:string = "type=0x0136&sid="+GameManager.SESSION_ID + "&activityType=celebrate";

        HttpMessage.sendMsg(url, param);

        this.m_UI._img_bg.source = "act_celebrate";

        this.m_UI._btn._setLabel("我也要买");

        this.m_UI._btn.y = 183 + 40;

        this.m_UI._label_num.visible = true;

        this.obj["activityType"] = "celebrate";
    }

    private onBuy(e:egret.TouchEvent):void
    {
        var url:string = "http://"+GameManager.server["ip"]+":"+GameManager.server["port"];

        var param:string = "type=0x0138&sid="+GameManager.SESSION_ID;

        HttpMessage.sendMsg(url, param);
    }

    private onTouch(e:egret.TouchEvent):void
    {
        this.hide();
    }

    public onUpdate():void
    {
        var list:Array<any> = this.actList["list"];

        if(list && list.length > 0)
        {
            list.sort(function(x:any, y:any){

                if(x['gift']['giftId'] > y['gift']['giftId'])return 1;
                return -1;

            });
            this.dp.removeAll();

            for(var i = 0; i < list.length; i++)
            {
                var obj:any = list[i];

                if(obj["status"] == 2 || obj["status"] == "2")
                {
                    continue;
                }

                this.dp.addItem(obj);
            }
        }

        var isBuy:number = Number(this.actList["isBuyFund"]);

        if(isBuy != 0)
        {
            this.m_UI._btn._setLabel("已购买");
        }
        else
        {
            this.m_UI._btn._setLabel("购  买");
        }

        if(this.obj["activityType"] == "celebrate")
        {
            var buyFundNum:number = Number(this.actList["buyFundNum"]);

            this.m_UI._label_num.text = "" + buyFundNum;

            this.m_UI._label_num.visible = true;

            this.m_UI._label_vip.text = "再有" + this.actList["nextBuyFundNum"] + "人参加即可领取下一阶奖励！";
        }
        else
        {
            this.m_UI._label_vip.text = "达到VIP"+this.actList["vip"]+"可以购买，您当前VIP" + Main.player.vip;

            this.m_UI._label_num.visible = false;
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
