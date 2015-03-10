var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var DeulRankDialog = (function (_super) {
    __extends(DeulRankDialog, _super);
    function DeulRankDialog() {
        _super.call(this);
        this.taskList1 = new egret.gui.List();
        this.dp = new egret.gui.ArrayCollection();
    }
    DeulRankDialog.prototype.createChildren = function () {
        _super.prototype.createChildren.call(this);
        this._dialog = new DialogBox();
        this.addElement(this._dialog);
        this._dialog.horizontalCenter = 0;
        this.m_UI = new UIDeulRank();
        this.addElement(this.m_UI);
        this.m_UI.horizontalCenter = 0;
        this._dialog._btn_close.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouch, this);
        this._dialog._btn_help.visible = false;
        this._dialog.setTitle("竞技排名");
        this.top = 30;
        this.m_UI.top = this.top + 50;
        this.taskList1.skinName = "skins.ListSkin";
        this.taskList1.horizontalCenter = 0;
        this.taskList1.itemRenderer = new egret.gui.ClassFactory(UIDeulList);
        this.taskList1.itemRendererSkinName = "skins.DeulListSkin";
        this.taskList1.dataProvider = this.dp;
        this.addElement(this.taskList1);
        this.taskList1.top = this.m_UI.top + 68;
        this.taskList1.width = 540;
        this.taskList1.height = 538;
    };
    DeulRankDialog.prototype.onTouch = function (e) {
        this.hide();
    };
    DeulRankDialog.prototype.onUpdate = function () {
        var list = Main.player.m_deulRank;
        if (list) {
            this.dp.removeAll();
            list.sort(this.sortArr);
            for (var i = 0; i < list.length; i++) {
                var obj = list[i];
                obj["q"] = 1;
                this.dp.addItem(obj);
            }
        }
    };
    DeulRankDialog.prototype.sortArr = function (a, b) {
        var ranka = Number(a["rank"]);
        var rankb = Number(b["rank"]);
        if (Number(ranka) > Number(rankb)) {
            return 1;
        }
        return -1;
    };
    DeulRankDialog.prototype.show = function () {
        _super.prototype.show.call(this);
        var url = "http://" + GameManager.server["ip"] + ":" + GameManager.server["port"];
        var param = "type=0x0091&sid=" + GameManager.SESSION_ID;
        HttpMessage.sendMsg(url, param);
    };
    DeulRankDialog.prototype.hide = function () {
        _super.prototype.hide.call(this);
    };
    return DeulRankDialog;
})(Dialog);
DeulRankDialog.prototype.__class__ = "DeulRankDialog";
