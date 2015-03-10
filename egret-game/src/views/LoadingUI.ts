
class LoadingUI extends egret.gui.Group
{
    private lodUI:UILoding;

    private sound:egret.Sound;

    private initB:boolean =false;

    private eff:egret.MovieClip;

    private effAsset:egret.gui.UIAsset = new egret.gui.UIAsset();

    public constructor()
    {
        super();

        this.addEventListener(egret.Event.ADDED_TO_STAGE,this.onAddToStage,this);
    }

    private onAddToStage(event:egret.Event)
    {
        if(GameManager.logOutGame)this.createChildren();
        else if(this.initB){
            Main.guiLayer.removeAllElements();

            Main.guiLayer.addElement(Main.MainUI);

            Main.guiLayer.addElement(Main.iconMeun);

            Main.bitmap.visible = false;
        }
        GameManager.logOutGame = false;
    }

    public createChildren():void
    {
        super.createChildren();

        this.layout = new egret.gui.BasicLayout();

        this.lodUI = new UILoding();

        this.addElement(this.lodUI);

        this.lodUI.loding_title.width = 0;

        RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE,this.onResourceLoadCompletetwo,this);

        RES.addEventListener(RES.ResourceEvent.GROUP_PROGRESS,this.onResourceProgresstwo,this);

        RES.loadGroup("jsontwo"); //jsontwo
    }

    private onResourceProgresstwo(event:RES.ResourceEvent):void
    {
        if(event.groupName=="jsontwo")
        {
            this.setProgress(event.itemsLoaded, event.itemsTotal, event.groupName);
        }
    }

    private onResourceLoadCompletetwo(event:RES.ResourceEvent):void
    {
        if(event.groupName=="jsontwo")
        {
            RES.removeEventListener(RES.ResourceEvent.GROUP_COMPLETE,this.onResourceLoadCompletetwo,this);

            RES.removeEventListener(RES.ResourceEvent.GROUP_PROGRESS,this.onResourceProgresstwo,this);


            RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE,this.onResourceLoadComplete,this);

            RES.addEventListener(RES.ResourceEvent.GROUP_PROGRESS,this.onResourceProgress,this);

            RES.loadGroup("json"); //jsontwo
        }
    }



    private onResourceProgress(event:RES.ResourceEvent):void
    {
        if(event.groupName=="json")
        {
            this.setProgress(event.itemsLoaded, event.itemsTotal, event.groupName);
        }
    }

    private onResourceLoadComplete(event:RES.ResourceEvent):void
    {
        if(event.groupName=="json")
        {
            RES.removeEventListener(RES.ResourceEvent.GROUP_COMPLETE,this.onResourceLoadComplete,this);

            RES.removeEventListener(RES.ResourceEvent.GROUP_PROGRESS,this.onResourceProgress,this);

            GameManager.JSON_BAOSHI = RES.getRes("cqgj_baoshi");

            GameManager.JSON_EQPT = RES.getRes("gjcq_equip");

            GameManager.JSON_MAP = RES.getRes("cqgj_map");

            GameManager.JSON_MONSTERS = RES.getRes("cqgj_monsters");

            GameManager.JSON_OCCUPATION = RES.getRes("gjcq_occupation_base");

            GameManager.JSON_ITEM = RES.getRes("item");

            GameManager.JSON_RECAST = RES.getRes("cqgj_equip_recast");

            GameManager.JSON_VIP = RES.getRes("vip");

            GameManager.JSON_VIP_DESC = RES.getRes("vip_reward");

            GameManager.JSON_SHOP_REF = RES.getRes("shop_refresh");

            GameManager.JSON_HONOUR_SHOP = RES.getRes("coliseum_good_shop");

            GameManager.JSON_SOCIETY_SHOP = RES.getRes("society_good_shop");

            GameManager.JSON_HERO = RES.getRes("cqgj_heros");

            GameManager.JSON_HERO_GODATT = RES.getRes("cqgj_hero_godatt");

            GameManager.JSON_HERO_UPSTAR = RES.getRes("cqgj_hero_uplevel");

            var streng:any = {};

            var obj0:any = {};
            var obj1:any = {};
            var obj2:any = {};
            var obj3:any = {};
            var obj4:any = {};

            var obj:any = RES.getRes("cqgj_equip_strength");

            for(var i in obj)
            {
                var anys:any = obj[i];

                if(Number(anys["quality"]) == 0)
                {
                    obj0[anys["count"]] = anys;
                }

                if(Number(anys["quality"]) == 1)
                {
                    obj1[anys["count"]] = anys;
                }

                if(Number(anys["quality"]) == 2)
                {
                    obj2[anys["count"]] = anys;
                }

                if(Number(anys["quality"]) == 3)
                {
                    obj3[anys["count"]] = anys;
                }

                if(Number(anys["quality"]) == 4)
                {
                    obj4[anys["count"]] = anys;
                }
            }

            streng["0"] = obj0;

            streng["1"] = obj1;

            streng["2"] = obj2;

            streng["3"] = obj3;

            streng["4"] = obj4;

            GameManager.JSON_STRENGTH = streng;

            GameManager.JSON_BUFFER = RES.getRes("cqgj_buffer");

            GameManager.JSON_SKILLS = RES.getRes("cqgj_skills");

            GameManager.JSON_HELP = RES.getRes("help");

            GameManager.JSON_GIFT = RES.getRes("cqgj_cumulative_charge_gift");

            GameManager.JSON_HELP_TIP = RES.getRes("helptip");

            GameManager.msgBox = new MessageBox();

            GameManager.loding = new Loding();

            GameManager.levelUp = new LevelUp();

            GameManager.horn = new Horn();

            GameManager.JSON_ROLE = RES.getRes("role");

            var url:string = "http://"+GameManager.server["ip"]+":"+GameManager.server["port"];

            var param:string = "type=0x0003&sid="+GameManager.SESSION_ID;

            HttpMessage.sendMsg(url, param);

            if(this.sound) this.sound.pause();

            this.createScene();

            this.initB = true;
        }
    }

    private createScene():void
    {
        var data = RES.getRes("opendoor_json");

        var texture = RES.getRes("opendoor_png");

        this.eff = new egret.MovieClip(data, texture);

        this.effAsset.source = this.eff;

        this.effAsset.top = 225;

        this.effAsset.x = Main.guiLayer.width / 2 - 451 / 2 - 5;

        this.eff.frameRate = 2.5;

        Main.guiLayer.addElement(this.effAsset);

        this.sound = RES.getRes("opendoor_music");

        this.sound.play();

        this.eff.gotoAndPlay("opendoor");

        this.eff.addEventListener("startGame", this.stopFlash, this);

//        RES.destroyRes("json");
        RES.destroyRes("jsonTwo");
        var self = this;
        egret.setTimeout(function(){
            if(!GameManager.startGame)self.stopFlash();
        }, this, 5000);
    }

    private stopFlash()
    {
        Main.guiLayer.removeAllElements();

        Main.guiLayer.addElement(Main.MainUI);

        Main.guiLayer.addElement(Main.iconMeun);

        Main.bitmap.visible = false;

        GameManager.startGame = true;
        GameManager.stopGame = false;

        this.eff.stop();

        Main.hert = new Heart();

        /** 请求游戏设置信息 **/

        var url:string = "http://"+GameManager.server["ip"]+":"+GameManager.server["port"];

        var param:string = "type=0x0045&sid="+GameManager.SESSION_ID + "&aa=0";

        HttpMessage.sendMsg(url, param);
    }

    public setProgress(current, total, name):void
    {
        this.lodUI.loding_title.width = (current / total) * 554;

        if(name == "json")
        {
            this.lodUI.loding_label.text = "加载特效文件 " + Math.round((current / total) * 100) + "%";
        }
        else
        {
            this.lodUI.loding_label.text = "加载游戏配置文件 " + Math.round((current / total) * 100) + "%";
        }
    }
}
