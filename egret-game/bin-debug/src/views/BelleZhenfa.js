var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var BelleZhenfa = (function (_super) {
    __extends(BelleZhenfa, _super);
    function BelleZhenfa() {
        _super.call(this);
        this.level_list = [0, 15, 25, 35, 45, 55];
        this.alist = [];
        this.hlist = {};
        this.headAny = {};
        this.idAny = {};
    }
    BelleZhenfa.prototype.createChildren = function () {
        _super.prototype.createChildren.call(this);
        this._dialog = new DialogBox();
        this.addElement(this._dialog);
        this._dialog.horizontalCenter = 0;
        this._dialog.height = Main.guiLayer.height - 340;
        this.m_UI = new BelleZhenFaUI();
        this.addElement(this.m_UI);
        this.m_UI.horizontalCenter = 0;
        this._dialog._btn_close.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouch, this);
        this._dialog._btn_help.visible = false;
        this._dialog.setTitle("美人阵法");
        this.top = 30;
        this.m_UI.top = this.top + 50;
        this.headList = new BelleList();
        for (var i = 1; i <= 5; i++) {
            var head = this.m_UI["_head" + i];
            if (head) {
                head.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
                this.headAny[i] = head;
            }
        }
    };
    BelleZhenfa.prototype.onTouch = function (e) {
        this.hide();
    };
    BelleZhenfa.prototype.onClick = function (e) {
        var head = e.currentTarget;
        if (head.source == "zf_check") {
            this.addElement(this.headList);
            for (var key in this.headAny) {
                if (this.headAny[key] == e.target) {
                    this.headList.pos = Number(key);
                }
            }
            this.headList.update();
            this.headList.verticalCenter = 0;
            this.headList.horizontalCenter = 0;
        }
        else if (head.source == "zf_no") {
        }
        else {
            var id = "";
            for (var key in this.headAny) {
                if (this.headAny[key] == e.target) {
                    id = key;
                }
            }
            if (!this.idAny[id])
                return;
            var url = "http://" + GameManager.server["ip"] + ":" + GameManager.server["port"];
            var param = "type=0x0062&sid=" + GameManager.SESSION_ID + "&heroid=" + this.idAny[id] + "&postion=0";
            HttpMessage.sendMsg(url, param);
        }
    };
    BelleZhenfa.prototype.onUpdate = function () {
        for (var i = 1; i <= 5; i++) {
            var head = this.headAny[i];
            var open = this.m_UI["_open" + i];
            if (open)
                open.visible = false;
            if (head) {
                head.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
                if (this.hlist[i]) {
                    var obj = this.hlist[i];
                    var sm = Main.player.m_heros.heros[obj["heroid"]];
                    var id = sm.tpl["id"];
                    head.source = "zf_" + id;
                    this.idAny[i] = sm.id;
                }
                else {
                    if (Main.player.level < this.level_list[i]) {
                        head.source = "test_icon";
                        if (open)
                            open.visible = true;
                    }
                    else {
                        head.source = "zf_check";
                    }
                }
            }
        }
        if (this.alist && this.alist.length > 0) {
            var str = "阵法属性：";
            for (var j = 0; j < this.alist.length; j++) {
                var obj = this.alist[j];
                var gak = obj["gak"];
                var gav = obj["gav"];
                str += "\n" + GameManager.GetGodEqDesc(Number(gak), Number(gav));
            }
            this.m_UI._label_p.text = str;
        }
        else {
            this.m_UI._label_p.text = "";
        }
    };
    BelleZhenfa.prototype.show = function () {
        _super.prototype.show.call(this);
        var url = "http://" + GameManager.server["ip"] + ":" + GameManager.server["port"];
        var param = "type=0x0063&sid=" + GameManager.SESSION_ID;
        HttpMessage.sendMsg(url, param);
    };
    BelleZhenfa.prototype.hide = function () {
        _super.prototype.hide.call(this);
    };
    return BelleZhenfa;
})(Dialog);
BelleZhenfa.prototype.__class__ = "BelleZhenfa";
