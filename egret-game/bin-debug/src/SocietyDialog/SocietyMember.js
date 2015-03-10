var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
/**
 * 帮会成员
 */
var SocietyMemberDialog = (function (_super) {
    __extends(SocietyMemberDialog, _super);
    function SocietyMemberDialog() {
        _super.call(this);
        this.list = new egret.gui.List();
        this.dp = new egret.gui.ArrayCollection();
    }
    SocietyMemberDialog.prototype.createChildren = function () {
        _super.prototype.createChildren.call(this);
        this._dialog = new DialogBox();
        this.addElement(this._dialog);
        this._dialog.horizontalCenter = 0;
        this.m_UI = new UISocietyArrange();
        this.addElement(this.m_UI);
        this.m_UI.horizontalCenter = 0;
        this._dialog._btn_close.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouch, this);
        this._dialog._btn_help.visible = false;
        this._dialog.setTitle("行会成员");
        this.top = 30;
        this.m_UI.top = this.top + 50;
        this.list.skinName = "skins.ListSkin";
        this.list.height = 451;
        this.list.width = 530;
        this.list.horizontalCenter = 0;
        this.list.top = 245;
        this.list.itemRenderer = new egret.gui.ClassFactory(UISocietyRankItem);
        this.list.itemRendererSkinName = "skins.SocietyRankItemReaderSkin";
        this.list.dataProvider = this.dp;
        this.list.touchChildren = true;
        this.list.addEventListener(egret.gui.ListEvent.ITEM_CLICK, this.clickItem, this);
        this.addElement(this.list);
        this.m_UI._btn_buzhen.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
        this.m_UI._btn_exit.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
        this.m_UI._btn_manager.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
        this.m_UI._btn_buzhen.visible = false;
    };
    SocietyMemberDialog.prototype.clickItem = function (e) {
        var item = e.item;
        var id = Number(item["roleId"]);
        var sm = Main.player.m_society.findMemeber(id);
        if (sm) {
            if (sm.roleId == Main.player.m_society.myInfo.roleId)
                return;
            var dialog = DialogManager.findDialog(MemberManagerDialog, "MemberManagerDialog");
            if (dialog) {
                dialog.sm = sm;
                dialog.show();
            }
        }
    };
    SocietyMemberDialog.prototype.onTouch = function (e) {
        this.hide();
    };
    SocietyMemberDialog.prototype.onClick = function (e) {
        switch (e.target) {
            case this.m_UI._btn_exit:
                GameManager.msgBox.showMsg(function (r) {
                    if (r) {
                        var url = "http://" + GameManager.server["ip"] + ":" + GameManager.server["port"];
                        var param = "type=0x0021&sid=" + GameManager.SESSION_ID;
                        HttpMessage.sendMsg(url, param);
                    }
                }, "确定要退出行会？");
                break;
            case this.m_UI._btn_buzhen:
            case this.m_UI._btn_manager:
                DialogManager.open(SocietyManager, "SocietyManager");
            default:
                break;
        }
    };
    SocietyMemberDialog.prototype.onUpdate = function () {
        this.dp.removeAll();
        var so = Main.player.m_society;
        if (!so)
            return;
        this.m_UI._label_level.text = "行会等级：" + so.lv;
        this.m_UI._label_renshu.text = "行会人数：" + so.num + "/" + so.maxNum;
        for (var i in so.members) {
            if (!so.members[i])
                continue;
            this.dp.addItem(so.members[i]);
        }
    };
    SocietyMemberDialog.prototype.show = function () {
        _super.prototype.show.call(this);
        this.onUpdate();
        Main.iconMeun.setHanghuiGroupVis(false);
    };
    SocietyMemberDialog.prototype.hide = function () {
        Main.iconMeun.setHanghuiGroupVis(true);
        _super.prototype.hide.call(this);
    };
    return SocietyMemberDialog;
})(Dialog);
SocietyMemberDialog.prototype.__class__ = "SocietyMemberDialog";
