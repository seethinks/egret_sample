var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var BuyMoneyDialog = (function (_super) {
    __extends(BuyMoneyDialog, _super);
    function BuyMoneyDialog() {
        _super.call(this);
    }
    BuyMoneyDialog.prototype.createChildren = function () {
        _super.prototype.createChildren.call(this);
        this._dialog = new DialogBox();
        this.addElement(this._dialog);
        this._dialog.horizontalCenter = 0;
        this.m_UI = new UIBuyMoney();
        this.addElement(this.m_UI);
        this.m_UI.horizontalCenter = 0;
        this._dialog._btn_close.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouch, this);
        this._dialog._btn_help.visible = false;
        this._dialog.setTitle("购买金币");
        this.top = 30;
        this.m_UI.top = this.top + 50;
        this.m_UI.btn_buy.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onBuy, this);
        this.m_UI.btn_buy_all.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onAllBuy, this);
    };
    BuyMoneyDialog.prototype.onBuy = function (e) {
        var url = "http://" + GameManager.server["ip"] + ":" + GameManager.server["port"];
        var param = "type=0x0037&sid=" + GameManager.SESSION_ID + "&count=1";
        HttpMessage.sendMsg(url, param);
        //        if(GameManager.dataEyes)GameManager.dataEyes.pushEvent("金币购买", 1,
        //            {pname:Main.player.name, sid:GameManager.server.sid, cost:20});
    };
    BuyMoneyDialog.prototype.onAllBuy = function (e) {
        GameManager.msgBox.showMsg(function (r) {
            if (r) {
                var url = "http://" + GameManager.server["ip"] + ":" + GameManager.server["port"];
                var param = "type=0x0037&sid=" + GameManager.SESSION_ID + "&count=0";
                HttpMessage.sendMsg(url, param);
            }
        }, "确定购买全部金币？");
    };
    BuyMoneyDialog.prototype.onTouch = function (e) {
        this.hide();
    };
    BuyMoneyDialog.prototype.onUpdate = function () {
        var vip = GameManager.JSON_VIP[(Number(Main.player.vip) + 1)];
        if (!vip)
            return;
        var rewards = vip["rewards"];
        var arr_rewards = rewards.split("|");
        var str_vip = arr_rewards[2];
        var arr_vip = str_vip.split("#");
        var vip_num = Number(arr_vip[1]);
        this.m_UI.label_vip_num.text = "您当前是VIP" + Main.player.vip + "，每天可以额外购买" + vip_num + "次";
        var bosscount = Main.player.m_vipRewards[3];
        var count = 0;
        if (bosscount) {
            count = bosscount["vipBought"];
        }
        this.m_UI.label_buy_num.text = "剩余购买次数：" + (vip_num - count);
        this.m_UI.label_gold.text = "售价：20";
        this.m_UI.label_money.text = "金币：" + (Number(Main.player.level) * 2000);
    };
    BuyMoneyDialog.prototype.show = function () {
        _super.prototype.show.call(this);
        this.onUpdate();
    };
    BuyMoneyDialog.prototype.hide = function () {
        _super.prototype.hide.call(this);
    };
    return BuyMoneyDialog;
})(Dialog);
BuyMoneyDialog.prototype.__class__ = "BuyMoneyDialog";
