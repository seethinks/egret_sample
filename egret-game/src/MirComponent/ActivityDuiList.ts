class ActivityDuiList extends egret.gui.ItemRenderer
{
    public constructor()
    {
        super();

        this.skinName = "skins.ActivitileDuiListSkin";

        this.touchChildren = true;

        this.touchEnabled = true;
    }

    public _btn_get:egret.gui.UIAsset;

    public _icon1:UIIcon;

    public _icon3:UIIcon;

    public _icon2:UIIcon;

    public _label1:egret.gui.Label;

    public _label2:egret.gui.Label;

    public _label3:egret.gui.Label;

    public _vip:egret.gui.UIAsset;

    public partAdded(partName:string, instance:any):void
    {
        super.partAdded(partName, instance);

        if(instance == this._btn_get)
        {

            this._btn_get.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onGet, this);
        }
    }

    private onGet(e:egret.TouchEvent):void
    {
        var url:string = "http://"+GameManager.server["ip"]+":"+GameManager.server["port"];

        var param:string = "type=0x0137&sid="+GameManager.SESSION_ID + "&giftId=" + this.data["giftId"] + "&activityType=" + this.data["activityType"];

        HttpMessage.sendMsg(url, param);
    }

    public dataChanged()
    {
        super.dataChanged();

        if(this.data)
        {
            var list = this.data["list"];

            var extThings = this.data["extThings"];

            var gainExtThings = this.data["gainExtThings"];

            var need:Array<any> = list["needs"];

            this._vip.source = "vip" + list["vip"];

            if(need && need.length > 0)
            {
                need.push(list["gain"]);

                for(var n = 1; n <= 3; n++)
                {
                    var item = need[n - 1];

                    var maxType:number = Number(item["maxType"]);

                    var label:egret.gui.Label = this["_label" + n];

                    var icon:UIIcon = this["_icon" + n];

                    var itemId = item["itemId"];

                    var num = item["num"];

                    label.text = "";

                    if(Number(maxType) == 51)  //金币
                    {
                        icon.setName("金币");

                        icon.setItems("1");

                        label.text = "" + num;

                        icon.setCount("");
                    }
                    else if(Number(maxType) == 52)  //元宝
                    {
                        icon.setName("元宝");

                        icon.setItems("2");

                        label.text = "" + num;

                        icon.setCount("");
                    }
                    else if(Number(maxType) == 57)  //黑铁矿
                    {
                        icon.setName("黑铁矿石");

                        icon.setItems("3");

                        label.text = "" + num;

                        icon.setCount("");
                    }
                    else if(Number(maxType) == 40)  //南瓜
                    {
                        var i = extThings[itemId];

                        icon.setItems(i["icon"]);

                        icon.setName(i["name"]);

                        label.text = "" + num;

                        if(i < 3) icon.setCount(gainExtThings[itemId] + "  ");
                        else icon.setCount("");
                    }
                    else
                    {
                        var item = GameManager.JSON_ITEM[itemId];

                        var items = {};

                        items["count"] = "";

                        items["tpl"] = item;

                        icon.data = items;

                        icon.dataChanged();

                        icon.setCount("");

                        label.text = "" + num;
                    }

                }
            }
        }
    }
}