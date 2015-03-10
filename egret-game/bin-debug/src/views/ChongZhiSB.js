var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var ChongZhiSB = (function (_super) {
    __extends(ChongZhiSB, _super);
    function ChongZhiSB() {
        _super.call(this);
    }
    ChongZhiSB.prototype.createChildren = function () {
        _super.prototype.createChildren.call(this);
        this._dialog = new DialogBox();
        this.addElement(this._dialog);
        this._dialog.horizontalCenter = 0;
        this.m_UI = new ChongZhiUI();
        this.addElement(this.m_UI);
        this.m_UI.horizontalCenter = 0;
        this._dialog._btn_close.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouch, this);
        this._dialog._btn_help.visible = false;
        this._dialog.setTitle("充值双倍");
        this.top = 30;
        this.m_UI.top = this.top + 45;
        this.m_UI._btn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
        this._dialog.height = 500;
    };
    ChongZhiSB.prototype.onClick = function (e) {
        DialogManager.open(ChargeDialog, "ChargeDialog");
    };
    ChongZhiSB.prototype.onTouch = function (e) {
        this.hide();
    };
    ChongZhiSB.prototype.onUpdate = function () {
        var btime = Number(this.actList["beginTime"]);
        var etime = Number(this.actList["endTime"]);
        var date = new Date(btime);
        var h = "" + date.getHours();
        var m = "" + date.getMinutes();
        if (date.getHours() < 10)
            h = "0" + date.getHours();
        if (date.getMinutes() < 10)
            m = "0" + date.getMinutes();
        var dateStr = (date.getMonth() + 1) + "月" + date.getDate() + "日" + h + ":" + m;
        var date2 = new Date(etime);
        var h2 = "" + date2.getHours();
        var m2 = "" + date2.getMinutes();
        if (date2.getHours() < 10)
            h2 = "0" + date2.getHours();
        if (date2.getMinutes() < 10)
            m2 = "0" + date2.getMinutes();
        var dateStr2 = (date2.getMonth() + 1) + "月" + date2.getDate() + "日" + h2 + ":" + m2;
        this.m_UI._label_time.text = "活动时间：" + dateStr + "至" + dateStr2;
    };
    ChongZhiSB.prototype.show = function () {
        _super.prototype.show.call(this);
        this.onUpdate();
    };
    ChongZhiSB.prototype.hide = function () {
        _super.prototype.hide.call(this);
    };
    return ChongZhiSB;
})(Dialog);
ChongZhiSB.prototype.__class__ = "ChongZhiSB";
