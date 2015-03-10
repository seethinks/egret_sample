var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var DeulDialog = (function (_super) {
    __extends(DeulDialog, _super);
    function DeulDialog() {
        _super.call(this);
        this.taskList1 = new egret.gui.List();
        this.dp = new egret.gui.ArrayCollection();
        this.isStop = true;
    }
    DeulDialog.prototype.createChildren = function () {
        _super.prototype.createChildren.call(this);
        this.dialog = new UIOriginalDialog();
        this.addElement(this.dialog);
        this.dialog.horizontalCenter = 0;
        this.dialog.top = 0;
        this.dialog.setTitle("竞技场");
        this.m_UI = new UIDeul();
        this.addElement(this.m_UI);
        this.m_UI.horizontalCenter = 0;
        this.m_UI.top = 60;
        this.taskList1.skinName = "skins.ListSkin";
        this.taskList1.width = 540;
        this.taskList1.height = 443;
        this.taskList1.horizontalCenter = 0;
        this.taskList1.top = 252;
        this.addElement(this.taskList1);
        this.taskList1.itemRenderer = new egret.gui.ClassFactory(UIDeulList);
        this.taskList1.itemRendererSkinName = "skins.DeulListSkin";
        this.taskList1.dataProvider = this.dp;
        //this.taskList1.addEventListener(egret.gui.ListEvent.ITEM_CLICK, this.clickItem, this);
        this.m_UI.deul_btn_rank.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onRank, this);
        this.m_UI.deul_btn_exchange.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onShop, this);
        this.m_UI.deul_btn_huan.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onHuan, this);
        this.m_UI.deul_btn_buy.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onBuy, this);
    };
    DeulDialog.prototype.onBuy = function (e) {
        GameManager.msgBox.showMsg(function (r) {
            if (r) {
                var url = "http://" + GameManager.server["ip"] + ":" + GameManager.server["port"];
                var param = "type=0x0093&sid=" + GameManager.SESSION_ID;
                HttpMessage.sendMsg(url, param);
            }
        }, "您确定花费50元宝购买一次挑战次数？");
    };
    DeulDialog.prototype.onHuan = function (e) {
        var url = "http://" + GameManager.server["ip"] + ":" + GameManager.server["port"];
        var param = "type=0x0090&sid=" + GameManager.SESSION_ID;
        HttpMessage.sendMsg(url, param);
    };
    DeulDialog.prototype.onRank = function (e) {
        DialogManager.open(DeulRankDialog, "DeulRankDialog");
    };
    DeulDialog.prototype.onShop = function (e) {
        DialogManager.open(DeulShop, "DeulShop");
    };
    DeulDialog.prototype.onUpdate = function () {
        this.dp.removeAll();
        if (Main.player.m_deuiList) {
            var list = Main.player.m_deuiList;
            list.sort(this.sortArr);
            for (var i = 0; i < list.length; i++) {
                var obj = list[i];
                this.dp.addItem(obj);
            }
        }
        else {
            var url = "http://" + GameManager.server["ip"] + ":" + GameManager.server["port"];
            var param = "type=0x0090&sid=" + GameManager.SESSION_ID;
            HttpMessage.sendMsg(url, param);
        }
        this.m_UI.deul_head.source = "f_" + Main.player.sex + "_" + Main.player.job;
        this.m_UI.deul_label_names.text = "Lv." + Main.player.level + " " + Main.player.name + "\n\n";
        this.m_UI.deul_label_names.textColor = GameManager.getNameColor();
        if (Main.player.m_deulMyinfo) {
            var str = "排名" + Main.player.m_deulMyinfo["rank"] + " 战力" + Main.player.fightvalue + "\n\n";
            str += "排名奖励: " + "元宝" + Main.player.m_deulMyinfo["gold"] + " 荣誉" + Main.player.m_deulMyinfo["honor"] + " 声望" + Main.player.m_deulMyinfo["prestige"];
            this.m_UI.deul_label_name.text = str;
            this.m_UI.deul_label_num.text = "今日剩余挑战次数：" + Main.player.m_deulMyinfo["vsCount"];
        }
    };
    DeulDialog.prototype.sortArr = function (a, b) {
        var ranka = Number(a["rank"]);
        var rankb = Number(b["rank"]);
        if (ranka > rankb)
            return 1;
    };
    DeulDialog.prototype.show = function () {
        _super.prototype.show.call(this);
        this.onUpdate();
    };
    DeulDialog.prototype.hide = function () {
        _super.prototype.hide.call(this);
    };
    return DeulDialog;
})(Dialog);
DeulDialog.prototype.__class__ = "DeulDialog";
