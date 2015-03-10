class _0x0048
{

    public constructor() {}

    public parseData(obj:any)
    {
        if(!obj) return;
        if(!GameManager.startGame)return;

        var str:string = "大刀侍卫";

        if(obj["guard"])
        {
            var guard:number = Number(obj["guard"]);

            switch (guard)
            {
                case 1:
                    str = "沙城大刀";
                    break;
                case 2:
                    str = "盟重大刀";
                    break;
                case 3:
                    str = "比奇大刀";
                    break;
                case 4:
                    str = "边界大刀";
                    break;
            }
        }

        if(obj["tag"] == 3)
        {
            GameManager.msgBox.showMsg(function(r)
            {
                return;
            }, "你被["+str+"]抓获，但趁侍卫不注意，脚底抹油溜了~~~", true, "关闭" , "", "警告");

        }

        if(obj["tag"] == 2)
        {
            GameManager.msgBox.showMsg(function(r)
            {
                return;
            }, "你被["+str+"]抓获，下半生恐怕要在监狱里面度过了~~~", true, "关闭" , "", "警告");

        }

        if(obj["tag"] == 1)
        {
            //{id:"", name:"", level:"", sex:"", job:"", faction:"", fightvalue:""}
            var says:string[] = ["看起来很有钱，很任性，嚣张的从你面前经过，你要不要削他？", "正在挑战boss中，你要不要偷袭他？", "已经在这个地图挂了三小时了，你要不要把他干回城？",
                "名字看起来红的已经发紫了，你要教育他么？", "刚刚爆掉别人的装备，正要逃跑，你要不要截掉他的战果?", "在你前面放了个很臭的屁，你要不要教育他？", "看起来像这个游戏的策划，自称非常耐打，你要打她吗",
                "神似这个游戏的程序，正在努力刷装备，你要不要KO他？", "已经精疲力竭了，正坐在地上休息，你要不要偷袭他？", "带着战利品从你面前经过，连一百块钱都不给你，你要不要PK他？",
                "好像这个游戏的美术，刚买了一堆化妆品向你炫耀，你要不要爆掉她？","已让这地图血流成河，你是否要替天行道？", "正在死人堆上悠闲地打盹，你是否要让他永远睡去？","正在调戏良家妇女了，你是否要拔刀相助？",
                "已是本地的地头蛇，该你发威了！", "又在沙巴克叫嚣了，来自星星的你是否要代表月亮消灭他？", "据说是灭绝师太的后人，是否结束他迷惑错乱的人生？", "小小年纪就视人命如草芥，是否要给他点“colour see see”？",
                "被打得七窍出血、面目全非，是否要替他解脱？","又在卖弄他的小学生作文了，用文言文把他吓死吧！","简直是个瘟神！你还不快跑！", "正在用臀部制造雾霾，你是否要为地球的环境而战？","貌似比奇的巨商，你是不是想说“见面分一半”？",
                "刚刚从监牢越狱出来，是否送他回肖申克？", "又在炫耀着强迫老婆婆过马路呢，是否呵斥他放下那婆婆？", "已经杀人如麻了，要不要去结束他的战绩。", "暗淡的目光扫视周围，到处是尸体。站在他的对面，你怕了么？","已经超越神了……拜托谁去杀了他吧",
                "要去更高级的地图了，要不要把他留下？", "叫嚣着“天下无敌”呢，要不要让他知道天外有天？", "是神器专业户，是否去分一杯羹？", "要断气了，是否要补刀？", "已经杀红眼了，pk值根本无法形容他的残暴！","远道而来，专程与你切磋武艺，你敢应战吗？",
                "想要几件你的武器，你能拱手相让吗？", "说想拿你舒松一下筋骨，你尿了吗？", "说着快使用双截棍呵呵哈嘿，向你扑来，是否要将其一脚踢开？", "正在讥笑你装备太渣，要不要让他知道什么叫等级压制?", "正在疯了似地抄作业，要不要伺机而动？"];

            var say:string = obj["name"] +" "+says[Math.floor(Math.random()*says.length)] +
                "\n\n[等级:"+obj["level"] +" 职业:"+ GameManager.JOB_NAME[obj["job"]] + " 战力:"+obj["fightvalue"];
            if(!obj["faction"])say += " 行会:暂无";
            else say += " 行会:"+obj["faction"];
            say += "] PK值：" + obj["pk"];
            //弹出提示框
            GameManager.msgBox.showMsg(function(r){
                if(r){
                    Main.player.m_challenge = 99;
                }
            }, say, false, "砍  他", "放过他", "地图偶遇");

            return;
        }

        GameManager.msgBox.showMsg(function(r){

        }, "你寻遍了整张地图，无人敢接受你的挑战！(去更高级的地图寻找对手吧！)", true, "关闭" , "", "地图偶遇");
    }
}
