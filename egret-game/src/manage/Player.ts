class Player extends PropBase
{

    public money:number;  //拥有金币

    public bstone:number;  //黑铁石

    public smelt:number;  //熔炼值

    public gold:number;   //拥有元宝

    public vip:number;    //VIP等级

    public vipexp:number; //VIP经验

    public prestige:number;   //声望

    public curContri:number = 0; //贡献

    public allContri:number = 0; //总贡献

    public honor:number = 0;    //荣誉

    public fightvalue:number;     //战斗力

    public times:number = 0;    //喊喇叭次数

    public pk:number = 0;  //pk值

    public inPrison:number = 0;

    public faction:string;        //行会

    public m_society:Society;       //行会数据

    public map:string = "0";        //当前地图

    public signature:string = ""; //个人签名

    public mapmax:number;     //当前开启地图

    public winrate:string;        //当前胜率

    public m_bagSize:number;    //背包格数

    /** 美人属性 **/
    public hg_60:number = 0;

    public hg_61:number = 0;

    public hg_52:number = 0;

    public hg_68:number = 0;

    public hg_65:number = 0;

    public hg_67:number = 0;


    public m_items:ItemManager = new ItemManager();

    public m_heros:HeroManager = new HeroManager();

    public m_clickItme:any = null;         //当前操作的物品数据

    public m_clickIndex:number = 0;       //当前操作装备标示

    public m_operateObjid:number = 0;     //当前操作对象

    public m_skillArr:Array<any> = [];

    public m_shops:any = {}; //商店集合 key=>"mall商城，society行会商店，duel竞技场商店" value=>ShopData, charge充值商店

    public m_skillType:number = 0;

    public m_vipRewards:any = {}; //vip福利 及使用情况

    public m_activityInfo:any = {}; //活动情况

    public m_giftBags:any = {}; //礼包状况

    public m_mails:any = {}; //邮件

    public m_challenge:number = 0;  //是否挑战BOSS或者竞技 1 BOSS  2 竞技

    public m_bossMapId:string = "0"; //挑战boss的地图ID

    public m_deulData:any = {};

    public m_gameSet= {"1":"0","2":"0","3":"0","4":"0","5":"0","6":"0"};   //游戏设置

    public m_deuiList:Array<any>;

    public m_deulMyinfo:any;

    public m_deulRank:Array<any>;

    public m_leaveResult:string = null;

    public m_feeRewards:any = {};

    public FRCodes:any = {};

    public constructor()
    {
        super();
    }

    public playerUpdate(obj:any):void
    {

        for(var k in obj)
        {
            if(k == "vipRewards")
            {
                var temps:Array<any> = obj["vipRewards"];

                if(temps && temps.length > 0)
                {
                    for(var i in temps)
                    {
                        var temp:any = temps[i];
                        if(!temp)continue;
                        this.m_vipRewards[temp["id"]] = temp;
                    }
                }
            }
            else if(typeof this["set_"+k] == "function")
            {
                    this["set_"+k](obj[k]);
            }
            else
            {
                this[k] = obj[k];
            }
        }

        DialogManager.allUpdate();
        Main.MainUI.updateData();

    }

    public set_hp(num:number):void{
        this.hp = num;
        this.hpmax = num;
    }

    public set_mp(num:number):void{
        this.mp = num;
        this.mpmax = num;
    }

    public syncHMP(hp:number, mp:number):void{
        this.hp = hp;
        this.mp = mp;
        var hero:Dialog = DialogManager.findDialog(HeroEqpt, "HeroEqpt", false);
        if(hero)hero.onUpdatePlayer();
        Main.MainUI.updateData();

        Main.MainUI.setHP(hp,this.hpmax);

        Main.MainUI.setMP(mp,this.mpmax);
    }

    public set_money(num:number){
        if(this.money >= 0){
            var dMoney:number = num - this.money;
            if(dMoney >0 ){
                GameManager.msgArr.push({"t":"金币 +"+dMoney, "q":1});
            }else if(dMoney < 0){
                GameManager.msgArr.push({"t":"金币"+dMoney, "q":5});
            }
        }
        if(num > 0){
            this.money = num;
        }else this.money = 0;

    }

    public set_gold(num:number){

        if(this.gold >= 0){
            var dGold:number = num - this.gold;
            if(dGold > 0){
                GameManager.msgArr.push({"t":"元宝 +"+dGold, "q":3});
            }else if(dGold < 0){
                GameManager.msgArr.push({"t":"元宝"+dGold, "q":5});
            }
        }

        if(num > 0){
            this.gold = num;
        }else this.gold = 0;
    }

    public set_bstone(num:number){
        if(this.bstone >= 0){
            var dBstone:number = num - this.bstone;
            if(dBstone > 0){
                GameManager.msgArr.push({"t":"黑铁矿石 +"+dBstone, "q":1});
            }else if(dBstone < 0){
                GameManager.msgArr.push({"t":"黑铁矿石 "+dBstone, "q":5});
            }
        }
        if(num > 0){
            this.bstone = num;
        }else this.bstone = 0;
    }

    public set_smelt(num:number){
        if(this.smelt >= 0){
            var dSmelt:number = num - this.smelt;
            if(dSmelt > 0){
                GameManager.msgArr.push({"t":"熔炼值 +"+dSmelt+"点", "q":1});
            }
        }
        if(num > 0){
            this.smelt = num;
        }else{
            this.smelt = 0;
        }
    }

    public set_exp(num:number){
        if(this.exp >= 0){
            var dExp:number = num - this.exp;
            if(dExp > 0){
                GameManager.msgArr.push({"t":"经验 +"+dExp, "q":1});
            }
        }
        if(num >0){
            this.exp = num;
        }else this.exp = 0;
    }

    public set_level(num:number)
    {
        if(this.level != 0)
        {
            if(num > this.level)
            {
                if(GameManager.levelUp) GameManager.levelUp.play();

                if(num == 5)
                {
                    if(Main.iconMeun) Main.iconMeun.setSkill(true);
                    var dialog:ItemBag = DialogManager.findDialog(ItemBag, "ItemBag");
                    if(dialog && !dialog.showing)
                    {
                        dialog.setTab(1);

                        dialog.show();
                    }
                }
                else if(num == 10)
                {
                    if(Main.iconMeun) Main.iconMeun.setSkill(true);
                }
                else if(num == 15)
                {
                    if(Main.iconMeun) Main.iconMeun.setSkill(true);

                    if(Main.iconMeun) Main.iconMeun.setBelle(true);
                }
                else if(num == 20)
                {
                    if(Main.iconMeun) Main.iconMeun.setSkill(true);
                }
                else if(num == 40)
                {
                    if(Main.iconMeun) Main.iconMeun.setBelle(true);
                }
            }
        }

        this.level = num;
    }


    public syncCodes(){
        for(var i in this.FRCodes){
            var type:string = this.FRCodes[i];
            if(type){
                var url:string = "http://"+GameManager.server["ip"]+":"+GameManager.server["port"];
                var param:string = "type="+type+"&sid="+GameManager.SESSION_ID;
                HttpMessage.sendMsg(url, param);
            }
            delete this.FRCodes[i];
        }
    }
}