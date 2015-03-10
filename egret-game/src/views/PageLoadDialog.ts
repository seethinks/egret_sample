
class PageLoadDialog extends Dialog
{
    private m_dialog:DialogBox;

    private m_UI:PageLoadUI;

    public constructor()
    {
        super();
    }

    public createChildren():void
    {
        super.createChildren();

        this.m_dialog = new DialogBox();

        this.m_dialog.height = 350;

        this.addElement(this.m_dialog);

        this.m_dialog.setTitle("快捷下载");

        this.m_dialog._btn_close.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouch,this);

        this.m_dialog._btn_help.visible = false;

        this.m_UI = new PageLoadUI();

        this.addElement(this.m_UI);

        this.m_UI.horizontalCenter = 0;

        this.top = 30;

        this.m_UI.top = this.top + 50;

        this.m_UI.btn_android.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);

        this.m_UI.btn_ios.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
    }

    private onClick(e:egret.TouchEvent):void
    {
//        switch (e.target)
//        {
//            case this.m_UI.btn_android:
//                    location.href = GameManager.app_downLoadUrl["android"];
//                break;
//            case this.m_UI.btn_ios:
//                    location.href = GameManager.app_downLoadUrl["ios"];
//                break;
//        }

        this.hide();
    }

    private onTouch(e:egret.TouchEvent):void
    {
        this.hide();
    }

    public onUpdate():void
    {

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
