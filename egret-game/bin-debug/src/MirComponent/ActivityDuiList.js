var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var ActivityDuiList = (function (_super) {
    __extends(ActivityDuiList, _super);
    function ActivityDuiList() {
        _super.call(this);
        this.skinName = "skins.ActivitileDuiListSkin";
        this.touchChildren = true;
        this.touchEnabled = true;
    }
    ActivityDuiList.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
        if (instance == this._btn_get) {
            this._btn_get.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onGet, this);
        }
    };
    ActivityDuiList.prototype.onGet = function (e) {
        var url = "http://" + GameManager.server["ip"] + ":" + GameManager.server["port"];
        var param = "type=0x0137&sid=" + GameManager.SESSION_ID + "&giftId=" + this.data["giftId"] + "&activityType=" + this.data["activityType"];
        HttpMessage.sendMsg(url, param);
    };
    ActivityDuiList.prototype.dataChanged = function () {
        _super.prototype.dataChanged.call(this);
        if (this.data) {
            var list = this.data["list"];
            var extThings = this.data["extThings"];
            var gainExtThings = this.data["gainExtThings"];
            var need = list["needs"];
            this._vip.source = "vip" + list["vip"];
            if (need && need.length > 0) {
                need.push(list["gain"]);
                for (var n = 1; n <= 3; n++) {
                    var item = need[n - 1];
                    var maxType = Number(item["maxType"]);
                    var label = this["_label" + n];
                    var icon = this["_icon" + n];
                    var itemId = item["itemId"];
                    var num = item["num"];
                    label.text = "";
                    if (Number(maxType) == 51) {
                        icon.setName("金币");
                        icon.setItems("1");
                        label.text = "" + num;
                        icon.setCount("");
                    }
                    else if (Number(maxType) == 52) {
                        icon.setName("元宝");
                        icon.setItems("2");
                        label.text = "" + num;
                        icon.setCount("");
                    }
                    else if (Number(maxType) == 57) {
                        icon.setName("黑铁矿石");
                        icon.setItems("3");
                        label.text = "" + num;
                        icon.setCount("");
                    }
                    else if (Number(maxType) == 40) {
                        var i = extThings[itemId];
                        icon.setItems(i["icon"]);
                        icon.setName(i["name"]);
                        label.text = "" + num;
                        if (i < 3)
                            icon.setCount(gainExtThings[itemId] + "  ");
                        else
                            icon.setCount("");
                    }
                    else {
                        var item = GameManager.JSON_ITEM[itemId];
                        var items = {};
                        items["count"] = "";
                        items["tpl"] = item;
                        icon.data = items;
                        icon.dataChanged();
                        icon.setCount("");
                        label.text = "" + num;
                    }
                }
            }
        }
    };
    return ActivityDuiList;
})(egret.gui.ItemRenderer);
ActivityDuiList.prototype.__class__ = "ActivityDuiList";
