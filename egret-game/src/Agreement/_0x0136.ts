class _0x0136
{

    public constructor() {}

    public parseData(obj:any):void
    {
        if(!obj) return;

        if(obj["jiangli"])
        {
            GameManager.flyText({t:"兑换成功！", q:1});
        }

        if(obj["activityType"] == "charge")
        {
            var a:ActivityDescDialog = DialogManager.findDialog(ActivityDescDialog, "ActivityDescDialog");

            a.holidayCharge = Number(obj["holidayCharge"]);

            a.actList = obj["list"];

            if(a.showing)
            {
                a.onUpdate();
            }
            else
            {
                a.show();
            }
        }
        else if(obj["activityType"] == "exchange")
        {
            var b:ActivityDuihuanDialog = DialogManager.findDialog(ActivityDuihuanDialog, "ActivityDuihuanDialog");

            b.actList = obj;

            if(b.showing)
            {
                b.onUpdate();
            }
            else
            {
                b.show();
            }
        }
        else if(obj["activityType"] == "fund" || obj["activityType"] == "celebrate")
        {
            var jijin:JijinDialog = DialogManager.findDialog(JijinDialog, "JijinDialog");

            jijin.actList = obj;

            if(jijin.showing)
            {
                jijin.onUpdate();
            }
            else
            {
                jijin.show();
            }
        }
        else if(obj["activityType"] == "vipbenefit")
        {
            var vip:VipActDialog = DialogManager.findDialog(VipActDialog, "VipActDialog");

            vip.actList = obj;

            if(vip.showing)
            {
                vip.onUpdate();
            }
            else
            {
                vip.show();
            }
        }
        else if(obj["activityType"] == "chargedouble")
        {
            var sb:ChongZhiSB = DialogManager.findDialog(ChongZhiSB, "ChongZhiSB");

            sb.actList = obj;

            if(sb.showing)
            {
                sb.onUpdate();
            }
            else
            {
                sb.show();
            }
        }
        else if(obj["activityType"] == "openserver")
        {
            var server:OpenServerDialog = DialogManager.findDialog(OpenServerDialog, "OpenServerDialog");

            server.actList = obj;

            if(server.showing)
            {
                server.onUpdate();
            }
            else
            {
                server.show();
            }
        }
    }
}
