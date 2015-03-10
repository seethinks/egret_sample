var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var HelpDialog = (function (_super) {
    __extends(HelpDialog, _super);
    function HelpDialog() {
        _super.call(this);
        this.taskList1 = new egret.gui.List();
        this.dp = new egret.gui.ArrayCollection();
        this.index = 0;
    }
    HelpDialog.prototype.createChildren = function () {
        _super.prototype.createChildren.call(this);
        this._dialog = new DialogBox();
        this.addElement(this._dialog);
        this._dialog.horizontalCenter = 0;
        this.m_UI = new UIHelp();
        this.addElement(this.m_UI);
        this.m_UI.horizontalCenter = 0;
        this._dialog._btn_close.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouch, this);
        this._dialog._btn_help.visible = false;
        this._dialog.setTitle("帮助");
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
        this.taskList1.height = 585;
    };
    HelpDialog.prototype.onTouch = function (e) {
        this.hide();
    };
    HelpDialog.prototype.onUpdate = function () {
    };
    HelpDialog.prototype.showText = function () {
        this.dp.removeAll();
        if (this.index <= 0) {
            for (var key in GameManager.JSON_HELP) {
                var obj = GameManager.JSON_HELP[key];
                this.dp.addItem({ text: obj["title"] });
                this.dp.addItem({ text: "" });
                var str = obj["content"];
                var arr = str.split("&");
                for (var i = 0; i < arr.length; i++) {
                    this.dp.addItem({ text: "" + arr[i] });
                }
            }
        }
        else {
            var objs = GameManager.JSON_HELP_TIP[this.index];
            this.dp.addItem({ text: "" });
            this.dp.addItem({ text: objs["title"] });
            this.dp.addItem({ text: "" });
            var strs = objs["content"];
            var arrs = strs.split("&");
            for (var j = 0; j < arrs.length; j++) {
                this.dp.addItem({ text: "" + arrs[j] });
            }
        }
        var self = this;
        egret.callLater(function () {
            if (self.taskList1.dataGroup && self.taskList1.dataGroup.verticalScrollPosition)
                self.taskList1.dataGroup.verticalScrollPosition = 0;
        }, this.taskList1);
    };
    HelpDialog.prototype.show = function () {
        _super.prototype.show.call(this);
        this.showText();
    };
    HelpDialog.prototype.hide = function () {
        _super.prototype.hide.call(this);
    };
    return HelpDialog;
})(Dialog);
HelpDialog.prototype.__class__ = "HelpDialog";
