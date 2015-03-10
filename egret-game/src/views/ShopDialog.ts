
class ShopDialog extends Dialog
{
    private m_dialog:UIOriginalDialog;

    private m_UI:UIShop;

    private list:egret.gui.List = new egret.gui.List();

    private dp:egret.gui.ArrayCollection = new egret.gui.ArrayCollection();

    public constructor()
    {
        super();
    }

    public createChildren():void
    {
        super.createChildren();

        this.m_dialog = new UIOriginalDialog();

        this.addElement(this.m_dialog);

        this.m_dialog.horizontalCenter = 0;

        this.m_dialog.top = 0;

        this.m_dialog.setTitleVis();

        this.m_UI = new UIShop();

        this.addElement(this.m_UI);

        this.m_UI.horizontalCenter = 0;

        this.list.skinName = "skins.ShopListSkin";

        this.list.height = 540;

        this.list.width = 510;

        this.list.horizontalCenter = 0;

        this.list.top = 183;

        this.list.itemRenderer = new egret.gui.ClassFactory(ShopItemReader);

        this.list.itemRendererSkinName = "skins.ShopItemReaderSkin";

        this.list.dataProvider = this.dp;

        this.addElement(this.list);

        this.m_UI.shop_btn_buy.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClickBtn, this);
        this.m_UI.shop_btn_buymoney.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClickBtn, this);
        this.m_UI.shop_btn_refresh.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClickBtn, this);
    }

    private onClickBtn(e:egret.TouchEvent):void
    {
        switch (e.target) {
            case this.m_UI.shop_btn_buy:
                GameManager.msgBox.showMsg(function(r)
                {
                    if(r)
                    {
                        var url:string = "http://"+GameManager.server["ip"]+":"+GameManager.server["port"];
                        var param:string = "type=0x0035&sid="+GameManager.SESSION_ID;
                        HttpMessage.sendMsg(url, param);
                    }
                }, "    确定要购买全部商品？");

                break;
            case this.m_UI.shop_btn_buymoney:
                DialogManager.open(BuyMoneyDialog, "BuyMoneyDialog");
                break;
            case this.m_UI.shop_btn_refresh:
                var shop:ShopData = Main.player.m_shops["mall"];
                var rfc:number = Number(shop.refreshCount) + 1;
                if(rfc > 20)rfc = 20;
                var refD:any = GameManager.JSON_SHOP_REF[rfc];
                GameManager.msgBox.showMsg(function(r)
                {
                    if(r)
                    {
                        var url:string = "http://"+GameManager.server["ip"]+":"+GameManager.server["port"];
                        var param:string = "type=0x0036&sid="+GameManager.SESSION_ID;
                        HttpMessage.sendMsg(url, param);

//                        if(GameManager.dataEyes)GameManager.dataEyes.pushEvent("商城刷新", 1,
//                            {cost:refD, pname:Main.player.name, sid:GameManager.server.sid});
                    }
                }, "    您确定花费"+refD["goldMoney"]+"元宝刷新商店吗？");
                break;
        }
    }

    private onClickIcon(e:egret.TouchEvent):void
    {

    }

    public onUpdate():void
    {
        this.dp.removeAll();

        var shopData:ShopData = Main.player.m_shops["mall"];

        if(shopData)
        {
            this.m_UI.shop_label_gailv.text = shopData.luck + "%";

            for(var i in shopData.goods) {

                var item:ShopItemData = shopData.goods[i];

                this.dp.addItem(item);

            }
        } else {
            var url:string = "http://"+GameManager.server["ip"]+":"+GameManager.server["port"];
            var param:string = "type=0x0033&sid="+GameManager.SESSION_ID;
            HttpMessage.sendMsg(url, param);
        }

        if(this.dp.length < 7) {
            var self = this;
            egret.callLater(function(){
                if(self.list.dataGroup && self.list.dataGroup.verticalScrollPosition) self.list.dataGroup.verticalScrollPosition = 0;
            }, this.list);
        }
    }

    public delGood(ids:any){
        for(var i in ids){

            for(var k in this.dp){
                var good:any = this.dp.getItemAt(k);
                if(good && good["id"] == ids[i])
                {
                    this.dp.removeItemAt(k);
                }
            }
        }
        this.dp.refresh();
    }

    public onUpdatePlayer():void
    {
        this.m_UI.shop_label_gold.text = "" + Main.player.gold;

        this.m_UI.shop_label_level.text = "Lv." + Main.player.level;

        this.m_UI.shop_label_money.text = "" + Main.player.money;

        this.m_UI.shop_vip.source = "vip" + Main.player.vip;
    }

    public show()
    {
        super.show();

        this.onUpdate();

        this.onUpdatePlayer();
    }

    public hide()
    {
        super.hide();
    }
}
