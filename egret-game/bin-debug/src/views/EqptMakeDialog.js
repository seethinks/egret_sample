var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var EqptMakeDialog = (function (_super) {
    __extends(EqptMakeDialog, _super);
    function EqptMakeDialog() {
        _super.call(this);
    }
    EqptMakeDialog.prototype.createChildren = function () {
        _super.prototype.createChildren.call(this);
        this.m_dialog = new DialogBox();
        this.addElement(this.m_dialog);
        this.m_dialog.horizontalCenter = 0;
        this.m_dialog.setTitle("装备打造");
        this.m_dialog._btn_close.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouch, this);
        this.m_dialog._btn_help.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onHelp, this);
        this.m_UI = new UIMake();
        this.addElement(this.m_UI);
        this.m_UI.horizontalCenter = 0;
        this.top = 30;
        this.m_UI.top = this.top + 50;
        this.m_UI.make_btn_make.addEventListener(egret.TouchEvent.TOUCH_TAP, this.click, this);
        this.m_UI.make_btn_refresh.addEventListener(egret.TouchEvent.TOUCH_TAP, this.click, this);
        var url = "http://" + GameManager.server["ip"] + ":" + GameManager.server["port"];
        var param = "type=0x0085&sid=" + GameManager.SESSION_ID;
        HttpMessage.sendMsg(url, param);
    };
    EqptMakeDialog.prototype.onHelp = function (e) {
        var help = DialogManager.findDialog(HelpDialog, "HelpDialog");
        if (help) {
            help.index = 4;
            if (help.showing) {
                help.showText();
            }
            else {
                help.show();
            }
        }
    };
    EqptMakeDialog.prototype.onTouch = function (e) {
        this.hide();
    };
    EqptMakeDialog.prototype.click = function (e) {
        switch (e.target) {
            case this.m_UI.make_btn_make:
                var url = "http://" + GameManager.server["ip"] + ":" + GameManager.server["port"];
                var param = "type=0x0086&sid=" + GameManager.SESSION_ID;
                HttpMessage.sendMsg(url, param);
                break;
            case this.m_UI.make_btn_refresh:
                if (Number(this.makeData["size"]) <= 0) {
                    GameManager.msgBox.showMsg(function (r) {
                        if (r) {
                            var url = "http://" + GameManager.server["ip"] + ":" + GameManager.server["port"];
                            var param = "type=0x0087&sid=" + GameManager.SESSION_ID;
                            HttpMessage.sendMsg(url, param);
                        }
                    }, "刷新需要消耗20元宝，您确定继续？"); //+this.makeData["gold"]+
                }
                else {
                    var url = "http://" + GameManager.server["ip"] + ":" + GameManager.server["port"];
                    var param = "type=0x0087&sid=" + GameManager.SESSION_ID;
                    HttpMessage.sendMsg(url, param);
                }
                break;
        }
    };
    EqptMakeDialog.prototype.onUpdate = function () {
        if (!this.makeData)
            return;
        var obj = this.makeData["tempItem"];
        var id = obj["templateid"];
        var type = Number(obj["maxType"]);
        var item;
        if (type == 2) {
            item = new Equip();
            item.update(obj);
            this.m_UI.make_icon.data = item;
            this.m_UI.make_icon.setItems(item.tpl["icon"]);
            this.m_UI.make_icon.setQuality(Number(item["qly"]));
            this.m_UI.make_itemlabel_propey._textField.textFlow = GameManager.GetEqptPropStr(item);
            //            this.m_UI.make_itemlabel_propey.textColor = GameManager.COLOR[Number(item["qly"])];
            this.m_UI.make_itemlabel_type.text = GameManager.EQPT_TYPE[Number(item.tpl["ePostion"])];
        }
        if (type == 3) {
            item = new Item();
            item.update(obj);
            this.m_UI.make_icon.data = item;
            this.m_UI.make_icon.setItems(item.tpl["icon"]);
            this.m_UI.make_icon.setQuality(Number(item["qly"]));
            this.m_UI.make_itemlabel_propey.text = "用于装备开孔的道具";
            this.m_UI.make_itemlabel_type.text = "";
        }
        this.onUpdatePlayer();
    };
    EqptMakeDialog.prototype.onUpdatePlayer = function () {
        if (!this.makeData)
            return;
        this.m_UI.make_label_need.text = "打造所需熔炼值：" + this.makeData["smelt"] + " (当前拥有：" + Main.player.smelt + ")";
        this.m_UI.make_label_num.text = "今日可免费刷新次数：" + this.makeData["size"];
    };
    EqptMakeDialog.prototype.show = function () {
        _super.prototype.show.call(this);
        this.onUpdate();
    };
    EqptMakeDialog.prototype.hide = function () {
        _super.prototype.hide.call(this);
    };
    return EqptMakeDialog;
})(Dialog);
EqptMakeDialog.prototype.__class__ = "EqptMakeDialog";
