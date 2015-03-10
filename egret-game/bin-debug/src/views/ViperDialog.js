var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var ViperDialog = (function (_super) {
    __extends(ViperDialog, _super);
    function ViperDialog() {
        _super.call(this);
        this.level = 0;
    }
    ViperDialog.prototype.createChildren = function () {
        _super.prototype.createChildren.call(this);
        this._dialog = new DialogBox();
        this.addElement(this._dialog);
        this._dialog.horizontalCenter = 0;
        this.m_UI = new UIViper();
        this.addElement(this.m_UI);
        this.m_UI.horizontalCenter = 0;
        this._dialog._btn_close.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouch, this);
        this._dialog._btn_help.visible = false;
        this._dialog.setTitle("VIP");
        this.top = 30;
        this.m_UI.top = this.top + 40;
        this.m_UI._charge_xq_btn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onVipBtn, this);
        this.m_UI.vip_btn_left.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onLeft, this);
        this.m_UI.vip_btn_right.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onRight, this);
        this.m_UI.vip_btn_left.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onBegin, this);
        this.m_UI.vip_btn_right.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onBegin, this);
        this._dialog.height = 720;
    };
    ViperDialog.prototype.onBegin = function (e) {
        var ui = e.currentTarget;
        ui.scaleX = 0.9;
        ui.scaleY = 0.9;
        this.clickUI = ui;
        egret.setTimeout(this.onEnd, this, 50);
    };
    ViperDialog.prototype.onEnd = function (e) {
        if (this.clickUI) {
            this.clickUI.scaleX = 1;
            this.clickUI.scaleY = 1;
        }
    };
    ViperDialog.prototype.onLeft = function (e) {
        if (this.level > 0) {
            this.level--;
            this.refreshLevel();
        }
    };
    ViperDialog.prototype.onRight = function (e) {
        if (this.level < 15) {
            this.level++;
            this.refreshLevel();
        }
    };
    ViperDialog.prototype.refreshLevel = function () {
        var vip = GameManager.JSON_VIP[Number(this.level) + 1];
        var vip_desc = GameManager.JSON_VIP_DESC;
        var str = "累计充值" + vip["exp"] + "元宝即可享受特权\n\n";
        if (vip && vip_desc) {
            var rewards = vip["rewards"];
            var arr_rewards = rewards.split("|");
            for (var i = 0; i < arr_rewards.length; i++) {
                var str_vip = arr_rewards[i];
                var arr_vip = str_vip.split("#");
                var vip_id = arr_vip[0];
                var desc = vip_desc[vip_id]["rdesc"];
                var descArr = desc.split("#");
                var vip_num = arr_vip[1];
                if (descArr[1] == "item") {
                    if (Number(vip_num) > 0) {
                        var item = GameManager.JSON_ITEM[vip_num];
                        str += descArr[0] + item["name"] + "\n\n";
                    }
                }
                else {
                    str += descArr[0] + vip_num + "\n\n";
                }
            }
        }
        this.m_UI.vip_label_privilege.text = str;
        this.m_UI.vip_label_level.text = "" + this.level + "级VIP特权";
    };
    ViperDialog.prototype.onTouch = function (e) {
        this.hide();
    };
    ViperDialog.prototype.onVipBtn = function (e) {
        //        GameManager.flyText({t:"暂未开放！", q:1});
        //
        //        return;
        this.hide();
        DialogManager.open(ChargeDialog, "ChargeDialog");
    };
    ViperDialog.prototype.onUpdate = function () {
        if (!this.m_UI)
            return;
        var nVipLv = Number(Main.player.vip) + 1;
        if (nVipLv > 15) {
            nVipLv = 15;
        }
        var nVipTpl = GameManager.JSON_VIP[Number(nVipLv) + 1];
        if (nVipTpl) {
            var num = 0;
            if (Number(nVipTpl["exp"]) - Main.player.vipexp < 0) {
                num = 0;
            }
            else {
                num = Number(nVipTpl["exp"]) - Main.player.vipexp;
            }
            if (nVipLv >= 15) {
                this.m_UI._charge_ppt.text = "您已达到最高级VIP";
            }
            else {
                this.m_UI._charge_ppt.text = "再充值 " + num + " 元宝可成为" + nVipTpl["name"];
            }
            this.m_UI._now_vipLv.source = "vip" + Main.player.vip;
            this.m_UI._next_vipLv.source = "vip" + nVipLv;
            var exr = Math.floor(Main.player.vipexp / Number(nVipTpl["exp"]));
            this.m_UI._vip_exp.width = exr > 1 ? 320 : Main.player.vipexp / Number(nVipTpl["exp"]) * 320;
        }
    };
    ViperDialog.prototype.onUpdatePlayer = function () {
        this.onUpdate();
    };
    ViperDialog.prototype.show = function () {
        _super.prototype.show.call(this);
        this.level = Number(Main.player.vip);
        this.refreshLevel();
        this.onUpdate();
    };
    ViperDialog.prototype.hide = function () {
        _super.prototype.hide.call(this);
    };
    return ViperDialog;
})(Dialog);
ViperDialog.prototype.__class__ = "ViperDialog";
