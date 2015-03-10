var _0x0128 = (function () {
    function _0x0128() {
    }
    _0x0128.prototype.parseData = function (obj) {
        if (!obj)
            return;
        var inspireCount = Number(obj["inspireCount"]);
        if (inspireCount >= 0)
            Main.player.m_society.inspireCount = inspireCount;
        var rank = DialogManager.findDialog(SocietyDialog, "SocietyDialog");
        if (rank && rank.showing) {
            rank.onUpdate();
        }
    };
    return _0x0128;
})();
_0x0128.prototype.__class__ = "_0x0128";
