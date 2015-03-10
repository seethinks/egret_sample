var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var GemUpgradeDialog = (function (_super) {
    __extends(GemUpgradeDialog, _super);
    function GemUpgradeDialog() {
        _super.call(this);
    }
    GemUpgradeDialog.prototype.createChildren = function () {
        _super.prototype.createChildren.call(this);
        this._dialog = new DialogBox();
        this.addElement(this._dialog);
        this._dialog.horizontalCenter = 0;
        this.m_UI = new GemUpgradeUI();
        this.addElement(this.m_UI);
        this.m_UI.horizontalCenter = 0;
        this._dialog._btn_close.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouch, this);
        this._dialog._btn_help.visible = false;
        this._dialog.setTitle("宝石合成");
        this.top = 30;
        this.m_UI.top = this.top + 40;
        this.m_UI.xq_btn_upgrade.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
        this.m_UI._icon._eqpetName.textColor = 0x00ff00;
        this.m_UI._icon._eqpetName.bold = true;
    };
    GemUpgradeDialog.prototype.onClick = function (e) {
        if (!Main.player.m_clickItme) {
            GameManager.flyText({ t: "宝石不足！", q: 1 });
            return;
        }
        var url = "http://" + GameManager.server["ip"] + ":" + GameManager.server["port"];
        var param = "type=0x0123&sid=" + GameManager.SESSION_ID + "&gemId=" + Main.player.m_clickItme["id"];
        HttpMessage.sendMsg(url, param);
    };
    GemUpgradeDialog.prototype.onTouch = function (e) {
        this.hide();
    };
    GemUpgradeDialog.prototype.onUpdate = function () {
        var item = Main.player.m_clickItme;
        if (!item) {
            this.m_UI._name1.text = "";
            this.m_UI._bs_img1.source = "test_icon";
            this.m_UI._label.text = "";
            this.m_UI.xq_label_eqptname.text = "";
            return;
        }
        if (item.maxType != 1)
            return;
        var nextId = item.tpl["upTarget"];
        if (Number(nextId) == 0) {
            this.hide();
            GameManager.flyText({ t: "该宝石已达顶级！", q: 1 });
            return;
        }
        var nextItem = GameManager.JSON_BAOSHI[nextId];
        if (nextItem) {
            this.m_UI._icon.setItems(nextItem["icon"]);
            this.m_UI._icon.setName(nextItem["name"]);
        }
        if (item.count > 0) {
            this.m_UI._name1.text = item.tpl["name"] + "x" + item.count;
            this.m_UI._bs_img1.source = "" + item.tpl["icon"];
            this.m_UI._bs_img1.width = this.m_UI._bs_img1.height = 68;
            if (item.count < 3)
                this.m_UI._name1.textColor = 0xff0000;
            else
                this.m_UI._name1.textColor = 0x00ff00;
            var str = "合成消耗：\n\n";
            str += "" + item.tpl["name"] + "：3（当前拥有" + item.count + "）\n\n";
            str += "需要金币：" + item.tpl["upMoney"] + "（当前拥有：" + Main.player.money + "）";
            this.m_UI._label.text = str;
            this.m_UI.xq_label_eqptname.text = "合成后将获得：" + nextItem["name"] + "（" + nextItem["des"] + "）";
        }
    };
    GemUpgradeDialog.prototype.show = function () {
        _super.prototype.show.call(this);
        this.onUpdate();
    };
    GemUpgradeDialog.prototype.hide = function () {
        _super.prototype.hide.call(this);
        this.clear();
    };
    GemUpgradeDialog.prototype.clear = function () {
        this.m_UI._icon.setItems("test_icon");
        this.m_UI._icon.setName("");
        this.m_UI.xq_label_eqptname.text = "";
        this.m_UI._name1.text = "";
        this.m_UI._bs_img1.source = "test_icon";
        this.m_UI._label.text = "";
        this.m_UI.xq_label_eqptname.text = "";
    };
    return GemUpgradeDialog;
})(Dialog);
GemUpgradeDialog.prototype.__class__ = "GemUpgradeDialog";
