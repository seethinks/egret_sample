var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var Player = (function (_super) {
    __extends(Player, _super);
    function Player() {
        _super.call(this);
        this.curContri = 0; //贡献
        this.allContri = 0; //总贡献
        this.honor = 0; //荣誉
        this.times = 0; //喊喇叭次数
        this.pk = 0; //pk值
        this.inPrison = 0;
        this.map = "0"; //当前地图
        this.signature = ""; //个人签名
        /** 美人属性 **/
        this.hg_60 = 0;
        this.hg_61 = 0;
        this.hg_52 = 0;
        this.hg_68 = 0;
        this.hg_65 = 0;
        this.hg_67 = 0;
        this.m_items = new ItemManager();
        this.m_heros = new HeroManager();
        this.m_clickItme = null; //当前操作的物品数据
        this.m_clickIndex = 0; //当前操作装备标示
        this.m_operateObjid = 0; //当前操作对象
        this.m_skillArr = [];
        this.m_shops = {}; //商店集合 key=>"mall商城，society行会商店，duel竞技场商店" value=>ShopData, charge充值商店
        this.m_skillType = 0;
        this.m_vipRewards = {}; //vip福利 及使用情况
        this.m_activityInfo = {}; //活动情况
        this.m_giftBags = {}; //礼包状况
        this.m_mails = {}; //邮件
        this.m_challenge = 0; //是否挑战BOSS或者竞技 1 BOSS  2 竞技
        this.m_bossMapId = "0"; //挑战boss的地图ID
        this.m_deulData = {};
        this.m_gameSet = { "1": "0", "2": "0", "3": "0", "4": "0", "5": "0", "6": "0" }; //游戏设置
        this.m_leaveResult = null;
        this.m_feeRewards = {};
        this.FRCodes = {};
    }
    Player.prototype.playerUpdate = function (obj) {
        for (var k in obj) {
            if (k == "vipRewards") {
                var temps = obj["vipRewards"];
                if (temps && temps.length > 0) {
                    for (var i in temps) {
                        var temp = temps[i];
                        if (!temp)
                            continue;
                        this.m_vipRewards[temp["id"]] = temp;
                    }
                }
            }
            else if (typeof this["set_" + k] == "function") {
                this["set_" + k](obj[k]);
            }
            else {
                this[k] = obj[k];
            }
        }
        DialogManager.allUpdate();
        Main.MainUI.updateData();
    };
    Player.prototype.set_hp = function (num) {
        this.hp = num;
        this.hpmax = num;
    };
    Player.prototype.set_mp = function (num) {
        this.mp = num;
        this.mpmax = num;
    };
    Player.prototype.syncHMP = function (hp, mp) {
        this.hp = hp;
        this.mp = mp;
        var hero = DialogManager.findDialog(HeroEqpt, "HeroEqpt", false);
        if (hero)
            hero.onUpdatePlayer();
        Main.MainUI.updateData();
        Main.MainUI.setHP(hp, this.hpmax);
        Main.MainUI.setMP(mp, this.mpmax);
    };
    Player.prototype.set_money = function (num) {
        if (this.money >= 0) {
            var dMoney = num - this.money;
            if (dMoney > 0) {
                GameManager.msgArr.push({ "t": "金币 +" + dMoney, "q": 1 });
            }
            else if (dMoney < 0) {
                GameManager.msgArr.push({ "t": "金币" + dMoney, "q": 5 });
            }
        }
        if (num > 0) {
            this.money = num;
        }
        else
            this.money = 0;
    };
    Player.prototype.set_gold = function (num) {
        if (this.gold >= 0) {
            var dGold = num - this.gold;
            if (dGold > 0) {
                GameManager.msgArr.push({ "t": "元宝 +" + dGold, "q": 3 });
            }
            else if (dGold < 0) {
                GameManager.msgArr.push({ "t": "元宝" + dGold, "q": 5 });
            }
        }
        if (num > 0) {
            this.gold = num;
        }
        else
            this.gold = 0;
    };
    Player.prototype.set_bstone = function (num) {
        if (this.bstone >= 0) {
            var dBstone = num - this.bstone;
            if (dBstone > 0) {
                GameManager.msgArr.push({ "t": "黑铁矿石 +" + dBstone, "q": 1 });
            }
            else if (dBstone < 0) {
                GameManager.msgArr.push({ "t": "黑铁矿石 " + dBstone, "q": 5 });
            }
        }
        if (num > 0) {
            this.bstone = num;
        }
        else
            this.bstone = 0;
    };
    Player.prototype.set_smelt = function (num) {
        if (this.smelt >= 0) {
            var dSmelt = num - this.smelt;
            if (dSmelt > 0) {
                GameManager.msgArr.push({ "t": "熔炼值 +" + dSmelt + "点", "q": 1 });
            }
        }
        if (num > 0) {
            this.smelt = num;
        }
        else {
            this.smelt = 0;
        }
    };
    Player.prototype.set_exp = function (num) {
        if (this.exp >= 0) {
            var dExp = num - this.exp;
            if (dExp > 0) {
                GameManager.msgArr.push({ "t": "经验 +" + dExp, "q": 1 });
            }
        }
        if (num > 0) {
            this.exp = num;
        }
        else
            this.exp = 0;
    };
    Player.prototype.set_level = function (num) {
        if (this.level != 0) {
            if (num > this.level) {
                if (GameManager.levelUp)
                    GameManager.levelUp.play();
                if (num == 5) {
                    if (Main.iconMeun)
                        Main.iconMeun.setSkill(true);
                    var dialog = DialogManager.findDialog(ItemBag, "ItemBag");
                    if (dialog && !dialog.showing) {
                        dialog.setTab(1);
                        dialog.show();
                    }
                }
                else if (num == 10) {
                    if (Main.iconMeun)
                        Main.iconMeun.setSkill(true);
                }
                else if (num == 15) {
                    if (Main.iconMeun)
                        Main.iconMeun.setSkill(true);
                    if (Main.iconMeun)
                        Main.iconMeun.setBelle(true);
                }
                else if (num == 20) {
                    if (Main.iconMeun)
                        Main.iconMeun.setSkill(true);
                }
                else if (num == 40) {
                    if (Main.iconMeun)
                        Main.iconMeun.setBelle(true);
                }
            }
        }
        this.level = num;
    };
    Player.prototype.syncCodes = function () {
        for (var i in this.FRCodes) {
            var type = this.FRCodes[i];
            if (type) {
                var url = "http://" + GameManager.server["ip"] + ":" + GameManager.server["port"];
                var param = "type=" + type + "&sid=" + GameManager.SESSION_ID;
                HttpMessage.sendMsg(url, param);
            }
            delete this.FRCodes[i];
        }
    };
    return Player;
})(PropBase);
Player.prototype.__class__ = "Player";
