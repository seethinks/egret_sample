
class DeulRankDialog extends Dialog
{
    private _dialog:DialogBox;

    private m_UI:UIDeulRank;

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

        this.m_UI = new UIDeulRank();

        this.addElement(this.m_UI);

        this.m_UI.horizontalCenter = 0;

        this._dialog._btn_close.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouch,this);

        this._dialog._btn_help.visible = false;

        this._dialog.setTitle("竞技排名");

        this.top = 30;

        this.m_UI.top = this.top + 50;

        this.taskList1.skinName = "skins.ListSkin";

        this.taskList1.horizontalCenter = 0;

        this.taskList1.itemRenderer = new egret.gui.ClassFactory(UIDeulList);

        this.taskList1.itemRendererSkinName = "skins.DeulListSkin";

        this.taskList1.dataProvider = this.dp;

        this.addElement(this.taskList1);

        this.taskList1.top = this.m_UI.top + 68;

        this.taskList1.width = 540;

        this.taskList1.height = 538;
    }

    private onTouch(e:egret.TouchEvent):void
    {
        this.hide();
    }

    public onUpdate():void
    {
        var list:Array<any> = Main.player.m_deulRank;

        if(list)
        {
            this.dp.removeAll();

            list.sort(this.sortArr);

            for(var i = 0; i < list.length; i++)
            {
                var obj:any = list[i];

                obj["q"] = 1;

                this.dp.addItem(obj);
            }
        }
    }

    private sortArr(a:any, b:any):number
    {
        var ranka:number = Number(a["rank"]);

        var rankb:number = Number(b["rank"]);

        if(Number(ranka) > Number(rankb))
        {
            return 1;
        }

        return -1;
    }

    public show()
    {
        super.show( );

        var url:string = "http://"+GameManager.server["ip"]+":"+GameManager.server["port"];

        var param:string = "type=0x0091&sid="+GameManager.SESSION_ID;

        HttpMessage.sendMsg(url, param);
    }

    public hide()
    {
        super.hide();
    }
}
