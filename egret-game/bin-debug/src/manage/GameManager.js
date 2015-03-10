var GameManager = (function () {
    function GameManager() {
    }
    /**
     * 根据name关键字创建一个Bitmap对象
     */
    GameManager.createBitmapByName = function (name) {
        var result = new egret.Bitmap();
        var texture = RES.getRes(name);
        result.texture = texture;
        return result;
    };
    GameManager.flyMessage = function () {
        var obj = GameManager.msgArr.shift();
        if (obj) {
            GameManager.flyText(obj);
        }
    };
    GameManager.flyText = function (obj, i) {
        if (i === void 0) { i = 0; }
        var _q = obj["q"];
        var _t = obj["t"];
        var txt = new egret.gui.Label();
        var num = Main.guiLayer.numElements - 1;
        Main.guiLayer.addElementAt(txt, num);
        txt.horizontalCenter = 0;
        txt.y = Main.guiLayer.height / 2;
        txt.textColor = GameManager.COLOR[_q];
        txt.text = _t;
        txt.bold = true;
        var tw = egret.Tween.get(txt, { loop: false });
        tw.to({ y: 50 }, 1500).to({ y: 50 }, 1000).call(function () {
            if (txt.parent)
                Main.guiLayer.removeElement(txt);
        });
    };
    /**
     * 根据秒获得时间字符串
     * @param seconds
     * @returns {string}
     */
    GameManager.getStringBySeconds = function (seconds) {
        if (seconds <= 0)
            return "";
        var hour = Math.floor(seconds / 3600);
        var minutes = Math.floor(seconds / 60);
        var sec = seconds % 60;
        minutes %= 60;
        var s = "";
        if (hour < 10) {
            s += "0";
        }
        s += hour.toString() + " : ";
        if (minutes < 10) {
            s += "0";
        }
        s += minutes.toString() + " : ";
        if (sec < 10) {
            s += "0";
        }
        s += sec.toString();
        return s;
    };
    GameManager.GetEqptPropStr = function (item) {
        var fontSize = 20;
        if (!item)
            return ["实体数据有错"];
        var tpl = item.tpl;
        var pStr = [];
        if (item["strength"] > 0) {
            pStr.push({ text: "Lv." + tpl["lv"] + " " + tpl["name"] + " +" + item["strength"] + "" + "\n\n", style: { "textColor": GameManager.COLOR[item["qly"]], "size": 23, "fontFamily": "黑体" } });
        }
        else {
            pStr.push({ text: "Lv." + tpl["lv"] + " " + tpl["name"] + "" + "\n\n", style: { "textColor": GameManager.COLOR[item["qly"]], "size": 23, "fontFamily": "黑体" } });
        }
        if (Number(tpl["ejob"]) == 0) {
            pStr.push({ text: GameManager.JOB_NAME[Number(tpl["ejob"])] + "" + "\n", style: { "textColor": 0xEEEE00, "size": fontSize, "fontFamily": "黑体" } });
        }
        else {
            pStr.push({ text: "只有" + GameManager.JOB_NAME[Number(tpl["ejob"])] + "可以装备" + "\n", style: { "textColor": 0xEEEE00, "size": fontSize, "fontFamily": "黑体" } });
        }
        pStr.push({ text: "装备评分 " + GameManager.GetEqptGrade(item) + "" + "\n", style: { "textColor": 0x6495ED, "size": fontSize, "fontFamily": "黑体" } });
        if (Number(item["eakey"]) == 10) {
            pStr.push({ text: GameManager.EQPT_PROP[item["eakey"]] + " " + item["eavalue1"] + "-" + item["eavalue2"] + "\n", style: { "textColor": 0xFFFFFF, "size": 22, "fontFamily": "黑体" } });
        }
        else {
            pStr.push({ text: GameManager.EQPT_PROP[item["eakey"]] + " +" + item["eavalue1"] + "\n", style: { "textColor": 0xFFFFFF, "size": 22, "fontFamily": "黑体" } });
        }
        if (Number(item["atk"]) > 0) {
            pStr.push({ text: "攻击 +" + item["atk"] + "\n", style: { "textColor": GameManager.COLOR[item["qly"]], "size": fontSize, "fontFamily": "黑体" } });
        }
        if (Number(item["tois"]) > 0) {
            pStr.push({ text: "道术 +" + item["tois"] + "\n", style: { "textColor": GameManager.COLOR[item["qly"]], "size": fontSize, "fontFamily": "黑体" } });
        }
        if (Number(item["magic"]) > 0) {
            pStr.push({ text: "魔法 +" + item["magic"] + "\n", style: { "textColor": GameManager.COLOR[item["qly"]], "size": fontSize, "fontFamily": "黑体" } });
        }
        if (Number(item["exer"]) > 0) {
            pStr.push({ text: "耐力 +" + item["exer"] + "\n\n", style: { "textColor": GameManager.COLOR[item["qly"]], "size": fontSize, "fontFamily": "黑体" } });
        }
        //神器属性
        if (item["godEq"] > 0) {
            pStr.push({ text: item["godLevel"] + "星神器\n", style: { "textColor": 0xeb1d1d, "size": fontSize, "fontFamily": "黑体" } });
            if (item["gevalue1"] > 0) {
                pStr.push({ text: GameManager.GetGodEqDesc(Number(item["gekey1"]), item["gevalue1"]) + "\n", style: { "textColor": 0xeb1d1d, "size": fontSize, "fontFamily": "黑体" } });
            }
            if (item["gevalue2"] > 0) {
                pStr.push({ text: "\n" + GameManager.GetGodEqDesc(Number(item["gekey2"]), item["gevalue2"]) + "\n", style: { "textColor": 0xeb1d1d, "size": fontSize, "fontFamily": "黑体" } });
            }
        }
        for (var i = 1; i <= 4; i++) {
            if (item["hole" + i]) {
                var hole = Number(item["hole" + i]);
                if (hole > 0) {
                    var gem = GameManager.JSON_BAOSHI[hole];
                    var type = Number(gem["miniType"]);
                    var value = Number(gem["value"]);
                    pStr.push({ text: "\n" + gem["name"] + " " + GameManager.STONE_TYPE[type] + "+" + value + "", style: { "textColor": 0xa129f5, "size": fontSize, "fontFamily": "黑体" } });
                }
            }
        }
        return pStr;
    };
    GameManager.GetGodEqDesc = function (key, value) {
        var god = "";
        switch (key) {
            case 50:
                god = "伤害值 +" + (value / 100).toFixed(1) + "%";
                break;
            case 51:
                god = "攻击吸血 +" + (value / 100).toFixed(1) + "%";
                break;
            case 52:
                god = "防御穿透等级 +" + value;
                break;
            case 53:
                god = "对攻击者造成伤害 +" + (value / 100).toFixed(1) + "%";
                break;
            case 54:
                god = "闪避值 +" + (value / 100).toFixed(1) + "%";
                break;
            case 55:
                god = "击败怪物经验获得 +" + (value / 100).toFixed(1) + "%";
                break;
            case 56:
                god = "暴击值 +" + (value / 100).toFixed(1) + "%";
                break;
            case 57:
                god = "暴击伤害 +" + (value / 100).toFixed(1) + "%";
                break;
            case 58:
                god = "魔防值 +" + (value / 100).toFixed(1) + "%";
                break;
            case 59:
                god = "获得高品质装备概率 +" + (value / 100).toFixed(1) + "%";
                break;
            case 60:
                god = "韧性值 +" + (value / 100).toFixed(1) + "%";
                break;
            case 61:
                god = "体力值 +" + (value / 100).toFixed(1) + "%";
                break;
            case 62:
                god = "防御值 +" + (value / 100).toFixed(1) + "%";
                break;
            case 63:
                god = "每回合回复最大生命 +" + (value / 100).toFixed(1) + "%";
                break;
            case 64:
                god = "护甲值 +" + (value / 100).toFixed(1) + "%";
                break;
            case 65:
                god = "概率抵消不良状态 +" + (value / 100).toFixed(1) + "%";
                break;
            case 66:
                god = "命中值 +" + (value / 100).toFixed(1) + "%";
                break;
            case 67:
                god = "护甲穿透等级 +" + value;
                break;
            case 68:
                god = "魔防穿透等级 +" + value;
                break;
            case 69:
                god = "怪物金币掉落 +" + (value / 100).toFixed(1) + "%";
                break;
        }
        return god;
    };
    GameManager.GetEqptGrade = function (item) {
        var num = 0;
        switch (Number(item["eakey"])) {
            case 10:
                num += Number(item["eavalue1"]) * 3;
                break;
            case 11:
            case 12:
            case 14:
            case 15:
            case 20:
            case 21:
            case 19:
            case 18:
            case 16:
                num += Number(item["eavalue2"]);
                break;
            case 13:
            case 17:
                num += Number(item["eavalue2"]) / 10;
                break;
        }
        if (Number(item["magic"]) > 0) {
            num += Number(item["magic"]) * 2;
        }
        if (Number(item["atk"]) > 0) {
            num += Number(item["atk"]) * 2;
        }
        if (Number(item["tois"]) > 0) {
            num += Number(item["tois"]) * 2;
        }
        if (Number(item["exer"]) > 0) {
            num += Number(item["exer"]) * 2;
        }
        return Math.floor(num);
    };
    GameManager.getNameColor = function (num) {
        if (num === void 0) { num = -1; }
        var pk;
        if (num >= 0) {
            pk = num;
        }
        else {
            pk = Main.player.pk;
        }
        if (pk <= 0) {
            return 0xffffff;
        }
        else if (pk > 0 && pk < 1000) {
            return 0x8F3B03;
        }
        else if (pk >= 1000 && pk < 10000) {
            return 0xF81E05;
        }
        else if (pk >= 10000) {
            return 0xFE0267;
        }
    };
    GameManager.pf = ""; //平台标识
    GameManager.clientId = "";
    GameManager.h5LoginUrl = "";
    GameManager.redirect_url = "";
    GameManager.app_downLoadUrl = {};
    GameManager.pt_token = "";
    GameManager.pt_bindid = "";
    GameManager.nextFightTime = 0;
    GameManager.isFighting = false;
    GameManager.msgSending = false;
    GameManager.mseffisplay = false;
    GameManager.version = "";
    GameManager.verCode = "";
    GameManager.servers = new Array();
    GameManager.delive = {};
    GameManager.server = null;
    GameManager.account = {};
    GameManager.Agree = {};
    GameManager.SESSION_ID = "";
    GameManager.JOB_NAME = ["所有职业通用", "战士", "道士", "法师"];
    GameManager.EQPT_PROP = {
        10: "伤害",
        11: "护甲",
        12: "暴击",
        13: "魔法值",
        14: "防御",
        15: "魔防",
        16: "闪避",
        17: "体力值",
        18: "命中",
        19: "韧性",
        20: "回魔",
        21: "暴击伤害"
    };
    GameManager.EQPT_TYPE = ["", "主手装备", "副手装备", "头盔", "衣服", "勋章", "项链", "戒指(左)", "戒指(右)", "护腕(左)", "护腕(右)"];
    GameManager.COLOR = [0xffffff, 0x2eed4f, 0x2753e5, 0xa129f5, 0xf68926, 0xeb1d1d];
    GameManager.EQPT_QUALITY_NAME = ["白色", "绿色", "蓝色", "紫色", "橙色", "神器"];
    GameManager.STONE_TYPE = ["", "攻击", "道术", "魔法", "耐力"];
    GameManager.ARMS_EXP = [0, 1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31, 33, 35];
    GameManager.FAST_MONEY = [30, 60, 60, 90, 90, 120, 120, 150, 150, 180, 180, 210, 210, 210, 210, 210, 210, 210, 210, 210];
    GameManager.SOCIETY_JOB = {
        1: "会长",
        2: "副会长",
        3: "会员",
        4: "新进会员"
    };
    GameManager.MAX_TYPE = {
        1: "宝石",
        2: "装备",
        3: "小锤子",
        4: "箱子",
        5: "材料",
        6: "礼包",
        7: "神器碎片",
        51: "金币",
        52: "元宝",
        53: "声望",
        54: "荣誉",
        55: "工会经验",
        56: "角色经验",
        57: "黑铁矿石",
        58: "熔炼值",
        59: "增加副本BOSS挑战次数",
        60: "美人经验",
        61: "行会贡献",
        151: "金币",
        152: "元宝",
        153: "声望",
        154: "荣誉",
        155: "工会经验",
        156: "角色经验",
        157: "黑铁矿石",
        158: "熔炼值",
        159: "增加副本BOSS挑战次数"
    };
    //1 战士  2 道士  3 法师
    //待飘的数组
    GameManager.msgArr = new Array();
    GameManager.msgIndex = 0;
    //新的世界聊天信息
    GameManager.worldChatMsg = new Array();
    //行会聊天
    GameManager.worldChatMsgHH = new Array();
    //开始游戏
    GameManager.startGame = false;
    //游戏中止
    GameManager.stopGame = false;
    //登出游戏
    GameManager.logOutGame = false;
    //喇叭状态
    GameManager.hornStop = false;
    //喇叭列表
    GameManager.hornList = [];
    return GameManager;
})();
GameManager.prototype.__class__ = "GameManager";
