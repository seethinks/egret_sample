var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var EqptSelectDialog = (function (_super) {
    __extends(EqptSelectDialog, _super);
    function EqptSelectDialog() {
        _super.call(this);
        this.taskList1 = new egret.gui.List();
        this.dp = new egret.gui.ArrayCollection();
    }
    EqptSelectDialog.prototype.createChildren = function () {
        _super.prototype.createChildren.call(this);
        this.m_dialog = new DialogBox();
        this.addElement(this.m_dialog);
        this.m_dialog.horizontalCenter = 0;
        this.m_dialog.setTitle("装备选择");
        this.m_dialog._btn_close.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouch, this);
        this.m_dialog._btn_help.visible = false;
        this.m_UI = new UIEqptSelect();
        this.addElement(this.m_UI);
        this.m_UI.horizontalCenter = 0;
        this.taskList1.skinName = "skins.ListSkin";
        this.taskList1.height = 520;
        this.taskList1.horizontalCenter = 0;
        this.taskList1.itemRenderer = new egret.gui.ClassFactory(UIEqptSelectList);
        this.taskList1.itemRendererSkinName = "skins.EqptSelectListSkin";
        this.taskList1.dataProvider = this.dp;
        this.addElement(this.taskList1);
        this.top = 30;
        this.m_UI.top = this.top + 50;
        this.taskList1.top = this.m_UI.top + 10;
        this.m_UI._btn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
    };
    EqptSelectDialog.prototype.onTouch = function (e) {
        this.hide();
    };
    EqptSelectDialog.prototype.onClick = function (e) {
        this.hide();
        var list = new Array();
        var ronglian = DialogManager.findDialog(EqptRongLian, "EqptRongLian");
        if (ronglian && ronglian.showing) {
            for (var i = 0; i < this.dp.length; i++) {
                var obj = this.dp.getItemAt(i);
                if (obj && obj["index"]) {
                    var index = Number(obj["index"]);
                    if (Number(index) == 1) {
                        list.push(obj);
                    }
                }
            }
            ronglian.setList(list);
        }
    };
    EqptSelectDialog.prototype.onUpdate = function () {
        this.dp.removeAll();
        var temp = new Array();
        var equips = Main.player.m_items.equips;
        if (equips.length > 0) {
            for (var i = equips.length - 1; i >= 0; i--) {
                if (!equips[i])
                    continue;
                if (equips[i].godEq > 0)
                    continue;
                var b = false;
                for (var j = 1; j <= 4; j++) {
                    var equ = equips[i];
                    if (Number(equ["hole" + j]) > 0) {
                        b = true;
                        break;
                    }
                }
                if (b)
                    continue;
                temp.push(equips[i]);
            }
        }
        var ronglian = DialogManager.findDialog(EqptRongLian, "EqptRongLian");
        if (ronglian && ronglian.showing) {
            for (var k = 0; k < temp.length; k++) {
                var data = temp[k];
                data["index"] = 0;
                for (var j = 0; j < ronglian.idList.length; j++) {
                    if (data["id"] == ronglian.idList[j]) {
                        data["index"] = 1;
                    }
                }
                this.dp.addItem(data);
            }
        }
    };
    EqptSelectDialog.prototype.show = function () {
        _super.prototype.show.call(this);
        this.onUpdate();
    };
    EqptSelectDialog.prototype.hide = function () {
        _super.prototype.hide.call(this);
    };
    return EqptSelectDialog;
})(Dialog);
EqptSelectDialog.prototype.__class__ = "EqptSelectDialog";
