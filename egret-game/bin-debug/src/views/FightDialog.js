var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var FightDialog = (function (_super) {
    __extends(FightDialog, _super);
    function FightDialog() {
        _super.call(this);
        this.time = 0;
        this.step = -1;
        this.initatk = [];
        this.initdef = [];
        this.round = [];
        this.oldBuffer = {};
        this.headList = {};
        this.textList = new egret.gui.List();
        this.dp = new egret.gui.ArrayCollection();
        this.isPlay = false;
        this.waitFights = new Array(); //等待战斗
        this._t = 0;
    }
    FightDialog.prototype.createChildren = function () {
        _super.prototype.createChildren.call(this);
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
    };
    FightDialog.prototype.onClick = function (e) {
        switch (e.target) {
            case this.m_UI._btn_fight_census:
                GameManager.msgBox.showMsg(function (r) {
                    if (r) {
                        var url = "http://" + GameManager.server["ip"] + ":" + GameManager.server["port"];
                        var param = "type=0x0051&sid=" + GameManager.SESSION_ID;
                        HttpMessage.sendMsg(url, param);
                    }
                }, "确定要主动挑衅你周围的人？\n(击杀其他玩家有几率获得该玩家的装备但是攻击方会累计PK值。玩家PK值越高死亡后掉落装备几率越大！)", false, "确定", "取消", "挑衅");
                break;
            case this.m_UI._btn_fight_statistics:
                var f = this;
                GameManager.msgBox.showMsg(function (r) {
                    if (r) {
                        DialogManager.open(MapDialog, "MapDialog");
                        f.m_UI._btn_fight_statistics.visible = false;
                        f.tan_ass.visible = false;
                        f.hide();
                    }
                }, "您在当前地图胜率已经达到80%以上，是否挑战boss开启下一张地图？");
                break;
        }
    };
    FightDialog.prototype.setBossWram = function () {
        if (this.m_UI && this.m_UI._btn_fight_statistics) {
            this.m_UI._btn_fight_statistics.visible = true;
            this.tan_ass.visible = true;
        }
    };
    FightDialog.prototype.clear = function () {
        if (this.initUI) {
            this.m1_head.visible = this.m2_head.visible = this.m3_head.visible = false;
            this.m1_head.scaleX = this.m2_head.scaleX = this.m3_head.scaleX = 0.7;
            this.m1_head.scaleY = this.m2_head.scaleY = this.m3_head.scaleY = 0.7;
            this.p_head.setBuff("");
            this.h_head.setBuff("");
            this.m1_head.setBuff("");
            this.m2_head.setBuff("");
            this.m3_head.setBuff("");
        }
    };
    FightDialog.prototype.onTouch = function (e) {
        switch (e.target) {
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
                var vip = GameManager.JSON_VIP[(Number(Main.player.vip) + 1)];
                var rewards = vip["rewards"];
                var arr_rewards = rewards.split("|");
                var str_vip = arr_rewards[0];
                var arr_vip = str_vip.split("#");
                var vip_num = Number(arr_vip[1]);
                var bosscount = Main.player.m_vipRewards[1];
                var count = 0;
                if (bosscount) {
                    count = bosscount["vipBought"];
                }
                if (count > 20)
                    count = 20;
                GameManager.msgBox.showMsg(function (r) {
                    if (r) {
                        var url = "http://" + GameManager.server["ip"] + ":" + GameManager.server["port"];
                        var param = "type=0x0044&sid=" + GameManager.SESSION_ID;
                        HttpMessage.sendMsg(url, param);
                    }
                }, "进行快速战斗2小时，将消耗" + GameManager.FAST_MONEY[count] + "元宝！确定继续？（您是VIP" + Main.player.vip + "，今天剩余" + (vip_num - count) + "次，每天零点重置）");
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
    };
    FightDialog.prototype.checkChat = function (b) {
        if (b === void 0) { b = false; }
        this.textList.visible = b;
        this.m_UI._btn_cut_fight.visible = this.m_UI._btn_fast_fight.visible = this.m_UI._btn_fight_chat.visible = this.m_UI._btn_fight_set.visible = this.m_UI._btn_new_event.visible = b;
        this.chat.visible = !b;
        if (GameManager.worldChatMsg.length > 0) {
            for (var i in GameManager.worldChatMsg) {
                this.chat.addItems(GameManager.worldChatMsg[i]);
            }
            GameManager.worldChatMsg = [];
        }
        if (GameManager.worldChatMsgHH.length > 0) {
            for (var j in GameManager.worldChatMsgHH) {
                this.chat.addItemsHH(GameManager.worldChatMsgHH[j]);
            }
            GameManager.worldChatMsgHH = [];
        }
    };
    FightDialog.prototype.playImgEff = function (s) {
        if (s === void 0) { s = ""; }
        this.m_UI._fight_img.source = s;
        var tw = egret.Tween.get(this.m_UI._fight_img, { loop: false });
        tw.to({ alpha: 1 }, 500).to({ alpha: 0 }, 500);
    };
    FightDialog.prototype.onUpdate = function () {
    };
    FightDialog.prototype.show = function () {
        _super.prototype.show.call(this);
        this.refrshHead();
        Main.iconMeun.setSmallIconVis(false);
        if (!egret.localStorage.getItem("prompt1")) {
            this.m_UI._btn_new_event.visible = false;
            var self = this;
            GameManager.msgBox.showMsg(function (r) {
                self.m_UI._mapwarn.visible = true;
            }, "    从您进入游戏后就已经在自动战斗了，即使退出游戏甚至关闭手机都不会停止战斗(不会消耗流量)，只要您随时再回到游戏时就能收获一堆的经验金币和装备！", true);
        }
        else {
            this.m_UI._btn_new_event.visible = true;
        }
    };
    FightDialog.prototype.hide = function () {
        _super.prototype.hide.call(this);
    };
    FightDialog.prototype.onTimers = function () {
        if (this.initUI) {
            if (Main.player.m_challenge == 1) {
                var map = GameManager.JSON_MAP[Main.player.m_bossMapId];
                var boss = GameManager.JSON_MONSTERS[map["bossId"]];
                this.m_UI.fight_label_boss.text = "接下来将挑战BOSS[" + boss["name"] + "]";
                this.m_UI.fight_souxun.visible = false;
            }
            else if (Main.player.m_challenge == 2) {
                this.m_UI.fight_label_boss.text = "接下来将进行竞技!";
                this.m_UI.fight_souxun.visible = false;
            }
            else if (Main.player.m_challenge == 99) {
                this.m_UI.fight_label_boss.text = "接下来将进行PK战斗";
                this.m_UI.fight_souxun.visible = false;
            }
            else {
                this.m_UI.fight_label_boss.text = "";
            }
        }
        GameManager.nextFightTime--;
        if (GameManager.isFighting)
            return;
        if (this.initUI) {
            if (GameManager.nextFightTime >= 0)
                this.m_UI.fight_label_time.text = "" + GameManager.nextFightTime;
            if (Main.player.m_challenge == 0) {
                this.m_UI.fight_souxun.visible = true;
            }
            else {
                this.m_UI.fight_souxun.visible = false;
            }
        }
        if (GameManager.nextFightTime <= 0) {
            GameManager.nextFightTime = 3;
            var url = "http://" + GameManager.server["ip"] + ":" + GameManager.server["port"];
            var param = "type=0x0007&isBoss=" + Main.player.m_challenge + "&sid=" + GameManager.SESSION_ID + "&mapid=" + Main.player.map;
            if (Main.player.m_challenge == 1) {
                param = "type=0x0007&isBoss=" + Main.player.m_challenge + "&sid=" + GameManager.SESSION_ID + "&mapid=" + Main.player.m_bossMapId;
            }
            else if (Main.player.m_challenge == 2) {
                param = "type=0x0050&sid=" + GameManager.SESSION_ID + "&objid=" + Main.player.m_deulData["id"] + "&rank=" + Main.player.m_deulData["rank"];
            }
            else if (Main.player.m_challenge == 99) {
                param = "type=0x0052&sid=" + GameManager.SESSION_ID;
            }
            HttpMessage.sendMsg(url, param);
            Main.player.m_challenge = 0;
        }
    };
    FightDialog.prototype.startFight = function (obj) {
        if (GameManager.isFighting) {
            this.waitFights.push(obj);
            return;
        }
        GameManager.isFighting = true;
        //发消息取距离下场战斗时长
        var url = "http://" + GameManager.server["ip"] + ":" + GameManager.server["port"];
        var params = "type=0x0053&sid=" + GameManager.SESSION_ID;
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
        if (this.initUI) {
            this.m_UI.fight_souxun.visible = false;
            this.m_UI.fight_label_time.text = "";
            this.m_UI.fight_label_boss.text = "";
            this.playImgEff("fight_img_1");
            var map = GameManager.JSON_MAP[Main.player.map];
            if (map)
                this.m_UI._map_name.text = "" + map["name"];
            else
                this.m_UI._map_name.text = "";
        }
        else {
            this.endF();
            return;
        }
        ;
        this.initFight();
    };
    FightDialog.prototype.initFight = function () {
        this.headList = {};
        if (this.initUI)
            this.refrshHead(1);
        this.startF();
    };
    FightDialog.prototype.startF = function () {
        this.step++;
        if (this.round[this.step]) {
            egret.setTimeout(this.zhongdu, this, 800);
            this.updateOldBuffer();
            //同步本回合角色血蓝
            var tr = this.round[this.step];
            if (tr["atkid"] == Main.player.id) {
                Main.player.syncHMP(tr["atkhp"], tr["atkmp"]);
            }
            else {
                var tags = this.round["target"];
                for (var i in tags) {
                    var tag = tags[i];
                    if (!tag)
                        continue;
                    if (tag["defid"] == Main.player.id) {
                        Main.player.syncHMP(tag["defhp"], tag["defmp"]);
                    }
                }
            }
        }
        else {
            this.endF(true);
        }
    };
    FightDialog.prototype.updateOldBuffer = function () {
        var r = this.round[this.step];
        var tagid = r["atkid"];
        var buffList = r["bufferlist"];
        if (!buffList)
            return;
        var buffs = buffList[tagid];
        if (!buffs || buffs == "undefined")
            return;
        var oldbuffs = this.oldBuffer[tagid];
        if (!oldbuffs || oldbuffs == "undefined")
            return;
        var buffStr = "";
        for (var bfid in buffs) {
            if (!oldbuffs[bfid])
                continue;
            var buftpl = GameManager.JSON_BUFFER[bfid];
            buffStr += "[" + buftpl["name"] + buffs[bfid] + "]";
        }
        var heard = this.headList[tagid];
        heard.setBuff(buffStr);
    };
    FightDialog.prototype.zhongdu = function () {
        if (this.initUI) {
            this.m_UI.fight_label_time.text = "";
            var r = this.round[this.step];
            if (!r)
                this.startF();
            if (r["dhp"] && r["dhp"] != "undefined") {
                var m_id = r["atkid"];
                var head = this.headList[m_id];
                for (var i in this.initatk) {
                    var ini = this.initatk[i];
                    if (ini["id"] == m_id) {
                        var hp = this.initatk[i]['hp'];
                        var dhp = r["dhp"];
                        this.initatk[i]["hp"] = r["dhp"];
                        if (Math.abs(dhp - hp) == 0) {
                            this.huiLan();
                            return;
                        }
                        head.playHp(Math.abs(dhp - hp), 2);
                        this.refrshHead();
                        break;
                    }
                }
                for (var j in this.initdef) {
                    var inis = this.initdef[j];
                    if (inis["id"] == m_id) {
                        var hp = this.initdef[j]["hp"];
                        var dhp = r["dhp"];
                        this.initdef[j]["hp"] = r["dhp"];
                        if (Math.abs(dhp - hp) == 0) {
                            this.huiLan();
                            return;
                        }
                        head.playHp(Math.abs(dhp - hp), 2);
                        this.refrshHead();
                        break;
                    }
                }
            }
            else {
                this.huiLan();
                return;
            }
            egret.setTimeout(this.huiLan, this, 800);
        }
    };
    FightDialog.prototype.huiLan = function () {
        if (this.initUI) {
            this.m_UI.fight_label_time.text = "";
            var r = this.round[this.step];
            if (!r)
                this.startF();
            if (r["rmp"] && r["rmp"] != "undefined") {
                var m_id = r["atkid"];
                var head = this.headList[m_id];
                for (var i = 0; i < this.initatk.length; i++) {
                    var ini = this.initatk[i];
                    if (ini["id"] == m_id) {
                        var mp = this.initatk[i]["mp"];
                        var rmp = r["rmp"];
                        this.initatk[i]["mp"] = r["rmp"];
                        if (Math.abs(rmp - mp) == 0) {
                            this.huiXue();
                            return;
                        }
                        head.playHp(Math.abs(rmp - mp), 0);
                        this.refrshHead();
                        break;
                    }
                }
                for (var j = 0; j < this.initdef.length; j++) {
                    var inis = this.initdef[j];
                    if (inis["id"] == m_id) {
                        var mp = this.initdef[j]["mp"];
                        var rmp = r["rmp"];
                        this.initdef[j]["mp"] = r["rmp"];
                        if (Math.abs(rmp - mp) == 0) {
                            this.huiXue();
                            return;
                        }
                        head.playHp(Math.abs(rmp - mp), 0);
                        this.refrshHead();
                        break;
                    }
                }
            }
            else {
                this.huiXue();
                return;
            }
        }
        egret.setTimeout(this.huiXue, this, 800);
    };
    FightDialog.prototype.huiXue = function () {
        if (this.initUI) {
            var r = this.round[this.step];
            if (r["rhp"] && r["rhp"] != "undefined") {
                var m_id = r["atkid"];
                var head = this.headList[m_id];
                for (var i = 0; i < this.initatk.length; i++) {
                    var ini = this.initatk[i];
                    if (ini["id"] == m_id) {
                        var mp = this.initatk[i]["hp"];
                        var rmp = r["rhp"];
                        this.initatk[i]["hp"] = r["rhp"];
                        if (Math.abs(rmp - mp) == 0) {
                            this.castSkill();
                            return;
                        }
                        head.playHp(Math.abs(rmp - mp), 1);
                        this.refrshHead();
                        break;
                    }
                }
                for (var j = 0; j < this.initdef.length; j++) {
                    var inis = this.initdef[j];
                    if (inis["id"] == m_id) {
                        var mp = this.initdef[j]["hp"];
                        var rmp = r["rhp"];
                        this.initdef[j]["hp"] = r["rhp"];
                        if (Math.abs(rmp - mp) == 0) {
                            this.castSkill();
                            return;
                        }
                        head.playHp(Math.abs(rmp - mp), 1);
                        this.refrshHead();
                        break;
                    }
                }
            }
            else {
                this.castSkill();
                return;
            }
        }
        egret.setTimeout(this.castSkill, this, 800);
    };
    FightDialog.prototype.castSkill = function () {
        var r = this.round[this.step];
        var skillName = "普通攻击";
        if (Number(r["skill"]) > 1) {
            skillName = GameManager.JSON_SKILLS[r["skill"]]["name"];
        }
        //查找攻击者
        var atkIndex = 0;
        var atkCamp = 0;
        var atkName = "";
        for (var i in this.initatk) {
            if (this.initatk[i]["id"] == r["atkid"]) {
                atkIndex = i;
                atkCamp = 0;
                atkName = this.initatk[i]["name"];
                break;
            }
        }
        for (var j in this.initdef) {
            if (this.initdef[j]["id"] == r["atkid"]) {
                atkIndex = j;
                atkCamp = 1;
                atkName = this.initdef[j]["name"];
                break;
            }
        }
        //攻击者头
        var head = this.headList[r["atkid"]];
        //查找防御者
        var defArr = new Array();
        var tags = r["target"];
        for (var z in tags) {
            var defz = tags[z];
            if (!defz)
                continue;
            for (var x in this.initatk) {
                if (defz["defid"] == this.initatk[x]["id"]) {
                    defArr.push({ "index": x, "camp": 0, "tag": defz });
                }
            }
            for (var y in this.initdef) {
                if (defz["defid"] == this.initdef[y]["id"]) {
                    defArr.push({ "index": y, "camp": 1, "tag": defz });
                }
            }
        }
        var self = this;
        var tag = null;
        var roundColor = 0xe40000;
        var mrColor = 0x221f1f;
        var skillColor = 0x467400;
        var defColor = 0x2178fc;
        var atkColor = 0x794baf;
        var fontSize = 24;
        var atk = function () {
            tag = defArr.shift();
            if (!tag) {
                self.startF();
                return;
            }
            //报文
            var notice = [];
            notice.push({ text: "[" + r["round"] + "]", style: { "textColor": roundColor, "size": fontSize, "fontFamily": "黑体" } });
            if (atkCamp > 0)
                head.playDef();
            else
                head.playEffect();
            if (tag["camp"] > 0) {
                var tagid = self.initdef[tag["index"]]["id"];
                notice.push({ text: atkName, style: { "textColor": atkColor, "size": fontSize, "fontFamily": "黑体" } });
                notice.push({ text: "对", style: { "textColor": mrColor, "size": fontSize, "fontFamily": "黑体" } });
                notice.push({ text: self.initdef[tag["index"]]["name"], style: { "textColor": defColor, "size": fontSize, "fontFamily": "黑体" } });
                notice.push({ text: "使用", style: { "textColor": mrColor, "size": fontSize, "fontFamily": "黑体" } });
                notice.push({ text: " " + skillName + " ", style: { "textColor": skillColor, "size": fontSize, "fontFamily": "黑体" } });
                var defHeader = self.headList[tagid];
                var t = tag["tag"];
                var hurtN = Math.abs(Number(t["defhp"]) - Number(self.initdef[tag["index"]]["hp"]));
                if (hurtN > 0) {
                    defHeader.playEffectB(5);
                    if (atkCamp == tag["camp"]) {
                        notice.push({ text: "恢复", style: { "textColor": mrColor, "size": fontSize, "fontFamily": "黑体" } });
                        notice.push({ text: hurtN, style: { "textColor": roundColor, "size": fontSize, "fontFamily": "黑体" } });
                        notice.push({ text: "点生命", style: { "textColor": mrColor, "size": fontSize, "fontFamily": "黑体" } });
                        defHeader.playHp(hurtN, 1);
                    }
                    else {
                        notice.push({ text: "造成", style: { "textColor": mrColor, "size": fontSize, "fontFamily": "黑体" } });
                        notice.push({ text: hurtN, style: { "textColor": roundColor, "size": fontSize, "fontFamily": "黑体" } });
                        notice.push({ text: "点伤害", style: { "textColor": mrColor, "size": fontSize, "fontFamily": "黑体" } });
                        if (t["defstatus"] == 1) {
                            notice.push({ text: "(暴击)", style: { "textColor": roundColor, "size": fontSize, "fontFamily": "黑体" } });
                            defHeader.playHp(hurtN, 3);
                        }
                        else {
                            defHeader.playHp(hurtN, 2);
                        }
                    }
                }
                else {
                    if (atkCamp != tag["camp"]) {
                        //敌对
                        defHeader.playEffectB(5);
                    }
                    else {
                        //友方
                        defHeader.playEffectB(5, false);
                    }
                    if (t["defstatus"] == 2) {
                        notice.push({ text: "造成", style: { "textColor": mrColor, "size": fontSize, "fontFamily": "黑体" } });
                        notice.push({ text: hurtN, style: { "textColor": roundColor, "size": fontSize, "fontFamily": "黑体" } });
                        notice.push({ text: "点伤害", style: { "textColor": mrColor, "size": fontSize, "fontFamily": "黑体" } });
                        notice.push({ text: "(闪避)", style: { "textColor": roundColor, "size": fontSize, "fontFamily": "黑体" } });
                        defHeader.playHp(hurtN, 4);
                    }
                }
                setBuff(tagid);
                self.initdef[tag["index"]]["hp"] = t["defhp"];
                self.initdef[tag["index"]]["mp"] = t["defmp"];
            }
            else {
                var tagid = self.initatk[tag["index"]]["id"];
                notice.push({ text: atkName, style: { "textColor": defColor, "size": fontSize, "fontFamily": "黑体" } });
                notice.push({ text: "对", style: { "textColor": mrColor, "size": fontSize, "fontFamily": "黑体" } });
                notice.push({ text: self.initatk[tag["index"]]["name"], style: { "textColor": atkColor, "size": fontSize, "fontFamily": "黑体" } });
                notice.push({ text: "使用", style: { "textColor": mrColor, "size": fontSize, "fontFamily": "黑体" } });
                notice.push({ text: " " + skillName + " ", style: { "textColor": skillColor, "size": fontSize, "fontFamily": "黑体" } });
                var defHeader = self.headList[tagid];
                var t = tag["tag"];
                var hurtN = Math.abs(Number(t["defhp"]) - Number(self.initatk[tag["index"]]["hp"]));
                if (hurtN > 0) {
                    defHeader.playDefB(5);
                    if (atkCamp == tag["camp"]) {
                        notice.push({ text: "恢复", style: { "textColor": mrColor, "size": fontSize, "fontFamily": "黑体" } });
                        notice.push({ text: hurtN, style: { "textColor": roundColor, "size": fontSize, "fontFamily": "黑体" } });
                        notice.push({ text: "点生命", style: { "textColor": mrColor, "size": fontSize, "fontFamily": "黑体" } });
                        defHeader.playHp(hurtN, 1);
                    }
                    else {
                        notice.push({ text: "造成", style: { "textColor": mrColor, "size": fontSize, "fontFamily": "黑体" } });
                        notice.push({ text: hurtN, style: { "textColor": roundColor, "size": fontSize, "fontFamily": "黑体" } });
                        notice.push({ text: "点伤害", style: { "textColor": mrColor, "size": fontSize, "fontFamily": "黑体" } });
                        if (t["defstatus"] == 1) {
                            notice.push({ text: "(暴击)", style: { "textColor": roundColor, "size": fontSize, "fontFamily": "黑体" } });
                            defHeader.playHp(hurtN, 3);
                        }
                        else {
                            defHeader.playHp(hurtN, 2);
                        }
                    }
                }
                else {
                    if (atkCamp != tag["camp"]) {
                        //敌对
                        defHeader.playDefB(5);
                    }
                    else {
                        //友方
                        defHeader.playDefB(5, false);
                    }
                    if (t["defstatus"] == 2) {
                        notice.push({ text: "造成", style: { "textColor": mrColor, "size": fontSize, "fontFamily": "黑体" } });
                        notice.push({ text: hurtN, style: { "textColor": roundColor, "size": fontSize, "fontFamily": "黑体" } });
                        notice.push({ text: "点伤害", style: { "textColor": mrColor, "size": fontSize, "fontFamily": "黑体" } });
                        notice.push({ text: "(闪避)", style: { "textColor": roundColor, "size": fontSize, "fontFamily": "黑体" } });
                        defHeader.playHp(hurtN, 4);
                    }
                }
                var hurtL = Math.abs(Number(t["defmp"]) - Number(self.initatk[tag["index"]]["mp"]));
                if (hurtL > 0 && atkCamp != tag["camp"]) {
                    notice.push({ text: "损耗", style: { "textColor": mrColor, "size": fontSize, "fontFamily": "黑体" } });
                    notice.push({ text: hurtL, style: { "textColor": defColor, "size": fontSize, "fontFamily": "黑体" } });
                    notice.push({ text: "点魔法", style: { "textColor": mrColor, "size": fontSize, "fontFamily": "黑体" } });
                    defHeader.playHp(-hurtL);
                }
                setBuff(tagid);
                self.initatk[tag["index"]]["hp"] = t["defhp"];
                self.initatk[tag["index"]]["mp"] = t["defmp"];
            }
            self.addItems(notice);
            if (atkCamp == 0 && r["atkmp"] >= 0) {
                self.initatk[atkIndex]["mp"] = r["atkmp"];
            }
            self.refrshHead();
            egret.setTimeout(xixue, self, 800);
        };
        var setBuff = function (tagid) {
            //检测是否有buffer更新
            var buffList = r["bufferlist"];
            if (!buffList)
                return;
            var buffs = buffList[tagid];
            if (!buffs || buffs == "undefined")
                return;
            self.oldBuffer[tagid] = buffs;
            var buffStr = "";
            for (var bfid in buffs) {
                var buftpl = GameManager.JSON_BUFFER[bfid];
                buffStr += "[" + buftpl["name"] + buffs[bfid] + "]";
            }
            var heard = self.headList[tagid];
            heard.setBuff(buffStr);
        };
        var xixue = function () {
            if (tag["tag"]["xhp"] && tag["tag"]["xhp"] != "undefined") {
                if (atkCamp > 0) {
                    var hp = self.initdef[atkIndex]["hp"];
                    var xhp = tag["tag"]["xhp"];
                    if (Math.abs(xhp - hp) > 0) {
                        self.initdef[atkIndex]["hp"] = tag["tag"]["xhp"];
                        head.playHp(Math.abs(xhp - hp), 1);
                        self.refrshHead();
                    }
                    else {
                        fanshang();
                        return;
                    }
                }
                else {
                    var hp = self.initatk[atkIndex]["hp"];
                    var xhp = tag["tag"]["xhp"];
                    if (Math.abs(xhp - hp) > 0) {
                        self.initatk[atkIndex]["hp"] = tag["tag"]["xhp"];
                        head.playHp(Math.abs(xhp - hp), 1);
                        self.refrshHead();
                    }
                    else {
                        fanshang();
                        return;
                    }
                }
            }
            else {
                fanshang();
                return;
            }
            egret.setTimeout(fanshang, self, 800);
        };
        var fanshang = function () {
            if (tag["tag"]["fhp"] && tag["tag"]["fhp"] != "undefined") {
                if (atkCamp > 0) {
                    var hp = self.initdef[atkIndex]["hp"];
                    var fhp = tag["tag"]["fhp"];
                    if (Math.abs(fhp - hp) > 0) {
                        self.initdef[atkIndex]["hp"] = tag["tag"]["fhp"];
                        head.playHp(Math.abs(fhp - hp), 2);
                        self.refrshHead();
                    }
                    else {
                        atk();
                        return;
                    }
                }
                else {
                    var hp = self.initatk[atkIndex]["hp"];
                    var fhp = tag["tag"]["fhp"];
                    if (Math.abs(fhp - hp) > 0) {
                        self.initatk[atkIndex]["hp"] = tag["tag"]["fhp"];
                        head.playHp(Math.abs(fhp - hp), 2);
                        self.refrshHead();
                    }
                    else {
                        atk();
                        return;
                    }
                }
            }
            else {
                atk();
                return;
            }
            egret.setTimeout(atk, self, 800);
        };
        //更新攻击者buff
        setBuff(r["atkid"]);
        if (r["action"] == 0) {
            //停一回合
            self.startF();
            return;
        }
        atk();
    };
    FightDialog.prototype.endF = function (over) {
        if (over === void 0) { over = false; }
        this.clear();
        this.step = -1;
        GameManager.isFighting = false;
        Main.player.syncCodes();
        if (over) {
            if (this.rewards["win"] == "1" || this.rewards["win"] == 1) {
                var winArr = [{ text: "战斗胜利!", style: { "textColor": 0x8B0000, "size": "24", "fontFamily": "黑体" } }];
                this.addItems(winArr);
                this.playImgEff("fight_img_2");
            }
            else {
                var failArr = [{ text: "你挂了...", style: { "textColor": 0x8B0000, "size": "24", "fontFamily": "黑体" } }];
                this.addItems(failArr);
                this.playImgEff("fight_img_3");
            }
            if (Number(this.rewards["exp"]) > 0) {
                var expArr = [];
                expArr.push({ text: "获得经验:", style: { "textColor": 0x221f1f, "size": "24", "fontFamily": "黑体" } });
                expArr.push({ text: this.rewards["exp"], style: { "textColor": 0x147E03, "size": "24", "fontFamily": "黑体" } });
                this.addItems(expArr);
            }
            if (Number(this.rewards["money"]) > 0) {
                var moenyArr = [];
                moenyArr.push({ text: "获得金币:", style: { "textColor": 0x221f1f, "size": "24", "fontFamily": "黑体" } });
                moenyArr.push({ text: this.rewards["money"], style: { "textColor": 0xD904AE, "size": "24", "fontFamily": "黑体" } });
                this.addItems(moenyArr);
            }
            if (Number(this.rewards["bstone"]) > 0) {
                var bstoneArr = [];
                bstoneArr.push({ text: "获得黑铁矿石:", style: { "textColor": 0x221f1f, "size": "24", "fontFamily": "黑体" } });
                bstoneArr.push({ text: this.rewards["bstone"], style: { "textColor": 0x000000, "size": "24", "fontFamily": "黑体" } });
                this.addItems(bstoneArr);
            }
            if (this.rewards["equips"]) {
                for (var i in this.rewards["equips"]) {
                    var temp = this.rewards["equips"][i];
                    var eqpt = GameManager.JSON_EQPT[temp["t"]];
                    var eqptArr = [];
                    eqptArr.push({ text: "获得装备:", style: { "textColor": 0x221f1f, "size": "24", "fontFamily": "黑体" } });
                    eqptArr.push({ text: "(Lv." + eqpt["lv"] + ")" + eqpt["name"], style: { "textColor": GameManager.COLOR[temp["q"]], "size": "24", "fontFamily": "黑体" } });
                    this.addItems(eqptArr);
                }
            }
            if (this.boxInfos) {
                var del = this.boxInfos["delKeyIds"];
                if (del && del.length > 0) {
                    for (var k in del) {
                        Main.player.m_items.delItemById(del[k]);
                    }
                }
                var open = this.boxInfos["openedBoxs"];
                for (var tid in open) {
                    this.getoPenBoxMsg(open[tid]);
                }
                var miss = this.boxInfos["lostBoxs"];
                var color = 0x2eed4f;
                for (var tid in miss) {
                    var boxT = GameManager.JSON_ITEM[tid];
                    if (!boxT)
                        continue;
                    if (tid == 32) {
                        //银宝箱
                        color = 0x2753e5;
                    }
                    else if (tid == 33) {
                        //金宝箱
                        color = 0xf66026;
                    }
                    var boxArr = [];
                    boxArr.push({ text: "发现:", style: { "textColor": 0x221f1f, "size": "24", "fontFamily": "黑体" } });
                    boxArr.push({ text: boxT["name"] + "*" + miss[tid], style: { "textColor": color, "size": "24", "fontFamily": "黑体" } });
                    boxArr.push({ text: this.rewards["bstone"], style: { "textColor": 0x000000, "size": "24", "fontFamily": "黑体" } });
                    boxArr.push({ text: "但是身上没钥匙只能遗憾离去", style: { "textColor": 0x221f1f, "size": "24", "fontFamily": "黑体" } });
                    this.addItems(boxArr);
                }
            }
        }
    };
    FightDialog.prototype.getoPenBoxMsg = function (data) {
        var str = "";
        var color = 0x2eed4f;
        for (var tid in data) {
            var boxT = GameManager.JSON_ITEM[tid];
            if (!boxT)
                continue;
            if (tid == 32) {
                //银宝箱
                color = 0x2753e5;
            }
            else if (tid == 33) {
                //金宝箱
                color = 0xf66026;
            }
            var boxArr = [];
            boxArr.push({ text: "开启", style: { "textColor": 0x221f1f, "size": "24", "fontFamily": "黑体" } });
            boxArr.push({ text: boxT["name"], style: { "textColor": color, "size": "24", "fontFamily": "黑体" } });
            boxArr.push({ text: "获得:", style: { "textColor": 0x221f1f, "size": "24", "fontFamily": "黑体" } });
            var rewards = data[tid];
            for (var i in rewards) {
                if (!rewards[i])
                    continue;
                for (var i in rewards) {
                    if (!rewards[i])
                        continue;
                    if (Number(rewards[i]["maxType"]) == 151) {
                        boxArr.push({ text: "金币+", style: { "textColor": 0x221f1f, "size": "24", "fontFamily": "黑体" } });
                        boxArr.push({ text: Number(rewards[i]["num"]) * Main.player.level, style: { "textColor": 0xD904AE, "size": "24", "fontFamily": "黑体" } });
                    }
                    else if (Number(rewards[i]["maxType"]) == 52) {
                        boxArr.push({ text: "元宝+", style: { "textColor": 0x221f1f, "size": "24", "fontFamily": "黑体" } });
                        boxArr.push({ text: rewards[i]["num"], style: { "textColor": 0xEEC900, "size": "24", "fontFamily": "黑体" } });
                    }
                    else if (Number(rewards[i]["maxType"]) == 156) {
                        boxArr.push({ text: "经验+", style: { "textColor": 0x221f1f, "size": "24", "fontFamily": "黑体" } });
                        boxArr.push({ text: Number(rewards[i]["num"]) * Main.player.level, style: { "textColor": 0x147E03, "size": "24", "fontFamily": "黑体" } });
                    }
                    else if (Number(rewards[i]["maxType"]) < 50) {
                        var itemT = GameManager.JSON_ITEM[rewards[i]["itemId"]];
                        if (!itemT)
                            continue;
                        str += " " + itemT.name + "*" + rewards[i]["num"];
                        boxArr.push({ text: itemT.name + "*", style: { "textColor": 0x221f1f, "size": "24", "fontFamily": "黑体" } });
                        boxArr.push({ text: rewards[i]["num"], style: { "textColor": 0xCD00CD, "size": "24", "fontFamily": "黑体" } });
                    }
                }
            }
        }
        this.addItems(boxArr);
    };
    FightDialog.prototype.addItems = function (strArr) {
        if (this.dp.length >= 8)
            this.dp.removeItemAt(0);
        this.dp.addItem(strArr);
    };
    FightDialog.prototype.refrshHead = function (num) {
        if (num === void 0) { num = 0; }
        var arr = this.initatk;
        if (arr.length > 1) {
            this.h_head.visible = true;
        }
        else {
            this.h_head.visible = false;
        }
        for (var i = 0; i < arr.length; i++) {
            var obj = arr[i];
            if (i == 0) {
                this.p_head.m_UI.setHp(obj["hp"], obj["maxhp"]);
                this.p_head.m_UI.setMp(obj["mp"], obj["maxmp"]);
                this.p_head.m_UI.setName(obj["name"] + " Lv." + obj["level"]);
                this.p_head.m_UI._text_name.textColor = GameManager.getNameColor();
                this.headList[obj["id"]] = this.p_head;
                if (num == 1)
                    this.p_head.m_UI._head.source = "y_" + Main.player.sex + "_" + Main.player.job;
            }
            else {
                this.h_head.m_UI.setHp(obj["hp"], obj["maxhp"]);
                this.h_head.m_UI.setMp(obj["mp"], obj["maxmp"]);
                this.h_head.m_UI.setName("Lv." + obj["level"] + " " + obj["name"]);
                this.headList[obj["id"]] = this.h_head;
                if (num == 1) {
                    if (obj["td"])
                        this.h_head.m_UI._head.source = "h_y_" + obj["td"];
                }
            }
        }
        var m_arr = this.initdef;
        for (var i = 0; i < m_arr.length; i++) {
            var m_obj = m_arr[i];
            if (i == 0) {
                this.headList[m_obj["id"]] = this.m1_head;
                this.m1_head.visible = true;
                this.m1_head.m_UI.setHp(m_obj["hp"], m_obj["maxhp"]);
                this.m1_head.m_UI.setMp(m_obj["mp"], m_obj["maxmp"]);
                this.m1_head.m_UI.setName("Lv." + m_obj["level"] + " " + m_obj["name"]);
                if (num == 1) {
                    var tplId = m_obj["td"];
                    var ts = m_obj["ts"];
                    this.m1_head.scaleX = 0.7;
                    this.m1_head.scaleY = 0.7;
                    this.m1_head.x = Main.guiLayer.width - 240;
                    this.m1_head.m_UI._text_name.textColor = 0xF4D40A;
                    if (Number(ts) == 1) {
                        var ydArr = [];
                        ydArr.push({ text: "你遇到了", style: { "textColor": 0x221f1f, "size": "24", "fontFamily": "黑体" } });
                        ydArr.push({ text: "Lv." + m_obj["level"] + m_obj["name"], style: { "textColor": 0x2178fc, "size": "24", "fontFamily": "黑体" } });
                        this.addItems(ydArr);
                        var tplData = GameManager.JSON_MONSTERS[tplId];
                        var boss = tplData["isBoss"];
                        this.m1_head.m_UI._head.source = "m_" + m_obj["td"]; //怪物
                        if (Number(boss) == 1) {
                            this.m1_head.scaleX = 1;
                            this.m1_head.scaleY = 1;
                            this.m1_head.x = Main.guiLayer.width - 300;
                        }
                    }
                    else if (Number(ts) == 3) {
                        var ydArr = [];
                        ydArr.push({ text: "你和", style: { "textColor": 0x221f1f, "size": "24", "fontFamily": "黑体" } });
                        ydArr.push({ text: "Lv." + m_obj["level"] + m_obj["name"], style: { "textColor": 0x2178fc, "size": "24", "fontFamily": "黑体" } });
                        ydArr.push({ text: "的战斗开始!", style: { "textColor": 0x221f1f, "size": "24", "fontFamily": "黑体" } });
                        this.addItems(ydArr);
                        this.m1_head.m_UI._head.source = "y_" + m_obj["gender"] + "_" + m_obj["job"];
                        this.m1_head.scaleX = 1;
                        this.m1_head.scaleY = 1;
                        this.m1_head.x = Main.guiLayer.width - 300;
                        if (m_obj["pk"])
                            this.m1_head.m_UI._text_name.textColor = GameManager.getNameColor(Number(m_obj["pk"]));
                    }
                }
            }
            else if (i == 1) {
                this.headList[m_obj["id"]] = this.m2_head;
                this.m2_head.visible = true;
                this.m2_head.m_UI.setHp(m_obj["hp"], m_obj["maxhp"]);
                this.m2_head.m_UI.setMp(m_obj["mp"], m_obj["maxmp"]);
                this.m2_head.m_UI.setName("Lv." + m_obj["level"] + " " + m_obj["name"]);
                if (num == 1) {
                    var ydArr = [];
                    ydArr.push({ text: "你遇到了", style: { "textColor": 0x221f1f, "size": "24", "fontFamily": "黑体" } });
                    ydArr.push({ text: "Lv." + m_obj["level"] + m_obj["name"], style: { "textColor": 0x2178fc, "size": "24", "fontFamily": "黑体" } });
                    this.addItems(ydArr);
                    var ts = m_obj["ts"];
                    if (ts == "1" || ts == 1) {
                        this.m2_head.m_UI._head.source = "m_" + m_obj["td"]; //怪物
                        this.m2_head.y = 80;
                    }
                    else {
                        this.m2_head.y = 120;
                    }
                }
            }
            else if (i == 2) {
                this.headList[m_obj["id"]] = this.m3_head;
                this.m3_head.visible = true;
                this.m3_head.m_UI.setHp(m_obj["hp"], m_obj["maxhp"]);
                this.m3_head.m_UI.setMp(m_obj["mp"], m_obj["maxmp"]);
                this.m3_head.m_UI.setName("Lv." + m_obj["level"] + " " + m_obj["name"]);
                if (num == 1) {
                    var ydArr = [];
                    ydArr.push({ text: "你遇到了", style: { "textColor": 0x221f1f, "size": "24", "fontFamily": "黑体" } });
                    ydArr.push({ text: "Lv." + m_obj["level"] + m_obj["name"], style: { "textColor": 0x2178fc, "size": "24", "fontFamily": "黑体" } });
                    this.addItems(ydArr);
                    var ts = m_obj["ts"];
                    if (ts == "1" || ts == 1) {
                        this.m3_head.m_UI._head.source = "m_" + m_obj["td"]; //怪物
                    }
                }
            }
        }
    };
    return FightDialog;
})(Dialog);
FightDialog.prototype.__class__ = "FightDialog";
