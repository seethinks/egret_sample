
class VipActDialog extends Dialog
{
    private m_dialog:DialogBox;

    private m_UI:ActivityDescUI;

    private textList:egret.gui.List = new egret.gui.List();

    private dp:egret.gui.ArrayCollection = new egret.gui.ArrayCollection();

    public actList:Array<any> = [];

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

        this.m_dialog.setTitle("VIP礼包");

        this.m_dialog._btn_close.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouch,this);

        this.m_dialog._btn_help.visible = false;

        this.m_UI = new ActivityDescUI();

        this.addElement(this.m_UI);

        this.m_UI.horizontalCenter = 0;

        this.textList.skinName = "skins.ListSkin";

        this.addElement(this.textList);

        this.textList.height = 408;

        this.textList.horizontalCenter = 0;

        this.textList.itemRenderer = new egret.gui.ClassFactory(VipActList);

        this.textList.itemRendererSkinName = "skins.ActivitieListSkin";

        this.textList.dataProvider = this.dp;

        this.top = 30;

        this.m_UI.top = this.top + 50;

        this.textList.top = this.m_UI.top + 208;

        this.m_dialog.height = 720;
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

                this.dp.addItem(obj);
            }
        }

        if(this.obj)
        {
            this.m_UI._label_time.text = "" + "VIP奖励每天只能领取一次";

            this.m_UI._label_desc.text = "";

            this.m_UI.head_bgimg.source = "act_" + this.obj["activityType"];

            this.m_UI._label_chage.text = "您当前为：VIP" + Main.player.vip;
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
