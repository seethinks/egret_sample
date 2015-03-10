var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var VipActList = (function (_super) {
    __extends(VipActList, _super);
    function VipActList() {
        _super.call(this);
        this.skinName = "skins.ActivitieListSkin";
        this.touchChildren = true;
        this.touchEnabled = true;
    }
    VipActList.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
        if (instance == this._btn_get) {
            this._btn_get.visible = false;
            this._btn_get.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onGet, this);
        }
        if (instance == this._weidacheng) {
            this._weidacheng.visible = false;
            this._weidacheng.source = "btn_txt_yijinglingqu";
        }
        if (instance == this._icon1) {
            this._icon1.visible = false;
        }
        if (instance == this._icon3) {
            this._icon3.visible = false;
        }
        if (instance == this._icon2) {
            this._icon2.visible = false;
        }
    };
    VipActList.prototype.onGet = function (e) {
        var url = "http://" + GameManager.server["ip"] + ":" + GameManager.server["port"];
        var gift = this.data["gift"];
        var d = DialogManager.findDialog(VipActDialog, "VipActDialog");
        if (d) {
            var param = "type=0x0137&sid=" + GameManager.SESSION_ID + "&giftId=" + gift["giftId"] + "&activityType=" + d.obj["activityType"];
            HttpMessage.sendMsg(url, param);
        }
    };
    VipActList.prototype.dataChanged = function () {
        _super.prototype.dataChanged.call(this);
        this._icon1.visible = false;
        this._icon2.visible = false;
        this._icon3.visible = false;
        if (this.data) {
            var gift = this.data["gift"];
            var status = this.data["status"];
            var vip = gift["vip"];
            var gains = gift["gains"];
            this._label_text.text = "VIP" + vip + "，可领取：";
            this._btn_get.visible = true;
            if (Number(Main.player.vip) == Number(vip)) {
                if (status) {
                    if (Number(status) == 2) {
                        this._weidacheng.visible = true;
                        this._btn_get.visible = false;
                    }
                    else {
                        this._btn_get.visible = true;
                        this._weidacheng.visible = false;
                    }
                }
            }
            else {
                this._btn_get.visible = false;
                this._weidacheng.visible = false;
            }
            var arr = gains;
            if (arr && arr.length > 0) {
                for (var i = 0; i < arr.length; i++) {
                    var obj = arr[i];
                    var maxType = Number(obj["maxType"]);
                    var itemId = obj["itemId"];
                    var num = obj["num"];
                    var icon = this["_icon" + (i + 1)];
                    icon.visible = true;
                    if (Number(maxType) == 51) {
                        icon.setCount(num + "");
                        icon.setName("金币");
                        icon.setItems("1");
                    }
                    else if (Number(maxType) == 52) {
                        icon.setCount(num + "");
                        icon.setName("元宝");
                        icon.setItems("2");
                    }
                    else if (Number(maxType) == 57) {
                        icon.setCount(num + "");
                        icon.setName("黑铁矿石");
                        icon.setItems("3");
                    }
                    else {
                        var item = GameManager.JSON_ITEM[itemId];
                        var items = {};
                        items["count"] = "" + num;
                        items["tpl"] = item;
                        icon.data = items;
                        icon.dataChanged();
                    }
                }
            }
        }
    };
    return VipActList;
})(egret.gui.ItemRenderer);
VipActList.prototype.__class__ = "VipActList";
