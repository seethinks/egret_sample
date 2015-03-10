
class CdKey extends Dialog
{
    private m_dialog:DialogBox;

    private m_UI:UIJiHuo;

    private m_text:egret.TextField;

    private m_uiass:egret.gui.UIAsset = new egret.gui.UIAsset();

    public constructor()
    {
        super();
    }

    public createChildren():void
    {
        super.createChildren();

        this.m_dialog = new DialogBox();

        this.addElement(this.m_dialog);

        this.m_dialog.height = 250;

        this.m_dialog.horizontalCenter = 0;

        this.m_dialog.setTitle("CDkey激活");

        this.m_dialog._btn_close.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClose,this);

        this.m_dialog._btn_help.visible = false;

        this.m_UI = new UIJiHuo();

        this.addElement(this.m_UI);

        this.m_UI.horizontalCenter = 0;

        this.m_UI.top = 80;

        this.m_text = new egret.TextField();

        this.addElement(this.m_uiass);

        this.m_uiass.source = this.m_text;

        this.m_uiass.top = this.m_UI.top + 20;

        this.m_uiass.horizontalCenter = 0;

        this.m_text.width = 375;

        this.m_text.height = 40;

        this.m_text.type = egret.TextFieldType.INPUT;

        this.m_text.size = 24;

        this.m_text.text = "";

        this.m_uiass.touchChildren = true;

        this.m_UI._btn_jihuo._setLabel("兑换");

        this.m_UI._btn_jihuo.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouch, this);

        this.verticalCenter = 0;
    }

    private onClose(e:egret.TouchEvent):void
    {
        this.hide();
    }

    private onTouch(e:egret.TouchEvent):void
    {
        if(this.m_text.text == "")
        {
            GameManager.flyText({t:"请输入激活码！", q:1});
            return;
        }
        var url:string = "http://"+GameManager.delive["ip"]+":"+GameManager.delive["port"]+"/"+GameManager.delive["pn"]+"/giftKey.php";

        var params:string = "id="+GameManager.account["guid"]+"&sid="+GameManager.server.sid + "&name=" + Main.player.name + "&key=" + this.m_text.text;

        var self = this;

        HttpMessage.sendMsgCallBack(url, params,function(obj:any)
        {
            if(obj)
            {
                if(obj["msg"])
                {
                    GameManager.flyText({t:obj["msg"], q:1});
                }

                if(obj["ret"] == 0 || obj["ret"] == "0")
                {
                    self.hide();
                }
            }
        });
    }

    public onUpdate():void
    {

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
