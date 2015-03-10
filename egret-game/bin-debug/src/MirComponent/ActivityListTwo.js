var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var ActivityListTwo = (function (_super) {
    __extends(ActivityListTwo, _super);
    function ActivityListTwo() {
        _super.call(this);
        this.skinName = "skins.ActivityListToSkin";
        this.touchChildren = true;
        this.touchEnabled = true;
    }
    ActivityListTwo.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
        this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
    };
    ActivityListTwo.prototype.onClick = function (e) {
        var url = "http://" + GameManager.server["ip"] + ":" + GameManager.server["port"];
        var param = "type=0x0136&sid=" + GameManager.SESSION_ID + "&id=" + this.data["id"] + "&activityType=" + this.data["activityType"];
        if (this.data["activityType"] == "charge") {
            var a = DialogManager.findDialog(ActivityDescDialog, "ActivityDescDialog");
            if (a) {
                a.obj = this.data;
            }
            HttpMessage.sendMsg(url, param);
        }
        else if (this.data["activityType"] == "exchange") {
            var b = DialogManager.findDialog(ActivityDuihuanDialog, "ActivityDuihuanDialog");
            if (b) {
                b.obj = this.data;
            }
            HttpMessage.sendMsg(url, param);
        }
        else if (this.data["activityType"] == "fund" || this.data["activityType"] == "celebrate") {
            var jijin = DialogManager.findDialog(JijinDialog, "JijinDialog");
            if (jijin) {
                jijin.obj = this.data;
            }
            HttpMessage.sendMsg(url, param);
        }
        else if (this.data["activityType"] == "chargedouble") {
            var sb = DialogManager.findDialog(ChongZhiSB, "ChongZhiSB");
            if (sb) {
                sb.obj = this.data;
            }
            HttpMessage.sendMsg(url, param);
        }
        else if (this.data["activityType"] == "openserver") {
            var sever = DialogManager.findDialog(OpenServerDialog, "OpenServerDialog");
            if (sever) {
                sever.obj = this.data;
            }
            HttpMessage.sendMsg(url, param);
        }
        else if (this.data["activityType"] == "shouchong") {
            DialogManager.open(ShouChongDialog, "ShouChongDialog");
        }
        else if (this.data["activityType"] == "vipbenefit") {
            var vip = DialogManager.findDialog(VipActDialog, "VipActDialog");
            if (vip) {
                vip.obj = this.data;
            }
            HttpMessage.sendMsg(url, param);
        }
    };
    ActivityListTwo.prototype.dataChanged = function () {
        _super.prototype.dataChanged.call(this);
        if (this.data) {
            this.act_img.source = "list_" + this.data["activityType"];
        }
    };
    return ActivityListTwo;
})(egret.gui.ItemRenderer);
ActivityListTwo.prototype.__class__ = "ActivityListTwo";
