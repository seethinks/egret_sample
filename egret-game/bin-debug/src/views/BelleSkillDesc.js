var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var BelleSkillDesc = (function (_super) {
    __extends(BelleSkillDesc, _super);
    function BelleSkillDesc() {
        _super.call(this);
    }
    BelleSkillDesc.prototype.createChildren = function () {
        _super.prototype.createChildren.call(this);
        this.m_UI = new BelleSkillDescUI();
        this.addElement(this.m_UI);
        this.m_UI._btn_close.addEventListener(egret.TouchEvent.TOUCH_TAP, this.hide, this);
        this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.hide, this);
    };
    BelleSkillDesc.prototype.update = function () {
        if (this.skillModel) {
            this.m_UI._label_desc.text = "" + this.skillModel["des"];
            this.m_UI._label_name.text = "" + this.skillModel["name"];
            this.m_UI._label_mp.text = "MP " + this.skillModel["consumemp"];
        }
    };
    BelleSkillDesc.prototype.hide = function (e) {
        if (e === void 0) { e = null; }
        var b = DialogManager.findDialog(BelleDialog, "BelleDialog");
        if (b && this.parent) {
            b.removeElement(this);
            this.skillModel = null;
        }
    };
    return BelleSkillDesc;
})(egret.gui.Group);
BelleSkillDesc.prototype.__class__ = "BelleSkillDesc";
