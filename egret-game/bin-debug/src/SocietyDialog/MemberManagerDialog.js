var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
/**
 * 行会成员管理
 */
var MemberManagerDialog = (function (_super) {
    __extends(MemberManagerDialog, _super);
    function MemberManagerDialog() {
        _super.call(this);
    }
    MemberManagerDialog.prototype.createChildren = function () {
        _super.prototype.createChildren.call(this);
        this._dialog = new DialogBox();
        this.addElement(this._dialog);
        this._dialog.height = 400;
        this._dialog.horizontalCenter = 0;
        this.m_UI = new MemberManagerUI();
        this.addElement(this.m_UI);
        this.m_UI.horizontalCenter = 0;
        this._dialog._btn_close.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouch, this);
        this.m_UI._btn_close.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouch, this);
        this.m_UI._btn_renmin.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
        this.m_UI._btn_tichu.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
        this._dialog._btn_help.visible = false;
        this._dialog.setTitle("会员操作");
        this.top = 30;
        this.m_UI.top = this.top + 50;
        this.verticalCenter = 0;
    };
    MemberManagerDialog.prototype.onClick = function (e) {
        if (this.sm) {
            var sjob = Number(this.sm.sJob);
            var url = "http://" + GameManager.server["ip"] + ":" + GameManager.server["port"];
            var param = "";
            var self = this;
            switch (e.target) {
                case this.m_UI._btn_renmin:
                    if (sjob == 2) {
                        //转让
                        GameManager.msgBox.showMsg(function (r) {
                            if (r) {
                                param = "type=0x0024&sid=" + GameManager.SESSION_ID + "&roleId=" + self.sm.roleId;
                                HttpMessage.sendMsg(url, param);
                            }
                        }, "    确定将公会转让给该玩家？（请慎重操作）");
                    }
                    else {
                        //任命
                        GameManager.msgBox.showMsg(function (r) {
                            if (r) {
                                param = "type=0x0025&sid=" + GameManager.SESSION_ID + "&roleId=" + self.sm.roleId;
                                HttpMessage.sendMsg(url, param);
                            }
                        }, "    确定任命该玩家为副会长？");
                    }
                    break;
                case this.m_UI._btn_tichu:
                    if (sjob == 2) {
                        //解除
                        GameManager.msgBox.showMsg(function (r) {
                            if (r) {
                                param = "type=0x0027&sid=" + GameManager.SESSION_ID + "&roleId=" + self.sm.roleId;
                                HttpMessage.sendMsg(url, param);
                            }
                        }, "    确定解除副会长的权限？");
                    }
                    else {
                        //踢出
                        GameManager.msgBox.showMsg(function (r) {
                            if (r) {
                                param = "type=0x0026&sid=" + GameManager.SESSION_ID + "&roleId=" + self.sm.roleId;
                                HttpMessage.sendMsg(url, param);
                            }
                        }, "    确定将该玩家踢出公会？");
                    }
                    break;
            }
        }
        this.hide();
    };
    MemberManagerDialog.prototype.onTouch = function (e) {
        this.hide();
    };
    MemberManagerDialog.prototype.onUpdate = function () {
        if (this.sm && Main.player.m_society.myInfo) {
            this.m_UI._label_fight.text = "" + this.sm.fv;
            this.m_UI._label_gongxian.text = "" + this.sm.allContri;
            this.m_UI._label_job.text = "" + GameManager.SOCIETY_JOB[this.sm.sJob];
            this.m_UI._label_name.text = "Lv." + this.sm.lv + "    " + this.sm.name;
            this.m_UI._head.source = "f_" + this.sm.sex + "_" + this.sm.pos;
            var sjob = Number(this.sm.sJob);
            var m_sjob = Number(Main.player.m_society.myInfo.sJob);
            switch (sjob) {
                case 1:
                    this.m_UI._btn_renmin.visible = false;
                    this.m_UI._btn_tichu.visible = false;
                    this.m_UI._btn_close.visible = true;
                    break;
                case 2:
                    if (m_sjob == 1) {
                        this.m_UI._btn_renmin.visible = true;
                        this.m_UI._btn_tichu.visible = true;
                        this.m_UI._btn_close.visible = false;
                        this.m_UI._btn_renmin._setLabel("转让公会");
                        this.m_UI._btn_tichu._setLabel("解除副会长");
                    }
                    else {
                        this.m_UI._btn_renmin.visible = false;
                        this.m_UI._btn_tichu.visible = false;
                        this.m_UI._btn_close.visible = true;
                    }
                    break;
                case 3:
                    if (m_sjob == 1) {
                        this.m_UI._btn_renmin.visible = true;
                        this.m_UI._btn_tichu.visible = true;
                        this.m_UI._btn_close.visible = false;
                        this.m_UI._btn_renmin._setLabel("任命副会长");
                        this.m_UI._btn_tichu._setLabel("踢出公会");
                    }
                    else {
                        this.m_UI._btn_renmin.visible = false;
                        this.m_UI._btn_tichu.visible = false;
                        this.m_UI._btn_close.visible = true;
                    }
                    break;
                default:
                    break;
            }
        }
    };
    MemberManagerDialog.prototype.show = function () {
        _super.prototype.show.call(this);
        this.onUpdate();
    };
    MemberManagerDialog.prototype.hide = function () {
        _super.prototype.hide.call(this);
    };
    return MemberManagerDialog;
})(Dialog);
MemberManagerDialog.prototype.__class__ = "MemberManagerDialog";
