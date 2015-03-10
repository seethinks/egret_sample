var _0x0041 = (function () {
    function _0x0041() {
    }
    _0x0041.prototype.parseData = function (obj) {
        if (!obj)
            return;
        var type = obj["tag"];
        Main.player.m_leaveResult = obj;
        if (GameManager.startGame) {
            var result = DialogManager.findDialog(ResultDialog, "ResultDialog");
            if (result)
                result.updateText(obj);
        }
    };
    return _0x0041;
})();
_0x0041.prototype.__class__ = "_0x0041";
