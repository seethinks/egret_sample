/**
 * 入会条件设置
 */
class ManagerSetDialog extends Dialog
{
    private _dialog:DialogBox;

    private m_UI:ManagerSetUI;

    private text:string = "";

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

        this.m_UI = new ManagerSetUI();

        this.addElement(this.m_UI);

        this.m_UI.horizontalCenter = 0;

        this._dialog._btn_close.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouch,this);

        this._dialog._btn_help.visible = false;

        this._dialog.setTitle("设定入会条件");

        this.top = 30;

        this.m_UI.top = this.top + 50;

        this.verticalCenter = 0;

        this.m_UI.btn_false.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouch, this);

        this.m_UI.btn_true.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);

        this.m_UI.touchChildren = true;

        //this.m_UI._text.addEventListener(egret.Event.CHANGE, this.onInput, this);
    }

    private onInput(e:egret.Event):void
    {

        var str:string = this.m_UI._text.text;

        var regEx:RegExp = new RegExp('^[0-9]*$');  //数字

        var r:boolean = regEx.test(str);

        if(r)
        {
            this.text = str;
        }
        else
        {
            this.m_UI._text.text = str;
        }
    }

    private onClick(e:egret.TouchEvent):void
    {
        var str:string = this.m_UI._text.text;

        var regEx:RegExp = new RegExp('^[0-9]*$');  //数字

        var r:boolean = regEx.test(str);

        if(r)
        {
            var url:string = "http://"+GameManager.server["ip"]+":"+GameManager.server["port"];

            var param:string = "type=0x0022&sid="+GameManager.SESSION_ID+ "&fv=" + str;

            HttpMessage.sendMsg(url, param);

            this.hide();
        }
        else
        {
            GameManager.flyText({t:"只能输入数字！", q:1});
        }
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
