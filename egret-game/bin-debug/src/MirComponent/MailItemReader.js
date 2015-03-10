var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var MailItemReader = (function (_super) {
    __extends(MailItemReader, _super);
    function MailItemReader() {
        _super.call(this);
        this.skinName = "skins.MailItemReaderSkin";
        this.touchChildren = true;
        this.touchEnabled = true;
    }
    MailItemReader.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
        if (instance == this.mail_btn_get) {
            this.mail_btn_get.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onGet, this);
        }
        if (instance == this.mail_btn_del_end) {
            this.mail_btn_del_end.visible = false;
            this.mail_btn_del_end.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onDel, this);
        }
        if (instance == this.mail_btn_del) {
            this.mail_btn_del.visible = false;
            this.mail_btn_del.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onDel, this);
        }
        if (instance == this.mail_btn_look) {
            this.mail_btn_look.visible = false;
            this.mail_btn_look.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onFuchou, this);
        }
        if (instance == this.mail_label) {
            this.mail_label.text = "";
        }
    };
    MailItemReader.prototype.onFuchou = function (e) {
        if (this.data && this.data["killerId"]) {
            var self = this;
            GameManager.msgBox.showMsg(function (r) {
                if (r) {
                    var item = Main.player.m_items.findItemByTplId(51);
                    if (!item) {
                        GameManager.flyText({ t: "追踪令不足！", q: 1 });
                        return;
                    }
                    if (item.count <= 0) {
                        GameManager.flyText({ t: "追踪令不足！", q: 1 });
                        return;
                    }
                    var url = "http://" + GameManager.server["ip"] + ":" + GameManager.server["port"];
                    var param = "type=0x0115&sid=" + GameManager.SESSION_ID + "&killerId=" + self.data["killerId"];
                    HttpMessage.sendMsg(url, param);
                }
            }, "    追踪玩家信息需要消耗一个[追踪令]，您确定追踪？（追踪令只能获取玩家所在地图，并不能直接追杀玩家）");
        }
    };
    MailItemReader.prototype.dataChanged = function () {
        _super.prototype.dataChanged.call(this);
        if (this.data) {
            var type = Number(this.data["emailType"]);
            if (type == 1) {
                this.mail_btn_get.visible = true;
                this.mail_btn_del.visible = this.mail_btn_del_end.visible = this.mail_btn_look.visible = false;
            }
            else if (type == 5) {
                this.mail_btn_del.visible = this.mail_btn_look.visible = true;
                this.mail_btn_get.visible = this.mail_btn_del_end.visible = false;
                this.mail_btn_look._setLabel("复  仇");
            }
            else {
                this.mail_btn_look.visible = this.mail_btn_del.visible = this.mail_btn_get.visible = false;
                this.mail_btn_del_end.visible = true;
            }
            //            else if(type ==3)
            //            {
            //                this.mail_btn_look.visible = this.mail_btn_del.visible = this.mail_btn_get.visible = false;
            //
            //                this.mail_btn_del_end.visible = true;
            //            }
            //            else if(type == 4)
            //            {
            //                this.mail_btn_del_end.visible = this.mail_btn_get.visible = false;
            //
            //                this.mail_btn_del.visible = this.mail_btn_look.visible = true;
            //            }
            var str = this.data["content"];
            if (type == 5) {
                var strarr = str.split("&");
                if (strarr) {
                    if (strarr.length > 1) {
                        var id = strarr[1];
                        this.data["killerId"] = id;
                    }
                    str = strarr[0];
                }
            }
            if (this.data["created"]) {
                var time = Number(this.data["created"]);
                if (time > 0) {
                }
            }
            if (this.data["rewards"]) {
                str += "\n\n获得奖励:";
                var arr = this.data["rewards"];
                if (arr && arr.length > 0) {
                    for (var i = 0; i < arr.length; i++) {
                        var obj = arr[i];
                        var maxType = Number(obj["maxType"]);
                        var itemId = obj["itemId"];
                        var num = obj["num"];
                        var items;
                        if (maxType == 1) {
                            items = GameManager.JSON_BAOSHI[itemId];
                        }
                        if (maxType == 2) {
                            items = GameManager.JSON_EQPT[itemId];
                        }
                        else {
                            if (Number(itemId) > 0) {
                                items = GameManager.JSON_ITEM[itemId];
                            }
                            else {
                                str += "[" + GameManager.MAX_TYPE[maxType] + "]*" + num + "  ";
                            }
                        }
                        if (items)
                            str += "[" + items["name"] + "]*" + num + "  ";
                    }
                }
            }
            this.mail_label.text = str;
            this.mail_label.textColor = 0x00ff00;
        }
    };
    MailItemReader.prototype.onGet = function (e) {
        if (this.data) {
            var url = "http://" + GameManager.server["ip"] + ":" + GameManager.server["port"];
            var param = "type=0x0071&sid=" + GameManager.SESSION_ID + "&id=" + this.data["id"];
            HttpMessage.sendMsg(url, param);
        }
    };
    MailItemReader.prototype.onDel = function () {
        if (this.data) {
            var url = "http://" + GameManager.server["ip"] + ":" + GameManager.server["port"];
            var param = "type=0x0072&sid=" + GameManager.SESSION_ID + "&id=" + this.data["id"];
            HttpMessage.sendMsg(url, param);
        }
    };
    return MailItemReader;
})(egret.gui.ItemRenderer);
MailItemReader.prototype.__class__ = "MailItemReader";
