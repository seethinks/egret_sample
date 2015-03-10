var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var ShopItemReader = (function (_super) {
    __extends(ShopItemReader, _super);
    function ShopItemReader() {
        _super.call(this);
        this.skinName = "skins.ShopItemReaderSkin";
        this.touchChildren = true;
        this.touchEnabled = true;
    }
    ShopItemReader.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
        if (instance == this.btn_buy) {
            this.btn_buy.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
        }
    };
    ShopItemReader.prototype.dataChanged = function () {
        _super.prototype.dataChanged.call(this);
        if (this.data.costType == 3)
            this.label_price.text = this.data.cost + " 荣誉";
        else if (this.data.costType == 5)
            this.label_price.text = " ￥" + this.data.cost;
        else
            this.label_price.text = this.data.cost;
        var hbImg = "";
        if (this.data.costType == 1) {
            hbImg = "moneyicon";
        }
        else if (this.data.costType == 2) {
            hbImg = "goldicon";
        }
        this.currnecy_icon.source = hbImg;
        this.label_name.text = this.data.tplName;
        this.lable_count.text = (this.data.num > 0 ? "x" + this.data.num : "");
        this.item_icon.setItems(this.data.tplIcon);
        if (this.data.quality > 0) {
            this.item_icon.setQuality(this.data.quality);
        }
        else
            this.item_icon.setQuality(0);
        if (this.data.tplLv > 0)
            this.item_icon.setName("Lv." + this.data.tplLv);
        else
            this.item_icon.setName("");
        if (this.data.discount > 0) {
            this.img_rebate.source = this.data.discount + "zhe";
            this.img_rebate.visible = true;
        }
        else {
            this.img_rebate.source = "";
            this.img_rebate.visible = false;
        }
    };
    ShopItemReader.prototype.onClick = function (e) {
        if (this.data) {
            if (this.data.costType == 3) {
                var url = "http://" + GameManager.server["ip"] + ":" + GameManager.server["port"];
                var param = "type=0x0094&sid=" + GameManager.SESSION_ID + "&id=" + this.data.id;
                HttpMessage.sendMsg(url, param);
            }
            else if (this.data.costType == 5) {
                this.chargeMoney();
            }
            else {
                var url = "http://" + GameManager.server["ip"] + ":" + GameManager.server["port"];
                var param = "type=0x0034&sid=" + GameManager.SESSION_ID + "&id=" + this.data.id;
                HttpMessage.sendMsg(url, param);
            }
        }
    };
    ShopItemReader.prototype.chargeMoney = function () {
        //充值
        var url = "http://" + GameManager.delive["ip"] + ":" + GameManager.delive["port"] + "/" + GameManager.delive["pn"] + "/createCharge.php";
        var param = "guid=" + GameManager.account["guid"] + "&sid=" + GameManager.server["sid"] + "&fee=" + this.data.cost + "&subject=" + this.data.tplName;
        HttpMessage.sendMsgCallBack(url, param, function (obj) {
            var dealseq = obj["dealseq"];
            var subject = obj["subject"];
            var cost = obj["cost"];
            egret.ExternalInterface.call("pt_charge", subject + "|" + cost + "|" + dealseq + "|" + Main.player.id + "|" + Main.player.name);
        });
    };
    return ShopItemReader;
})(egret.gui.ItemRenderer);
ShopItemReader.prototype.__class__ = "ShopItemReader";
