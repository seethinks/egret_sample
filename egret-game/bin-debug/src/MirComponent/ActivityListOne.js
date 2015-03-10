var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var ActivityListOne = (function (_super) {
    __extends(ActivityListOne, _super);
    function ActivityListOne() {
        _super.call(this);
        this.skinName = "skins.ActivityListSkin";
        this.touchChildren = true;
        this.touchEnabled = true;
    }
    ActivityListOne.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
        if (instance == this.act_btn_draw) {
            this.act_btn_draw.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
        }
    };
    ActivityListOne.prototype.onClick = function (e) {
        var url = "http://" + GameManager.server["ip"] + ":" + GameManager.server["port"];
        var param = "type=0x0047&sid=" + GameManager.SESSION_ID + "&t=" + this.data["type"];
        HttpMessage.sendMsg(url, param);
    };
    ActivityListOne.prototype.dataChanged = function () {
        _super.prototype.dataChanged.call(this);
        if (this.data) {
            var tag = this.data["tag"];
            if (Number(tag) == 0) {
                this.act_btn_draw.visible = false;
                this._no_reach.visible = true;
            }
            else if (Number(tag) == 1) {
                this.act_btn_draw.visible = true;
                this._no_reach.visible = false;
            }
            else if (Number(tag) == 2) {
                this.act_btn_draw.visible = false;
                this._no_reach.visible = false;
            }
        }
        var str = this.data["str"];
        str = str.replace("#money#", "" + (Number(Main.player.level) * 2000));
        this.act_label.text = str;
        this.act_label_name.text = "" + this.data["name"];
        this.gift_img.source = "gift_img_" + this.data["type"];
        this.gift_icon.source = "gift_icon_" + this.data["type"];
    };
    return ActivityListOne;
})(egret.gui.ItemRenderer);
ActivityListOne.prototype.__class__ = "ActivityListOne";
