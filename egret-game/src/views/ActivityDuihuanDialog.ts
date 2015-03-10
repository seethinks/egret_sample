
class ActivityDuihuanDialog extends Dialog
{
    private m_dialog:DialogBox;

    private m_UI:ActivityDescUI;

    private textList:egret.gui.List = new egret.gui.List();

    private dp:egret.gui.ArrayCollection = new egret.gui.ArrayCollection();

    public actList:any;

    public obj:any;

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

        this.m_dialog.setTitle("活动详情");

        this.m_dialog._btn_close.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouch,this);

        this.m_dialog._btn_help.visible = false;

        this.m_UI = new ActivityDescUI();

        this.addElement(this.m_UI);

        this.m_UI.horizontalCenter = 0;

        this.textList.skinName = "skins.ListSkin";

        this.addElement(this.textList);

        this.textList.height = 408;

        this.textList.horizontalCenter = 0;

        this.textList.itemRenderer = new egret.gui.ClassFactory(ActivityDuiList);

        this.textList.itemRendererSkinName = "skins.ActivitileDuiListSkin";

        this.textList.dataProvider = this.dp;

        this.top = 30;

        this.m_UI.top = this.top + 50;

        this.textList.top = this.m_UI.top + 208;
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
            this.dp.removeAll();

            for(var i = 0; i < list.length; i++)
            {
                var objs = {};

                objs["extThings"] = this.actList["extThings"];

                objs["gainExtThings"] = this.actList["gainExtThings"];

                objs["list"] = list[i];

                objs["giftId"] = list[i]["giftId"];

                objs["activityType"] = this.actList["activityType"];

                this.dp.addItem(objs);
            }

            this.m_UI._label_chage.text = "可兑换次数:" + this.actList["count"];
        }

        if(this.obj)
        {
            var btime:number = Number(this.obj["beginTime"]);

            var etime:number = Number(this.obj["endTime"]);

            var date:Date = new Date(btime);
            var h:string = "" + date.getHours();
            var m:string = "" +date.getMinutes();
            if(date.getHours() < 10) h = "0" + date.getHours();
            if(date.getMinutes() < 10 ) m = "0" + date.getMinutes();
            var dateStr:string = (date.getMonth()+1) + "月" + date.getDate() + "日" + h + ":" + m;

            var date2:Date = new Date(etime);
            var h2:string = "" + date2.getHours();
            var m2:string = "" +date2.getMinutes();
            if(date2.getHours() < 10) h2 = "0" + date2.getHours();
            if(date2.getMinutes() < 10 ) m2 = "0" + date2.getMinutes();
            var dateStr2:string = (date2.getMonth()+1) + "月" + date2.getDate() + "日" + h2 + ":" +m2;

            this.m_UI._label_time.text = "活动时间：" + dateStr + "至" + dateStr2;

            this.m_UI._label_desc.text = "" + this.obj["des"];

            this.m_UI.head_bgimg.source = "act_" + this.obj["activityType"];
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
