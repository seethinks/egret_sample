var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var ArmsInheritCheck = (function (_super) {
    __extends(ArmsInheritCheck, _super);
    function ArmsInheritCheck() {
        _super.call(this);
        this.taskList1 = new egret.gui.List();
        this.dp = new egret.gui.ArrayCollection();
    }
    ArmsInheritCheck.prototype.createChildren = function () {
        _super.prototype.createChildren.call(this);
        this.m_dialog = new DialogBox();
        this.addElement(this.m_dialog);
        this.m_dialog.horizontalCenter = 0;
        this.m_dialog.setTitle("神器选择");
        this.m_dialog._btn_close.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouch, this);
        this.m_dialog._btn_help.visible = false;
        this.m_UI = new UIEqptSelect();
        this.addElement(this.m_UI);
        this.m_UI.horizontalCenter = 0;
        this.taskList1.skinName = "skins.ListSkin";
        this.taskList1.height = 520;
        this.taskList1.horizontalCenter = 0;
        this.taskList1.itemRenderer = new egret.gui.ClassFactory(UIEqptSelectListTo);
        this.taskList1.itemRendererSkinName = "skins.EqptSelectListSkin";
        this.taskList1.dataProvider = this.dp;
        this.addElement(this.taskList1);
        this.top = 30;
        this.m_UI.top = this.top + 50;
        this.taskList1.top = this.m_UI.top + 10;
        this.m_UI._btn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
    };
    ArmsInheritCheck.prototype.onTouch = function (e) {
        this.hide();
    };
    ArmsInheritCheck.prototype.onClick = function (e) {
        this.hide();
        for (var i = 0; i < this.dp.length; i++) {
            var obj = this.dp.getItemAt(i);
            if (Number(obj["index"]) > 0) {
                var dialog = DialogManager.findDialog(ArmsInheritDialog, "ArmsInheritDialog");
                if (dialog && dialog.showing)
                    dialog.setItem(obj);
                return;
            }
        }
    };
    ArmsInheritCheck.prototype.setIndex = function () {
        for (var i = 0; i < this.dp.length; i++) {
            var obj = this.dp.getItemAt(i);
            if (Number(obj["index"]) > 0) {
                obj["index"] = 0;
            }
            this.dp.refresh();
        }
    };
    ArmsInheritCheck.prototype.onUpdate = function () {
        this.dp.removeAll();
        var temp = new Array();
        var pos = Main.player.m_clickItme.tpl["ePostion"];
        if (Main.player.m_items.holdEq[pos]) {
            if (Main.player.m_items.holdEq[pos].godEq == 0) {
                temp.push(Main.player.m_items.holdEq[pos]);
            }
        }
        var equips = Main.player.m_items.equips;
        if (equips.length > 0) {
            for (var i = 0; i < equips.length; i++) {
                if (!equips[i])
                    continue;
                if (equips[i].godEq > 0)
                    continue;
                if (equips[i].tpl["ePostion"] != pos)
                    continue;
                temp.push(equips[i]);
            }
        }
        temp.sort(function (x, y) {
            if (y.grade > x.grade) {
                return 1;
            }
            else if (y.grade == x.grade) {
                if (y["qly"] > x["qly"]) {
                    return 1;
                }
                else if (y["qly"] == x["qly"]) {
                    if (y.tpl['lv'] > x.tpl['lv']) {
                        return 1;
                    }
                }
            }
            return -1;
        });
        for (var k = 0; k < temp.length; k++) {
            var data = temp[k];
            data["index"] = 0;
            this.dp.addItem(data);
        }
    };
    ArmsInheritCheck.prototype.show = function () {
        _super.prototype.show.call(this);
        if (Main.player.m_clickItme) {
            this.onUpdate();
        }
        else {
        }
    };
    ArmsInheritCheck.prototype.hide = function () {
        _super.prototype.hide.call(this);
    };
    return ArmsInheritCheck;
})(Dialog);
ArmsInheritCheck.prototype.__class__ = "ArmsInheritCheck";
