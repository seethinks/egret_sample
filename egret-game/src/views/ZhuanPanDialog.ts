class ZhuanPanDialog extends Dialog
{
    private _dialog:DialogBox;

    private m_UI:ZhuanPanUI;

    private index:number = 4;

    private timer:egret.Timer = new egret.Timer(100);

    private time:number = 36;

    private stopCount:number = 0;

    private isStart:boolean = false;

    public arr:Array<any> = [];

    public arg:any = {};

    public completeNum:number = 0;

    public totalNum:number = 0;

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

        this.m_UI = new ZhuanPanUI();

        this.addElement(this.m_UI);

        this.m_UI.horizontalCenter = 0;

        this._dialog._btn_close.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouch,this);

        this._dialog._btn_help.visible = false;

        this._dialog.setTitle("幸运罗盘");

        this.top = 30;

        this.m_UI.top = this.top + 37;

        this.m_UI._btn_refresh.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onRefresh, this);

        this.m_UI._img.rotation = 240;

        this._dialog.height = 740;

        this.m_UI._btn_start.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
    }

    private onRefresh(e:egret.TouchEvent):void
    {
        GameManager.msgBox.showMsg(function(r)
        {
            if(r)
            {
                var url:string = "http://"+GameManager.server["ip"]+":"+GameManager.server["port"];

                var param:string = "type=0x0412&sid="+GameManager.SESSION_ID + "&isRefresh=1";

                HttpMessage.sendMsg(url, param);
            }
        }, "本次刷新将消耗20元宝，您确定继续？");
    }

    private onClick(e:egret.TouchEvent):void
    {
        if(this.totalNum - this.completeNum <= 0)
        {
            GameManager.flyText({t:"次数不足！", q:1});

            return;
        }

        this.timer.start();

        this.timer.addEventListener(egret.TimerEvent.TIMER, this.waitMsg, this);

        this.m_UI._btn_start.visible = false;

        this.m_UI._btn_refresh.visible = false;

        var url:string = "http://"+GameManager.server["ip"]+":"+GameManager.server["port"];

        var param:string = "type=0x0411&sid="+GameManager.SESSION_ID;

        HttpMessage.sendMsg(url, param);
    }

    private waitMsg(e:egret.TimerEvent):void
    {
        this.setRotation();
    }

    public IsStart():void
    {
        if(!this.arg) return;

        if(this.arr && this.arr.length > 0)
        {
            for (var i = 0; i < this.arr.length; i++)
            {
                var obj = this.arr[i];

                if(obj["itemID"] == this.arg["itemID"] && obj["maxType"] == this.arg["maxType"] && obj["count"] == this.arg["count"])
                {
                    this.stopCount = i;

                    this.isStart = true;

                    this.timer.removeEventListener(egret.TimerEvent.TIMER, this.waitMsg, this);

                    this.statrZhuanPan();

                    break;
                }
            }
        }
    }

    private statrZhuanPan():void
    {
        if(this.index != 4)
        {
            this.timer.addEventListener(egret.TimerEvent.TIMER, this.onFrameZhunbei, this);
        }
        else
        {
            this.timer.addEventListener(egret.TimerEvent.TIMER, this.onFrame, this);
        }
    }

    private onFrameZhunbei(e:egret.TimerEvent):void
    {
        this.timer.delay = 100;

        this.setRotation();

        if(this.index == 4)
        {
            this.timer.removeEventListener(egret.TimerEvent.TIMER, this.onFrameZhunbei, this);

            this.timer.addEventListener(egret.TimerEvent.TIMER, this.onFrame, this);

            return;
        }
    }

    private onFrame(e:egret.Event):void
    {
        this.time --;

        this.setRotation();

        this.timer.delay += 5;

        if(this.time == 18)
        {
            this.timer.delay = 200;
        }
        if(this.time == 6)
        {
            this.timer.delay = 300;
        }
        if(this.time == 0)
        {
            this.timer.removeEventListener(egret.TimerEvent.TIMER, this.onFrame, this);

            this.timer.addEventListener(egret.TimerEvent.TIMER, this.onFrameStop, this);

            this.timer.delay = 400;
        }
    }

    private onFrameStop(e:egret.Event):void
    {
        this.stopCount --;

        this.timer.delay += 20;

        this.setRotation();

        if(this.stopCount <= 0)
        {
            this.timer.removeEventListener(egret.TimerEvent.TIMER, this.onFrameStop, this);

            this.timer.stop();

            this.time = 36;

            this.timer.delay = 100;

            this.stopCount = 0;

            this.m_UI._btn_start.visible = true;

            this.m_UI._btn_refresh.visible = true;

            this.isStart = false;

            Main.player.syncCodes();
        }
    }

    private setRotation():void
    {
        this.index ++;

        if(this.index == 6)
        {
            this.index = 0;
        }

        this.m_UI._img.rotation = this.index * 60;
    }

    private onTouch(e:egret.TouchEvent):void
    {
        this.hide();
    }

    public refreshNum():void
    {
        this.m_UI._label_desc.text = "今日抽奖次数："+(this.totalNum - this.completeNum)+"/"+this.totalNum+"\n\n活动说明：罗盘大反转";

        this.m_UI._label_time.text = "限时活动时间：12月25日 11：00至一月五日 20：00";
    }

    public onUpdate():void
    {
        if(!this.m_UI)return;

        this.refreshNum();

        if(this.arr && this.arr.length > 0)
        {
            for(var i = 0; i < this.arr.length; i++)
            {
                var obj = this.arr[i];

                var itemID = obj["itemID"];

                var maxType = obj["maxType"];

                var count = obj["count"];

                var icon:UIIcon = this.m_UI["_icon" + (i + 1)];

                icon.setQuality(4);

                if(Number(maxType) == 51)  //金币
                {
                    icon.setName("金币");

                    icon.setItems("1");

                    icon.setCount(count + "");

                }
                else if(Number(maxType) == 52)  //元宝
                {
                    icon.setName("元宝");

                    icon.setItems("2");

                    icon.setCount(count + "");
                }
                else if(Number(maxType) == 57)  //黑铁矿
                {
                    icon.setName("黑铁矿石");

                    icon.setItems("3");

                    icon.setCount(count + "");

                }
                else if(Number(maxType) == 2)
                {
                    var item = GameManager.JSON_EQPT[itemID];

                    var items = {};

                    items["tpl"] = item;

                    icon.data = items;

                    icon.dataChanged();

                    icon.setCount(count + "");
                }
                else
                {
                    var item = GameManager.JSON_ITEM[itemID];

                    var items = {};

                    items["tpl"] = item;

                    icon.data = items;

                    icon.dataChanged();

                    icon.setCount(count + "");
                }
            }
        }
    }

    public show()
    {
        super.show( );

        var url:string = "http://"+GameManager.server["ip"]+":"+GameManager.server["port"];

        var param:string = "type=0x0412&sid="+GameManager.SESSION_ID + "&isRefresh=0";

        HttpMessage.sendMsg(url, param);

        //this.onUpdate();
    }

    public hide()
    {
        super.hide();
    }
}
