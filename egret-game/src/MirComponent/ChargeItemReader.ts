class ChargeItemReader extends egret.gui.ItemRenderer
{
    public constructor()
    {
        super();

        this.skinName = "skins.ChargeItemSkin";

        this.touchChildren = true;

        this.touchEnabled = true;
    }

    public btn_buy:egret.gui.Button;

    public label_price:egret.gui.Label;

    public label_name:egret.gui.Label;

    public label_dec:egret.gui.Label;

    public partAdded(partName:string, instance:any):void
    {
        super.partAdded(partName, instance);

        if(instance == this.btn_buy)
        {
            this.btn_buy.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
        }
    }

    private onClick(e:egret.TouchEvent):void
    {
        //充值
        var url:string = "http://"+GameManager.delive["ip"]+":"+GameManager.delive["port"]+"/"+GameManager.delive["pn"]+"/createCharge.php";
        var param:string = "guid="+GameManager.account["guid"]+"&sid="+GameManager.server["sid"]+"&fee="+this.data.cost+"&subject="+this.data.tplName;
        var self = this;
        HttpMessage.sendMsgCallBack(url, param, function(obj:any){
            var dealseq:string = obj["dealseq"];
            egret.ExternalInterface.call("pt_charge", self.data.tplName+"|"+self.data.cost+"|"+dealseq);
        });
    }

    public dataChanged()
    {
        super.dataChanged();

        if(this.data)
        {
            this.label_price.text = "" + this.data["name"];

            this.label_name.text = "" + this.data["subject"];

            this.label_dec.text = "达人八折优惠" + this.data["dec"] + "积分";
        }
    }
}