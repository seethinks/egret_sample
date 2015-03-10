class ItemManager {

    public holdEq:any = {}; //装备中的装备
    public equips:Equip[] = new Array(); //背包内装备
    public items:Item[] = new Array(); //背包中道具

    public swholdEq:any = {}; //美人装备的

    public initOk:boolean = false;

    public constructor(){}

    public clear(){
        this.holdEq = {};
        this.equips = [];
        this.items = [];
        this.initOk = false;
    }

    public sortItems(){
        //排序背包内装备
        this.equips.sort(function(x:Equip, y:Equip){
            if(y.godEq > x.godEq){
                return 1;
            }else if(y.godEq == x.godEq){
                if(y.qly > x.qly){
                    return 1;
                }else if(y.qly == x.qly){
                    if(y.tpl.lv > x.tpl.lv){
                        return 1;
                    }else if(y.tpl.lv == x.tpl.lv){
                        if(y.grade > x.grade){
                            return 1;
                        }
                    }
                }
            }
            return -1;
        });
        //排序背包内物品
        this.items.sort(function(x:Item, y:Item){
            if(y.maxType > x.maxType){
                return 1;
            }else if(y.maxType == x.maxType){
                if(y.templateid > x.templateid){
                    return 1;
                }
            }
            return -1;
        });

    }

    //增加一件物品
    public addItem(data:any):ItemBase
    {
//        console.log(data);
//        maxType 1宝石 2装备 >2道具

        var itemBase:ItemBase = null;

        if(Number(data["maxType"]) == 2) {
            //装备
            var equip:Equip = new Equip();
            equip.update(data);
            //穿戴中
            if(equip.postion > 0) {
                //判断所有者
                if(equip.belong == Main.player.id){
                    this.holdEq[equip.postion] = equip;
                }else{
                    var swhe:any = this.swholdEq[equip.belong];
                    if(!swhe){
                        swhe = {};
                        this.swholdEq[equip.belong] = swhe;
                    }
                    swhe[equip.postion] = equip;
                }

            } else {
                this.equips.push(equip);
            }
            itemBase = equip;

        }
        else if(Number(data["maxType"]) == 1)
        {
            //宝石
            var gem:Gem = new Gem();
            gem.update(data);
            this.items.push(gem);
            itemBase = gem;
        }
        else
        {
            //道具
            var item:Item = new Item();
            item.update(data);
            this.items.push(item);

            itemBase = item;

            if(Number(data["maxType"]) == 6)
            {
                Main.iconMeun.setBag(true);

                var bag:ItemBag = DialogManager.findDialog(ItemBag, "ItemBag");

                if(bag && !bag.showing) bag.setItemW(true);
            }
        }

        return itemBase;
    }

    //删除物品byid return 1装备栏 2背包装备 3背包道具 0没找到
    public delItemById(id:number):number {
//        console.log("del"+id);
        for(var i in this.holdEq){
            if(!this.holdEq[i])continue;
            if(id == this.holdEq[i].id){
                delete this.holdEq[i];
                return 1;
            }
        }

        for(var h in this.swholdEq) {
            if(!this.swholdEq[h])continue;
            for(var i in this.swholdEq[h]){
                if(!this.swholdEq[h][i])continue;
                if(id == this.swholdEq[h][i].id){
                    delete this.swholdEq[h][i];
                    return 4;
                }
            }
        }

        var delIndex:number = -1;

        for(var i in this.equips) {
            if(!this.equips[i])continue;
            if(id == this.equips[i].id){
                delIndex = i;
                break;
            }
        }
        if(delIndex > -1) {
            this.equips.splice(delIndex, 1);
            return 2;
        }

        for(var i in this.items) {
            if(!this.items[i])continue;
            if(id == this.items[i].id){
                delIndex = i;
                break;
            }
        }
        if(delIndex > -1) {
            this.items.splice(delIndex, 1);
            return 3;
        }

        return 0;

    }

    //删除物品 return 1装备栏 2背包装备 3背包道具 0没找到
    public delItem(item:ItemBase):number {
        //console.log("del"+item.id);
        var delIndex:number = -1;
        if(item.maxType == 2) {
            //装备
            if(item.postion > 0){

                if(item["belong"] == Main.player.id){
                    delete this.holdEq[item.postion];
                }else{
                    delete this.swholdEq[item["belong"]][item.postion];
                }

                return 1;
            } else {
                for(var i in this.equips){
                    if(!this.equips[i])continue;
                    if(item.id == this.equips[i].id){
                        delIndex = i;
                        break;
                    }
                }
                if(delIndex > -1){
                    this.equips.splice(i, 1);
                    return 2;
                }
            }

        } else {
            //道具 宝石
            for(var i in this.items) {
                if(!this.items[i])continue;
                if(item.id == this.items[i].id){
                    delIndex = i;
                    break;
                }
            }
            if(delIndex > -1) {
                this.items.splice(i, 1);
                return 3;
            }
        }

        return 0;

    }

    //查找一件物品byid
    public findItemById(id:number):ItemBase {

        for(var i in this.holdEq){
            if(!this.holdEq[i])continue;
            if(id == this.holdEq[i].id){
                return this.holdEq[i];
            }
        }

        for(var i in this.equips) {
            if(!this.equips[i])continue;
            if(id == this.equips[i].id){
                return this.equips[i];
            }
        }

        for(var i in this.items) {
            if(!this.items[i])continue;
            if(id == this.items[i].id){
                return this.items[i];
            }
        }

        for(var h in this.swholdEq) {
            if(!this.swholdEq[h])continue;
            for(var i in this.swholdEq[h]){
                if(!this.swholdEq[h][i])continue;
                if(id == this.swholdEq[h][i].id){
                    return this.swholdEq[h][i];
                }
            }
        }
        return null;
    }

    //返回模板道具数量
    public findItemByTplId(id:number):ItemBase {

        for(var i in this.items) {
            var item:ItemBase = this.items[i];
            if(item.templateid == id){
                return item;
            }
        }
        return null;
    }

    //使用一件物品
    public useItem(item:Item) {

    }


}

class ItemBase {
    public id:number;
    public count:number;
    public postion:number; //部位 >0穿戴
    public templateid:number; //模板id
    public maxType:number; //物品类型 1宝石 2装备 >3道具
    public tpl:any;
    public grade:number = 0; //装备评分

    public update(data:any) {}

    public getData():any {
        var data:any = {};
        for(var k in this){
            if(typeof this[k] == "function")continue;
            data[k] = this[k];
        }

        return data;
    }

}

class Item extends ItemBase{

    public update(data:any) {
        for(var k in data) {
           this[k] = data[k];
           if(k == "templateid"){
                this.tpl = GameManager.JSON_ITEM[this.templateid];
           }
        }
    }
}

class Equip extends ItemBase {

    public belong:number; //归属者
    public qly:number; //品质
    public strength:number; //强化等级
    public eakey:number; //基础属性类型
    public eavalue1:number;//基础属性最小值
    public eavalue2:number;//基础属性最大值
    public gekey1:number; //神器属性1 类型
    public gevalue1:number;//神器属性1 值
    public gekey2:number; //神器属性2 类型
    public gevalue2:number; //神器属性2 值
    public atk:number; //攻击
    public tois:number;//道术
    public magic:number; //魔法
    public exer:number; //耐力
    public tpl:any;
    public godEq:number; // >0是神器 1单属性 2双属性
    public godLevel:number; //神器等级
    public godUpExp:number; //神器经验
    public hole1:number;    //孔1
    public hole2:number;    //孔2
    public hole3:number;    //孔3
    public hole4:number;    //孔4

    public update(data:any) {
        for(var k in data){
            this[k] = data[k];
            if(k == "templateid"){
                this.tpl = GameManager.JSON_EQPT[this.templateid];
            }
            if(k == "belong" && this.belong == 0){
                this.belong = Main.player.id;
            }

            this.godEq = 0;
            if(this.gevalue1 > 0 || this.gevalue2 > 0)this.godEq = 1;
            if(this.gevalue2 > 0 && this.gevalue2 > 0)this.godEq = 2;
        }

        this.grade = GameManager.GetEqptGrade(this);
    }
}

class Gem extends ItemBase
{
    public update(data:any)
    {
        for(var k in data)
        {
            this[k] = data[k];
            if(k == "templateid")
            {
                this.tpl = GameManager.JSON_BAOSHI[this.templateid];
            }
        }
    }
}
