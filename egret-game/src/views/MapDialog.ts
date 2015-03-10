
class MapDialog extends Dialog
{
    private m_dialog:UIOriginalDialog;

    private m_UI:UIMap;

    private maplist:egret.gui.List = new egret.gui.List();

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

        this.m_dialog.setTitle("地图");

        this.m_UI = new UIMap();

        this.addElement(this.m_UI);

        this.m_UI.horizontalCenter = 0;

        this.m_UI.map_btn_buy.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onBuy,this);

        this.maplist.skinName = "skins.ListSkin";

        this.maplist.height = 548;

        this.maplist.horizontalCenter = 0;

        this.addElement(this.maplist);

        this.maplist.itemRenderer = new egret.gui.ClassFactory(MapList);

        this.maplist.itemRendererSkinName = "skins.MapListSkin";

        this.maplist.dataProvider = this.dp;

        this.m_UI.top = 60;

        this.maplist.top = this.m_UI.top + 38;
    }

    private onBuy(e:egret.TouchEvent):void
    {
        var vip:any = GameManager.JSON_VIP[(Number(Main.player.vip) + 1)];

        if(!vip) return;

        var rewards:string = vip["rewards"];

        var arr_rewards:Array<any> = rewards.split("|");

        var str_vip:string = arr_rewards[1];

        var arr_vip:Array<any> = str_vip.split("#");

        var vip_num:number = Number(arr_vip[1]);

        var bosscount:any = Main.player.m_vipRewards[2];

        var count:number = 0;

        if(bosscount)
        {
            count = bosscount["vipBought"];
        }


        GameManager.msgBox.showMsg(function(r)
        {
            if(r)
            {
                var url:string = "http://"+GameManager.server["ip"]+":"+GameManager.server["port"];

                var param:string = "type=0x0100&sid="+GameManager.SESSION_ID;

                HttpMessage.sendMsg(url, param);

//                if(GameManager.dataEyes)GameManager.dataEyes.pushEvent("购买BOSS次数", 1,
//                    {cost:50, pname:Main.player.name, sid:GameManager.server.sid});
            }
        }, "购买BOSS挑战次数1次，将消耗50元宝！确定继续？（您是VIP"+Main.player.vip+"今天购买剩余次数"+(vip_num - count)+"，每天零点重置）");

    }

    private onTouch(e:egret.TouchEvent):void
    {
        this.hide();
    }

    public onUpdate():void
    {
        if(this.m_UI)
        {
            if(this.m_UI.map_label_num) {
                var bosscount:any = Main.player.m_vipRewards[2];
                var count:number = 0;
                if(bosscount)
                {
                    count = bosscount['remain'];
                }
                this.m_UI.map_label_num.text = "今日剩余挑战boss次数：" + count;
            }
        }

        this.dp.removeAll();

        var map:any = GameManager.JSON_MAP;

        for(var key in map)
        {
            var list = map[key];

            if(Number(list["planId"]) <= Number(Main.player.mapmax))
            {
                this.dp.addItem(list);
            }

            if(Number(list["planId"]) == Number(Main.player.mapmax))
            {
                var bossId = list["bossId"];
                var m = GameManager.JSON_MONSTERS[bossId];
                var bms:Array<any> = [];
                bms.push({text:"----挑战BOSS",style:{"textColor":0x03F3EB,"size":18,"fontFamily":"黑体"}});
                bms.push({text:m["name"],style:{"textColor":0xE805F9,"size":18,"fontFamily":"黑体"}});
                bms.push({text:"胜利后开启下一张地图----",style:{"textColor":0x03F3EB,"size":18,"fontFamily":"黑体"}});
                this.m_UI._label_bossName._textField.textFlow = <Array<egret.ITextElement>>bms;
            }
        }

        var self = this;
        egret.callLater(function()
        {
            if(Main.player.mapmax > 4)
            {
                self.maplist.dataGroup.verticalScrollPosition = 136*(Main.player.mapmax - 4);
            }
        }, this.maplist);
    }

    public show()
    {
        super.show();

        this.onUpdate();

        if(!egret.localStorage.getItem("prompt1"))
        {
            GameManager.msgBox.showMsg(function(r){}, "    点击挑战BOSS按钮战胜当前地图的BOSS就能开启下一级地图，开启后点击新地图就能到该地图挂机获得更多经验金币！", true);

            egret.localStorage.setItem("prompt1", "true");
        }
    }

    public hide()
    {
        super.hide();
    }
}
