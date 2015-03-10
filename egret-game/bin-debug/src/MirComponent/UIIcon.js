var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var UIIcon = (function (_super) {
    __extends(UIIcon, _super);
    function UIIcon() {
        _super.call(this);
        this._showEqpt = false;
        this._streng = "";
        this.str = "";
        this._c = "";
        this.q = 0;
        this.eqpt_name = "";
        this.label_text = "";
        this.skinName = "skins.IconSkin";
        this.scaleX = 0.97;
        this.scaleY = 0.97;
    }
    UIIcon.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
        if (instance == this._newEqpt) {
            this._newEqpt.visible = this._showEqpt;
        }
        if (instance == this._effect) {
            this._effect.x = -5;
            this._effect.y = -5;
            this._effect.scaleX = 1.3;
            this._effect.scaleY = 1.3;
        }
    };
    UIIcon.prototype.playFlash = function (uiass, move, str) {
        var data = RES.getRes(str + "_json");
        var texture = RES.getRes(str + "_png");
        move = new egret.MovieClip(data, texture);
        uiass.source = move;
        move.frameRate = 10;
        move.gotoAndPlay(str);
        if (this.data["effect"]) {
            move.scaleX = 0.8;
            move.scaleY = 0.8;
            this._effect.x = -5;
            this._effect.y = -5;
        }
    };
    UIIcon.prototype.dataChanged = function () {
        this._group.removeAllElements();
        _super.prototype.dataChanged.call(this);
        if (!this.data)
            return;
        if (Number(this.data["godEq"]) > 0) {
            this._effect.visible = true;
            if (!this._move) {
                this.playFlash(this._effect, this._move, "effect_eqpt");
            }
            else {
                this._move.gotoAndPlay("effect_eqpt");
            }
        }
        else {
            this._effect.visible = false;
        }
        if (this._strength) {
            this.setStrength(this.data["strength"]);
        }
        if (this._quality) {
            this.setQuality(this.data.qly);
        }
        if (this._items) {
            this.setItems(this.data.tpl["icon"]);
        }
        if (this._eqpetName) {
            if (this.data.maxType == 2) {
                this.setName("Lv." + this.data.tpl["lv"]);
            }
            else {
                this.setName(this.data.tpl["name"]);
            }
        }
        if (this._count) {
            if (this.data.maxType != 2 && this.data.count > 0) {
                this.setCount("X" + this.data.count);
            }
            else {
                this.setCount("");
            }
        }
        for (var i = 1; i <= 4; i++) {
            if (this.data["hole" + i]) {
                var hole = Number(this.data["hole" + i]);
                if (hole < 0) {
                }
                else if (hole == 0) {
                    var ui = new egret.gui.UIAsset();
                    ui.source = "gem_base";
                    this._group.addElement(ui);
                }
                else {
                    var gem = GameManager.JSON_BAOSHI[hole];
                    var type = Number(gem["miniType"]);
                    var ui = new egret.gui.UIAsset();
                    ui.source = "gem_" + type;
                    this._group.addElement(ui);
                }
            }
        }
    };
    UIIcon.prototype.setEffVis = function () {
        if (this._effect)
            this._effect.visible = false;
    };
    UIIcon.prototype.setEqptVis = function (_b) {
        if (_b === void 0) { _b = false; }
        this._showEqpt = _b;
        if (this._newEqpt)
            this._newEqpt.visible = _b;
    };
    UIIcon.prototype.setStrength = function (streng) {
        if (streng === void 0) { streng = ""; }
        this._streng = streng;
        if (this._strength) {
            if (Number(streng) > 0) {
                this._strength.text = "+" + streng;
            }
            else {
                this._strength.text = "";
            }
        }
    };
    UIIcon.prototype.setStart = function (streng) {
        if (streng === void 0) { streng = ""; }
        this._streng = streng;
        if (this._strength) {
            this._strength.text = "" + streng;
        }
    };
    UIIcon.prototype.setItems = function (_str) {
        this.str = _str;
        if (this._items) {
            this._items.source = _str;
        }
    };
    UIIcon.prototype.setCount = function (count) {
        this._c = count;
        if (this._count) {
            this._count.text = count;
        }
    };
    UIIcon.prototype.setQuality = function (_q) {
        if (_q === void 0) { _q = 0; }
        if (!this._quality)
            return;
        if (_q > 0) {
            this.q = _q;
            this._quality.source = "_icon_" + _q;
        }
        else {
            this._quality.source = "test_icon";
        }
    };
    UIIcon.prototype.setName = function (_name) {
        this.eqpt_name = _name;
        if (this._eqpetName) {
            this._eqpetName.text = _name;
            this._eqpetName.visible = true;
        }
    };
    UIIcon.prototype.setText = function (_text) {
        this.label_text = _text;
        if (this._labels) {
            this._labels.text = _text;
        }
    };
    UIIcon.prototype.setGroupSize = function () {
        if (this._group) {
            this._group.scaleX = 0.7;
            this._group.scaleY = 0.7;
        }
    };
    return UIIcon;
})(egret.gui.ItemRenderer);
UIIcon.prototype.__class__ = "UIIcon";
