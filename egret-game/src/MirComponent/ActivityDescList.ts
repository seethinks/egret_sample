class ActivityDescList extends egret.gui.ItemRenderer
{
    public constructor()
    {
        super();

        this.skinName = "skins.ActivitieListSkin";

        this.touchChildren = true;

        this.touchEnabled = true;
    }

    public _weidacheng:egret.gui.UIAsset;

    public _btn_get:egret.gui.UIAsset;

    public _label_text:egret.gui.Label;

    public _icon1:UIIcon;

    public _icon3:UIIcon;

    public _icon2:UIIcon;

    public partAdded(partName:string, instance:any):void
    {
        super.partAdded(partName, instance);

        if(instance == this._btn_get)
        {
            this._btn_get.visible = false;

            this._btn_get.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onGet, this);
        }

        if(instance == this._weidacheng)
        {
            this._weidacheng.visible = false;
        }

        if(instance == this._icon1)
        {
            this._icon1.visible = false;
        }

        if(instance == this._icon3)
        {
            this._icon3.visible = false;
        }

        if(instance == this._icon2)
        {
            this._icon2.visible = false;
        }
    }

    private onGet(e:egret.TouchEvent):void
    {
        var url:string = "http://"+GameManager.server["ip"]+":"+GameManager.server["port"];

        var gift = this.data["gift"];

        var d:ActivityDescDialog = DialogManager.findDialog(ActivityDescDialog , "ActivityDescDialog");

        if(d)
        {
            var param:string = "type=0x0137&sid="+GameManager.SESSION_ID + "&giftId=" + gift["giftId"] + "&activityType=" + d.obj["activityType"];

            HttpMessage.sendMsg(url, param);
        }
    }

    public dataChanged()
    {
        super.dataChanged();

        this._icon1.visible = false;
        this._icon2.visible = false;
        this._icon3.visible = false;

        if(this.data)
        {
            var gift = this.data["gift"];

            this._label_text.text = "" + gift["des"] + "，可领取：";

            var status:number = Number(this.data["status"]);

            if(status == 0)
            {
                this._weidacheng.visible = true;

                this._btn_get.visible = false;
            }
            else if(status == 1)
            {
                this._btn_get.visible = true;

                this._weidacheng.visible = false;
            }

            var arr:Array<any> = gift["rewards"];

            if(arr && arr.length > 0)
            {
                for(var i = 0; i<arr.length; i++)
                {
                    var obj = arr[i];

                    var maxType:number = Number(obj["maxType"]);

                    var itemId = obj["itemId"];

                    var num = obj["num"];

                    var icon:UIIcon = this["_icon" + (i + 1)];

                    icon.visible = true;

                    if(Number(maxType) == 51)  //金币
                    {
                        icon.setCount(num + "");

                        icon.setName("金币");

                        icon.setItems("1");
                    }
                    else if(Number(maxType) == 52)  //元宝
                    {
                        icon.setCount(num + "");

                        icon.setName("元宝");

                        icon.setItems("2");
                    }
                    else if(Number(maxType) == 57)  //黑铁矿
                    {
                        icon.setCount(num + "");

                        icon.setName("黑铁矿石");

                        icon.setItems("3");
                    }
                    else
                    {
                        var item = GameManager.JSON_ITEM[itemId];

                        var items = {};

                        items["count"] = "" + num;

                        items["tpl"] = item;

                        icon.data = items;

                        icon.dataChanged();
                    }
                }
            }
        }
    }
}