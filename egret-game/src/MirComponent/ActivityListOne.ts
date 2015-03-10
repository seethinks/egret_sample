class ActivityListOne extends egret.gui.ItemRenderer
{
    public constructor()
    {
        super();

        this.skinName = "skins.ActivityListSkin";

        this.touchChildren = true;

        this.touchEnabled = true;
    }

    public act_label:egret.gui.Label;

    public act_btn_draw:egret.gui.UIAsset;

    public _no_reach:egret.gui.UIAsset;

    public act_label_name:egret.gui.Label;

    public gift_img:egret.gui.UIAsset;

    public gift_icon:egret.gui.UIAsset;

    public partAdded(partName:string, instance:any):void
    {
        super.partAdded(partName, instance);

        if(instance == this.act_btn_draw)
        {
            this.act_btn_draw.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
        }

    }

    private onClick(e:egret.TouchEvent):void
    {
        var url:string = "http://"+GameManager.server["ip"]+":"+GameManager.server["port"];

        var param:string = "type=0x0047&sid="+GameManager.SESSION_ID + "&t=" + this.data["type"];

        HttpMessage.sendMsg(url, param);
    }

    public dataChanged()
    {
        super.dataChanged();

        if(this.data)  //arg:[{“id”,"tag"},{} ]  tag=0=未达成，1=领取，2=不显示出来
        {
            var tag:number = this.data["tag"];

            if(Number(tag) == 0)
            {
                this.act_btn_draw.visible = false;

                this._no_reach.visible = true;
            }
            else if(Number(tag) == 1)
            {
                this.act_btn_draw.visible = true;

                this._no_reach.visible = false;
            }
            else if(Number(tag) == 2)
            {
                this.act_btn_draw.visible = false;

                this._no_reach.visible = false;
            }
        }

        var str:string = this.data["str"];

        str = str.replace("#money#", "" + (Number(Main.player.level) * 2000));

        this.act_label.text = str;

        this.act_label_name.text = "" + this.data["name"];

        this.gift_img.source = "gift_img_" + this.data["type"];

        this.gift_icon.source = "gift_icon_" + this.data["type"];
    }
}