
class UserActivate extends Dialog
{

    private m_UI:UIJiHuo;

    private m_text:egret.TextField;

    private m_uiass:egret.gui.UIAsset = new egret.gui.UIAsset();

    public constructor()
    {
        super();
    }

    public createChildren():void
    {
        this.bottom = 500;

        super.createChildren();

        this.m_UI = new UIJiHuo();

        this.addElement(this.m_UI);

        this.m_text = new egret.TextField();

        this.addElement(this.m_uiass);

        this.m_uiass.source = this.m_text;

        this.m_uiass.top = 20;
        this.m_uiass.left = 12;

        this.m_text.width = 375;

        this.m_text.height = 23;

        this.m_text.type = egret.TextFieldType.INPUT;

        this.m_text.size = 17;

        this.m_text.text = "输入激活码";

        this.m_uiass.touchChildren = true;

        this.m_UI._btn_jihuo.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouch, this);


    }

    private onTouch(e:egret.TouchEvent):void
    {
        if(this.m_text.text == "" || this.m_text.text == "输入激活码")
        {
            //TODO 弹出提示 请输入激活码
            return;
        }
        var url:string = "http://"+GameManager.delive["ip"]+":"+GameManager.delive["port"]+"/"+GameManager.delive["pn"]+"/actAccKey.php";
        var params:string = "k="+this.m_text.text+"&u="+GameManager.account["guid"];
        //发送激活消息
        var self:UserActivate = this;
        HttpMessage.sendMsgCallBack(url, params, function(obj:any){
            if(obj){
                if(obj["ret"] == 0){
                    GameManager.account["status"] = 1;
                    //关闭激活界面
                    self.hide();
                }
                else{
                    var msg:string = " " + obj["msg"];
                    var txt:egret.gui.Label = new egret.gui.Label();
                    Main.guiLayer.addElement(txt);
                    txt.horizontalCenter = 0;
                    txt.y = Main.guiLayer.height / 2;
                    txt.textColor = GameManager.COLOR[5];
                    txt.text = msg;

                    var tw = egret.Tween.get(txt,{loop:false});

                    tw.to({y:50}, 1500).to({y:50}, 3000).call(function()
                    {
                        if(txt.parent) Main.guiLayer.removeElement(txt);
                    });
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
