var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var MapDialog = (function (_super) {
    __extends(MapDialog, _super);
    function MapDialog() {
        _super.call(this);
        this.maplist = new egret.gui.List();
        this.dp = new egret.gui.ArrayCollection();
    }
    MapDialog.prototype.createChildren = function () {
        _super.prototype.createChildren.call(this);
        this.m_dialog = new UIOriginalDialog();
        this.addElement(this.m_dialog);
        this.m_dialog.horizontalCenter = 0;
        this.m_dialog.setTitle("地图");
        this.m_UI = new UIMap();
        this.addElement(this.m_UI);
        this.m_UI.horizontalCenter = 0;
        this.m_UI.map_btn_buy.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onBuy, this);
        this.maplist.skinName = "skins.ListSkin";
        this.maplist.height = 548;
        this.maplist.horizontalCenter = 0;
        this.addElement(this.maplist);
        this.maplist.itemRenderer = new egret.gui.ClassFactory(MapList);
        this.maplist.itemRendererSkinName = "skins.MapListSkin";
        this.maplist.dataProvider = this.dp;
        this.m_UI.top = 60;
        this.maplist.top = this.m_UI.top + 38;
    };
    MapDialog.prototype.onBuy = function (e) {
        var vip = GameManager.JSON_VIP[(Number(Main.player.vip) + 1)];
        if (!vip)
            return;
        var rewards = vip["rewards"];
        var arr_rewards = rewards.split("|");
        var str_vip = arr_rewards[1];
        var arr_vip = str_vip.split("#");
        var vip_num = Number(arr_vip[1]);
        var bosscount = Main.player.m_vipRewards[2];
        var count = 0;
        if (bosscount) {
            count = bosscount["vipBought"];
        }
        GameManager.msgBox.showMsg(function (r) {
            if (r) {
                var url = "http://" + GameManager.server["ip"] + ":" + GameManager.server["port"];
                var param = "type=0x0100&sid=" + GameManager.SESSION_ID;
                HttpMessage.sendMsg(url, param);
            }
        }, "购买BOSS挑战次数1次，将消耗50元宝！确定继续？（您是VIP" + Main.player.vip + "今天购买剩余次数" + (vip_num - count) + "，每天零点重置）");
    };
    MapDialog.prototype.onTouch = function (e) {
        this.hide();
    };
    MapDialog.prototype.onUpdate = function () {
        if (this.m_UI) {
            if (this.m_UI.map_label_num) {
                var bosscount = Main.player.m_vipRewards[2];
                var count = 0;
                if (bosscount) {
                    count = bosscount['remain'];
                }
                this.m_UI.map_label_num.text = "今日剩余挑战boss次数：" + count;
            }
        }
        this.dp.removeAll();
        var map = GameManager.JSON_MAP;
        for (var key in map) {
            var list = map[key];
            if (Number(list["planId"]) <= Number(Main.player.mapmax)) {
                this.dp.addItem(list);
            }
            if (Number(list["planId"]) == Number(Main.player.mapmax)) {
                var bossId = list["bossId"];
                var m = GameManager.JSON_MONSTERS[bossId];
                var bms = [];
                bms.push({ text: "----挑战BOSS", style: { "textColor": 0x03F3EB, "size": 18, "fontFamily": "黑体" } });
                bms.push({ text: m["name"], style: { "textColor": 0xE805F9, "size": 18, "fontFamily": "黑体" } });
                bms.push({ text: "胜利后开启下一张地图----", style: { "textColor": 0x03F3EB, "size": 18, "fontFamily": "黑体" } });
                this.m_UI._label_bossName._textField.textFlow = bms;
            }
        }
        var self = this;
        egret.callLater(function () {
            if (Main.player.mapmax > 4) {
                self.maplist.dataGroup.verticalScrollPosition = 136 * (Main.player.mapmax - 4);
            }
        }, this.maplist);
    };
    MapDialog.prototype.show = function () {
        _super.prototype.show.call(this);
        this.onUpdate();
        if (!egret.localStorage.getItem("prompt1")) {
            GameManager.msgBox.showMsg(function (r) {
            }, "    点击挑战BOSS按钮战胜当前地图的BOSS就能开启下一级地图，开启后点击新地图就能到该地图挂机获得更多经验金币！", true);
            egret.localStorage.setItem("prompt1", "true");
        }
    };
    MapDialog.prototype.hide = function () {
        _super.prototype.hide.call(this);
    };
    return MapDialog;
})(Dialog);
MapDialog.prototype.__class__ = "MapDialog";
