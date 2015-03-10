
class ChongZhiSB extends Dialog
{
    private _dialog:DialogBox;

    private m_UI:ChongZhiUI;

    public obj:any;

    public actList:any;

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

        this.m_UI = new ChongZhiUI();

        this.addElement(this.m_UI);

        this.m_UI.horizontalCenter = 0;

        this._dialog._btn_close.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouch,this);

        this._dialog._btn_help.visible = false;

        this._dialog.setTitle("充值双倍");

        this.top = 30;

        this.m_UI.top = this.top + 45;

        this.m_UI._btn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);

        this._dialog.height = 500;

    }

    private onClick(e:egret.TouchEvent):void
    {
        DialogManager.open(ChargeDialog, "ChargeDialog");
    }

    private onTouch(e:egret.TouchEvent):void
    {
        this.hide();
    }

    public onUpdate():void
    {
        var btime:number = Number(this.actList["beginTime"]);

        var etime:number = Number(this.actList["endTime"]);

        var date:Date = new Date(btime);
        var h:string = "" + date.getHours();
        var m:string = "" + date.getMinutes();
        if(date.getHours() < 10) h = "0" + date.getHours();
        if(date.getMinutes() < 10 ) m = "0" + date.getMinutes();
        var dateStr:string = (date.getMonth()+1) + "月" + date.getDate() + "日" + h + ":" + m;

        var date2:Date = new Date(etime);
        var h2:string = "" + date2.getHours();
        var m2:string = "" + date2.getMinutes();
        if(date2.getHours() < 10) h2 = "0" + date2.getHours();
        if(date2.getMinutes() < 10 ) m2 = "0" + date2.getMinutes();
        var dateStr2:string = (date2.getMonth()+1) + "月" + date2.getDate() + "日" + h2 + ":" +m2;

        this.m_UI._label_time.text = "活动时间：" + dateStr + "至" + dateStr2;
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
