var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
/**
 * Boss贡献榜
 */
var SocietyBossDevote = (function (_super) {
    __extends(SocietyBossDevote, _super);
    function SocietyBossDevote() {
        _super.call(this);
        this.list = new egret.gui.List();
        this.dp = new egret.gui.ArrayCollection();
        this.bossList = [];
    }
    SocietyBossDevote.prototype.createChildren = function () {
        _super.prototype.createChildren.call(this);
        this._dialog = new DialogBox();
        this.addElement(this._dialog);
        this._dialog.horizontalCenter = 0;
        this.m_UI = new UISocietyRank();
        this.addElement(this.m_UI);
        this.m_UI.horizontalCenter = 0;
        this._dialog._btn_close.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouch, this);
        this._dialog._btn_help.visible = false;
        this._dialog.setTitle("Boss贡献榜");
        this.top = 30;
        this.m_UI.top = this.top + 50;
        this.list.skinName = "skins.ListSkin";
        this.list.height = 400;
        this.list.width = 530;
        this.list.horizontalCenter = 0;
        this.list.top = 250;
        this.list.itemRenderer = new egret.gui.ClassFactory(UISocietyRankItem);
        this.list.itemRendererSkinName = "skins.SocietyRankItemReaderSkin";
        this.list.dataProvider = this.dp;
        this.list.touchChildren = true;
        this.addElement(this.list);
        this.m_UI._title_index.text = "等级";
        this.m_UI._title_id.text = "姓名";
        this.m_UI._title_level.text = "伤害";
        this.m_UI._title_sname.text = "百分比";
        this.m_UI._title_pname.text = "";
    };
    SocietyBossDevote.prototype.onTouch = function (e) {
        this.hide();
    };
    SocietyBossDevote.prototype.onUpdate = function () {
        this.dp.removeAll();
        if (this.bossList && this.bossList.length > 0) {
            for (var i = 0; i < this.bossList.length; i++) {
                var obj = this.bossList[i];
                obj["type"] = 4;
                this.dp.addItem(obj);
            }
        }
    };
    SocietyBossDevote.prototype.show = function () {
        _super.prototype.show.call(this);
        this.onUpdate();
    };
    SocietyBossDevote.prototype.hide = function () {
        _super.prototype.hide.call(this);
    };
    return SocietyBossDevote;
})(Dialog);
SocietyBossDevote.prototype.__class__ = "SocietyBossDevote";
