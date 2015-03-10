var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var FightHead = (function (_super) {
    __extends(FightHead, _super);
    function FightHead(sn) {
        if (sn === void 0) { sn = "skins.FightHeadPlayerSkin"; }
        _super.call(this);
        this.m_skinName = "";
        this.effAsset = new egret.gui.UIAsset();
        this.m_skinName = sn;
    }
    FightHead.prototype.createChildren = function () {
        _super.prototype.createChildren.call(this);
        this.m_UI = new UIFIghtHead();
        this.m_UI.skinName = this.m_skinName;
        this.addElement(this.m_UI);
        this.addElement(this.effAsset);
        this.effAsset.y = -40;
    };
    FightHead.prototype.playHp = function (num, type) {
        if (type === void 0) { type = 0; }
        var txt = new egret.gui.Label();
        txt.textAlign = "center";
        txt.bold = true;
        txt.size = 50;
        if (type == 1) {
            txt.textColor = 0x00ff00;
            txt.text = "+" + num;
        }
        else if (type == 0) {
            txt.textColor = 0x0000ff;
            txt.text = (num > 0 ? "+" : "") + num;
        }
        else if (type == 2) {
            txt.textColor = 0xff0000;
            txt.text = "-" + num;
        }
        else if (type == 3) {
            txt.textColor = 0xF3C009;
            txt.text = "-" + num;
        }
        else if (type == 4) {
            txt.textColor = 0xffffff;
            txt.text = "MISS";
        }
        this.addElement(txt);
        txt.x = 30;
        txt.y = 50;
        var _y = txt.y;
        var tw = egret.Tween.get(txt, { loop: false });
        var t = this;
        tw.to({ y: _y - 60 }, 1000).to({ y: _y - 60 }, 500).call(function () {
            if (txt.parent)
                t.removeElement(txt);
        });
    };
    FightHead.prototype.setBuff = function (buff) {
        if (buff === void 0) { buff = ""; }
        this.m_UI._label_buff.text = buff;
    };
    FightHead.prototype.playEffect = function (num) {
        if (num === void 0) { num = 60; }
        var tw = egret.Tween.get(this, { loop: false });
        var t = this;
        var x = this.x;
        tw.to({ x: x + num }, 200).to({ x: x }, 200);
    };
    FightHead.prototype.playEffectB = function (num, isF) {
        if (num === void 0) { num = 30; }
        if (isF === void 0) { isF = true; }
        var tw = egret.Tween.get(this, { loop: false });
        var t = this;
        var x = this.x;
        tw.to({ x: x + num }, 200).to({ x: x }, 200);
        if (isF)
            this.playFlash(1);
    };
    FightHead.prototype.playDef = function (num) {
        if (num === void 0) { num = 60; }
        var tw = egret.Tween.get(this, { loop: false });
        var t = this;
        var x = this.x;
        tw.to({ x: x - num }, 200).to({ x: x }, 200);
    };
    FightHead.prototype.playDefB = function (num, isF) {
        if (num === void 0) { num = 30; }
        if (isF === void 0) { isF = true; }
        var tw = egret.Tween.get(this, { loop: false });
        var t = this;
        var x = this.x;
        tw.to({ x: x - num }, 200).to({ x: x }, 200);
        if (isF)
            this.playFlash();
    };
    FightHead.prototype.playFlash = function (n) {
        if (n === void 0) { n = 0; }
        var data = RES.getRes("eff_fight_1_json");
        var texture = RES.getRes("eff_fight_1_png");
        this.eff = new egret.MovieClip(data, texture);
        this.effAsset.source = this.eff;
        if (n == 0) {
            //正向
            this.effAsset.x = 0;
        }
        else if (n == 1) {
            this.eff.scaleX *= -1;
            this.effAsset.x = 230;
        }
        this.eff.frameRate = 25;
        this.eff.gotoAndPlay("eff_fight_1");
        this.eff.addEventListener("thisStop", this.stopFlash, this);
        this.addElement(this.effAsset);
    };
    FightHead.prototype.stopFlash = function () {
        this.eff.stop();
        if (this.effAsset.parent)
            this.removeElement(this.effAsset);
    };
    return FightHead;
})(egret.gui.Group);
FightHead.prototype.__class__ = "FightHead";
