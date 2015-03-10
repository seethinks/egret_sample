//商店
var ShopData = (function () {
    function ShopData() {
        this.refreshCount = 1; //已刷新次数
    }
    //更新商店数据
    ShopData.prototype.update = function (data) {
        for (var i in data) {
            this[i] = data[i];
        }
    };
    return ShopData;
})();
ShopData.prototype.__class__ = "ShopData";
//商品
var ShopItemData = (function () {
    function ShopItemData() {
        this.quality = -1; //为-1时不存在品阶
        this.discount = 0; //0不打折 1-9 1-9折
    }
    //更新商品数据
    ShopItemData.prototype.update = function (data) {
        for (var k in data) {
            this[k] = data[k];
        }
        this.refTpl();
    };
    //创建荣誉商店商品
    ShopItemData.prototype.createHonourShopItem = function (data) {
        //通过商品模板ID去荣誉商店查询商品模板
        this.id = data["id"];
        var horTpl = GameManager.JSON_HONOUR_SHOP[data["tempId"]];
        var temp = {};
        temp["maxType"] = horTpl["maxType"];
        temp["itemType"] = 1;
        temp["itemId"] = horTpl["itemId"];
        temp["costType"] = 3;
        temp["cost"] = horTpl["honor"];
        temp["num"] = 1;
        this.update(temp);
    };
    //刷新模板数据
    ShopItemData.prototype.refTpl = function () {
        var itemTPl = null;
        if (this.itemType == 1) {
            //            console.log("这是个道具");
            itemTPl = GameManager.JSON_ITEM[this.itemId];
        }
        else if (this.itemType == 2) {
            //            console.log("这是个装备");
            itemTPl = GameManager.JSON_EQPT[this.itemId];
            this.tplLv = itemTPl["lv"];
        }
        if (itemTPl) {
            this.tplName = itemTPl["name"];
            this.tplIcon = itemTPl["icon"];
        }
    };
    return ShopItemData;
})();
ShopItemData.prototype.__class__ = "ShopItemData";
