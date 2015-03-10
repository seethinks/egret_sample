/**
 * 不要调用DialogManager.open();
 *
 * 直接调用这个类的showMsg();
 */
class MessageBox extends Dialog
{
    private m_dialog:DialogBox;

    private m_UI:UIMessageBox;

    private cb:Function;

    public constructor()
    {
        super();
    }

    public createChildren():void
    {
        super.createChildren();

        this.m_dialog = new DialogBox();

        this.addElement(this.m_dialog);

        this.m_dialog.height = 390;

        this.m_UI = new UIMessageBox();

        this.addElement(this.m_UI);

        this.m_dialog.horizontalCenter = 0;

        this.m_dialog.setTitle("郑重提示");

        this.m_dialog._btn_close.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouch,this);

        this.m_UI.msg_btn_false.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouch,this);

        this.m_UI.msg_btn_true.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onTrue,this);

        this.m_dialog._btn_help.visible = false;

        this.m_UI.horizontalCenter = 0;

        this.top = 30;

        this.m_UI.top = this.top + 50;

        this.horizontalCenter = 0;

        this.verticalCenter = 0;

    }

    private onTrue(e:egret.TouchEvent):void
    {
        this.hide();

        this.cb(true);
    }

    private onTouch(e:egret.TouchEvent):void
    {
        this.hide();

        this.cb(false);
    }

    public onUpdate():void
    {

    }

    public showMsg(fun:Function, text:string = "", hidebtn:boolean = false, b1:string = "确  定", b2:string = "取  消", title:string = "提  示"):void
    {
        this.show();

        this.m_UI.msg_label.text = text;

        this.cb = fun;

        this.m_UI.msg_btn_true._setLabel(b1);

        this.m_UI.msg_btn_false._setLabel(b2);

        if(hidebtn)
        {
            this.m_UI.msg_btn_false.visible = false;

            this.m_UI.msg_btn_true.horizontalCenter = 0;
        }
        else
        {
            this.m_UI.msg_btn_false.visible = true;

            this.m_UI.msg_btn_true.horizontalCenter = 100;
        }

        this.m_dialog.setTitle(title);

    }

    public show()
    {
        super.show();
    }

    public hide()
    {
        super.hide();
    }
}
