var _0x0135 = (function () {
    function _0x0135() {
    }
    _0x0135.prototype.parseData = function (obj) {
        if (!obj)
            return;
        var list = obj["list"];
        var a = DialogManager.findDialog(ActivityDialog, "ActivityDialog");
        if (a) {
            a.huodongList = list;
            if (a.showing)
                a.onUpdate();
        }
    };
    return _0x0135;
})();
_0x0135.prototype.__class__ = "_0x0135";
