var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var GameSetDialog = (function (_super) {
    __extends(GameSetDialog, _super);
    function GameSetDialog() {
        _super.call(this);
        this.checkObj = {};
    }
    GameSetDialog.prototype.createChildren = function () {
        _super.prototype.createChildren.call(this);
        this._dialog = new DialogBox();
        this.addElement(this._dialog);
        this._dialog.horizontalCenter = 0;
        this.m_UI = new UIGameSet();
        this.addElement(this.m_UI);
        this.m_UI.horizontalCenter = 0;
        this._dialog._btn_close.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouch, this);
        this._dialog._btn_help.visible = false;
        this._dialog.setTitle("游戏设置");
        this.top = 30;
        this.m_UI.top = this.top + 80;
        this._dialog.height = Main.guiLayer.height - 250;
        this.m_UI.gs_btn_cancel.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouch, this);
        this.m_UI.gs_btn_save.addEventListener(egret.TouchEvent.TOUCH_TAP, this.save, this);
        for (var i = 1; i <= 6; i++) {
            this.checkObj[i] = this.m_UI["gs_check" + i];
        }
    };
    GameSetDialog.prototype.save = function (e) {
        var n1 = String(this.m_UI.gs_check1.selectIndex);
        var n2 = String(this.m_UI.gs_check2.selectIndex);
        var n3 = String(this.m_UI.gs_check3.selectIndex);
        var n4 = String(this.m_UI.gs_check4.selectIndex);
        var n5 = String(this.m_UI.gs_check5.selectIndex);
        var n6 = String(this.m_UI.gs_check6.selectIndex);
        var url = "http://" + GameManager.server["ip"] + ":" + GameManager.server["port"];
        var param = "type=0x0045&sid=" + GameManager.SESSION_ID + "&a1=" + n1 + "&a2=" + n2 + "&a3=" + n3 + "&a4=" + n4 + "&a5=" + n5 + "&a6=" + n6 + "&aa=1";
        HttpMessage.sendMsg(url, param);
        Main.player.m_gameSet["1"] = n1;
        Main.player.m_gameSet["2"] = n2;
        Main.player.m_gameSet["3"] = n3;
        Main.player.m_gameSet["4"] = n4;
        Main.player.m_gameSet["5"] = n5;
        Main.player.m_gameSet["6"] = n6;
        this.hide();
    };
    GameSetDialog.prototype.onTouch = function (e) {
        this.hide();
    };
    GameSetDialog.prototype.onUpdate = function () {
        var j = 1;
        for (var key in Main.player.m_gameSet) {
            var n = Main.player.m_gameSet[key];
            var c = this.checkObj[j];
            c.setGou(Number(n));
            j++;
        }
    };
    GameSetDialog.prototype.show = function () {
        _super.prototype.show.call(this);
        this.onUpdate();
    };
    GameSetDialog.prototype.hide = function () {
        _super.prototype.hide.call(this);
    };
    return GameSetDialog;
})(Dialog);
GameSetDialog.prototype.__class__ = "GameSetDialog";
