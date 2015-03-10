/**
 * 帮会排行
 */
class SocietyRank extends Dialog
{
    private _dialog:DialogBox;

    private m_UI:UISocietyRank;

    public rankList:Society[];

    private list:egret.gui.List = new egret.gui.List();

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

        this.m_UI = new UISocietyRank();

        this.addElement(this.m_UI);

        this.m_UI.horizontalCenter = 0;

        this._dialog._btn_close.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouch,this);

        this._dialog._btn_help.visible = false;

        this._dialog.setTitle("行会排行");

        this.top = 30;

        this.m_UI.top = this.top + 50;

        this.list.skinName = "skins.ListSkin";

        this.list.height = 452;

        this.list.width = 530;

        this.list.horizontalCenter = 0;

        this.list.top = 245;

        this.list.itemRenderer = new egret.gui.ClassFactory(UISocietyRankItem);

        this.list.itemRendererSkinName = "skins.SocietyRankItemReaderSkin";

        this.list.dataProvider = this.dp;

        this.addElement(this.list);

        this.m_UI._create_btn.visible = false;

        this.m_UI._btn_close.visible = false;

        this.m_UI._btn_close.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouch, this);
    }

    private onTouch(e:egret.TouchEvent):void
    {
        this.hide();
    }

    public onUpdate():void
    {
        if(this.rankList && this.rankList.length > 0)
        {
            this.dp.removeAll();

            for(var i = 0; i <this.rankList.length; i++)
            {
                var obj:any = this.rankList[i];

                obj["type"] = 2;

                obj["rank"] = i + 1;

                this.dp.addItem(this.rankList[i]);
            }
        }

        var so:Society = Main.player.m_society;

        if(!so)return;

        this.m_UI._label_level.text = "行会等级："+so.lv;

        this.m_UI._label_renshu.text = "行会人数："+so.num +"/" + so.maxNum;
    }

    public show()
    {
        super.show( );

        var url:string = "http://"+GameManager.server["ip"]+":"+GameManager.server["port"];

        var param:string = "type=0x0031&sid="+GameManager.SESSION_ID;

        HttpMessage.sendMsg(url, param);
    }

    public hide()
    {
        super.hide();
    }
}
