var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
/**
 * 服务器列表
 */
var ServerbtnRender = (function (_super) {
    __extends(ServerbtnRender, _super);
    function ServerbtnRender() {
        _super.call(this);
        this.touchChildren = true;
        this.touchEnabled = true;
    }
    ServerbtnRender.prototype.dataChanged = function () {
        _super.prototype.dataChanged.call(this);
        if (this.serverListLabel) {
            this.serverListLabel.text = this.data.name;
        }
    };
    ServerbtnRender.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
        if (instance == this.serverListLabel) {
            this.serverListLabel.text = this.data.name;
        }
    };
    return ServerbtnRender;
})(egret.gui.ItemRenderer);
ServerbtnRender.prototype.__class__ = "ServerbtnRender";
