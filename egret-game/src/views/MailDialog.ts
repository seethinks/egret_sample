
class MailDialog extends Dialog
{
    private m_dialog:DialogBox;

    private m_UI:UIMail;

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

        this.m_dialog.setTitle("邮件");

        this.m_dialog._btn_close.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouch,this);

        this.m_dialog._btn_help.visible = false;

        this.m_UI = new UIMail();

        this.addElement(this.m_UI);

        this.m_UI.horizontalCenter = 0;

        this.taskList1.skinName = "skins.ListSkin";

        this.taskList1.height = 520;

        this.taskList1.horizontalCenter = 0;

        this.taskList1.itemRenderer = new egret.gui.ClassFactory(MailItemReader);

        this.taskList1.itemRendererSkinName = "skins.MailItemReaderSkin";

        this.taskList1.dataProvider = this.dp;

        //taskList1.addEventListener(egret.gui.ListEvent.ITEM_CLICK, this.clickItem, this);

        this.addElement(this.taskList1);

        this.top = 30;

        this.m_UI.top = this.top + 50;

        this.taskList1.top = this.m_UI.top + 67;

    }

    private onTouch(e:egret.TouchEvent):void
    {
        this.hide();
    }

    public onUpdate():void
    {
        this.dp.removeAll();

        var mail:Array<any> = Main.player.m_mails["emails"];
        if(!mail)return;
        mail.sort(function(x:any, y:any){
            if(y["created"] > x["created"])return 1;
            return -1;
        });

        if(mail && mail.length > 0)
        {
            for(var i = 0; i < mail.length; i ++)
            {
                var o = mail[i];

                this.dp.addItem(o);
            }
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
