var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var SuggestionDialog = (function (_super) {
    __extends(SuggestionDialog, _super);
    function SuggestionDialog() {
        _super.call(this);
    }
    SuggestionDialog.prototype.createChildren = function () {
        _super.prototype.createChildren.call(this);
        this.m_dialog = new DialogBox();
        this.addElement(this.m_dialog);
        this.m_dialog.horizontalCenter = 0;
        this.m_dialog.setTitle("意见反馈");
        this.m_dialog._btn_close.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouch, this);
        this.m_dialog._btn_help.visible = false;
        this.m_UI = new UINotice();
        this.addElement(this.m_UI);
        this.m_UI.horizontalCenter = 0;
        this.m_UI.fk_button.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouch, this);
        this.top = 30;
        this.m_UI.top = this.top + 50;
        this.m_UI.fk_label.size = 25;
        var str = "        亲爱的玩家，您好！您可以通过官方客\n\n" + "服QQ：4000617287（查找--找服务--输入4\n\n" + "000617287）反馈您遇到的问题哦，也欢迎\n\n" + "您来到我们的玩家QQ群（387010741）来\n\n" + "领取游戏礼包，交流游戏心得哦~ 您还可以\n\n" + "在活动期间内关注我们的微信公众账号--“\n\n" + "安果互动”（打开公众号界面，搜索“安果\n\n" + "互动”关注即可）来赢取游戏礼包哈！";
        this.m_UI.fk_label.text = str;
    };
    SuggestionDialog.prototype.onTouch = function (e) {
        this.hide();
    };
    SuggestionDialog.prototype.onUpdate = function () {
    };
    SuggestionDialog.prototype.show = function () {
        _super.prototype.show.call(this);
    };
    SuggestionDialog.prototype.hide = function () {
        _super.prototype.hide.call(this);
    };
    return SuggestionDialog;
})(Dialog);
SuggestionDialog.prototype.__class__ = "SuggestionDialog";
