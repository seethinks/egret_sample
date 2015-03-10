class GameManager
{
    public static pf:string = ""; //平台标识
    public static clientId:string = "";
    public static h5LoginUrl:string = "";
    public static redirect_url:string = "";

    public static app_downLoadUrl:any = {};

    public static pt_token:string = "";
    public static pt_bindid:string = "";

    public static dataEyes:dataEyeApi;//数据采集

    public static nextFightTime:number = 0;
    public static isFighting:boolean = false;

    public static msgSending:boolean = false;
    public static mseffisplay:boolean = false;

    public static version:string = "";
    public static verCode:string = "";

    public static servers:any[] = new Array();

    public static delive:any = {};

    public static server:any = null;

    public static account:any = {};

    public static Agree:any = {};

    public static SESSION_ID:string = "";

    public static JOB_NAME:Array<string> = ["所有职业通用","战士","道士","法师"];

    public static EQPT_PROP:any =
    {
        10:"伤害",
        11:"护甲",
        12:"暴击",
        13:"魔法值",
        14:"防御",
        15:"魔防",
        16:"闪避",
        17:"体力值",
        18:"命中",
        19:"韧性",
        20:"回魔",
        21:"暴击伤害"
    };

    public static EQPT_TYPE:Array<string> = ["","主手装备","副手装备","头盔","衣服","勋章","项链","戒指(左)","戒指(右)","护腕(左)","护腕(右)"];

    public static JSON_BAOSHI:any;

    public static JSON_MAP:any;

    public static JSON_MONSTERS:any;

    public static JSON_EQPT:any;

    public static JSON_OCCUPATION:any;

    public static JSON_RECAST:any;

    public static JSON_STRENGTH:any;

    public static JSON_BUFFER:any;

    public static JSON_SKILLS:any;

    public static JSON_ERROR:any;

    public static JSON_NAME:any;

    public static JSON_VIP:any;

    public static JSON_VIP_DESC:any;

    public static JSON_ITEM:any;

    public static JSON_SHOP_REF:any;

    public static JSON_HELP:any;

    public static JSON_HONOUR_SHOP:any;

    public static JSON_GIFT:any;

    public static JSON_HERO:any;

    public static JSON_HERO_GODATT:any;

    public static JSON_HERO_UPSTAR:any;

    public static JSON_SOCIETY_SHOP:any;

    public static JSON_HELP_TIP:any;

    public static JSON_ROLE:any;

    public static COLOR:Array<any> = [0xffffff, 0x2eed4f, 0x2753e5, 0xa129f5, 0xf68926, 0xeb1d1d];

    public static EQPT_QUALITY_NAME:Array<string> = ["白色", "绿色", "蓝色", "紫色", "橙色", "神器"];

    public static STONE_TYPE:Array<string> = ["", "攻击", "道术", "魔法", "耐力"];

    public static ARMS_EXP:Array<any> = [0, 1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31, 33, 35];

    public static FAST_MONEY:Array<any> = [30, 60, 60, 90, 90, 120, 120, 150, 150, 180, 180, 210, 210, 210, 210, 210, 210, 210, 210, 210];

    public static SOCIETY_JOB:any = {
        1:"会长",
        2:"副会长",
        3:"会员",
        4:"新进会员"
    };

    public static MAX_TYPE:any = {
        1:"宝石",
        2:"装备",
        3:"小锤子",
        4:"箱子",
        5:"材料",
        6:"礼包",
        7:"神器碎片",
        51:"金币",
        52:"元宝",
        53:"声望",
        54:"荣誉",
        55:"工会经验",
        56:"角色经验",
        57:"黑铁矿石",
        58:"熔炼值",
        59:"增加副本BOSS挑战次数",
        60:"美人经验",
        61:"行会贡献",
        151:"金币",
        152:"元宝",
        153:"声望",
        154:"荣誉",
        155:"工会经验",
        156:"角色经验",
        157:"黑铁矿石",
        158:"熔炼值",
        159:"增加副本BOSS挑战次数"
    };

    //1 战士  2 道士  3 法师

    //待飘的数组
    public static msgArr:Array<any> = new Array<any>();

    public static msgIndex:number = 0;

    public static msgBox:MessageBox;

    public static loding:Loding;

    public static levelUp:LevelUp;

    //新的世界聊天信息
    public static worldChatMsg:any[] = new Array();
    //行会聊天
    public static worldChatMsgHH:any[] = new Array();

    //开始游戏
    public static startGame:boolean = false;
    //游戏中止
    public static stopGame:boolean = false;
    //登出游戏
    public static logOutGame:boolean = false;

    //喇叭
    public static horn:Horn;
    //喇叭状态
    public static hornStop:boolean = false;
    //喇叭列表
    public static hornList:Array<any> = [];

    public constructor()
    {

    }

    /**
     * 根据name关键字创建一个Bitmap对象
     */
    public static createBitmapByName(name:string):egret.Bitmap
    {
        var result:egret.Bitmap = new egret.Bitmap();

        var texture:egret.Texture = RES.getRes(name);

        result.texture = texture;

        return result;
    }

    public static flyMessage():void
    {
        var obj:any = GameManager.msgArr.shift();
        if(obj)
        {
            GameManager.flyText(obj);
        }
    }

    public static flyText(obj:any, i:number = 0):void
    {
        var _q = obj["q"];

        var _t = obj["t"];

        var txt:egret.gui.Label = new egret.gui.Label();

        var num = Main.guiLayer.numElements - 1;

        Main.guiLayer.addElementAt(txt, num);

        txt.horizontalCenter = 0;

        txt.y = Main.guiLayer.height / 2;

        txt.textColor = GameManager.COLOR[_q];

        txt.text = _t;

        txt.bold = true;

        var tw = egret.Tween.get(txt,{loop:false});

        tw.to({y:50}, 1500).to({y:50}, 1000).call(function()
        {
            if(txt.parent) Main.guiLayer.removeElement(txt);
        });
    }

    /**
     * 根据秒获得时间字符串
     * @param seconds
     * @returns {string}
     */
    public static getStringBySeconds(seconds:number):string
    {
        if(seconds <= 0) return "";

        var hour:number = Math.floor(seconds / 3600);

        var minutes:number = Math.floor(seconds / 60);

        var sec:number = seconds % 60;

        minutes %= 60;

        var s:string = "";

        if(hour < 10)
        {
            s += "0";
        }

        s += hour.toString() + " : ";

        if(minutes < 10)
        {
            s += "0";
        }

        s += minutes.toString() + " : ";

        if(sec < 10)
        {
            s += "0";
        }

        s += sec.toString();

        return s;
    }

    public static GetEqptPropStr(item:ItemBase):Array<any>
    {
        var fontSize:number = 20;

        if(!item) return ["实体数据有错"];

        var tpl = item.tpl;

        var pStr:Array<any> = [];

        if(item["strength"] > 0)
        {
            pStr.push({text:"Lv." + tpl["lv"] + " " + tpl["name"] + " +" + item["strength"] + ""+"\n\n",
                style:{"textColor":GameManager.COLOR[item["qly"]],"size":23,"fontFamily":"黑体"}});
        }
        else
        {
            pStr.push({text:"Lv." + tpl["lv"] + " " + tpl["name"] + ""+"\n\n",
                style:{"textColor":GameManager.COLOR[item["qly"]],"size":23,"fontFamily":"黑体"}});
        }

        if(Number(tpl["ejob"]) == 0)
        {
            pStr.push({text:GameManager.JOB_NAME[Number(tpl["ejob"])] + ""+"\n",
                style:{"textColor":0xEEEE00,"size":fontSize,"fontFamily":"黑体"}});
        }
        else
        {
            pStr.push({text:"只有" + GameManager.JOB_NAME[Number(tpl["ejob"])] + "可以装备"+"\n",
                style:{"textColor":0xEEEE00,"size":fontSize,"fontFamily":"黑体"}});
        }

        pStr.push({text:"装备评分 " + GameManager.GetEqptGrade(item) + ""+"\n",
            style:{"textColor":0x6495ED,"size":fontSize,"fontFamily":"黑体"}});

        if(Number(item["eakey"]) == 10)
        {
            pStr.push({text:GameManager.EQPT_PROP[item["eakey"]] + " " + item["eavalue1"] + "-" + item["eavalue2"] + "\n",
                style:{"textColor":0xFFFFFF,"size":22,"fontFamily":"黑体"}});
        }
        else
        {
            pStr.push({text:GameManager.EQPT_PROP[item["eakey"]] + " +" + item["eavalue1"] + "\n",
                style:{"textColor":0xFFFFFF,"size":22,"fontFamily":"黑体"}});
        }


        if(Number(item["atk"]) > 0)
        {
            pStr.push({text:"攻击 +" + item["atk"] + "\n",
                style:{"textColor":GameManager.COLOR[item["qly"]],"size":fontSize,"fontFamily":"黑体"}});
        }
        if(Number(item["tois"]) > 0)
        {
            pStr.push({text:"道术 +" + item["tois"] + "\n",
                style:{"textColor":GameManager.COLOR[item["qly"]],"size":fontSize,"fontFamily":"黑体"}});
        }

        if(Number(item["magic"]) > 0)
        {
            pStr.push({text:"魔法 +" + item["magic"] + "\n",
                style:{"textColor":GameManager.COLOR[item["qly"]],"size":fontSize,"fontFamily":"黑体"}});
        }

        if(Number(item["exer"]) > 0)
        {
            pStr.push({text:"耐力 +" + item["exer"] + "\n\n",
                style:{"textColor":GameManager.COLOR[item["qly"]],"size":fontSize,"fontFamily":"黑体"}});
        }

        //神器属性
        if(item["godEq"]> 0)
        {
            pStr.push({text:item["godLevel"] + "星神器\n",
                style:{"textColor":0xeb1d1d,"size":fontSize,"fontFamily":"黑体"}});

            if(item["gevalue1"] > 0)
            {
                pStr.push({text:GameManager.GetGodEqDesc(Number(item["gekey1"]), item["gevalue1"])+"\n",
                    style:{"textColor":0xeb1d1d,"size":fontSize,"fontFamily":"黑体"}});
            }
            if(item["gevalue2"]> 0)
            {
                pStr.push({text:"\n" + GameManager.GetGodEqDesc(Number(item["gekey2"]), item["gevalue2"])+"\n",
                    style:{"textColor":0xeb1d1d,"size":fontSize,"fontFamily":"黑体"}});
            }
        }

        for(var i = 1; i <= 4; i++)
        {
            if(item["hole" + i])
            {
                var hole:number = Number(item["hole" + i]);

                if(hole > 0)
                {
                    var gem:any = GameManager.JSON_BAOSHI[hole];

                    var type:number = Number(gem["miniType"]);

                    var value:number = Number(gem["value"]);

                    pStr.push({text:"\n" + gem["name"] + " " + GameManager.STONE_TYPE[type] + "+" + value + "",
                        style:{"textColor":0xa129f5,"size":fontSize,"fontFamily":"黑体"}});
                }
            }
        }

        return pStr;
    }

    public static GetGodEqDesc(key:number, value:number):string{
        var god:string = "";

        switch (key)
        {
            case 50:
                god = "伤害值 +"+(value/100).toFixed(1)+"%";
                break;
            case 51:
                god = "攻击吸血 +"+(value/100).toFixed(1)+"%";
                break;
            case 52:
                god = "防御穿透等级 +"+value;
                break;
            case 53:
                god = "对攻击者造成伤害 +"+(value/100).toFixed(1) +"%";
                break;
            case 54:
                god = "闪避值 +"+(value/100).toFixed(1)+"%";
                break;
            case 55:
                god = "击败怪物经验获得 +"+(value/100).toFixed(1) +"%";
                break;
            case 56:
                god = "暴击值 +"+(value/100).toFixed(1)+"%";
                break;
            case 57:
                god = "暴击伤害 +"+(value/100).toFixed(1)+"%";
                break;
            case 58:
                god = "魔防值 +"+(value/100).toFixed(1)+"%";
                break;
            case 59:
                god = "获得高品质装备概率 +"+(value/100).toFixed(1)+"%";
                break;
            case 60:
                god = "韧性值 +"+(value/100).toFixed(1)+"%";
                break;
            case 61:
                god = "体力值 +"+(value/100).toFixed(1)+"%";
                break;
            case 62:
                god = "防御值 +"+(value/100).toFixed(1)+"%";
                break;
            case 63:
                god = "每回合回复最大生命 +" +(value/100).toFixed(1)+"%";
                break;
            case 64:
                god = "护甲值 +" +(value/100).toFixed(1)+"%";
                break;
            case 65:
                god = "概率抵消不良状态 +" + (value/100).toFixed(1) +"%";
                break;
            case 66:
                god = "命中值 +"+(value/100).toFixed(1) +"%";
                break;
            case 67:
                god = "护甲穿透等级 +"+value;
                break;
            case 68:
                god = "魔防穿透等级 +"+value;
                break;
            case 69:
                god = "怪物金币掉落 +"+ (value/100).toFixed(1)+"%";
                break;
        }
        return god;
    }

    public static GetEqptGrade(item:ItemBase):number
    {
        var num:number =  0;

//        10:"伤害",
//        11:"护甲",
//        12:"暴击",
//        13:"魔法值",
//        14:"防御",
//        15:"魔防",
//        16:"闪避",
//        17:"体力值",
//        18:"命中",
//        19:"韧性",
//        20:"回魔",
//        21:"暴击伤害"

        switch(Number(item["eakey"])){
            case 10:
                num += Number(item["eavalue1"])*3;
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
                num += Number(item["eavalue2"])/10;
                break;
        }


        if(Number(item["magic"]) > 0)
        {
            num += Number(item["magic"]) * 2;
        }

        if(Number(item["atk"]) > 0)
        {
            num += Number(item["atk"]) * 2;
        }

        if(Number(item["tois"]) > 0)
        {
            num += Number(item["tois"]) * 2;
        }

        if(Number(item["exer"]) > 0)
        {
            num += Number(item["exer"]) * 2;
        }

        return Math.floor(num);
    }

    public static getNameColor(num:number = -1):number
    {
        var pk:number;

        if(num >= 0)
        {
            pk = num;
        }
        else
        {
            pk = Main.player.pk;
        }

        if(pk <= 0)
        {
            return 0xffffff;
        }
        else if(pk > 0 && pk < 1000)
        {
            return 0x8F3B03;
        }
        else if(pk >= 1000 && pk < 10000)
        {
            return 0xF81E05;
        }
        else if(pk >= 10000)
        {
            return 0xFE0267;
        }
    }

}