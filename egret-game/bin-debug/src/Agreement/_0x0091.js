var _0x0091 = (function () {
    function _0x0091() {
    }
    _0x0091.prototype.parseData = function (obj) {
        if (!obj)
            return;
        Main.player.m_deulRank = obj["players"];
        var rank = DialogManager.findDialog(DeulRankDialog, "DeulRankDialog");
        if (rank && rank.showing) {
            rank.onUpdate();
        }
    };
    return _0x0091;
})();
_0x0091.prototype.__class__ = "_0x0091";
