var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
/**
 * 帮会成员，帮会排行，争霸赛列表通用
 */
var UISocietyRankItem = (function (_super) {
    __extends(UISocietyRankItem, _super);
    function UISocietyRankItem() {
        _super.call(this);
        this.skinName = "skins.SocietyRankItemReaderSkin";
    }
    UISocietyRankItem.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
        if (instance == this._join_btn) {
            this._join_btn.visible = false;
        }
    };
    UISocietyRankItem.prototype.dataChanged = function () {
        _super.prototype.dataChanged.call(this);
        if (this.data.type == 1) {
            this._join_btn.visible = true;
            this._join_btn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.choosBtn, this);
            this._value_id.text = this.data.id;
            this._value_level.text = this.data.lv;
            this._value_sname.text = this.data.name;
            this._value_pname.text = this.data.num + "/" + this.data.maxNum;
        }
        else if (this.data.type == 2) {
            this._value_index.text = "" + this.data["rank"];
            this._value_id.text = "" + this.data["id"];
            this._value_level.text = "Lv." + this.data["lv"];
            this._value_sname.text = "" + this.data["name"];
            this._value_pname.text = "" + this.data["pname"];
        }
        else if (this.data.type == 4) {
            this._value_index.text = "Lv." + this.data["lv"];
            this._value_id.text = "" + this.data["name"];
            this._value_level.text = "" + this.data["hurt"];
            this._value_sname.text = this.data["per"] + "%";
            this._value_pname.text = "";
        }
        else {
            var zw = { 1: "会长", 2: "副会长", 3: "会员", 4: "" };
            this._value_id.text = zw[this.data.sJob];
            this._value_level.text = "Lv." + this.data.lv;
            this._value_sname.text = this.data.name;
            this._value_pname.text = "" + this.data.fv;
            var status = "离线";
            if (this.data.status > 0) {
                status = "在线";
            }
            this._value_index.text = status;
        }
    };
    UISocietyRankItem.prototype.choosBtn = function (e) {
        var url = "http://" + GameManager.server["ip"] + ":" + GameManager.server["port"];
        var params = "type=0x0020&sid=" + GameManager.SESSION_ID + "&id=" + this.data.id;
        HttpMessage.sendMsg(url, params);
    };
    return UISocietyRankItem;
})(egret.gui.ItemRenderer);
UISocietyRankItem.prototype.__class__ = "UISocietyRankItem";
