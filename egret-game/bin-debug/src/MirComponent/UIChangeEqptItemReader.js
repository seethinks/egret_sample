var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var UIChangeEqptItemReader = (function (_super) {
    __extends(UIChangeEqptItemReader, _super);
    function UIChangeEqptItemReader() {
        _super.call(this);
        this.skinName = "skins.ChangeEqptItemReaderSkin";
        this.touchChildren = true;
        this.touchEnabled = true;
    }
    UIChangeEqptItemReader.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
        if (instance == this.xz_label_bufu) {
            this.xz_label_bufu.visible = false;
            if (this.data && this.data.tpl) {
                var job = Number(this.data.tpl["ejob"]);
                if (job == Number(Main.player.job)) {
                    this.xz_label_bufu.visible = false;
                }
                else {
                    this.xz_label_bufu.visible = true;
                }
            }
        }
        if (instance == this.xz_reader_icon) {
            this.xz_reader_icon.data = this.data;
            this.xz_reader_icon.dataChanged();
        }
        if (instance == this.xz_itemlabel_propey) {
            this.xz_itemlabel_propey.padding = 10;
            this.xz_itemlabel_propey._textField.textFlow = GameManager.GetEqptPropStr(this.data);
        }
        if (instance == this.xz_itemlabel_type) {
            this.xz_itemlabel_type.text = GameManager.EQPT_TYPE[this.data.tpl["ePostion"]];
        }
    };
    UIChangeEqptItemReader.prototype.dataChanged = function () {
        _super.prototype.dataChanged.call(this);
        if (this.xz_label_bufu) {
            if (this.data && this.data.tpl) {
                if (Main.player.m_operateObjid > 0) {
                    var operateObj = Main.player.m_heros.heros[Main.player.m_operateObjid];
                    if (this.data.tpl["ejob"] == 0 || this.data.tpl["ejob"] == operateObj.job) {
                        this.xz_label_bufu.visible = false;
                    }
                    else {
                        this.xz_label_bufu.visible = true;
                    }
                }
                else {
                    var job = Number(this.data.tpl["ejob"]);
                    if (job == Number(Main.player.job) || job == 0) {
                        this.xz_label_bufu.visible = false;
                    }
                    else {
                        this.xz_label_bufu.visible = true;
                    }
                }
            }
        }
        if (this.xz_reader_icon) {
            this.xz_reader_icon.data = this.data;
            this.xz_reader_icon.dataChanged();
        }
        if (this.xz_itemlabel_propey) {
            this.xz_itemlabel_propey._textField.textFlow = GameManager.GetEqptPropStr(this.data);
        }
        if (this.xz_itemlabel_type) {
            this.xz_itemlabel_type.text = GameManager.EQPT_TYPE[this.data.tpl["ePostion"]];
        }
    };
    return UIChangeEqptItemReader;
})(egret.gui.ItemRenderer);
UIChangeEqptItemReader.prototype.__class__ = "UIChangeEqptItemReader";
