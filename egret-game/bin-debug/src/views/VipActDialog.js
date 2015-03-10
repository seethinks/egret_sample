var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var VipActDialog = (function (_super) {
    __extends(VipActDialog, _super);
    function VipActDialog() {
        _super.call(this);
        this.textList = new egret.gui.List();
        this.dp = new egret.gui.ArrayCollection();
        this.actList = [];
    }
    VipActDialog.prototype.createChildren = function () {
        _super.prototype.createChildren.call(this);
        this.m_dialog = new DialogBox();
        this.addElement(this.m_dialog);
        this.m_dialog.horizontalCenter = 0;
        this.m_dialog.setTitle("VIP礼包");
        this.m_dialog._btn_close.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouch, this);
        this.m_dialog._btn_help.visible = false;
        this.m_UI = new ActivityDescUI();
        this.addElement(this.m_UI);
        this.m_UI.horizontalCenter = 0;
        this.textList.skinName = "skins.ListSkin";
        this.addElement(this.textList);
        this.textList.height = 408;
        this.textList.horizontalCenter = 0;
        this.textList.itemRenderer = new egret.gui.ClassFactory(VipActList);
        this.textList.itemRendererSkinName = "skins.ActivitieListSkin";
        this.textList.dataProvider = this.dp;
        this.top = 30;
        this.m_UI.top = this.top + 50;
        this.textList.top = this.m_UI.top + 208;
        this.m_dialog.height = 720;
    };
    VipActDialog.prototype.onTouch = function (e) {
        this.hide();
    };
    VipActDialog.prototype.onUpdate = function () {
        var list = this.actList["list"];
        if (list && list.length > 0) {
            list.sort(function (x, y) {
                if (x['gift']['giftId'] > y['gift']['giftId'])
                    return 1;
                return -1;
            });
            this.dp.removeAll();
            for (var i = 0; i < list.length; i++) {
                var obj = list[i];
                this.dp.addItem(obj);
            }
        }
        if (this.obj) {
            this.m_UI._label_time.text = "" + "VIP奖励每天只能领取一次";
            this.m_UI._label_desc.text = "";
            this.m_UI.head_bgimg.source = "act_" + this.obj["activityType"];
            this.m_UI._label_chage.text = "您当前为：VIP" + Main.player.vip;
        }
    };
    VipActDialog.prototype.show = function () {
        _super.prototype.show.call(this);
        this.onUpdate();
    };
    VipActDialog.prototype.hide = function () {
        _super.prototype.hide.call(this);
    };
    return VipActDialog;
})(Dialog);
VipActDialog.prototype.__class__ = "VipActDialog";
