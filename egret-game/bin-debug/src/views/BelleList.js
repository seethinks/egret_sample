var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var BelleList = (function (_super) {
    __extends(BelleList, _super);
    function BelleList() {
        _super.call(this);
        this.pos = 0;
    }
    BelleList.prototype.createChildren = function () {
        _super.prototype.createChildren.call(this);
        this.m_UI = new BelleListUI();
        this.addElement(this.m_UI);
        this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.hide, this);
    };
    BelleList.prototype.update = function () {
        this.m_UI._group.removeAllElements();
        this.m_UI._labels.visible = true;
        for (var k in Main.player.m_heros.heros) {
            var sm = Main.player.m_heros.heros[k];
            if (Number(sm.postion) == 0 && Number(sm.action) <= 0) {
                var head = new BelleHead();
                this.m_UI._group.addElement(head);
                head._head.source = "hero_head_" + sm.tpl["id"];
                head.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
                head.name = "" + sm.id;
                this.m_UI._labels.visible = false;
            }
        }
    };
    BelleList.prototype.hide = function (e) {
        if (e === void 0) { e = null; }
        var b = DialogManager.findDialog(BelleZhenfa, "BelleZhenfa");
        if (b) {
            if (this.parent) {
                this.m_UI._group.removeAllElements();
                b.removeElement(this);
            }
        }
    };
    BelleList.prototype.onClick = function (e) {
        var id = e.currentTarget.name;
        if (!(this.pos > 0))
            this.pos = 0;
        if (!id)
            return;
        var url = "http://" + GameManager.server["ip"] + ":" + GameManager.server["port"];
        var param = "type=0x0062&sid=" + GameManager.SESSION_ID + "&heroid=" + id + "&postion=" + this.pos;
        HttpMessage.sendMsg(url, param);
        this.hide();
    };
    return BelleList;
})(egret.gui.Group);
BelleList.prototype.__class__ = "BelleList";
