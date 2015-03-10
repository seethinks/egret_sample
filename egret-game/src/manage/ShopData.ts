//商店
class  ShopData {

    public type:string; //商店类型
    public name:string; //商店名字

    public refreshCount:number = 1; //已刷新次数
    public luck:number; //当前幸运值

    public goods:ShopItemData[]; //商品集合

    public constructor() {}

    //更新商店数据
    public update(data:any) {
        for(var i in data) {
            this[i] = data[i];
        }
    }

}

//商品
class ShopItemData {

    public id:number; //商品ID
    public itemType:number; //商品类型 1道具 2装备 3元宝
    public itemId:string; //模板ID
    public quality:number = -1; //为-1时不存在品阶
    public costType:number; //货币类型 1金币 2元宝 3荣誉 4行会贡献 5人民币
    public cost:number; //价格
    public discount:number = 0; //0不打折 1-9 1-9折
    public num:number; //数量

    //物品模板信息
    public tplName:string; //物品模板名
    public tplLv:number; //模板等级
    public tplIcon:string; //模板图标

    public constructor() {}

    //更新商品数据
    public update(data:any) {
        for(var k in data) {
            this[k] = data[k];
        }

        this.refTpl();
    }

    //创建荣誉商店商品
    public createHonourShopItem(data:any){
        //通过商品模板ID去荣誉商店查询商品模板
        this.id = data["id"];
        var horTpl:any = GameManager.JSON_HONOUR_SHOP[data["tempId"]];
        var temp:any = {};
        temp["maxType"] = horTpl["maxType"];
        temp["itemType"] = 1;
        temp["itemId"] = horTpl["itemId"];
        temp["costType"] = 3;
        temp["cost"] = horTpl["honor"];
        temp["num"] = 1;

        this.update(temp);

    }

    //刷新模板数据
    public refTpl() {
        var itemTPl = null;

        if(this.itemType == 1){
//            console.log("这是个道具");
            itemTPl = GameManager.JSON_ITEM[this.itemId];
        }else if(this.itemType == 2) {
//            console.log("这是个装备");
            itemTPl = GameManager.JSON_EQPT[this.itemId];
            this.tplLv = itemTPl["lv"];
        }
        if(itemTPl) {
            this.tplName = itemTPl["name"];
            this.tplIcon = itemTPl["icon"];
        }
    }
}
