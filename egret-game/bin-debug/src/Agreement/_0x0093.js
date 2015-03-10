var _0x0093 = (function () {
    function _0x0093() {
    }
    _0x0093.prototype.parseData = function (obj) {
        if (!obj)
            return;
        //{"type":"0x0093","data":{"gold":"96924950","vsCount":"6"}}
        Main.player.m_deulMyinfo["vsCount"] = obj["vsCount"];
        var dialog = DialogManager.findDialog(DeulDialog, "DeulDialog");
        if (dialog && dialog.showing)
            dialog.onUpdate();
    };
    return _0x0093;
})();
_0x0093.prototype.__class__ = "_0x0093";
