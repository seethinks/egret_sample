var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var EqptDetailsBag = (function (_super) {
    __extends(EqptDetailsBag, _super);
    function EqptDetailsBag() {
        _super.call(this);
    }
    EqptDetailsBag.prototype.createChildren = function () {
        _super.prototype.createChildren.call(this);
        this.m_dialog = new DialogBox();
        this.addElement(this.m_dialog);
        this.m_dialog.horizontalCenter = 0;
        this.m_dialog.setTitle("装备详情");
        this.m_dialog._btn_close.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouch, this);
        this.m_dialog._btn_help.visible = false;
        this.m_UI = new UIEqptDetails();
        this.addElement(this.m_UI);
        this.m_UI.horizontalCenter = 0;
        this.m_UI.xz_itembtn_genghuan.visible = false;
        this.m_UI.xz_itembtn_xiexia._setLabel("卖  出");
        this.m_UI.xz_itembtn_chuancheng.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouch, this);
        this.m_UI.xz_itembtn_qianghua.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouch, this);
        this.m_UI.xz_itembtn_tunshi.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouch, this);
        this.m_UI.xz_itembtn_xiangqian.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouch, this);
        this.m_UI.xz_itembtn_xiexia.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouch, this);
        this.m_UI.xz_itembtn_xilian.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouch, this);
        this.top = 30;
        this.m_UI.top = this.top + 50;
        this.m_UI.xz_itembtn_chuancheng.visible = false;
        this.m_UI.xz_itembtn_tunshi.visible = false;
        this.m_UI.xz_itembtn_xilian.visible = false;
    };
    EqptDetailsBag.prototype.onTouch = function (e) {
        this.hide();
        switch (e.target) {
            case this.m_UI.xz_itembtn_chuancheng:
                DialogManager.open(ArmsInheritDialog, "ArmsInheritDialog");
                break;
            case this.m_UI.xz_itembtn_genghuan:
                break;
            case this.m_UI.xz_itembtn_qianghua:
                DialogManager.open(EqptStrengthen, "EqptStrengthen");
                break;
            case this.m_UI.xz_itembtn_tunshi:
                DialogManager.open(ArmsEngulfDialog, "ArmsEngulfDialog");
                break;
            case this.m_UI.xz_itembtn_xiangqian:
                DialogManager.open(GemSetDialog, "GemSetDialog");
                break;
            case this.m_UI.xz_itembtn_xiexia:
                var url = "http://" + GameManager.server["ip"] + ":" + GameManager.server["port"];
                var param = "id=" + this.m_UI.xz_icon.data["id"] + "&type=0x0075&sid=" + GameManager.SESSION_ID;
                HttpMessage.sendMsg(url, param);
                break;
            case this.m_UI.xz_itembtn_xilian:
                DialogManager.open(EqptBaptizeDIalog, "EqptBaptizeDIalog");
                break;
            case this.m_dialog._btn_close:
                this.hide();
                break;
        }
    };
    EqptDetailsBag.prototype.onUpdate = function () {
        var obj = Main.player.m_clickItme;
        if (obj) {
            var itemModel = obj.tpl;
            this.m_UI.xz_icon.data = obj;
            this.m_UI.xz_icon.setItems(itemModel["icon"]);
            this.m_UI.xz_icon.setQuality(Number(obj["qly"]));
            //this.m_UI.xz_itemlabel_name.text = "Lv" + itemModel["lv"] + " " + itemModel["name"] + " +" + obj["strength"];
            this.m_UI.xz_itemlabel_propey._textField.textFlow = GameManager.GetEqptPropStr(obj);
            //            this.m_UI.xz_itemlabel_propey.textColor = GameManager.COLOR[Number(obj["qly"])];
            this.m_UI.xz_itemlabel_type.text = GameManager.EQPT_TYPE[Number(itemModel["ePostion"])];
            //洗练按钮20级显示
            if (itemModel["lv"] >= 20 && obj["qly"] > 1) {
                this.m_UI.xz_itembtn_xilian.visible = true;
            }
            else {
                //装备低于20级无洗练按钮
                this.m_UI.xz_itembtn_xilian.visible = false;
            }
            //判断是否神器显示传承和吞噬按钮
            if (obj["godEq"] > 0) {
                this.m_UI.xz_itembtn_chuancheng.visible = true;
                this.m_UI.xz_itembtn_tunshi.visible = true;
            }
            else {
                //默认神器吞噬和传承不显示
                this.m_UI.xz_itembtn_chuancheng.visible = false;
                this.m_UI.xz_itembtn_tunshi.visible = false;
            }
        }
    };
    EqptDetailsBag.prototype.show = function () {
        _super.prototype.show.call(this);
        this.onUpdate();
    };
    EqptDetailsBag.prototype.hide = function () {
        _super.prototype.hide.call(this);
    };
    return EqptDetailsBag;
})(Dialog);
EqptDetailsBag.prototype.__class__ = "EqptDetailsBag";
