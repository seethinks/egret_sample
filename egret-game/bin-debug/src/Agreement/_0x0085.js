var _0x0085 = (function () {
    function _0x0085() {
    }
    _0x0085.prototype.parseData = function (obj) {
        if (!obj)
            return;
        var dialog = DialogManager.findDialog(EqptMakeDialog, "EqptMakeDialog");
        if (dialog) {
            dialog.makeData = obj;
            if (dialog.showing) {
                dialog.onUpdate();
            }
        }
    };
    return _0x0085;
})();
_0x0085.prototype.__class__ = "_0x0085";
