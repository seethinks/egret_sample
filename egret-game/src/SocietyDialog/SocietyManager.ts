/**
 * 帮会管理
 */
class SocietyManager extends Dialog
{
    private _dialog:DialogBox;

    private m_UI:UISocietyManager;

    public constructor()
    {
        super();
    }

    public createChildren():void
    {
        super.createChildren();

        this._dialog = new DialogBox();

        this.addElement(this._dialog);

        this._dialog.height = 550;

        this._dialog.horizontalCenter = 0;

        this.m_UI = new UISocietyManager();

        this.addElement(this.m_UI);

        this.m_UI.horizontalCenter = 0;

        this._dialog._btn_close.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouch,this);

        this._dialog._btn_help.visible = false;

        this._dialog.setTitle("行会管理");

        this.top = 30;

        this.m_UI.top = this.top + 50;

        this.m_UI.hh_btn_close.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouch, this);

        this.verticalCenter = 0;

        this.m_UI.hh_btn_edit.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);

        this.m_UI.hh_btn_set.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
    }

    private onClick(e:egret.TouchEvent):void
    {
        switch (e.target)
        {
            case this.m_UI.hh_btn_edit:
                DialogManager.open(ManagerEditDialog, "ManagerEditDialog");
                break;
            case this.m_UI.hh_btn_set:
                DialogManager.open(ManagerSetDialog, "ManagerSetDialog");
                break;
        }
    }

    private onTouch(e:egret.TouchEvent):void
    {
        this.hide();
    }

    public onUpdate():void
    {
        this.m_UI.hh_label_edit.text = "" + Main.player.m_society.notice;

        this.m_UI.hh_label_set.text = "" + Main.player.m_society.fv;
    }

    public show()
    {
        super.show( );

        this.onUpdate();
    }

    public hide()
    {
        super.hide();
    }
}
