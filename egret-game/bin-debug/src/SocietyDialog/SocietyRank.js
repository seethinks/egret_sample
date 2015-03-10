var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
/**
 * 帮会排行
 */
var SocietyRank = (function (_super) {
    __extends(SocietyRank, _super);
    function SocietyRank() {
        _super.call(this);
        this.list = new egret.gui.List();
        this.dp = new egret.gui.ArrayCollection();
    }
    SocietyRank.prototype.createChildren = function () {
        _super.prototype.createChildren.call(this);
        this._dialog = new DialogBox();
        this.addElement(this._dialog);
        this._dialog.horizontalCenter = 0;
        this.m_UI = new UISocietyRank();
        this.addElement(this.m_UI);
        this.m_UI.horizontalCenter = 0;
        this._dialog._btn_close.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouch, this);
        this._dialog._btn_help.visible = false;
        this._dialog.setTitle("行会排行");
        this.top = 30;
        this.m_UI.top = this.top + 50;
        this.list.skinName = "skins.ListSkin";
        this.list.height = 452;
        this.list.width = 530;
        this.list.horizontalCenter = 0;
        this.list.top = 245;
        this.list.itemRenderer = new egret.gui.ClassFactory(UISocietyRankItem);
        this.list.itemRendererSkinName = "skins.SocietyRankItemReaderSkin";
        this.list.dataProvider = this.dp;
        this.addElement(this.list);
        this.m_UI._create_btn.visible = false;
        this.m_UI._btn_close.visible = false;
        this.m_UI._btn_close.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouch, this);
    };
    SocietyRank.prototype.onTouch = function (e) {
        this.hide();
    };
    SocietyRank.prototype.onUpdate = function () {
        if (this.rankList && this.rankList.length > 0) {
            this.dp.removeAll();
            for (var i = 0; i < this.rankList.length; i++) {
                var obj = this.rankList[i];
                obj["type"] = 2;
                obj["rank"] = i + 1;
                this.dp.addItem(this.rankList[i]);
            }
        }
        var so = Main.player.m_society;
        if (!so)
            return;
        this.m_UI._label_level.text = "行会等级：" + so.lv;
        this.m_UI._label_renshu.text = "行会人数：" + so.num + "/" + so.maxNum;
    };
    SocietyRank.prototype.show = function () {
        _super.prototype.show.call(this);
        var url = "http://" + GameManager.server["ip"] + ":" + GameManager.server["port"];
        var param = "type=0x0031&sid=" + GameManager.SESSION_ID;
        HttpMessage.sendMsg(url, param);
    };
    SocietyRank.prototype.hide = function () {
        _super.prototype.hide.call(this);
    };
    return SocietyRank;
})(Dialog);
SocietyRank.prototype.__class__ = "SocietyRank";
