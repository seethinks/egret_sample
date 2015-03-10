
class BuyMoneyDialog extends Dialog
{
    private _dialog:DialogBox;

    private m_UI:UIBuyMoney;

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

        this.m_UI = new UIBuyMoney();

        this.addElement(this.m_UI);

        this.m_UI.horizontalCenter = 0;

        this._dialog._btn_close.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouch,this);

        this._dialog._btn_help.visible = false;

        this._dialog.setTitle("购买金币");

        this.top = 30;

        this.m_UI.top = this.top + 50;

        this.m_UI.btn_buy.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onBuy, this);

        this.m_UI.btn_buy_all.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onAllBuy, this);
    }

    public onBuy(e:egret.TouchEvent):void
    {
        var url:string = "http://"+GameManager.server["ip"]+":"+GameManager.server["port"];

        var param:string = "type=0x0037&sid="+GameManager.SESSION_ID + "&count=1";

        HttpMessage.sendMsg(url, param);

//        if(GameManager.dataEyes)GameManager.dataEyes.pushEvent("金币购买", 1,
//            {pname:Main.player.name, sid:GameManager.server.sid, cost:20});
    }

    public onAllBuy(e:egret.TouchEvent):void
    {
        GameManager.msgBox.showMsg(function (r)
        {
            if(r)
            {
                var url:string = "http://"+GameManager.server["ip"]+":"+GameManager.server["port"];

                var param:string = "type=0x0037&sid="+GameManager.SESSION_ID + "&count=0";

                HttpMessage.sendMsg(url, param);

//                if(GameManager.dataEyes)GameManager.dataEyes.pushEvent("购买金币(ALL)", 1,
//                    {pname:Main.player.name, sid:GameManager.server.sid});
            }
        }, "确定购买全部金币？");

    }

    private onTouch(e:egret.TouchEvent):void
    {
        this.hide();
    }

    public onUpdate():void
    {
        var vip:any = GameManager.JSON_VIP[(Number(Main.player.vip) + 1)];

        if(!vip) return;

        var rewards:string = vip["rewards"];

        var arr_rewards:Array<any> = rewards.split("|");

        var str_vip:string = arr_rewards[2];

        var arr_vip:Array<any> = str_vip.split("#");

        var vip_num:number = Number(arr_vip[1]);

        this.m_UI.label_vip_num.text = "您当前是VIP" + Main.player.vip + "，每天可以额外购买"+vip_num+"次";

        var bosscount:any = Main.player.m_vipRewards[3];

        var count:number = 0;

        if(bosscount)
        {
            count = bosscount["vipBought"];
        }

        this.m_UI.label_buy_num.text = "剩余购买次数：" + (vip_num - count);

        this.m_UI.label_gold.text = "售价：20";

        this.m_UI.label_money.text = "金币：" + (Number(Main.player.level) * 2000);

    }

    public show()
    {
        super.show( );

        this.onUpdate();
    }

    public hide()
    {
        super.hide();
    }
}
