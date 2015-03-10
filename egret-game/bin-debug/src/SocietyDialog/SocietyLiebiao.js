var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var SocietyLiebiao = (function (_super) {
    __extends(SocietyLiebiao, _super);
    function SocietyLiebiao() {
        _super.call(this);
        this.list = new egret.gui.List();
        this.dp = new egret.gui.ArrayCollection();
    }
    SocietyLiebiao.prototype.createChildren = function () {
        _super.prototype.createChildren.call(this);
        this._dialog = new DialogBox();
        this.addElement(this._dialog);
        this._dialog.height = 800;
        this._dialog.horizontalCenter = 0;
        this.m_UI = new UISocietyRank();
        this.addElement(this.m_UI);
        this.m_UI._title_index.text = "";
        this.m_UI._title_pname.text = "成员数";
        this.m_UI._label_level.text = "";
        this.m_UI._label_renshu.text = "";
        this.m_UI._btn_close._setLabel("换一批");
        this.m_UI._create_btn.visible = true;
        this.m_UI._btn_close.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onRefBtn, this);
        this.m_UI._create_btn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onCreateBtn, this);
        this.m_UI.horizontalCenter = 0;
        this._dialog._btn_close.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouch, this);
        this._dialog._btn_help.visible = false;
        this._dialog.setTitle("加入行会");
        this.top = 30;
        this.m_UI.top = this.top + 50;
        this.list.skinName = "skins.ListSkin";
        this.list.height = 450;
        this.list.width = 530;
        this.list.horizontalCenter = 0;
        this.list.top = 250;
        this.list.itemRenderer = new egret.gui.ClassFactory(UISocietyRankItem);
        this.list.itemRendererSkinName = "skins.SocietyRankItemReaderSkin";
        this.list.dataProvider = this.dp;
        this.addElement(this.list);
    };
    SocietyLiebiao.prototype.onTouch = function (e) {
        this.hide();
    };
    SocietyLiebiao.prototype.onRefBtn = function (e) {
        var url = "http://" + GameManager.server["ip"] + ":" + GameManager.server["port"];
        var params = "type=0x0032&sid=" + GameManager.SESSION_ID;
        HttpMessage.sendMsg(url, params);
    };
    SocietyLiebiao.prototype.onCreateBtn = function (e) {
        DialogManager.open(SocietyCreate, "SocietyCreate");
    };
    SocietyLiebiao.prototype.onUpdate = function () {
        //this.dp.removeAll();
    };
    SocietyLiebiao.prototype.initList = function (arr) {
        this.dp.removeAll();
        for (var i in arr) {
            var s = arr[i];
            s["type"] = 1;
            this.dp.addItem(s);
        }
    };
    SocietyLiebiao.prototype.show = function () {
        _super.prototype.show.call(this);
        Main.iconMeun.setSmallIconVis(false);
    };
    SocietyLiebiao.prototype.hide = function () {
        _super.prototype.hide.call(this);
        Main.iconMeun.setSmallIconVis(true);
    };
    return SocietyLiebiao;
})(Dialog);
SocietyLiebiao.prototype.__class__ = "SocietyLiebiao";
