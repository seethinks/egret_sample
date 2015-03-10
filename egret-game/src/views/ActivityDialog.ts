
class ActivityDialog extends Dialog
{
    private m_dialog:DialogBox;

    private m_UI:UIActivity;

    private textList:egret.gui.List = new egret.gui.List();

    private dp:egret.gui.ArrayCollection = new egret.gui.ArrayCollection();

    public huodongList:Array<any> = [];

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

        this.m_dialog.setTitle("活动");

        this.m_dialog._btn_close.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouch, this);

        this.m_dialog._btn_help.visible = false;

        this.m_UI = new UIActivity();

        this.addElement(this.m_UI);

        this.m_UI.horizontalCenter = 0;

        this.textList.skinName = "skins.ListSkin";

        this.addElement(this.textList);

        this.textList.height = 520;

        this.textList.horizontalCenter = 0;

        this.textList.dataProvider = this.dp;

        this.textList.itemRenderer = new egret.gui.ClassFactory(ActivityListTwo);

        this.textList.itemRendererSkinName = "skins.ActivityListToSkin";

        this.top = 30;

        this.m_UI.top = this.top + 50;

        this.textList.top = this.m_UI.top + 67;

        this.m_UI._btn_cdkey.addEventListener(egret.TouchEvent.TOUCH_TAP, this.cdKey, this);
    }

    private cdKey(e:egret.TouchEvent):void
    {
        DialogManager.open(CdKey, "CdKey");
    }

    private onTouch(e:egret.TouchEvent):void
    {
        this.hide();
    }

    public onUpdate():void
    {
        this.dp.removeAll();

        var list:Array<any> = [];

        list = this.huodongList;

        if(list && list.length > 0)
        {
            for(var i = 0; i < list.length; i++)
            {
                var obj:any = list[i];

                this.dp.addItem(obj);
            }
        }

        var shouchong:any = {"activityType":"shouchong"};

        this.dp.addItem(shouchong);
    }

    public show()
    {
        super.show();

        var url:string = "http://"+GameManager.server["ip"]+":"+GameManager.server["port"];
        var param:string = "type=0x0135&sid="+GameManager.SESSION_ID;
        HttpMessage.sendMsg(url, param);

        this.onUpdate();
    }

    public hide()
    {
        super.hide();
    }
}
