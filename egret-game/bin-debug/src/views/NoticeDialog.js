var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var NoticeDialog = (function (_super) {
    __extends(NoticeDialog, _super);
    function NoticeDialog() {
        _super.call(this);
        this.taskList1 = new egret.gui.List();
        this.dp = new egret.gui.ArrayCollection();
    }
    NoticeDialog.prototype.createChildren = function () {
        _super.prototype.createChildren.call(this);
        this.m_dialog = new DialogBox();
        this.addElement(this.m_dialog);
        this.m_dialog.horizontalCenter = 0;
        this.m_dialog.setTitle("公告");
        this.m_dialog._btn_close.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouch, this);
        this.m_dialog._btn_help.visible = false;
        this.m_UI = new UINotice();
        this.addElement(this.m_UI);
        this.m_UI.horizontalCenter = 0;
        this.m_UI.fk_button.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouch, this);
        this.top = 30;
        this.m_UI.top = this.top + 50;
        this.taskList1.skinName = "skins.ListSkin";
        this.taskList1.horizontalCenter = 0;
        this.taskList1.itemRenderer = new egret.gui.ClassFactory(UIHelpItem);
        this.taskList1.itemRendererSkinName = "skins.HelpItemSkin";
        this.taskList1.dataProvider = this.dp;
        this.addElement(this.taskList1);
        this.taskList1.top = this.m_UI.top + 7;
        this.taskList1.width = 478;
        this.taskList1.height = 516;
        this.m_UI.fk_label.text = "";
        this.m_dialog.height = 720;
    };
    NoticeDialog.prototype.onTouch = function (e) {
        this.hide();
    };
    NoticeDialog.prototype.onUpdate = function () {
        this.dp.removeAll();
        var self = this;
        var url = "http://" + GameManager.delive["ip"] + ":" + GameManager.delive["port"] + "/notice/notice.php";
        var param = "type=" + GameManager.delive["pn"];
        HttpMessage.sendMsgCallBack(url, param, function (obj) {
            for (var i in obj) {
                self.dp.addItem({ text: obj[i] + "\n\n" });
            }
        });
    };
    NoticeDialog.prototype.show = function () {
        _super.prototype.show.call(this);
        this.onUpdate();
    };
    NoticeDialog.prototype.hide = function () {
        _super.prototype.hide.call(this);
    };
    return NoticeDialog;
})(Dialog);
NoticeDialog.prototype.__class__ = "NoticeDialog";
