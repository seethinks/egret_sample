var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var UIFIghtHead = (function (_super) {
    __extends(UIFIghtHead, _super);
    function UIFIghtHead() {
        _super.call(this);
        this.m_name = "";
        this.m_hp = 0;
        this.m_hpmax = 0;
        this.m_hplenght = 0;
        this.m_mp = 0;
        this.m_mpmax = 0;
        this.m_mplenght = 0;
        this.m_head = "";
        this.skinName = "skins.FightHeadPlayerSkin";
    }
    UIFIghtHead.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
        if (instance == this._head) {
            this.setHead(this.m_head);
        }
        if (instance == this._hp) {
            if (this.skinName == "skins.MonsterHeadSkin") {
                this._hp.scaleX *= -1;
                this._hp.x += 182;
            }
            this.m_hplenght = this._hp.width;
            this.setHp(this.m_hp, this.m_hpmax);
        }
        if (instance == this._mp) {
            this.m_mplenght = this._mp.width;
            this.setMp(this.m_mp, this.m_mpmax);
        }
        if (instance == this._text_name) {
            this.setName(this.m_name);
        }
        if (instance == this._img_siwang) {
            this._img_siwang.visible = false;
        }
    };
    UIFIghtHead.prototype.setName = function (_name) {
        this.m_name = _name;
        if (this._text_name) {
            this._text_name.text = _name;
        }
    };
    UIFIghtHead.prototype.setHp = function (h, m) {
        this.m_hp = h;
        this.m_hpmax = m;
        if (this._hp) {
            this._hp.width = (h / m) * this.m_hplenght;
            this._text_hp.text = h + "/" + m;
        }
        if (Number(this.m_hp) <= 0) {
            this._img_siwang.visible = true;
        }
        else {
            this._img_siwang.visible = false;
        }
    };
    UIFIghtHead.prototype.setMp = function (h, m) {
        this.m_mp = h;
        this.m_mpmax = m;
        if (this._mp) {
            this._mp.width = (h / m) * this.m_mplenght;
        }
    };
    UIFIghtHead.prototype.setHead = function (head) {
        this.m_head = head;
        if (this._head) {
            this._head.source = head;
        }
    };
    return UIFIghtHead;
})(egret.gui.SkinnableComponent);
UIFIghtHead.prototype.__class__ = "UIFIghtHead";
