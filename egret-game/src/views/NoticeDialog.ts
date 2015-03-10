
class NoticeDialog extends Dialog
{
    private m_dialog:DialogBox;

    private m_UI:UINotice;

    private taskList1:egret.gui.List = new egret.gui.List();

    private dp:egret.gui.ArrayCollection = new egret.gui.ArrayCollection();

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

        this.m_dialog.setTitle("公告");

        this.m_dialog._btn_close.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouch,this);

        this.m_dialog._btn_help.visible = false;

        this.m_UI = new UINotice();

        this.addElement(this.m_UI);

        this.m_UI.horizontalCenter = 0;

        this.m_UI.fk_button.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouch,this);

        this.top = 30;

        this.m_UI.top = this.top + 50;

        this.taskList1.skinName = "skins.ListSkin";

        this.taskList1.horizontalCenter = 0;

        this.taskList1.itemRenderer = new egret.gui.ClassFactory(UIHelpItem);

        this.taskList1.itemRendererSkinName = "skins.HelpItemSkin";

        this.taskList1.dataProvider = this.dp;

        this.addElement(this.taskList1);

        this.taskList1.top = this.m_UI.top + 7;

        this.taskList1.width = 478;

        this.taskList1.height = 516;

        this.m_UI.fk_label.text = "";

        this.m_dialog.height = 720;
    }

    private onTouch(e:egret.TouchEvent):void
    {
        this.hide();
    }

    public onUpdate():void
    {
        this.dp.removeAll();

        var self = this;

        var url:string = "http://"+GameManager.delive["ip"]+":"+GameManager.delive["port"]+"/notice/notice.php";

        var param:string = "type="+GameManager.delive["pn"];

        HttpMessage.sendMsgCallBack(url, param,function(obj:any)
        {
            for(var i in obj)
            {
                self.dp.addItem({text:obj[i] + "\n\n"});
            }
        });
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
