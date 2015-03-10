class SocietyLiebiao extends Dialog {

    private _dialog:DialogBox;

    private m_UI:UISocietyRank;

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
        this._dialog.height = 800;

        this._dialog.horizontalCenter = 0;

        this.m_UI = new UISocietyRank();

        this.addElement(this.m_UI);

        this.m_UI._title_index.text = "";
        this.m_UI._title_pname.text = "成员数";
        this.m_UI._label_level.text = "";
        this.m_UI._label_renshu.text = "";

        this.m_UI._btn_close._setLabel("换一批");
        this.m_UI._create_btn.visible = true;

        this.m_UI._btn_close.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onRefBtn, this);
        this.m_UI._create_btn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onCreateBtn, this);

        this.m_UI.horizontalCenter = 0;

        this._dialog._btn_close.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouch,this);

        this._dialog._btn_help.visible = false;

        this._dialog.setTitle("加入行会");

        this.top = 30;

        this.m_UI.top = this.top + 50;

        this.list.skinName = "skins.ListSkin";

        this.list.height = 450;

        this.list.width = 530;

        this.list.horizontalCenter = 0;

        this.list.top = 250;

        this.list.itemRenderer = new egret.gui.ClassFactory(UISocietyRankItem);

        this.list.itemRendererSkinName = "skins.SocietyRankItemReaderSkin";

        this.list.dataProvider = this.dp;

        this.addElement(this.list);
    }

    private onTouch(e:egret.TouchEvent):void
    {
        this.hide();
    }

    private onRefBtn(e:egret.TouchEvent):void
    {
        var url:string = "http://"+GameManager.server["ip"] + ":" + GameManager.server["port"];
        var params:string = "type=0x0032&sid="+GameManager.SESSION_ID;
        HttpMessage.sendMsg(url, params);
    }

    private  onCreateBtn(e:egret.TouchEvent):void
    {
        DialogManager.open(SocietyCreate, "SocietyCreate");
    }

    public onUpdate():void
    {
        //this.dp.removeAll();
    }

    public initList(arr:any[]){
        this.dp.removeAll();

        for(var i in arr){
            var s:any = arr[i];
            s["type"] = 1;
            this.dp.addItem(s);
        }

    }

    public show()
    {
        super.show();
        Main.iconMeun.setSmallIconVis(false);
    }

    public hide()
    {
        super.hide();
        Main.iconMeun.setSmallIconVis(true);
    }
}