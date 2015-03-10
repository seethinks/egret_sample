
class OpenServerDialog extends Dialog
{
    private m_dialog:DialogBox;

    private m_UI:OpenServerUI;

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

        this.m_dialog.setTitle("开服双倍");

        this.m_dialog._btn_close.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouch,this);

        this.m_dialog._btn_help.visible = false;

        this.m_UI = new OpenServerUI();

        this.addElement(this.m_UI);

        this.m_UI.horizontalCenter = 0;

        this.textList.skinName = "skins.ListSkin";

        this.addElement(this.textList);

        this.textList.height = 558;

        this.textList.horizontalCenter = 0;

        this.textList.itemRenderer = new egret.gui.ClassFactory(OpenServerList);

        this.textList.itemRendererSkinName = "skins.NewServerListSkin";

        this.textList.dataProvider = this.dp;

        this.top = 30;

        this.m_UI.top = this.top + 50;

        this.textList.top = this.m_UI.top + 55;

        this.m_dialog.height = 720;

        for(var i = 1; i <= 5; i ++)
        {
            this.dp.addItem({num:i});
        }
    }

    private onTouch(e:egret.TouchEvent):void
    {
        this.hide();
    }

    public onUpdate():void
    {
        if(this.actList && this.m_UI) this.m_UI._labels.text = "今日双倍：" + this.actList["desc"];
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
