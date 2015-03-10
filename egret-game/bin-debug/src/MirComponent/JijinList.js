var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var JijinList = (function (_super) {
    __extends(JijinList, _super);
    function JijinList() {
        _super.call(this);
        this.skinName = "skins.JijinListSkin";
        this.touchChildren = true;
        this.touchEnabled = true;
    }
    JijinList.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
        if (instance == this._btn) {
            this._btn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onGet, this);
        }
    };
    JijinList.prototype.onGet = function (e) {
        if (this._btn.source != "jijin_ling") {
            return;
        }
        var url = "http://" + GameManager.server["ip"] + ":" + GameManager.server["port"];
        var gift = this.data["gift"];
        var d = DialogManager.findDialog(JijinDialog, "JijinDialog");
        if (d) {
            var param = "type=0x0137&sid=" + GameManager.SESSION_ID + "&giftId=" + gift["giftId"] + "&activityType=" + d.obj["activityType"];
            HttpMessage.sendMsg(url, param);
        }
    };
    JijinList.prototype.dataChanged = function () {
        _super.prototype.dataChanged.call(this);
        if (this.data) {
            var status = this.data["status"];
            if (Number(status) == 1) {
                this._btn.source = "jijin_ling";
            }
            else if (Number(status) == 0) {
                this._btn.source = "weidachen";
            }
            else {
                this._btn.source = "btn_txt_yijinglingqu";
            }
            var gift = this.data["gift"];
            var gain = gift["gain"];
            var m_num = gift["num"];
            var giftId = gift["giftId"];
            var level = gift["level"];
            var itemId = gain["itemId"];
            var maxType = Number(gain["maxType"]);
            var num = gain["num"];
            var str = "";
            var d = DialogManager.findDialog(JijinDialog, "JijinDialog");
            var type = "";
            if (d) {
                type = d.obj["activityType"];
            }
            if (Number(maxType) == 51) {
                this._icon.setName("金币");
                str = "金币" + " * " + num;
                this._icon.setItems("1");
                if (num)
                    this._icon.setCount(num + "");
            }
            else if (Number(maxType) == 52) {
                this._icon.setName("元宝");
                str = "元宝" + " * " + num;
                this._icon.setItems("2");
                if (num)
                    this._icon.setCount(num + "");
            }
            else if (Number(maxType) == 57) {
                this._icon.setName("黑铁矿石");
                str = "黑铁矿石" + " * " + num;
                this._icon.setItems("3");
                if (num)
                    this._icon.setCount(num + "");
            }
            else if (Number(maxType) == 2) {
                var item = GameManager.JSON_EQPT[itemId];
                var items = {};
                items["tpl"] = item;
                this._icon.data = items;
                str = "" + item["name"] + " * " + num;
                this._icon.dataChanged();
                if (num)
                    this._icon.setCount(num + "");
            }
            else {
                var item = GameManager.JSON_ITEM[itemId];
                var items = {};
                items["tpl"] = item;
                str = "" + item["name"] + " * " + num;
                this._icon.data = items;
                this._icon.dataChanged();
                if (num)
                    this._icon.setCount(num + "");
            }
            if (type == "fund") {
                this._labels.text = str + "\n" + "等级达到 " + level + " 即可领取";
            }
            else {
                this._labels.text = str + "\n" + "购买人数达到 " + m_num + " 即可领取";
            }
        }
    };
    return JijinList;
})(egret.gui.ItemRenderer);
JijinList.prototype.__class__ = "JijinList";
