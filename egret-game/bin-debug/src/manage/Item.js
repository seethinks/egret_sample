var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var ItemManager = (function () {
    function ItemManager() {
        this.holdEq = {}; //装备中的装备
        this.equips = new Array(); //背包内装备
        this.items = new Array(); //背包中道具
        this.swholdEq = {}; //美人装备的
        this.initOk = false;
    }
    ItemManager.prototype.clear = function () {
        this.holdEq = {};
        this.equips = [];
        this.items = [];
        this.initOk = false;
    };
    ItemManager.prototype.sortItems = function () {
        //排序背包内装备
        this.equips.sort(function (x, y) {
            if (y.godEq > x.godEq) {
                return 1;
            }
            else if (y.godEq == x.godEq) {
                if (y.qly > x.qly) {
                    return 1;
                }
                else if (y.qly == x.qly) {
                    if (y.tpl.lv > x.tpl.lv) {
                        return 1;
                    }
                    else if (y.tpl.lv == x.tpl.lv) {
                        if (y.grade > x.grade) {
                            return 1;
                        }
                    }
                }
            }
            return -1;
        });
        //排序背包内物品
        this.items.sort(function (x, y) {
            if (y.maxType > x.maxType) {
                return 1;
            }
            else if (y.maxType == x.maxType) {
                if (y.templateid > x.templateid) {
                    return 1;
                }
            }
            return -1;
        });
    };
    //增加一件物品
    ItemManager.prototype.addItem = function (data) {
        //        console.log(data);
        //        maxType 1宝石 2装备 >2道具
        var itemBase = null;
        if (Number(data["maxType"]) == 2) {
            //装备
            var equip = new Equip();
            equip.update(data);
            //穿戴中
            if (equip.postion > 0) {
                //判断所有者
                if (equip.belong == Main.player.id) {
                    this.holdEq[equip.postion] = equip;
                }
                else {
                    var swhe = this.swholdEq[equip.belong];
                    if (!swhe) {
                        swhe = {};
                        this.swholdEq[equip.belong] = swhe;
                    }
                    swhe[equip.postion] = equip;
                }
            }
            else {
                this.equips.push(equip);
            }
            itemBase = equip;
        }
        else if (Number(data["maxType"]) == 1) {
            //宝石
            var gem = new Gem();
            gem.update(data);
            this.items.push(gem);
            itemBase = gem;
        }
        else {
            //道具
            var item = new Item();
            item.update(data);
            this.items.push(item);
            itemBase = item;
            if (Number(data["maxType"]) == 6) {
                Main.iconMeun.setBag(true);
                var bag = DialogManager.findDialog(ItemBag, "ItemBag");
                if (bag && !bag.showing)
                    bag.setItemW(true);
            }
        }
        return itemBase;
    };
    //删除物品byid return 1装备栏 2背包装备 3背包道具 0没找到
    ItemManager.prototype.delItemById = function (id) {
        for (var i in this.holdEq) {
            if (!this.holdEq[i])
                continue;
            if (id == this.holdEq[i].id) {
                delete this.holdEq[i];
                return 1;
            }
        }
        for (var h in this.swholdEq) {
            if (!this.swholdEq[h])
                continue;
            for (var i in this.swholdEq[h]) {
                if (!this.swholdEq[h][i])
                    continue;
                if (id == this.swholdEq[h][i].id) {
                    delete this.swholdEq[h][i];
                    return 4;
                }
            }
        }
        var delIndex = -1;
        for (var i in this.equips) {
            if (!this.equips[i])
                continue;
            if (id == this.equips[i].id) {
                delIndex = i;
                break;
            }
        }
        if (delIndex > -1) {
            this.equips.splice(delIndex, 1);
            return 2;
        }
        for (var i in this.items) {
            if (!this.items[i])
                continue;
            if (id == this.items[i].id) {
                delIndex = i;
                break;
            }
        }
        if (delIndex > -1) {
            this.items.splice(delIndex, 1);
            return 3;
        }
        return 0;
    };
    //删除物品 return 1装备栏 2背包装备 3背包道具 0没找到
    ItemManager.prototype.delItem = function (item) {
        //console.log("del"+item.id);
        var delIndex = -1;
        if (item.maxType == 2) {
            //装备
            if (item.postion > 0) {
                if (item["belong"] == Main.player.id) {
                    delete this.holdEq[item.postion];
                }
                else {
                    delete this.swholdEq[item["belong"]][item.postion];
                }
                return 1;
            }
            else {
                for (var i in this.equips) {
                    if (!this.equips[i])
                        continue;
                    if (item.id == this.equips[i].id) {
                        delIndex = i;
                        break;
                    }
                }
                if (delIndex > -1) {
                    this.equips.splice(i, 1);
                    return 2;
                }
            }
        }
        else {
            for (var i in this.items) {
                if (!this.items[i])
                    continue;
                if (item.id == this.items[i].id) {
                    delIndex = i;
                    break;
                }
            }
            if (delIndex > -1) {
                this.items.splice(i, 1);
                return 3;
            }
        }
        return 0;
    };
    //查找一件物品byid
    ItemManager.prototype.findItemById = function (id) {
        for (var i in this.holdEq) {
            if (!this.holdEq[i])
                continue;
            if (id == this.holdEq[i].id) {
                return this.holdEq[i];
            }
        }
        for (var i in this.equips) {
            if (!this.equips[i])
                continue;
            if (id == this.equips[i].id) {
                return this.equips[i];
            }
        }
        for (var i in this.items) {
            if (!this.items[i])
                continue;
            if (id == this.items[i].id) {
                return this.items[i];
            }
        }
        for (var h in this.swholdEq) {
            if (!this.swholdEq[h])
                continue;
            for (var i in this.swholdEq[h]) {
                if (!this.swholdEq[h][i])
                    continue;
                if (id == this.swholdEq[h][i].id) {
                    return this.swholdEq[h][i];
                }
            }
        }
        return null;
    };
    //返回模板道具数量
    ItemManager.prototype.findItemByTplId = function (id) {
        for (var i in this.items) {
            var item = this.items[i];
            if (item.templateid == id) {
                return item;
            }
        }
        return null;
    };
    //使用一件物品
    ItemManager.prototype.useItem = function (item) {
    };
    return ItemManager;
})();
ItemManager.prototype.__class__ = "ItemManager";
var ItemBase = (function () {
    function ItemBase() {
        this.grade = 0; //装备评分
    }
    ItemBase.prototype.update = function (data) {
    };
    ItemBase.prototype.getData = function () {
        var data = {};
        for (var k in this) {
            if (typeof this[k] == "function")
                continue;
            data[k] = this[k];
        }
        return data;
    };
    return ItemBase;
})();
ItemBase.prototype.__class__ = "ItemBase";
var Item = (function (_super) {
    __extends(Item, _super);
    function Item() {
        _super.apply(this, arguments);
    }
    Item.prototype.update = function (data) {
        for (var k in data) {
            this[k] = data[k];
            if (k == "templateid") {
                this.tpl = GameManager.JSON_ITEM[this.templateid];
            }
        }
    };
    return Item;
})(ItemBase);
Item.prototype.__class__ = "Item";
var Equip = (function (_super) {
    __extends(Equip, _super);
    function Equip() {
        _super.apply(this, arguments);
    }
    Equip.prototype.update = function (data) {
        for (var k in data) {
            this[k] = data[k];
            if (k == "templateid") {
                this.tpl = GameManager.JSON_EQPT[this.templateid];
            }
            if (k == "belong" && this.belong == 0) {
                this.belong = Main.player.id;
            }
            this.godEq = 0;
            if (this.gevalue1 > 0 || this.gevalue2 > 0)
                this.godEq = 1;
            if (this.gevalue2 > 0 && this.gevalue2 > 0)
                this.godEq = 2;
        }
        this.grade = GameManager.GetEqptGrade(this);
    };
    return Equip;
})(ItemBase);
Equip.prototype.__class__ = "Equip";
var Gem = (function (_super) {
    __extends(Gem, _super);
    function Gem() {
        _super.apply(this, arguments);
    }
    Gem.prototype.update = function (data) {
        for (var k in data) {
            this[k] = data[k];
            if (k == "templateid") {
                this.tpl = GameManager.JSON_BAOSHI[this.templateid];
            }
        }
    };
    return Gem;
})(ItemBase);
Gem.prototype.__class__ = "Gem";
