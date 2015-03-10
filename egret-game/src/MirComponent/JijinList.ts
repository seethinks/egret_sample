class JijinList extends egret.gui.ItemRenderer
{
    public constructor()
    {
        super();

        this.skinName = "skins.JijinListSkin";

        this.touchChildren = true;

        this.touchEnabled = true;
    }

    public _icon:UIIcon;

    public _btn:egret.gui.UIAsset;

    public _labels:egret.gui.Label;

    public partAdded(partName:string, instance:any):void
    {
        super.partAdded(partName, instance);

        if(instance == this._btn)
        {
            this._btn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onGet, this);
        }
    }

    private onGet(e:egret.TouchEvent):void
    {
        if(this._btn.source != "jijin_ling")
        {
            return;
        }

        var url:string = "http://"+GameManager.server["ip"]+":"+GameManager.server["port"];

        var gift = this.data["gift"];

        var d:JijinDialog = DialogManager.findDialog(JijinDialog , "JijinDialog");

        if(d)
        {
            var param:string = "type=0x0137&sid="+GameManager.SESSION_ID + "&giftId=" + gift["giftId"] + "&activityType=" + d.obj["activityType"];

            HttpMessage.sendMsg(url, param);
        }
    }

    public dataChanged()
    {
        super.dataChanged();

        if (this.data)
        {
            var status = this.data["status"];

            if(Number(status) == 1)
            {
                this._btn.source = "jijin_ling";
            }
            else if(Number(status) == 0)
            {
                this._btn.source = "weidachen";
            }
            else
            {
                this._btn.source = "btn_txt_yijinglingqu";
            }

            var gift = this.data["gift"];

            var gain = gift["gain"];

            var m_num = gift["num"];

            var giftId = gift["giftId"];

            var level = gift["level"];

            var itemId = gain["itemId"];

            var maxType:number = Number(gain["maxType"]);

            var num = gain["num"];

            var str:string = "";

            var d:JijinDialog = DialogManager.findDialog(JijinDialog , "JijinDialog");

            var type = "";

            if(d)
            {
                type = d.obj["activityType"];
            }

            if(Number(maxType) == 51)  //金币
            {
                this._icon.setName("金币");

                str = "金币" + " * " + num;

                this._icon.setItems("1");

                if(num) this._icon.setCount(num + "");

            }
            else if(Number(maxType) == 52)  //元宝
            {
                this._icon.setName("元宝");

                str = "元宝" + " * " + num;

                this._icon.setItems("2");

                if(num) this._icon.setCount(num + "");
            }
            else if(Number(maxType) == 57)  //黑铁矿
            {
                this._icon.setName("黑铁矿石");

                str = "黑铁矿石" + " * " + num;

                this._icon.setItems("3");

                if(num) this._icon.setCount(num + "");

            }
            else if(Number(maxType) == 2)
            {
                var item = GameManager.JSON_EQPT[itemId];

                var items = {};

                items["tpl"] = item;

                this._icon.data = items;

                str = "" + item["name"] + " * " + num;

                this._icon.dataChanged();

                if(num) this._icon.setCount(num + "");
            }
            else
            {
                var item = GameManager.JSON_ITEM[itemId];

                var items = {};

                items["tpl"] = item;

                str = "" + item["name"] + " * " + num;

                this._icon.data = items;

                this._icon.dataChanged();

                if(num) this._icon.setCount(num + "");
            }

            if(type == "fund")
            {
                this._labels.text = str + "\n" + "等级达到 "+level+" 即可领取";
            }
            else
            {
                this._labels.text = str + "\n" + "购买人数达到 "+m_num+" 即可领取";
            }
        }
    }
}