var _0x0124 = (function () {
    function _0x0124() {
    }
    _0x0124.prototype.parseData = function (obj) {
        if (!obj)
            return;
        if (obj["signature"]) {
            Main.player.signature = obj["signature"];
            var d = DialogManager.findDialog(MyInformation, "MyInformation");
            if (d && d.showing) {
                d.setSignature();
            }
        }
    };
    return _0x0124;
})();
_0x0124.prototype.__class__ = "_0x0124";
