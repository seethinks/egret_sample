var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var WanBaCharge = (function (_super) {
    __extends(WanBaCharge, _super);
    function WanBaCharge() {
        _super.call(this);
        this.taskList1 = new egret.gui.List();
        this.dp = new egret.gui.ArrayCollection();
        this.charges = {
            6: { "name": "60积分", "fee": 6, "subject": "60", dec: "48" },
            30: { "name": "300积分", "fee": 30, "subject": "300", dec: "240" },
            100: { "name": "1000积分", "fee": 100, "subject": "1000", dec: "800" },
            200: { "name": "2000积分", "fee": 200, "subject": "2000", dec: "1600" },
            500: { "name": "5000积分", "fee": 500, "subject": "5000", dec: "4000" },
            1000: { "name": "10000积分", "fee": 1000, "subject": "10000", dec: "8000" }
        };
    }
    WanBaCharge.prototype.createChildren = function () {
        _super.prototype.createChildren.call(this);
        this._dialog = new DialogBox();
        this.addElement(this._dialog);
        this._dialog.horizontalCenter = 0;
        this.m_UI = new WanBaChargeUI();
        this.addElement(this.m_UI);
        this.m_UI.horizontalCenter = 0;
        this._dialog._btn_close.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouch, this);
        this._dialog._btn_help.visible = false;
        this._dialog.setTitle("充值");
        this.top = 30;
        this.m_UI.top = this.top + 40;
        this.taskList1.skinName = "skins.ShopListSkin";
        this.taskList1.horizontalCenter = 0;
        this.taskList1.itemRenderer = new egret.gui.ClassFactory(ChargeItemReader);
        this.taskList1.itemRendererSkinName = "skins.ChargeItemSkin";
        this.taskList1.dataProvider = this.dp;
        this.addElement(this.taskList1);
        this.taskList1.top = this.m_UI.top + 60;
        this.taskList1.width = 510;
        this.taskList1.height = 575;
        for (var key in this.charges) {
            var obj = this.charges[key];
            this.dp.addItem(obj);
        }
    };
    WanBaCharge.prototype.onTouch = function (e) {
        this.hide();
    };
    WanBaCharge.prototype.onUpdate = function () {
        if (!this.initUI)
            return;
        this.m_UI._charge_ppt.text = "当前玩吧积分：0";
    };
    WanBaCharge.prototype.onUpdatePlayer = function () {
        this.onUpdate();
    };
    WanBaCharge.prototype.show = function () {
        _super.prototype.show.call(this);
        this.onUpdate();
    };
    WanBaCharge.prototype.hide = function () {
        _super.prototype.hide.call(this);
    };
    return WanBaCharge;
})(Dialog);
