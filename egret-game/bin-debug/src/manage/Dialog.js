var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var Dialog = (function (_super) {
    __extends(Dialog, _super);
    function Dialog() {
        _super.call(this);
        this.initUI = false;
        this.showing = false;
    }
    Dialog.prototype.createChildren = function () {
        _super.prototype.createChildren.call(this);
    };
    Dialog.prototype.show = function () {
        this.initUI = true;
        if (!this.parent) {
            Main.guiLayer.addElementAt(this, Main.guiLayer.numElements - 1);
            this.showing = true;
        }
        else {
            Main.guiLayer.removeElement(this);
        }
        this.horizontalCenter = 0;
    };
    Dialog.prototype.hide = function () {
        if (this.parent) {
            Main.guiLayer.removeElement(this);
            this.showing = false;
        }
    };
    Dialog.prototype.onUpdatePlayer = function () {
    };
    return Dialog;
})(egret.gui.Group);
Dialog.prototype.__class__ = "Dialog";
