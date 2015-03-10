var _0x0411 = (function () {
    function _0x0411() {
    }
    _0x0411.prototype.parseData = function (obj) {
        if (!obj)
            return;
        var z = DialogManager.findDialog(ZhuanPanDialog, "ZhuanPanDialog");
        if (z) {
            z.arg = obj["arg"];
            z.completeNum = Number(obj["completeNum"]);
            z.totalNum = Number(obj["totalNum"]);
            z.refreshNum();
            z.IsStart();
        }
    };
    return _0x0411;
})();
_0x0411.prototype.__class__ = "_0x0411";
