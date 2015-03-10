class MailItemReader extends egret.gui.ItemRenderer
{
    public constructor()
    {
        super();

        this.skinName = "skins.MailItemReaderSkin";

        this.touchChildren = true;

        this.touchEnabled = true;
    }

    public mail_btn_get:egret.gui.UIAsset;

    public mail_btn_del_end:egret.gui.Button;

    public mail_btn_del:egret.gui.Button;

    public mail_btn_look:egret.gui.Button;

    public mail_label:egret.gui.Label;

    public partAdded(partName:string, instance:any):void
    {
        super.partAdded(partName, instance);

        if(instance == this.mail_btn_get)
        {
            this.mail_btn_get.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onGet, this);
        }

        if(instance == this.mail_btn_del_end)
        {
            this.mail_btn_del_end.visible = false;

            this.mail_btn_del_end.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onDel, this);
        }

        if(instance == this.mail_btn_del)
        {
            this.mail_btn_del.visible = false;

            this.mail_btn_del.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onDel, this);
        }

        if(instance == this.mail_btn_look)
        {
            this.mail_btn_look.visible = false;

            this.mail_btn_look.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onFuchou, this);
        }

        if(instance == this.mail_label)
        {
            this.mail_label.text = "";
        }
    }

    private onFuchou(e:egret.TouchEvent):void
    {
        if(this.data && this.data["killerId"])
        {
            var self = this;

            GameManager.msgBox.showMsg(function (r)
            {
                if(r)
                {
                    var item:ItemBase = Main.player.m_items.findItemByTplId(51);
                    if(!item)
                    {
                        GameManager.flyText({t:"追踪令不足！", q:1});

                        return;
                    }

                    if(item.count <= 0)
                    {
                        GameManager.flyText({t:"追踪令不足！", q:1});

                        return;
                    }

                    var url:string = "http://"+GameManager.server["ip"]+":"+GameManager.server["port"];

                    var param:string = "type=0x0115&sid="+GameManager.SESSION_ID+ "&killerId=" + self.data["killerId"];

                    HttpMessage.sendMsg(url, param);
                }
            },"    追踪玩家信息需要消耗一个[追踪令]，您确定追踪？（追踪令只能获取玩家所在地图，并不能直接追杀玩家）");
        }
    }

    public dataChanged()
    {
        super.dataChanged();

        if(this.data)
        {
            var type:number = Number(this.data["emailType"]);

            if(type == 1)
            {
                this.mail_btn_get.visible = true;

                this.mail_btn_del.visible = this.mail_btn_del_end.visible = this.mail_btn_look.visible = false;
            }
            else if(type == 5)
            {
                this.mail_btn_del.visible = this.mail_btn_look.visible = true;

                this.mail_btn_get.visible = this.mail_btn_del_end.visible = false;

                this.mail_btn_look._setLabel("复  仇");
            }
            else// if(type == 2)
            {
                this.mail_btn_look.visible = this.mail_btn_del.visible = this.mail_btn_get.visible = false;

                this.mail_btn_del_end.visible = true;
            }
//            else if(type ==3)
//            {
//                this.mail_btn_look.visible = this.mail_btn_del.visible = this.mail_btn_get.visible = false;
//
//                this.mail_btn_del_end.visible = true;
//            }
//            else if(type == 4)
//            {
//                this.mail_btn_del_end.visible = this.mail_btn_get.visible = false;
//
//                this.mail_btn_del.visible = this.mail_btn_look.visible = true;
//            }

            var str:string = this.data["content"];

            if(type == 5)
            {
                var strarr:Array<any> = str.split("&");

                if(strarr)
                {
                    if(strarr.length > 1)
                    {
                        var id:string = strarr[1];

                        this.data["killerId"] = id;
                    }

                    str = strarr[0];
                }
            }

            if(this.data["created"])
            {
                var time:number = Number(this.data["created"]);

                if(time > 0)
                {

                }
            }

            if(this.data["rewards"])
            {
                str += "\n\n获得奖励:"

                var arr:Array<any> = this.data["rewards"];

                if(arr && arr.length > 0)
                {
                    for(var i = 0; i<arr.length; i++)
                    {
                        var obj = arr[i];

                        var maxType:number = Number(obj["maxType"]);

                        var itemId = obj["itemId"];

                        var num = obj["num"];

                        var items:any;

                        if(maxType == 1) //宝石
                        {
                            items = GameManager.JSON_BAOSHI[itemId];
                        }

                        if(maxType == 2) //装备
                        {
                            items = GameManager.JSON_EQPT[itemId];
                        }
                        else            //道具
                        {
                            if(Number(itemId) > 0)
                            {
                                items = GameManager.JSON_ITEM[itemId];
                            }
                            else
                            {
                                str += "[" +GameManager.MAX_TYPE[maxType] + "]*" + num + "  ";
                            }
                        }

                        if(items) str += "[" + items["name"] + "]*" + num + "  ";
                    }
                }
            }

            this.mail_label.text = str;

            this.mail_label.textColor = 0x00ff00;
        }
    }

    private onGet(e:egret.TouchEvent):void
    {
        if(this.data)
        {
            var url:string = "http://"+GameManager.server["ip"]+":"+GameManager.server["port"];
            var param:string = "type=0x0071&sid="+GameManager.SESSION_ID + "&id=" + this.data["id"];
            HttpMessage.sendMsg(url, param);
        }
    }

    private onDel():void
    {
        if(this.data)
        {
            var url:string = "http://"+GameManager.server["ip"]+":"+GameManager.server["port"];
            var param:string = "type=0x0072&sid="+GameManager.SESSION_ID + "&id=" + this.data["id"];
            HttpMessage.sendMsg(url, param);
        }
    }
}