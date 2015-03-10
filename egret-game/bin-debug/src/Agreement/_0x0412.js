var _0x0412 = (function () {
    function _0x0412() {
    }
    _0x0412.prototype.parseData = function (obj) {
        if (!obj)
            return;
        var z = DialogManager.findDialog(ZhuanPanDialog, "ZhuanPanDialog");
        if (z && z.showing) {
            z.arr = obj["arg"];
            z.completeNum = Number(obj["completeNum"]);
            z.totalNum = Number(obj["totalNum"]);
            z.onUpdate();
        }
    };
    return _0x0412;
})();
_0x0412.prototype.__class__ = "_0x0412";
