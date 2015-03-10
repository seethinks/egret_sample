
class Chat extends egret.gui.Group
{
    private m_UI:UIChat;

    private txt_chat:egret.TextField = new egret.TextField();

    private txt_uiaseet:egret.gui.UIAsset;

    private textList:egret.gui.List = new egret.gui.List();

    private dp:egret.gui.ArrayCollection = new egret.gui.ArrayCollection();

    private textList_gh:egret.gui.List = new egret.gui.List();

    private dp_gh:egret.gui.ArrayCollection = new egret.gui.ArrayCollection();

    private isLimit:boolean = false;

    private lastSayTime:number = 0;     //0 1 2 4

    public chatP:number = 0;

    public constructor()
    {
        super();
    }

    public createChildren():void
    {
        super.createChildren();

        this.textList.skinName = "skins.ListSkin";

        this.addElement(this.textList);

        this.textList.width = 578;

        this.textList.height = 365;

        this.textList.top = 0;

        this.textList.horizontalCenter = 0;

        this.textList.itemRenderer = new egret.gui.ClassFactory(UIFightLog);

        this.textList.itemRendererSkinName = "skins.FightLogSkin";

        this.textList.dataProvider = this.dp;

        this.textList.touchChildren = false;

        this.textList.touchEnabled = false;


        this.textList_gh.skinName = "skins.ListSkin";

        this.addElement(this.textList_gh);

        this.textList_gh.width = 578;

        this.textList_gh.height = 365;

        this.textList_gh.top = 0;

        this.textList_gh.horizontalCenter = 0;

        this.textList_gh.itemRenderer = new egret.gui.ClassFactory(UIFightLog);

        this.textList_gh.itemRendererSkinName = "skins.FightLogSkin";

        this.textList_gh.dataProvider = this.dp_gh;

        this.textList_gh.touchChildren = false;

        this.textList_gh.touchEnabled = false;


        this.m_UI = new UIChat();

        this.addElement(this.m_UI);

        this.m_UI.y = this.textList.height;

        this.m_UI.chat_btn_fight.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);

        this.m_UI.chat_btn_hanghui.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);

        this.m_UI.chat_btn_set.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);

        this.m_UI.chat_send.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);

        this.m_UI._btn_horn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onHorn, this);

        this.m_UI.chat_btn_shijie.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);

        this.txt_uiaseet = new egret.gui.UIAsset();

        this.txt_uiaseet.source = this.txt_chat;

        this.txt_chat.text = "";

        this.txt_chat.type = egret.TextFieldType.INPUT;

        this.txt_uiaseet.touchChildren = true;

        this.addElement(this.txt_uiaseet);

        this.txt_uiaseet.x = this.m_UI.x + 27 + 40;

        this.txt_uiaseet.y = this.m_UI.y + 12;

        this.txt_chat.width = 434;

        this.txt_chat.height = 38;

        this.txt_chat.textColor = 0xffffff;

        this.txt_chat.size = 20;

        this.textList_gh.visible = false;
    }

    private onHorn(e:egret.TouchEvent):void
    {
        var self = this;

        if(!this.checkMsg(this.txt_chat.text)) return;

        var str:string = "";

        if(Number(Main.player.times) <= 0)
        {
            str = "确定发送大喇叭？本次免费！";
        }
        else
        {
            var cost:number = Number(Main.player.times) * 2;

            str = "确定发送大喇叭？本次消耗"+cost+"元宝!";
        }

        GameManager.msgBox.showMsg(function(r)
        {
            if(r)
            {
                var url:string = "http://"+GameManager.server["ip"]+":"+GameManager.server["port"];

                var param:string = "type=0x0059&sid="+GameManager.SESSION_ID + "&msg=" + self.txt_chat.text;

                HttpMessage.sendMsg(url, param);

                self.txt_chat.text = "";

                self.isLimit = true;

                self.lastSayTime = 3000;

                self.txt_chat.touchEnabled = false;
            }
        }, str);
    }

    private onClick(e:egret.TouchEvent):void
    {
        switch (e.target)
        {
            case this.m_UI.chat_btn_fight:
                var fight:FightDialog = DialogManager.findDialog(FightDialog, "FightDialog");
                if(fight) fight.checkChat(true);
                break;
            case this.m_UI.chat_btn_hanghui:
                this.textList.visible = false;
                this.textList_gh.visible = true;
                this.chatP = 1;
//                var fight:FightDialog = DialogManager.findDialog(FightDialog, "FightDialog");
//                if(fight) fight.setChatText();
                break;
            case this.m_UI.chat_btn_shijie:
                this.textList.visible = true;
                this.textList_gh.visible = false;
                this.chatP = 0;
//                var fight:FightDialog = DialogManager.findDialog(FightDialog, "FightDialog");
//                if(fight) fight.setChatText();
                break;
            case this.m_UI.chat_btn_set:

                break;
            case this.m_UI.chat_send:

                if(!this.checkMsg(this.txt_chat.text)) return;

                var url:string = "http://"+GameManager.server["ip"]+":"+GameManager.server["port"];

                var param:string = "";
                if(this.chatP == 0)
                {
                    param = "type=0x0048&sid="+GameManager.SESSION_ID + "&msg=" + this.txt_chat.text;
                }
                else if(this.chatP == 1)
                {
                    param = "type=0x0140&sid=" + GameManager.SESSION_ID + "&msg=" + this.txt_chat.text;
                }

                HttpMessage.sendMsg(url, param);

                this.txt_chat.text = "";

                this.isLimit = true;

                this.lastSayTime = 3000;

                this.txt_chat.touchEnabled = false;
                break;
        }
    }

    private checkMsg(str:string):boolean
    {
        if(this.isLimit)
        {
            this.addSysMsg("系统：您说的太快了!");
            return false;
        }

        if(!str){
            this.addSysMsg("系统：请输入聊天内容!");
            return false;
        }

        if(str.trim() == ""){
            this.addSysMsg("系统：请输入聊天内容!");
            return false;
        }

        if(str.length > 36)
        {
            this.addSysMsg("系统：您输入的字符超过36个!");
            return false;
        }

        if(str == "")
        {
            this.addSysMsg("系统：请输入聊天内容!");
            return false;
        }

        return true;
    }

    public updateTime()
    {

        if(!this.isLimit) return;

        if(this.lastSayTime%1000 == 0)
        {
            this.txt_chat.text = Math.floor(this.lastSayTime/1000) + "s";

        }

        this.lastSayTime -= 100;

        if(this.lastSayTime <=0)
        {
            this.isLimit = false;
            this.txt_chat.text = "";
            this.txt_chat.touchEnabled = true;
        }
    }

    private cancelLimit():void
    {
        this.isLimit = false;
    }

    public addSysMsg(str:string):void
    {
        if(this.dp.length >=7)this.dp.removeItemAt(0);
        var msgTArr:Array<any> = [];
        msgTArr.push({text:str, style:{"textColor":0xff0000,"size":"24","fontFamily":"黑体"}});
        this.dp.addItem(msgTArr);
    }

    public addItems(obj:any, color:any = 0x461F23):void  ////arg:[{“id”,"order",“name”,"sex",“msg”},{}] id=聊天者id，order=聊天顺序，name=聊天人名字，sex=性别，msg=聊天内容
    {

        var str:string = "["+obj["name"]+"]说：" + obj["msg"];
        var len:number = str.length / 23;


        if(len > 1)
        {
            var start:number = 0;

            var i:number = 0;

            for(i = 0; i < len - 1; i++)
            {
                if(i > 0)
                {
                    start = i * 23 + 1;
                }
                else
                {
                    start = 0;
                }

                var h_str:string = str.substr(start, 23);

                if(this.dp.length >= 7) this.dp.removeItemAt(0);
                var msgTArr:Array<any> = [];
                msgTArr.push({text:h_str, style:{"textColor":color,"size":"24","fontFamily":"黑体"}});
                this.dp.addItem(msgTArr);
            }

            start = i * 23 + 1;

            var e_str:string = str.substr(start);

            if(this.dp.length >= 7) this.dp.removeItemAt(0);
            var msgTArr:Array<any> = [];
            msgTArr.push({text:e_str, style:{"textColor":color,"size":"24","fontFamily":"黑体"}});
            this.dp.addItem(msgTArr);
        }
        else
        {
            if(this.dp.length >= 7) this.dp.removeItemAt(0);
            var msgTArr:Array<any> = [];
            msgTArr.push({text:str, style:{"textColor":color,"size":"24","fontFamily":"黑体"}});
            this.dp.addItem(msgTArr);
        }
    }

    public addItemsHH(obj:any, color:any = 0x461F23):void  ////arg:[{“id”,"order",“name”,"sex",“msg”},{}] id=聊天者id，order=聊天顺序，name=聊天人名字，sex=性别，msg=聊天内容
    {

        var str:string = "行会["+obj["name"]+"]说：" + obj["msg"];

        var len:number = str.length / 23;

        if(len > 1)
        {
            var start:number = 0;

            var i:number = 0;

            for(i = 0; i < len - 1; i++)
            {
                if(i > 0)
                {
                    start = i * 23 + 1;
                }
                else
                {
                    start = 0;
                }

                var h_str:string = str.substr(start, 23);

                if(this.dp_gh.length >= 7) this.dp_gh.removeItemAt(0);

                var msgTArr:Array<any> = [];
                msgTArr.push({text:h_str, style:{"textColor":color,"size":"24","fontFamily":"黑体"}});
                this.dp_gh.addItem(msgTArr);
            }

            start = i * 23 + 1;

            var e_str:string = str.substr(start);

            if(this.dp_gh.length >= 7) this.dp_gh.removeItemAt(0);
            var msgTArr:Array<any> = [];
            msgTArr.push({text:e_str, style:{"textColor":color,"size":"24","fontFamily":"黑体"}});
            this.dp_gh.addItem(msgTArr);
        }
        else
        {
            if(this.dp_gh.length >= 7) this.dp_gh.removeItemAt(0);
            var msgTArr:Array<any> = [];
            msgTArr.push({text:str, style:{"textColor":color,"size":"24","fontFamily":"黑体"}});
            this.dp_gh.addItem(msgTArr);
        }
    }
}
