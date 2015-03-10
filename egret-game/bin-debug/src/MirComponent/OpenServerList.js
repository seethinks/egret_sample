var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var OpenServerList = (function (_super) {
    __extends(OpenServerList, _super);
    function OpenServerList() {
        _super.call(this);
        this.skinName = "skins.NewServerListSkin";
        this.touchChildren = true;
        this.touchEnabled = true;
    }
    OpenServerList.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    OpenServerList.prototype.dataChanged = function () {
        _super.prototype.dataChanged.call(this);
        if (this.data && this._img) {
            this._img.source = "alist_" + this.data["num"];
        }
    };
    return OpenServerList;
})(egret.gui.ItemRenderer);
OpenServerList.prototype.__class__ = "OpenServerList";
