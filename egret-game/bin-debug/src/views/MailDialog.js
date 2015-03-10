var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var MailDialog = (function (_super) {
    __extends(MailDialog, _super);
    function MailDialog() {
        _super.call(this);
        this.taskList1 = new egret.gui.List();
        this.dp = new egret.gui.ArrayCollection();
    }
    MailDialog.prototype.createChildren = function () {
        _super.prototype.createChildren.call(this);
        this.m_dialog = new DialogBox();
        this.addElement(this.m_dialog);
        this.m_dialog.horizontalCenter = 0;
        this.m_dialog.setTitle("邮件");
        this.m_dialog._btn_close.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouch, this);
        this.m_dialog._btn_help.visible = false;
        this.m_UI = new UIMail();
        this.addElement(this.m_UI);
        this.m_UI.horizontalCenter = 0;
        this.taskList1.skinName = "skins.ListSkin";
        this.taskList1.height = 520;
        this.taskList1.horizontalCenter = 0;
        this.taskList1.itemRenderer = new egret.gui.ClassFactory(MailItemReader);
        this.taskList1.itemRendererSkinName = "skins.MailItemReaderSkin";
        this.taskList1.dataProvider = this.dp;
        //taskList1.addEventListener(egret.gui.ListEvent.ITEM_CLICK, this.clickItem, this);
        this.addElement(this.taskList1);
        this.top = 30;
        this.m_UI.top = this.top + 50;
        this.taskList1.top = this.m_UI.top + 67;
    };
    MailDialog.prototype.onTouch = function (e) {
        this.hide();
    };
    MailDialog.prototype.onUpdate = function () {
        this.dp.removeAll();
        var mail = Main.player.m_mails["emails"];
        if (!mail)
            return;
        mail.sort(function (x, y) {
            if (y["created"] > x["created"])
                return 1;
            return -1;
        });
        if (mail && mail.length > 0) {
            for (var i = 0; i < mail.length; i++) {
                var o = mail[i];
                this.dp.addItem(o);
            }
        }
    };
    MailDialog.prototype.show = function () {
        _super.prototype.show.call(this);
        this.onUpdate();
    };
    MailDialog.prototype.hide = function () {
        _super.prototype.hide.call(this);
    };
    return MailDialog;
})(Dialog);
MailDialog.prototype.__class__ = "MailDialog";
