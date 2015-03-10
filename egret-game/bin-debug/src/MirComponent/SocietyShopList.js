var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var SocietyShopList = (function (_super) {
    __extends(SocietyShopList, _super);
    function SocietyShopList() {
        _super.call(this);
        this.skinName = "skins.ShopItemReaderSkin";
        this.touchChildren = true;
        this.touchEnabled = true;
    }
    SocietyShopList.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
        if (instance == this.btn_buy) {
            this.btn_buy.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
        }
    };
    SocietyShopList.prototype.dataChanged = function () {
        _super.prototype.dataChanged.call(this); //"itemId":11,"contri":1500
        var id = this.data["itemId"];
        var contri = this.data["contribution"];
        this.label_price.text = "贡献：" + contri;
        var item = GameManager.JSON_ITEM[id];
        this.data.tpl = item;
        this.item_icon.data = this.data;
        this.item_icon.dataChanged();
        this.label_name.text = item["name"];
        this.item_icon.setName("");
    };
    SocietyShopList.prototype.onClick = function (e) {
        if (this.data) {
            var url = "http://" + GameManager.server["ip"] + ":" + GameManager.server["port"];
            var param = "type=0x0039&sid=" + GameManager.SESSION_ID + "&id=" + this.data.id;
            HttpMessage.sendMsg(url, param);
        }
    };
    return SocietyShopList;
})(egret.gui.ItemRenderer);
SocietyShopList.prototype.__class__ = "SocietyShopList";
