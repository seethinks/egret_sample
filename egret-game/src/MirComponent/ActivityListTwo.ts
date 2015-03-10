class ActivityListTwo extends egret.gui.ItemRenderer
{
    public constructor()
    {
        super();

        this.skinName = "skins.ActivityListToSkin";

        this.touchChildren = true;

        this.touchEnabled = true;
    }

    public _btn_look:egret.gui.Button;

    public act_img:egret.gui.UIAsset;

    public partAdded(partName:string, instance:any):void
    {
        super.partAdded(partName, instance);

        this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
    }

    private onClick(e:egret.TouchEvent):void
    {
        var url:string = "http://"+GameManager.server["ip"]+":"+GameManager.server["port"];

        var param:string = "type=0x0136&sid="+GameManager.SESSION_ID + "&id=" + this.data["id"] + "&activityType=" + this.data["activityType"];

        if(this.data["activityType"] == "charge")
        {
            var a:ActivityDescDialog = DialogManager.findDialog(ActivityDescDialog, "ActivityDescDialog");

            if(a)
            {
                a.obj = this.data;
            }

            HttpMessage.sendMsg(url, param);
        }
        else if(this.data["activityType"] == "exchange")
        {
            var b:ActivityDuihuanDialog = DialogManager.findDialog(ActivityDuihuanDialog, "ActivityDuihuanDialog");

            if(b)
            {
                b.obj = this.data;
            }

            HttpMessage.sendMsg(url, param);
        }
        else if(this.data["activityType"] == "fund" || this.data["activityType"] == "celebrate")
        {
            var jijin:JijinDialog = DialogManager.findDialog(JijinDialog, "JijinDialog");

            if(jijin)
            {
                jijin.obj = this.data;
            }

            HttpMessage.sendMsg(url, param);
        }
        else if(this.data["activityType"] == "chargedouble")
        {
            var sb:ChongZhiSB = DialogManager.findDialog(ChongZhiSB, "ChongZhiSB");

            if(sb)
            {
                sb.obj = this.data;
            }

            HttpMessage.sendMsg(url, param);
        }
        else if(this.data["activityType"] == "openserver")
        {
            var sever:OpenServerDialog = DialogManager.findDialog(OpenServerDialog, "OpenServerDialog");

            if(sever)
            {
                sever.obj = this.data;
            }

            HttpMessage.sendMsg(url, param);
        }

        else if(this.data["activityType"] == "shouchong")
        {
            DialogManager.open(ShouChongDialog, "ShouChongDialog");
        }
        else if(this.data["activityType"] == "vipbenefit")
        {
            var vip:VipActDialog = DialogManager.findDialog(VipActDialog, "VipActDialog");

            if(vip)
            {
                vip.obj = this.data;
            }

            HttpMessage.sendMsg(url, param);
        }
    }

    public dataChanged()
    {
        super.dataChanged();

        if(this.data)
        {
            this.act_img.source = "list_" + this.data["activityType"];
        }
    }
}