class SocietyShopList extends egret.gui.ItemRenderer
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
        super.dataChanged();  //"itemId":11,"contri":1500

        var id = this.data["itemId"];

        var contri = this.data["contribution"];

        this.label_price.text = "贡献：" + contri;

        var item = GameManager.JSON_ITEM[id];

        this.data.tpl = item;

        this.item_icon.data = this.data;

        this.item_icon.dataChanged();

        this.label_name.text = item["name"];

        this.item_icon.setName("");

    }

    private onClick(e:egret.TouchEvent):void
    {
        if(this.data)//
        {
            var url:string = "http://"+GameManager.server["ip"]+":"+GameManager.server["port"];

            var param:string = "type=0x0039&sid="+GameManager.SESSION_ID + "&id=" + this.data.id;

            HttpMessage.sendMsg(url, param);
        }
    }
}