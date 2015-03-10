var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var ServerListButton = (function (_super) {
    __extends(ServerListButton, _super);
    function ServerListButton() {
        _super.call(this);
    }
    ServerListButton.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
        if (instance == this.serverListLabel) {
            this.serverListLabel.text = this._txt;
        }
    };
    ServerListButton.prototype.setLabelText = function (txt) {
        this._txt = txt;
        if (this.serverListLabel) {
            this.serverListLabel.text = this._txt;
        }
    };
    return ServerListButton;
})(egret.gui.Button);
ServerListButton.prototype.__class__ = "ServerListButton";
