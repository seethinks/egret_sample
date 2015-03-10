var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var MapList = (function (_super) {
    __extends(MapList, _super);
    function MapList() {
        _super.call(this);
        this.skinName = "skins.MapListSkin";
        this.touchChildren = true;
        this.touchEnabled = true;
    }
    MapList.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
        if (this.data) {
            if (instance == this.map_bg_img) {
                this.map_bg_img.source = "map_" + this.data.bg;
                this.map_bg_img.addEventListener(egret.TouchEvent.TOUCH_TAP, this.checkMap, this);
            }
            if (instance == this.map_label_level) {
                this.map_label_level.text = "Lv." + this.data.mapLevel;
            }
            if (instance == this.map_label_name) {
                this.map_label_name.text = "" + this.data.name;
            }
            if (instance == this.map_label_ing) {
                if (Number(this.data.planId) == Number(Main.player.map)) {
                    this.map_label_ing.visible = true;
                }
                else {
                    this.map_label_ing.visible = false;
                }
            }
            if (instance == this.map_btn_challenge) {
                var mapid = Number(Main.player.mapmax);
                if (Number(this.data.planId) == mapid) {
                    if (Number(Main.player.vip) >= 1) {
                        this.map_btn_challenge.source = "btn_sao_boss";
                    }
                    else {
                        this.map_btn_challenge.source = "btn_kill_boss";
                    }
                }
                else {
                    this.map_btn_challenge.source = "btn_kill_boss";
                }
                this.map_btn_challenge.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
            }
        }
    };
    MapList.prototype.onClick = function (e) {
        var bosscount = Main.player.m_vipRewards[2];
        var count = 0;
        if (bosscount) {
            count = bosscount['remain'];
        }
        if (count >= 1) {
            this.sendMsg();
        }
        else {
            var t_item = Main.player.m_items.findItemByTplId(11);
            if (t_item && Number(t_item.count) > 0) {
                var self = this;
                GameManager.msgBox.showMsg(function (r) {
                    if (r) {
                        var url = "http://" + GameManager.server["ip"] + ":" + GameManager.server["port"];
                        var param = "type=0x0081&sid=" + GameManager.SESSION_ID + "&id=" + t_item.id;
                        HttpMessage.sendMsg(url, param);
                        self.sendMsg();
                    }
                }, "您当前拥有" + t_item.count + "个BOSS挑战券，您确定使用？");
            }
            else {
                GameManager.flyText({ t: "挑战次数不足！", q: 1 });
            }
        }
    };
    MapList.prototype.sendMsg = function () {
        if (this.map_btn_challenge.source == "btn_sao_boss") {
            var url = "http://" + GameManager.server["ip"] + ":" + GameManager.server["port"];
            var param = "type=0x0110&sid=" + GameManager.SESSION_ID + "&mapid=" + this.data.planId;
            HttpMessage.sendMsg(url, param);
        }
        else {
            Main.player.m_challenge = 1;
            Main.player.m_bossMapId = this.data.planId;
            DialogManager.open(FightDialog, "FightDialog");
            var map = DialogManager.findDialog(MapDialog, "MapDialog");
            if (map)
                map.hide();
        }
    };
    MapList.prototype.checkMap = function (e) {
        Main.player.m_challenge = 0;
        Main.player.map = "" + this.data.planId;
        Main.MainUI.updateData();
        DialogManager.open(FightDialog, "FightDialog");
        var map = DialogManager.findDialog(MapDialog, "MapDialog");
        if (map)
            map.hide();
    };
    MapList.prototype.dataChanged = function () {
        _super.prototype.dataChanged.call(this);
        if (this.data) {
            if (this.map_bg_img) {
                this.map_bg_img.source = "map_" + this.data.bg;
                this.map_bg_img.addEventListener(egret.TouchEvent.TOUCH_TAP, this.checkMap, this);
            }
            if (this.map_label_level)
                this.map_label_level.text = "怪物等级Lv." + this.data.mapLevel;
            if (this.map_label_name)
                this.map_label_name.text = "" + this.data.name;
            if (this.map_label_ing) {
                if (Number(this.data.planId) == Number(Main.player.map)) {
                    this.map_label_ing.visible = true;
                }
                else {
                    this.map_label_ing.visible = false;
                }
            }
            if (this.map_btn_challenge) {
                var mapid = Number(Main.player.mapmax);
                if (Number(this.data.planId) == mapid) {
                    this.map_btn_challenge.source = "btn_kill_boss";
                }
                else {
                    if (Number(Main.player.vip) >= 1) {
                        this.map_btn_challenge.source = "btn_sao_boss";
                    }
                    else {
                        this.map_btn_challenge.source = "btn_kill_boss";
                    }
                }
                this.map_btn_challenge.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
            }
        }
    };
    return MapList;
})(egret.gui.ItemRenderer);
MapList.prototype.__class__ = "MapList";
