/**
 * 4强战斗详情
 */
class SocietyRaceStatus extends Dialog
{
    private _dialog:DialogBox;

    private m_UI:UISocietyRaceStatus;

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

        this.m_UI = new UISocietyRaceStatus();

        this.addElement(this.m_UI);

        this.m_UI.horizontalCenter = 0;

        this._dialog._btn_close.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouch,this);

        this._dialog._btn_help.visible = false;

        this._dialog.setTitle("4强战斗详情");

        this.top = 30;

        this.m_UI.top = this.top + 50;
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
        super.show( );
    }

    public hide()
    {
        super.hide();
    }
}
