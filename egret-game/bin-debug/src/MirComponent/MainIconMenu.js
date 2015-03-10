var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var MainIconMenu = (function (_super) {
    __extends(MainIconMenu, _super);
    function MainIconMenu() {
        _super.call(this);
        this.belle = false;
        this.b = false;
        this.m = false;
        this.i = false;
        this.g = false;
        this.full = false;
        this.skill = false;
        this.fight = false;
        this.skinName = "skins.MainIconMeunSkin";
        this.touchChildren = true;
        this.touchEnabled = true;
    }
    MainIconMenu.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
        if (instance == this._bellewarn) {
            this._bellewarn.visible = this.belle;
            this._bellewarn.touchEnabled = false;
        }
        if (instance == this._eqptwarn) {
            this._eqptwarn.visible = this.b;
            this._eqptwarn.touchEnabled = false;
        }
        if (instance == this._mailwarn) {
            this._mailwarn.visible = this.m;
            this._mailwarn.touchEnabled = false;
        }
        if (instance == this._bagwarn) {
            this._bagwarn.visible = this.i;
            this._bagwarn.touchEnabled = false;
        }
        if (instance == this._giftwarn) {
            this._giftwarn.visible = this.g;
            this._giftwarn.touchEnabled = false;
        }
        if (instance == this._bag_full) {
            this._bag_full.visible = this.full;
            this._bag_full.touchEnabled = false;
        }
        if (instance == this._skillwarn) {
            this._skillwarn.visible = this.skill;
            this._skillwarn.touchEnabled = false;
        }
        if (instance == this._fightwarn) {
            this._fightwarn.visible = false;
            this._fightwarn.touchEnabled = false;
        }
    };
    MainIconMenu.prototype.setBelleWarn = function (_b) {
        if (_b === void 0) { _b = false; }
        this.belle = _b;
        if (this._bellewarn)
            this._bellewarn.visible = _b;
    };
    MainIconMenu.prototype.setEqptWarn = function (_b) {
        if (_b === void 0) { _b = false; }
        this.b = _b;
        if (this._eqptwarn)
            this._eqptwarn.visible = _b;
    };
    MainIconMenu.prototype.setMailWarn = function (_m) {
        if (_m === void 0) { _m = false; }
        this.m = _m;
        if (this._mailwarn)
            this._mailwarn.visible = _m;
    };
    MainIconMenu.prototype.setBagWarn = function (_b) {
        if (_b === void 0) { _b = false; }
        this.i = _b;
        if (this._bagwarn)
            this._bagwarn.visible = _b;
    };
    MainIconMenu.prototype.setGiftWarn = function (_m) {
        if (_m === void 0) { _m = false; }
        this.g = _m;
        if (this._giftwarn)
            this._giftwarn.visible = _m;
    };
    MainIconMenu.prototype.setFull = function (b) {
        if (b === void 0) { b = false; }
        this.full = b;
        if (this._bag_full)
            this._bag_full.visible = b;
    };
    MainIconMenu.prototype.setSkill = function (b) {
        if (b === void 0) { b = false; }
        this.skill = b;
        if (this._skillwarn)
            this._skillwarn.visible = b;
    };
    MainIconMenu.prototype.setFight = function (b) {
        if (b === void 0) { b = false; }
        this.fight = b;
        if (this._fightwarn)
            this._fightwarn.visible = b;
    };
    return MainIconMenu;
})(egret.gui.SkinnableComponent);
MainIconMenu.prototype.__class__ = "MainIconMenu";
