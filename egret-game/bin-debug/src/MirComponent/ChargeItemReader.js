var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var ChargeItemReader = (function (_super) {
    __extends(ChargeItemReader, _super);
    function ChargeItemReader() {
        _super.call(this);
        this.skinName = "skins.ChargeItemSkin";
        this.touchChildren = true;
        this.touchEnabled = true;
    }
    ChargeItemReader.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
        if (instance == this.btn_buy) {
            this.btn_buy.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
        }
    };
    ChargeItemReader.prototype.onClick = function (e) {
        //H5充值
        //        var url:string = "http://"+GameManager.delive["ip"]+":"+GameManager.delive["port"]+"/"+GameManager.delive["pn"]+"/createCharge.php";
        //        var param:string = "guid="+GameManager.account["guid"]+"&sid="+GameManager.server["sid"]+"&fee="+this.data["fee"]+"&subject="+this.data["subject"]+
        //            "&username="+GameManager.account["username"]+"&pf="+GameManager.pf;
        //        HttpMessage.sendMsgCallBack(url, param, function(obj:any){
        //            if(obj["code"]==0){
        //                location.href = obj["payUrl"];
        //            }
        //        });
        //充值
        //        var url:string = "http://"+GameManager.delive["ip"]+":"+GameManager.delive["port"]+"/"+GameManager.delive["pn"]+"/createCharge.php";
        //        var param:string = "guid="+GameManager.account["guid"]+"&sid="+GameManager.server["sid"]+"&fee="+this.data.cost+"&subject="+this.data.tplName;
        //        var self = this;
        //        HttpMessage.sendMsgCallBack(url, param, function(obj:any){
        //            var dealseq:string = obj["dealseq"];
        //            egret.ExternalInterface.call("pt_charge", self.data.tplName+"|"+self.data.cost+"|"+dealseq);
        //        });
    };
    ChargeItemReader.prototype.dataChanged = function () {
        _super.prototype.dataChanged.call(this);
        if (this.data) {
            this.label_price.text = "" + this.data["name"];
            this.label_name.text = "" + this.data["subject"];
            this.label_dec.text = "达人八折优惠" + this.data["dec"] + "积分";
        }
    };
    return ChargeItemReader;
})(egret.gui.ItemRenderer);
