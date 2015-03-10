class ShopItemReader extends egret.gui.ItemRenderer
{
    public constructor()
    {
        super();

        this.skinName = "skins.ShopItemReaderSkin";

        this.touchChildren = true;

        this.touchEnabled = true;
    }

    public btn_buy:egret.gui.Button;

    public label_price:egret.gui.Label;

    public label_name:egret.gui.Label;

    public currnecy_icon:egret.gui.UIAsset;

    public item_icon:UIIcon;

    public img_rebate:egret.gui.UIAsset;

    public icon_eqpt:egret.gui.UIAsset;

    public lable_count:egret.gui.Label;

    public partAdded(partName:string, instance:any):void
    {
        super.partAdded(partName, instance);

        if(instance == this.btn_buy)
        {
            this.btn_buy.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
        }
    }


    public dataChanged()
    {
        super.dataChanged();

        if(this.data.costType == 3) this.label_price.text = this.data.cost+" 荣誉";
        else if(this.data.costType == 5)this.label_price.text = " ￥"+this.data.cost;
        else this.label_price.text = this.data.cost;

        var hbImg:string = "";
        if(this.data.costType == 1) {
            hbImg = "moneyicon";
        }else if(this.data.costType == 2) {
            hbImg = "goldicon";
        }
        this.currnecy_icon.source = hbImg;

        this.label_name.text = this.data.tplName;

        this.lable_count.text = (this.data.num > 0 ? "x"+this.data.num : "");

        this.item_icon.setItems(this.data.tplIcon);
        if(this.data.quality > 0) {
            this.item_icon.setQuality(this.data.quality);
        }else this.item_icon.setQuality(0);

        if(this.data.tplLv > 0)this.item_icon.setName("Lv."+this.data.tplLv);
        else this.item_icon.setName("");

        if(this.data.discount > 0){
            this.img_rebate.source = this.data.discount + "zhe";
            this.img_rebate.visible = true;
        }else{
            this.img_rebate.source = "";
            this.img_rebate.visible = false;
        }

    }

    private onClick(e:egret.TouchEvent):void
    {
        if(this.data)
        {
            if(this.data.costType == 3)
            {
                var url:string = "http://"+GameManager.server["ip"]+":"+GameManager.server["port"];
                var param:string = "type=0x0094&sid="+GameManager.SESSION_ID + "&id=" + this.data.id;
                HttpMessage.sendMsg(url, param);
            }
            else if(this.data.costType == 5)
            {
                this.chargeMoney();
            }
            else
            {
                var url:string = "http://"+GameManager.server["ip"]+":"+GameManager.server["port"];
                var param:string = "type=0x0034&sid="+GameManager.SESSION_ID + "&id=" + this.data.id;
                HttpMessage.sendMsg(url, param);
            }
        }
    }

    private chargeMoney(){
        //充值
        var url:string = "http://"+GameManager.delive["ip"]+":"+GameManager.delive["port"]+"/"+GameManager.delive["pn"]+"/createCharge.php";
        var param:string = "guid="+GameManager.account["guid"]+"&sid="+GameManager.server["sid"]+"&fee="+this.data.cost+"&subject="+this.data.tplName;
        HttpMessage.sendMsgCallBack(url, param, function(obj:any){
            var dealseq:string = obj["dealseq"];
            var subject:string = obj["subject"];
            var cost:number = obj["cost"];
            egret.ExternalInterface.call("pt_charge", subject+"|"+cost+"|"+dealseq+"|"+Main.player.id+"|"+Main.player.name);
        });
    }
}