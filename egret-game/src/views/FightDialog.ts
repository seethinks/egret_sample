
class FightDialog extends Dialog
{
    private m_UI:UIFightDialog;

    private time:number = 0;

    private fightObj:any;

    private step:number = -1;

    private p_head:FightHead;

    private h_head:FightHead;

    private m1_head:FightHead;

    private m2_head:FightHead;

    private m3_head:FightHead;

    private initatk:Array<any> = [];

    private initdef:Array<any> = [];

    private round:Array<any> = [];

    private oldBuffer:any = {};

    private rewards:any;

    private boxInfos:any;

    private headList:any = {};

    private textList:egret.gui.List = new egret.gui.List();

    private dp:egret.gui.ArrayCollection = new egret.gui.ArrayCollection();

    private isPlay:boolean = false;

    private waitFights:any[] = new Array(); //等待战斗

    private _t:number = 0;

    public chat:Chat;

    private tiao_ass:egret.gui.UIAsset;

    private tiao_eff:egret.MovieClip;

    public tan_ass:egret.gui.UIAsset;

    private tan_eff:egret.MovieClip;

    public constructor()
    {
        super();
    }

    public createChildren():void
    {
        super.createChildren();

        this.m_UI = new UIFightDialog();

        this.addElement(this.m_UI);

        this.m_UI.horizontalCenter = 0;

        this.m_UI.top = 0;

        this.m_UI._btn_fight_census.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouch, this);
        this.m_UI._btn_fight_statistics.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouch, this);
        this.m_UI._btn_cut_fight.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouch, this);
        this.m_UI._btn_fast_fight.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouch, this);
        this.m_UI._btn_fight_set.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouch, this);
        this.m_UI._btn_fight_chat.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouch, this);
        this.m_UI._btn_new_event.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouch, this);

        this.m_UI._btn_cut_fight._setLabel("切换地图");
        this.m_UI._btn_fast_fight._setLabel("快速战斗");
        this.m_UI._btn_fight_chat._setLabel("聊天频道");
        this.m_UI._btn_fight_set._setLabel("战斗设置");

        this.p_head = new FightHead("skins.FightHeadPlayerSkin");

        this.addElement(this.p_head);

        this.p_head.y = 20;

        this.p_head.x = 20;

        this.h_head = new FightHead("skins.HeroHeadSkin");

        this.addElement(this.h_head);

        this.h_head.y = this.p_head.y + this.p_head.height + 60;

        this.h_head.x = 30;

        this.m1_head = new FightHead("skins.MonsterHeadSkin");

        this.addElement(this.m1_head);

        this.m1_head.x = Main.guiLayer.width - 240;

        this.m1_head.y = 20;

        this.m2_head = new FightHead("skins.MonsterHeadSkin");

        this.addElement(this.m2_head);

        this.m2_head.x = this.m1_head.x;

        this.m2_head.y = this.m1_head.y + this.m1_head.height + 60;

        this.m3_head = new FightHead("skins.MonsterHeadSkin");

        this.addElement(this.m3_head);

        this.m3_head.x = this.m1_head.x;

        this.m3_head.y = this.m2_head.y + this.m2_head.height + 60;

        this.h_head.visible = false;

        this.clear();

        this.textList.skinName = "skins.ListSkin";

        this.addElement(this.textList);

        this.textList.width = 578;

        this.textList.height = 414;

        this.textList.top = 303;

        this.textList.bottom = 81;

        this.textList.horizontalCenter = 0;

        this.textList.itemRenderer = new egret.gui.ClassFactory(UIFightLog);

        this.textList.itemRendererSkinName = "skins.FightLogSkin";

        this.textList.dataProvider = this.dp;

        this.textList.touchChildren = false;

        this.textList.touchEnabled = false;

//        this.top = 0;
//        this.bottom = 0;
//
//        this.m_UI.top = 0;
//        this.m_UI.bottom = 170;
//
//        this.textList.height = this.height - 500;

        this.chat = new Chat();

        this.addElement(this.chat);

        this.chat.visible = false;

        this.chat.y = 303;

        this.chat.horizontalCenter = 0;


        this.m_UI._btn_fight_statistics.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);

        this.m_UI._btn_fight_census.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);


        var data = RES.getRes("tiaoxin_json");

        var texture = RES.getRes("tiaoxin_png");

        this.tiao_ass = new egret.gui.UIAsset();

        this.tiao_eff = new egret.MovieClip(data, texture);

        this.tiao_ass.source = this.tiao_eff;

        this.addElement(this.tiao_ass);

        this.tiao_ass.x = 501;

        this.tiao_ass.y = 158;

        this.tiao_eff.frameRate = 10;

        this.tiao_eff.gotoAndPlay("tiaoxin");

        this.tiao_ass.touchChildren = false;

        this.tiao_ass.touchEnabled = false;


        var datas = RES.getRes("gantanhao_json");

        var textures = RES.getRes("gantanhao_png");

        this.tan_ass = new egret.gui.UIAsset();

        this.tan_eff = new egret.MovieClip(datas, textures);

        this.tan_ass.source = this.tan_eff;

        this.addElement(this.tan_ass);

        this.tan_ass.x = -18;

        this.tan_ass.y = 173;

        this.tan_eff.frameRate = 5;

        this.tan_eff.gotoAndPlay("gantanhao");

        this.tan_ass.touchChildren = false;

        this.tan_ass.touchEnabled = false;

        this.tan_ass.visible = false;
    }

    private onClick(e:egret.TouchEvent):void
    {
        switch (e.target) {
            case this.m_UI._btn_fight_census:
                GameManager.msgBox.showMsg(function(r){

                    if(r){
                        var url:string = "http://"+GameManager.server["ip"]+":"+GameManager.server["port"];
                        var param:string = "type=0x0051&sid="+GameManager.SESSION_ID;
                        HttpMessage.sendMsg(url, param);
                    }

                }, "确定要主动挑衅你周围的人？\n(击杀其他玩家有几率获得该玩家的装备但是攻击方会累计PK值。玩家PK值越高死亡后掉落装备几率越大！)", false, "确定", "取消", "挑衅");
                break;
            case this.m_UI._btn_fight_statistics:

                var f = this;

                GameManager.msgBox.showMsg(function (r)
                {
                    if (r)
                    {
                        DialogManager.open(MapDialog, "MapDialog");

                        f.m_UI._btn_fight_statistics.visible = false;

                        f.tan_ass.visible = false;

                        f.hide();
                    }
                }, "您在当前地图胜率已经达到80%以上，是否挑战boss开启下一张地图？");

                break;
        }
    }

    public setBossWram():void
    {
        if(this.m_UI && this.m_UI._btn_fight_statistics)
        {
            this.m_UI._btn_fight_statistics.visible = true;

            this.tan_ass.visible = true;
        }
    }

    private clear():void
    {
        if(this.initUI)
        {
            this.m1_head.visible = this.m2_head.visible = this.m3_head.visible = false;

            this.m1_head.scaleX = this.m2_head.scaleX = this.m3_head.scaleX = 0.7;

            this.m1_head.scaleY = this.m2_head.scaleY = this.m3_head.scaleY = 0.7;

            this.p_head.setBuff("");

            this.h_head.setBuff("");

            this.m1_head.setBuff("");

            this.m2_head.setBuff("");

            this.m3_head.setBuff("");
        }
    }

    private onTouch(e:egret.TouchEvent):void
    {
        switch (e.target)
        {
            case this.m_UI._btn_fight_census:
                break;
            case this.m_UI._btn_fight_statistics:
                break;
            case this.m_UI._btn_cut_fight:
                DialogManager.open(MapDialog, "MapDialog");
                this.hide();
                this.m_UI._mapwarn.visible = false;
                break;
            case this.m_UI._btn_fast_fight:

                var vip:any = GameManager.JSON_VIP[(Number(Main.player.vip) + 1)];

                var rewards:string = vip["rewards"];

                var arr_rewards:Array<any> = rewards.split("|");

                var str_vip:string = arr_rewards[0];

                var arr_vip:Array<any> = str_vip.split("#");

                var vip_num:number = Number(arr_vip[1]);

                var bosscount:any = Main.player.m_vipRewards[1];

                var count:number = 0;

                if(bosscount)
                {
                    count = bosscount["vipBought"];
                }

                if(count > 20) count = 20;

                GameManager.msgBox.showMsg(function(r)
                {
                    if(r)
                    {
                        var url:string = "http://"+GameManager.server["ip"]+":"+GameManager.server["port"];
                        var param:string = "type=0x0044&sid="+GameManager.SESSION_ID;
                        HttpMessage.sendMsg(url, param);

//                        if(GameManager.dataEyes)GameManager.dataEyes.pushEvent("快速战斗", 1,
//                            {cost:GameManager.FAST_MONEY[count], pname:Main.player.name, sid:GameManager.server.sid});
                    }
                },"进行快速战斗2小时，将消耗"+GameManager.FAST_MONEY[count]+"元宝！确定继续？（您是VIP"+Main.player.vip+"，今天剩余"+(vip_num - count)+"次，每天零点重置）");
                break;
            case this.m_UI._btn_fight_set:
                DialogManager.open(GameSetDialog, "GameSetDialog");
                break;
            case this.m_UI._btn_fight_chat:
                this.checkChat();
                break;
            case this.m_UI._btn_new_event:
                break;
        }
    }

    public checkChat(b:boolean = false):void
    {
        this.textList.visible = b;

        this.m_UI._btn_cut_fight.visible = this.m_UI._btn_fast_fight.visible = this.m_UI._btn_fight_chat.visible = this.m_UI._btn_fight_set.visible = this.m_UI._btn_new_event.visible = b;

        this.chat.visible = !b;

        if(GameManager.worldChatMsg.length > 0){
            for(var i in GameManager.worldChatMsg){
                this.chat.addItems(GameManager.worldChatMsg[i]);
            }
            GameManager.worldChatMsg = [];
        }
        if(GameManager.worldChatMsgHH.length > 0){
            for(var j in GameManager.worldChatMsgHH){
                this.chat.addItemsHH(GameManager.worldChatMsgHH[j]);
            }
            GameManager.worldChatMsgHH = [];
        }
    }

    private playImgEff(s:string = ""):void
    {
        this.m_UI._fight_img.source = s;

        var tw = egret.Tween.get(this.m_UI._fight_img,{loop:false});

        tw.to({alpha:1}, 500).to({alpha:0}, 500);
    }

    public onUpdate():void
    {

    }

    public show()
    {
        super.show();

        this.refrshHead();

        Main.iconMeun.setSmallIconVis(false);

        if(!egret.localStorage.getItem("prompt1"))
        {
            this.m_UI._btn_new_event.visible = false;

            var self = this;

            GameManager.msgBox.showMsg(function(r)
            {
                self.m_UI._mapwarn.visible = true;
            }, "    从您进入游戏后就已经在自动战斗了，即使退出游戏甚至关闭手机都不会停止战斗(不会消耗流量)，只要您随时再回到游戏时就能收获一堆的经验金币和装备！", true);

            //egret.localStorage.setItem("prompt2", "true");
        }
        else
        {
            this.m_UI._btn_new_event.visible = true;
        }
    }

    public hide()
    {
        super.hide();
    }

    public onTimers():void
    {
        if(this.initUI){
            if(Main.player.m_challenge == 1)
            {
                var map = GameManager.JSON_MAP[Main.player.m_bossMapId];

                var boss:any = GameManager.JSON_MONSTERS[map["bossId"]];

                this.m_UI.fight_label_boss.text = "接下来将挑战BOSS["+boss["name"]+"]";

                this.m_UI.fight_souxun.visible = false;
            }
            else if(Main.player.m_challenge == 2)
            {
                this.m_UI.fight_label_boss.text = "接下来将进行竞技!";

                this.m_UI.fight_souxun.visible = false;
            }
            else if(Main.player.m_challenge == 99)
            {
                this.m_UI.fight_label_boss.text = "接下来将进行PK战斗";
                this.m_UI.fight_souxun.visible = false;
            }
            else
            {
                this.m_UI.fight_label_boss.text = "";
            }
        }

        GameManager.nextFightTime --;

        if(GameManager.isFighting) return;

        if(this.initUI)
        {
            if(GameManager.nextFightTime >= 0)this.m_UI.fight_label_time.text = "" + GameManager.nextFightTime;

            if(Main.player.m_challenge == 0)
            {
                this.m_UI.fight_souxun.visible = true;
            }
            else
            {
               this.m_UI.fight_souxun.visible = false;
            }
        }

        if(GameManager.nextFightTime <= 0)
        {
            GameManager.nextFightTime = 3;
            var url:string = "http://"+GameManager.server["ip"]+":"+GameManager.server["port"];

            var param:string = "type=0x0007&isBoss="+Main.player.m_challenge+"&sid="+GameManager.SESSION_ID + "&mapid=" + Main.player.map;

            if(Main.player.m_challenge == 1)
            {
                   param = "type=0x0007&isBoss="+Main.player.m_challenge+"&sid="+GameManager.SESSION_ID + "&mapid=" + Main.player.m_bossMapId;
            }
            else if(Main.player.m_challenge == 2)
            {
                param = "type=0x0050&sid="+GameManager.SESSION_ID + "&objid=" + Main.player.m_deulData["id"] + "&rank=" + Main.player.m_deulData["rank"];
            }
            else if(Main.player.m_challenge == 99)
            {
                param = "type=0x0052&sid="+GameManager.SESSION_ID;
            }
            HttpMessage.sendMsg(url, param);
            Main.player.m_challenge = 0;
        }
    }

    public startFight(obj:any):void
    {
        if(GameManager.isFighting){

            this.waitFights.push(obj);
            return;

        }

        GameManager.isFighting = true;

        //发消息取距离下场战斗时长
        var url:string = "http://"+GameManager.server["ip"]+":"+GameManager.server["port"];
        var params:string = "type=0x0053&sid="+GameManager.SESSION_ID;
        HttpMessage.sendMsg(url, params);

        this.clear();

        this.fightObj = obj;

        this.initatk = this.fightObj["initatk"];

        this.initdef = this.fightObj["initdef"];

        //this.time = 20 * this.initdef.length;

        this.round = this.fightObj["round"];

        this.rewards = this.fightObj["rewards"];

        this.boxInfos = this.fightObj["boxInfos"];

        this.oldBuffer = {};

        Main.player.m_challenge = 0;

        if(this.initUI)
        {
            this.m_UI.fight_souxun.visible = false;

            this.m_UI.fight_label_time.text = "";

            this.m_UI.fight_label_boss.text = "";

            this.playImgEff("fight_img_1");

            var map:any = GameManager.JSON_MAP[Main.player.map];

            if(map) this.m_UI._map_name.text = "" + map["name"];
            else this.m_UI._map_name.text = "";
        }
        else
        {
            this.endF();
            return;
        };

        this.initFight();
    }

    public initFight( ):void
    {
        this.headList = {};

        if(this.initUI) this.refrshHead(1);

        this.startF();
    }

    private startF():void
    {
        this.step ++;
        if(this.round[this.step])
        {
            egret.setTimeout(this.zhongdu, this, 800);
            this.updateOldBuffer();
            //同步本回合角色血蓝
            var tr = this.round[this.step];
            if(tr["atkid"] == Main.player.id){
                Main.player.syncHMP(tr["atkhp"], tr["atkmp"]);

            }else{
                var tags = this.round["target"];
                for(var i in tags){
                    var tag = tags[i];
                    if(!tag)continue;
                    if(tag["defid"] == Main.player.id){
                        Main.player.syncHMP(tag["defhp"], tag["defmp"]);
                    }
                }
            }
        }
        else
        {
            this.endF(true);
        }
    }

    private updateOldBuffer(){
        var r:any = this.round[this.step];
        var tagid:string = r["atkid"];
        var buffList:any = r["bufferlist"];
        if(!buffList)return;
        var buffs = buffList[tagid];
        if(!buffs || buffs == "undefined")return;
        var oldbuffs = this.oldBuffer[tagid];
        if(!oldbuffs || oldbuffs == "undefined")return;
        var buffStr = "";
        for (var bfid in buffs) {
            if(!oldbuffs[bfid])continue;
            var buftpl = GameManager.JSON_BUFFER[bfid];
            buffStr += "["+buftpl["name"]+buffs[bfid]+"]";
        }

        var heard:FightHead = this.headList[tagid];
        heard.setBuff(buffStr);
    }

    private zhongdu():void{
        if(this.initUI){
            this.m_UI.fight_label_time.text = "";
            var r:any = this.round[this.step];
            if(!r)this.startF();

            if(r["dhp"] && r["dhp"] != "undefined"){
                var m_id:string = r["atkid"];
                var head:FightHead = this.headList[m_id];
                for(var i in this.initatk){
                    var ini:any = this.initatk[i];

                    if(ini["id"] == m_id){
                        var hp:number = this.initatk[i]['hp'];
                        var dhp:number = r["dhp"];
                        this.initatk[i]["hp"] = r["dhp"];
                        if(Math.abs(dhp - hp) == 0){
                            this.huiLan();
                            return;
                        }

                        head.playHp(Math.abs(dhp - hp), 2);
                        this.refrshHead();
                        break;
                    }
                }
                for(var j in this.initdef){
                    var inis:any = this.initdef[j];

                    if(inis["id"] == m_id){
                        var hp:number = this.initdef[j]["hp"];

                        var dhp:number = r["dhp"];

                        this.initdef[j]["hp"] = r["dhp"];
                        if(Math.abs(dhp - hp) == 0){

                            this.huiLan();

                            return;
                        }
                        head.playHp(Math.abs(dhp - hp), 2);
                        this.refrshHead();

                        break;
                    }
                }

            }else{
                this.huiLan();
                return;
            }

            egret.setTimeout(this.huiLan, this, 800);
        }
    }

    private huiLan():void
    {
        if(this.initUI)
        {
            this.m_UI.fight_label_time.text = "";

            var r:any = this.round[this.step];
            if(!r)this.startF();

            if(r["rmp"] && r["rmp"] != "undefined")
            {
                var m_id:string = r["atkid"];

                var head:FightHead = this.headList[m_id];

                for(var i = 0; i < this.initatk.length; i++)
                {
                    var ini:any = this.initatk[i];

                    if(ini["id"] == m_id)
                    {
                        var mp:number = this.initatk[i]["mp"];

                        var rmp:number = r["rmp"];

                        this.initatk[i]["mp"] = r["rmp"];

                        if(Math.abs(rmp - mp) == 0)
                        {
                            this.huiXue();

                            return;
                        }

                        head.playHp(Math.abs(rmp - mp), 0);

                        this.refrshHead();
                        break;
                    }
                }

                for(var j = 0; j < this.initdef.length; j++)
                {
                    var inis:any = this.initdef[j];

                    if(inis["id"] == m_id)
                    {
                        var mp:number = this.initdef[j]["mp"];

                        var rmp:number = r["rmp"];

                        this.initdef[j]["mp"] = r["rmp"];
                        if(Math.abs(rmp - mp) == 0)
                        {

                            this.huiXue();

                            return;
                        }

                        head.playHp(Math.abs(rmp - mp), 0);

                        this.refrshHead();

                        break;
                    }
                }
            }
            else
            {
                this.huiXue();
                return;

            }
        }

        egret.setTimeout(this.huiXue, this, 800);

    }

    private huiXue():void
    {
        if(this.initUI)
        {
            var r:any = this.round[this.step];

            if(r["rhp"] && r["rhp"] != "undefined")
            {
                var m_id:string = r["atkid"];

                var head:FightHead = this.headList[m_id];

                for(var i = 0; i < this.initatk.length; i++)
                {
                    var ini:any = this.initatk[i];

                    if(ini["id"] == m_id)
                    {
                        var mp:number = this.initatk[i]["hp"];

                        var rmp:number = r["rhp"];

                        this.initatk[i]["hp"] = r["rhp"];

                        if(Math.abs(rmp - mp) == 0)
                        {

                            this.castSkill();

                            return;
                        }

                        head.playHp(Math.abs(rmp - mp), 1);

                        this.refrshHead();

                        break;
                    }
                }

                for(var j = 0; j < this.initdef.length; j++)
                {
                    var inis:any = this.initdef[j];

                    if(inis["id"] == m_id)
                    {
                        var mp:number = this.initdef[j]["hp"];

                        var rmp:number = r["rhp"];

                        this.initdef[j]["hp"] = r["rhp"];

                        if(Math.abs(rmp - mp) == 0)
                        {

                            this.castSkill();

                            return;
                        }

                        head.playHp(Math.abs(rmp - mp), 1);

                        this.refrshHead();

                        break;
                    }
                }
            } else {
                this.castSkill();
                return;
            }

        }

        egret.setTimeout(this.castSkill, this, 800);

    }

    private castSkill():void
    {
        var r:any = this.round[this.step];
        var skillName:string = "普通攻击";
        if(Number(r["skill"]) > 1){
            skillName = GameManager.JSON_SKILLS[r["skill"]]["name"];
        }

        //查找攻击者
        var atkIndex:number = 0;
        var atkCamp:number = 0;
        var atkName:string = "";
        for (var i in this.initatk) {

            if(this.initatk[i]["id"] == r["atkid"]) {
                atkIndex = i;
                atkCamp = 0;
                atkName = this.initatk[i]["name"];
                break;
            }
        }
        for (var j in this.initdef) {

            if(this.initdef[j]["id"] == r["atkid"]) {
                atkIndex = j;
                atkCamp = 1;
                atkName = this.initdef[j]["name"];
                break;
            }
        }

        //攻击者头
        var head:FightHead = this.headList[r["atkid"]];

        //查找防御者
        var defArr:any[] = new Array();
        var tags:any[] = r["target"];
        for (var z in tags) {
            var defz:any = tags[z];
            if(!defz)continue;
            for (var x in this.initatk) {
                if(defz["defid"] == this.initatk[x]["id"]) {
                    defArr.push({"index":x, "camp":0, "tag":defz});
                }
            }
            for (var y in this.initdef) {
                if(defz["defid"] == this.initdef[y]["id"]) {
                    defArr.push({"index":y, "camp":1, "tag":defz});
                }
            }
        }

        var self = this;
        var tag:any = null;
        var roundColor:number = 0xe40000;
        var mrColor:number = 0x221f1f;
        var skillColor:number = 0x467400;
        var defColor:number = 0x2178fc;
        var atkColor:number = 0x794baf;
        var fontSize:number = 24;
        var atk:Function = function(){
            tag = defArr.shift();
            if(!tag)
            {
                self.startF();
                return;
            }

            //报文
            var notice:Array<any> = [];
            notice.push({text:"["+r["round"]+"]",style:{"textColor":roundColor,"size":fontSize,"fontFamily":"黑体"}});
            if(atkCamp > 0)head.playDef();
            else head.playEffect();


            if(tag["camp"] > 0) {

                var tagid = self.initdef[tag["index"]]["id"];
                notice.push({text:atkName,style:{"textColor":atkColor,"size":fontSize,"fontFamily":"黑体"}});
                notice.push({text:"对", style:{"textColor":mrColor,"size":fontSize,"fontFamily":"黑体"}});
                notice.push({text:self.initdef[tag["index"]]["name"], style:{"textColor":defColor,"size":fontSize,"fontFamily":"黑体"}});
                notice.push({text:"使用", style:{"textColor":mrColor,"size":fontSize,"fontFamily":"黑体"}});
                notice.push({text:" "+skillName+" ", style:{"textColor":skillColor,"size":fontSize,"fontFamily":"黑体"}});
                var defHeader:FightHead = self.headList[tagid];


                var t = tag["tag"];


                var hurtN:number = Math.abs(Number(t["defhp"]) - Number(self.initdef[tag["index"]]["hp"]));


                if(hurtN > 0 ){

                    defHeader.playEffectB(5);
                    if(atkCamp == tag["camp"]){
                        notice.push({text:"恢复", style:{"textColor":mrColor,"size":fontSize,"fontFamily":"黑体"}});
                        notice.push({text:hurtN, style:{"textColor":roundColor,"size":fontSize,"fontFamily":"黑体"}});
                        notice.push({text:"点生命", style:{"textColor":mrColor,"size":fontSize,"fontFamily":"黑体"}});
                        defHeader.playHp(hurtN, 1);
                    } else {

                        notice.push({text:"造成", style:{"textColor":mrColor,"size":fontSize,"fontFamily":"黑体"}});
                        notice.push({text:hurtN, style:{"textColor":roundColor,"size":fontSize,"fontFamily":"黑体"}});
                        notice.push({text:"点伤害", style:{"textColor":mrColor,"size":fontSize,"fontFamily":"黑体"}});
                        if(t["defstatus"] == 1)
                        {
                            notice.push({text:"(暴击)",style:{"textColor": roundColor, "size":fontSize,"fontFamily":"黑体"}});
                            defHeader.playHp(hurtN, 3);
                        } else {
                            defHeader.playHp(hurtN, 2);
                        }
                    }

                } else { //1暴击 2闪避

                    if(atkCamp != tag["camp"]) {
                        //敌对
                        defHeader.playEffectB(5);

                    } else {
                        //友方
                        defHeader.playEffectB(5, false);
                    }

                    if(t["defstatus"] == 2) {

                        notice.push({text:"造成", style:{"textColor":mrColor,"size":fontSize,"fontFamily":"黑体"}});
                        notice.push({text:hurtN, style:{"textColor":roundColor,"size":fontSize,"fontFamily":"黑体"}});
                        notice.push({text:"点伤害", style:{"textColor":mrColor,"size":fontSize,"fontFamily":"黑体"}});
                        notice.push({text:"(闪避)", style:{"textColor": roundColor, "size":fontSize,"fontFamily":"黑体"}});
                        defHeader.playHp(hurtN, 4);
                    }
                }
                setBuff(tagid);

                self.initdef[tag["index"]]["hp"] = t["defhp"];
                self.initdef[tag["index"]]["mp"] = t["defmp"];

            } else {

                var tagid = self.initatk[tag["index"]]["id"];

                notice.push({text:atkName, style:{"textColor":defColor,"size":fontSize,"fontFamily":"黑体"}});
                notice.push({text:"对", style:{"textColor":mrColor,"size":fontSize,"fontFamily":"黑体"}});
                notice.push({text:self.initatk[tag["index"]]["name"], style:{"textColor":atkColor,"size":fontSize,"fontFamily":"黑体"}});
                notice.push({text:"使用", style:{"textColor":mrColor,"size":fontSize,"fontFamily":"黑体"}});
                notice.push({text:" "+skillName+" ", style:{"textColor":skillColor,"size":fontSize,"fontFamily":"黑体"}});
                var defHeader:FightHead = self.headList[tagid];


                var t = tag["tag"];

                var hurtN:number = Math.abs(Number(t["defhp"]) - Number(self.initatk[tag["index"]]["hp"]));

                if(hurtN > 0 ){

                    defHeader.playDefB(5);
                    if(atkCamp == tag["camp"]){
                        notice.push({text:"恢复", style:{"textColor":mrColor,"size":fontSize,"fontFamily":"黑体"}});
                        notice.push({text:hurtN, style:{"textColor":roundColor,"size":fontSize,"fontFamily":"黑体"}});
                        notice.push({text:"点生命", style:{"textColor":mrColor,"size":fontSize,"fontFamily":"黑体"}});
                        defHeader.playHp(hurtN, 1);
                    } else {
                        notice.push({text:"造成", style:{"textColor":mrColor,"size":fontSize,"fontFamily":"黑体"}});
                        notice.push({text:hurtN, style:{"textColor":roundColor,"size":fontSize,"fontFamily":"黑体"}});
                        notice.push({text:"点伤害", style:{"textColor":mrColor,"size":fontSize,"fontFamily":"黑体"}});
                        if(t["defstatus"] == 1)
                        {
                            notice.push({text:"(暴击)",style:{"textColor": roundColor, "size":fontSize,"fontFamily":"黑体"}});
                            defHeader.playHp(hurtN, 3);
                        } else {
                            defHeader.playHp(hurtN, 2);
                        }
                    }
                } else { //1暴击 2闪避

                    if(atkCamp != tag["camp"]) {
                        //敌对
                        defHeader.playDefB(5);

                    } else {
                        //友方
                        defHeader.playDefB(5, false);
                    }

                    if(t["defstatus"] == 2) {
                        notice.push({text:"造成", style:{"textColor":mrColor,"size":fontSize,"fontFamily":"黑体"}});
                        notice.push({text:hurtN, style:{"textColor":roundColor,"size":fontSize,"fontFamily":"黑体"}});
                        notice.push({text:"点伤害", style:{"textColor":mrColor,"size":fontSize,"fontFamily":"黑体"}});
                        notice.push({text:"(闪避)", style:{"textColor": roundColor, "size":fontSize,"fontFamily":"黑体"}});
                        defHeader.playHp(hurtN, 4);
                    }

                }

                var hurtL:number = Math.abs(Number(t["defmp"]) - Number(self.initatk[tag["index"]]["mp"]));
                if(hurtL > 0 && atkCamp != tag["camp"]){
                    notice.push({text:"损耗", style:{"textColor":mrColor,"size":fontSize,"fontFamily":"黑体"}});
                    notice.push({text:hurtL, style:{"textColor":defColor,"size":fontSize,"fontFamily":"黑体"}});
                    notice.push({text:"点魔法", style:{"textColor":mrColor,"size":fontSize,"fontFamily":"黑体"}});
                    defHeader.playHp(-hurtL);
                }

                setBuff(tagid);

                self.initatk[tag["index"]]["hp"] = t["defhp"];
                self.initatk[tag["index"]]["mp"] = t["defmp"];

            }
            self.addItems(notice);

            if(atkCamp == 0 && r["atkmp"] >= 0) {

                self.initatk[atkIndex]["mp"] = r["atkmp"];
            }

            self.refrshHead();

            egret.setTimeout(xixue, self, 800);
        };

        var setBuff:Function = function(tagid:string){
            //检测是否有buffer更新
            var buffList:any = r["bufferlist"];
            if(!buffList)return;
            var buffs = buffList[tagid];
            if(!buffs || buffs == "undefined")return;
            self.oldBuffer[tagid] = buffs;
            var buffStr = "";
            for (var bfid in buffs) {
                var buftpl = GameManager.JSON_BUFFER[bfid];
                buffStr += "["+buftpl["name"]+buffs[bfid]+"]";
            }

            var heard:FightHead = self.headList[tagid];
            heard.setBuff(buffStr);

        };

        var xixue:Function = function(){

            if(tag["tag"]["xhp"] && tag["tag"]["xhp"] != "undefined") {
                if(atkCamp > 0) {

                    var hp:number = self.initdef[atkIndex]["hp"];
                    var xhp:number = tag["tag"]["xhp"];

                    if (Math.abs( xhp - hp) > 0) {

                        self.initdef[atkIndex]["hp"] = tag["tag"]["xhp"];
                        head.playHp(Math.abs(xhp - hp), 1);

                        self.refrshHead();

                    } else {
                        fanshang();
                        return;
                    }

                } else {

                    var hp:number = self.initatk[atkIndex]["hp"];
                    var xhp:number = tag["tag"]["xhp"];


                    if (Math.abs( xhp - hp) > 0) {

                        self.initatk[atkIndex]["hp"] = tag["tag"]["xhp"];
                        head.playHp(Math.abs(xhp - hp), 1);

                        self.refrshHead();


                    } else {
                        fanshang();
                        return;
                    }

                }
            } else {
                fanshang();
                return;
            }

            egret.setTimeout(fanshang, self, 800);
        };

        var fanshang:Function = function(){

            if(tag["tag"]["fhp"] && tag["tag"]["fhp"] != "undefined") {
                if(atkCamp > 0) {

                    var hp:number = self.initdef[atkIndex]["hp"];
                    var fhp:number = tag["tag"]["fhp"];

                    if(Math.abs(fhp - hp) > 0) {
                        self.initdef[atkIndex]["hp"] = tag["tag"]["fhp"];
                        head.playHp(Math.abs(fhp - hp), 2);
                        self.refrshHead();
                    } else {
                        atk();
                        return;
                    }


                } else {

                    var hp:number = self.initatk[atkIndex]["hp"];
                    var fhp:number = tag["tag"]["fhp"];


                    if(Math.abs(fhp - hp) > 0) {
                        self.initatk[atkIndex]["hp"] = tag["tag"]["fhp"];
                        head.playHp(Math.abs(fhp - hp), 2);
                        self.refrshHead();

                    } else {
                        atk();
                        return;
                    }


                }
            } else {
                atk();
                return;
            }
            egret.setTimeout(atk, self, 800);
        };

        //更新攻击者buff
        setBuff(r["atkid"]);

        if(r["action"] == 0) {
            //停一回合
            self.startF();
            return;
        }

        atk();
    }

    private endF(over:boolean = false):void
    {

        this.clear();

        this.step = -1;

        GameManager.isFighting = false;

        Main.player.syncCodes();

        if(over)
        {

            if(this.rewards["win"] == "1" || this.rewards["win"] == 1)
            {
                var winArr:Array<any> = [{text:"战斗胜利!", style:{"textColor":0x8B0000,"size":"24","fontFamily":"黑体"}}];
                this.addItems(winArr);

                this.playImgEff("fight_img_2");
            }
            else
            {
                var failArr:Array<any> = [{text:"你挂了...", style:{"textColor":0x8B0000,"size":"24","fontFamily":"黑体"}}];
                this.addItems(failArr);

                this.playImgEff("fight_img_3");
            }
            if(Number(this.rewards["exp"]) > 0) {

                var expArr:Array<any> = [];
                expArr.push({text:"获得经验:", style:{"textColor":0x221f1f,"size":"24","fontFamily":"黑体"}});
                expArr.push({text:this.rewards["exp"], style:{"textColor":0x147E03,"size":"24","fontFamily":"黑体"}});
                this.addItems(expArr);
            }
            if(Number(this.rewards["money"]) > 0) {
                var moenyArr:Array<any> = [];
                moenyArr.push({text:"获得金币:", style:{"textColor":0x221f1f,"size":"24","fontFamily":"黑体"}});
                moenyArr.push({text:this.rewards["money"], style:{"textColor":0xD904AE,"size":"24","fontFamily":"黑体"}});
                this.addItems(moenyArr);
            }
            if(Number(this.rewards["bstone"]) > 0) {
                var bstoneArr:Array<any> = [];
                bstoneArr.push({text:"获得黑铁矿石:", style:{"textColor":0x221f1f,"size":"24","fontFamily":"黑体"}});
                bstoneArr.push({text:this.rewards["bstone"], style:{"textColor":0x000000,"size":"24","fontFamily":"黑体"}});
                this.addItems(bstoneArr);
            }
            if(this.rewards["equips"]) {
                for(var i in this.rewards["equips"]) {
                    var temp:any = this.rewards["equips"][i];
                    var eqpt:any = GameManager.JSON_EQPT[temp["t"]];
                    var eqptArr:Array<any> = [];
                    eqptArr.push({text:"获得装备:", style:{"textColor":0x221f1f,"size":"24","fontFamily":"黑体"}});
                    eqptArr.push({text:"(Lv."+eqpt["lv"]+")"+eqpt["name"], style:{"textColor":GameManager.COLOR[temp["q"]],"size":"24","fontFamily":"黑体"}});
                    this.addItems(eqptArr);
                }
            }
            if(this.boxInfos){
                var del:number[] = this.boxInfos["delKeyIds"];
                if(del && del.length > 0){
                    for(var k in del){
                        Main.player.m_items.delItemById(del[k]);
                    }
                }
                var open:any = this.boxInfos["openedBoxs"];
                for(var tid in open){
                    this.getoPenBoxMsg(open[tid]);
                }

                var miss:any = this.boxInfos["lostBoxs"];
                var color:number = 0x2eed4f;
                for(var tid in miss){
                    var boxT:any = GameManager.JSON_ITEM[tid];
                    if(!boxT)continue;
                    if(tid == 32){
                        //银宝箱
                        color = 0x2753e5;
                    }else if(tid == 33){
                        //金宝箱
                        color = 0xf66026;
                    }
                    var boxArr:Array<any> = [];
                    boxArr.push({text:"发现:", style:{"textColor":0x221f1f,"size":"24","fontFamily":"黑体"}});
                    boxArr.push({text:boxT["name"]+"*"+miss[tid], style:{"textColor":color,"size":"24","fontFamily":"黑体"}});
                    boxArr.push({text:this.rewards["bstone"], style:{"textColor":0x000000,"size":"24","fontFamily":"黑体"}});
                    boxArr.push({text:"但是身上没钥匙只能遗憾离去", style:{"textColor":0x221f1f,"size":"24","fontFamily":"黑体"}});
                    this.addItems(boxArr);
                }
            }

        }
    }

    private getoPenBoxMsg(data:any){
        var str:string = "";
        var color:number = 0x2eed4f;
        for(var tid in data){
            var boxT:any = GameManager.JSON_ITEM[tid];
            if(!boxT)continue;
            if(tid == 32){
                //银宝箱
                color = 0x2753e5;
            }else if(tid == 33){
                //金宝箱
                color = 0xf66026;
            }

            var boxArr:Array<any> = [];
            boxArr.push({text:"开启", style:{"textColor":0x221f1f,"size":"24","fontFamily":"黑体"}});
            boxArr.push({text:boxT["name"], style:{"textColor":color,"size":"24","fontFamily":"黑体"}});
            boxArr.push({text:"获得:", style:{"textColor":0x221f1f,"size":"24","fontFamily":"黑体"}});
            var rewards:any[] = data[tid];
            for(var i in rewards){
                if(!rewards[i])continue;
                for(var i in rewards){
                    if(!rewards[i])continue;
                    if(Number(rewards[i]["maxType"]) == 151){
                        boxArr.push({text:"金币+", style:{"textColor":0x221f1f,"size":"24","fontFamily":"黑体"}});
                        boxArr.push({text:Number(rewards[i]["num"])*Main.player.level, style:{"textColor":0xD904AE,"size":"24","fontFamily":"黑体"}});
                    }else if(Number(rewards[i]["maxType"]) == 52){
                        boxArr.push({text:"元宝+", style:{"textColor":0x221f1f,"size":"24","fontFamily":"黑体"}});
                        boxArr.push({text:rewards[i]["num"], style:{"textColor":0xEEC900,"size":"24","fontFamily":"黑体"}});
                    }else if(Number(rewards[i]["maxType"]) == 156){
                        boxArr.push({text:"经验+", style:{"textColor":0x221f1f,"size":"24","fontFamily":"黑体"}});
                        boxArr.push({text:Number(rewards[i]["num"])*Main.player.level, style:{"textColor":0x147E03,"size":"24","fontFamily":"黑体"}});
                    }else if(Number(rewards[i]["maxType"]) < 50){
                        var itemT:any = GameManager.JSON_ITEM[rewards[i]["itemId"]];
                        if(!itemT)continue;
                        str += " "+itemT.name +"*"+rewards[i]["num"];
                        boxArr.push({text:itemT.name + "*", style:{"textColor":0x221f1f,"size":"24","fontFamily":"黑体"}});
                        boxArr.push({text:rewards[i]["num"], style:{"textColor":0xCD00CD,"size":"24","fontFamily":"黑体"}});
                    }
                }
            }
        }

        this.addItems(boxArr);
    }

    private addItems(strArr:Array<egret.ITextElement>):void
    {
        if(this.dp.length >= 8) this.dp.removeItemAt(0);
        this.dp.addItem(strArr);
    }


    private refrshHead(num:number = 0):void
    {

        var arr:Array<any> = this.initatk;

        if(arr.length > 1)
        {
            this.h_head.visible = true;
        }
        else
        {
            this.h_head.visible = false;
        }

        for(var i = 0; i<arr.length; i++)
        {
            var obj:any = arr[i];

            if(i == 0)
            {
                this.p_head.m_UI.setHp(obj["hp"], obj["maxhp"]);

                this.p_head.m_UI.setMp(obj["mp"], obj["maxmp"]);

                this.p_head.m_UI.setName(obj["name"]+" Lv."+obj["level"]);

                this.p_head.m_UI._text_name.textColor = GameManager.getNameColor();

                this.headList[obj["id"]] = this.p_head;

                if(num == 1) this.p_head.m_UI._head.source = "y_" + Main.player.sex + "_" + Main.player.job;
            }
            else
            {
                this.h_head.m_UI.setHp(obj["hp"], obj["maxhp"]);

                this.h_head.m_UI.setMp(obj["mp"], obj["maxmp"]);

                this.h_head.m_UI.setName("Lv."+obj["level"]+" " +obj["name"]);

                this.headList[obj["id"]] = this.h_head;

                if(num == 1)
                {
                    if(obj["td"]) this.h_head.m_UI._head.source = "h_y_" + obj["td"];
                }
            }
        }

        var m_arr:Array<any> = this.initdef;

        for(var i = 0; i<m_arr.length; i++)
        {
            var m_obj:any = m_arr[i];

            if(i == 0)
            {
                this.headList[m_obj["id"]] = this.m1_head;

                this.m1_head.visible = true;

                this.m1_head.m_UI.setHp(m_obj["hp"], m_obj["maxhp"]);

                this.m1_head.m_UI.setMp(m_obj["mp"], m_obj["maxmp"]);

                this.m1_head.m_UI.setName("Lv."+m_obj["level"]+ " " +m_obj["name"]);

                if(num == 1)
                {
                    var tplId = m_obj["td"];

                    var ts = m_obj["ts"];

                    this.m1_head.scaleX = 0.7;

                    this.m1_head.scaleY = 0.7;

                    this.m1_head.x = Main.guiLayer.width - 240;

                    this.m1_head.m_UI._text_name.textColor = 0xF4D40A;

                    if(Number(ts) == 1)
                    {
                        var ydArr:Array<any> = [];
                        ydArr.push({text:"你遇到了", style:{"textColor":0x221f1f,"size":"24","fontFamily":"黑体"}});
                        ydArr.push({text:"Lv."+ m_obj["level"]+ m_obj["name"], style:{"textColor":0x2178fc,"size":"24","fontFamily":"黑体"}});
                        this.addItems(ydArr);

                        var tplData = GameManager.JSON_MONSTERS[tplId];

                        var boss = tplData["isBoss"];

                        this.m1_head.m_UI._head.source = "m_" + m_obj["td"]; //怪物

                        if(Number(boss) == 1)
                        {
                            this.m1_head.scaleX = 1;

                            this.m1_head.scaleY = 1;

                            this.m1_head.x = Main.guiLayer.width - 300;
                        }

                    }
                    else if(Number(ts) == 3) //玩家
                    {
                        var ydArr:Array<any> = [];
                        ydArr.push({text:"你和", style:{"textColor":0x221f1f,"size":"24","fontFamily":"黑体"}});
                        ydArr.push({text:"Lv."+ m_obj["level"]+ m_obj["name"], style:{"textColor":0x2178fc,"size":"24","fontFamily":"黑体"}});
                        ydArr.push({text:"的战斗开始!", style:{"textColor":0x221f1f,"size":"24","fontFamily":"黑体"}});
                        this.addItems(ydArr);

                        this.m1_head.m_UI._head.source = "y_" + m_obj["gender"] + "_" + m_obj["job"];


                        this.m1_head.scaleX = 1;

                        this.m1_head.scaleY = 1;

                        this.m1_head.x = Main.guiLayer.width - 300;

                        if(m_obj["pk"]) this.m1_head.m_UI._text_name.textColor = GameManager.getNameColor(Number(m_obj["pk"]));
                    }
                }
            }
            else if(i == 1)
            {
                this.headList[m_obj["id"]] = this.m2_head;

                this.m2_head.visible = true;

                this.m2_head.m_UI.setHp(m_obj["hp"], m_obj["maxhp"]);

                this.m2_head.m_UI.setMp(m_obj["mp"], m_obj["maxmp"]);

                this.m2_head.m_UI.setName("Lv."+m_obj["level"]+" "+m_obj["name"]);

                if(num == 1)
                {
                    var ydArr:Array<any> = [];
                    ydArr.push({text:"你遇到了", style:{"textColor":0x221f1f,"size":"24","fontFamily":"黑体"}});
                    ydArr.push({text:"Lv."+ m_obj["level"]+ m_obj["name"], style:{"textColor":0x2178fc,"size":"24","fontFamily":"黑体"}});
                    this.addItems(ydArr);

                    var ts = m_obj["ts"];

                    if(ts == "1" || ts == 1)
                    {
                        this.m2_head.m_UI._head.source = "m_" + m_obj["td"]; //怪物

                        this.m2_head.y = 80;
                    }
                    else
                    {
                        this.m2_head.y = 120;
                    }
                }
            }
            else if(i == 2)
            {
                this.headList[m_obj["id"]] = this.m3_head;

                this.m3_head.visible = true;

                this.m3_head.m_UI.setHp(m_obj["hp"], m_obj["maxhp"]);

                this.m3_head.m_UI.setMp(m_obj["mp"], m_obj["maxmp"]);

                this.m3_head.m_UI.setName("Lv."+m_obj["level"]+" "+m_obj["name"]);

                if(num == 1)
                {
                    var ydArr:Array<any> = [];
                    ydArr.push({text:"你遇到了", style:{"textColor":0x221f1f,"size":"24","fontFamily":"黑体"}});
                    ydArr.push({text:"Lv."+ m_obj["level"]+ m_obj["name"], style:{"textColor":0x2178fc,"size":"24","fontFamily":"黑体"}});
                    this.addItems(ydArr);

                    var ts = m_obj["ts"];

                    if(ts == "1" || ts == 1)
                    {
                        this.m3_head.m_UI._head.source = "m_" + m_obj["td"]; //怪物
                    }
                }
            }
        }
    }
}
