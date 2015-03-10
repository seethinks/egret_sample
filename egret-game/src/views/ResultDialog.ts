class ResultDialog extends Dialog
{
    private m_dialog:SmallDialogBox;
    private m_context:egret.gui.Label;

    public constructor() {
        super();
    }

    public createChildren() {
        super.createChildren();

        this.top = 150;

        this.m_dialog = new SmallDialogBox();

        this.addElement(this.m_dialog);

        this.m_dialog.height = 600;

        this.m_context = new egret.gui.Label();

        this.m_context.width = 400;
        this.m_context.height = 400;
        this.m_context.top = 100;
        this.m_context.left = 50;
        this.m_context.paddingLeft = 10;
        this.m_context.lineSpacing = 3;
        this.m_context.size = 20;
        this.m_context.textColor = GameManager.COLOR[1];
        this.addElement(this.m_context);

        this.m_dialog.setTitle("离线战斗报告");

        this.m_dialog._close_btn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouch,this);

        this.m_context.text = "正在计算战斗结果...";

    }

    private onTouch(e:egret.TouchEvent):void
    {
        this.hide();
    }

    public updateText(obj:any)
    {
        this.show();

        var result:string = "正在计算战斗结果....\n";

        if(obj)
        {
            var tag:string = obj["tag"];

            if(tag == "1")
            {
                this.m_dialog.setTitle("离线战斗报告");
            }
            else if(tag == "3")
            {
                this.m_context.text = "警告：您在监牢中，离线期间无任何收益!";
                Main.player.m_leaveResult = null;
                return;
            }
            else if(tag == "2")
            {
                this.m_dialog.setTitle("快速战斗报告");
            }

            var time:number = Number(obj["idleTime"]);

            var map:any = GameManager.JSON_MAP[obj["mapId"]];

            if(obj["houd"]) result += "警告：您在离线挂机时被捕快抓捕，收益减半!";

            result += "战斗时长："+GameManager.getStringBySeconds(time)+"\n";

            result += "您在地图" + map["name"] + "战斗了" + obj["allTimes"] + "次\n";

            result += "战胜：" + obj["winTimes"] + "\n";

            result += "战败：" + obj["failTimes"] + "\n";

            result += "获得经验"+obj["exp"]+"点\n"

            result += "获得金币"+obj["money"]+"个\n";

            var list:Array<any> = obj["itemlist"];

            if(list && list.length > 0)
            {
                for(var i = 0; i < list.length; i++)
                {
                    var eqpt = list[i];

                    result += "掉落：" + GameManager.EQPT_QUALITY_NAME[Number(eqpt["q"])] + "装备*" + eqpt["anum"]+"[自动卖出*"+eqpt["sellnum"]+"]\n";
                }
            }
            else
            {
                result += "无任何装备掉落！";
            }

            var boxInfos:any = obj["boxInfos"];
            if(boxInfos){
                var del:number[] = boxInfos["delKeyIds"];
                if(del && del.length > 0){
                    for(var k in del){
                        Main.player.m_items.delItemById(del[k]);
                    }
                }
                var open:any = boxInfos["openedBoxs"];
                for(var tid in open){
                    result += this.getoPenBoxMsg(open[tid]);
                }

                var miss:any = boxInfos["lostBoxs"];
                for(var tid in miss){
                    var boxT:any = GameManager.JSON_ITEM[tid];
                    if(!boxT)continue;
                    result += "发现["+boxT["name"]+"]*"+miss[tid]+"但是身上没钥匙只能遗憾离去\n";
                }
            }
        }

        this.m_context.text = result;

        Main.player.m_leaveResult = null;
    }

    public show()
    {
        super.show();
    }

    private getoPenBoxMsg(data:any):string{
        var str:string = "";
        for(var tid in data){
            var boxT:any = GameManager.JSON_ITEM[tid];
            if(!boxT)continue;
            str = "开启["+boxT["name"]+"] 获得";
            var rewards:any[] = data[tid];
            for(var i in rewards){
                if(!rewards[i])continue;
                for(var i in rewards){
                    if(!rewards[i])continue;
                    if(Number(rewards[i]["maxType"]) == 151){
                        str += "金币+"+Number(rewards[i]["num"])*Main.player.level+" ";
                    }else if(Number(rewards[i]["maxType"]) == 52){
                        str += "元宝+"+rewards[i]["num"]+" ";
                    }else if(Number(rewards[i]["maxType"]) == 156){
                        str += "经验+"+Number(rewards[i]["num"])*Main.player.level+" ";
                    }else if(Number(rewards[i]["maxType"]) < 50){
                        var itemT:any = GameManager.JSON_ITEM[rewards[i]["itemId"]];
                        if(!itemT)continue;
                        str += " "+itemT.name +"*"+rewards[i]["num"];
                    }
                }
            }
        }

        return str + "\n";
    }
}