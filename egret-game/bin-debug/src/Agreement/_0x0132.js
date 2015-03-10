var _0x0132 = (function () {
    function _0x0132() {
    }
    _0x0132.prototype.parseData = function (obj) {
        if (!obj)
            return;
        var p = DialogManager.findDialog(PrisonDialog, "PrisonDialog");
        if (p) {
            p.actList = obj["list"];
            if (p.showing) {
                p.onUpdate();
            }
            else {
                p.show();
            }
        }
    };
    return _0x0132;
})();
_0x0132.prototype.__class__ = "_0x0132";
