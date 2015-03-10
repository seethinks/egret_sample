var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var ActivityDescDialog = (function (_super) {
    __extends(ActivityDescDialog, _super);
    function ActivityDescDialog() {
        _super.call(this);
        this.textList = new egret.gui.List();
        this.dp = new egret.gui.ArrayCollection();
        this.actList = [];
        this.holidayCharge = 0;
    }
    ActivityDescDialog.prototype.createChildren = function () {
        _super.prototype.createChildren.call(this);
        this.m_dialog = new DialogBox();
        this.addElement(this.m_dialog);
        this.m_dialog.horizontalCenter = 0;
        this.m_dialog.setTitle("活动详情");
        this.m_dialog._btn_close.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouch, this);
        this.m_dialog._btn_help.visible = false;
        this.m_UI = new ActivityDescUI();
        this.addElement(this.m_UI);
        this.m_UI.horizontalCenter = 0;
        this.textList.skinName = "skins.ListSkin";
        this.addElement(this.textList);
        this.textList.height = 408;
        this.textList.horizontalCenter = 0;
        this.textList.itemRenderer = new egret.gui.ClassFactory(ActivityDescList);
        this.textList.itemRendererSkinName = "skins.ActivitieListSkin";
        this.textList.dataProvider = this.dp;
        this.top = 30;
        this.m_UI.top = this.top + 50;
        this.textList.top = this.m_UI.top + 208;
    };
    ActivityDescDialog.prototype.onTouch = function (e) {
        this.hide();
    };
    ActivityDescDialog.prototype.onUpdate = function () {
        var list = this.actList;
        if (list && list.length > 0) {
            list.sort(function (x, y) {
                if (x['gift']['giftId'] > y['gift']['giftId'])
                    return 1;
                return -1;
            });
            this.dp.removeAll();
            for (var i = 0; i < list.length; i++) {
                var obj = list[i];
                if (obj["status"] == 2 || obj["status"] == "2") {
                    continue;
                }
                this.dp.addItem(obj);
            }
        }
        if (this.obj) {
            var btime = Number(this.obj["beginTime"]);
            var etime = Number(this.obj["endTime"]);
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
            this.m_UI._label_desc.text = "" + this.obj["des"];
            this.m_UI.head_bgimg.source = "list_" + this.obj["activityType"];
            this.m_UI._label_chage.text = "活动期间累计充值元宝：" + this.holidayCharge;
        }
    };
    ActivityDescDialog.prototype.show = function () {
        _super.prototype.show.call(this);
        this.onUpdate();
    };
    ActivityDescDialog.prototype.hide = function () {
        _super.prototype.hide.call(this);
    };
    return ActivityDescDialog;
})(Dialog);
ActivityDescDialog.prototype.__class__ = "ActivityDescDialog";
