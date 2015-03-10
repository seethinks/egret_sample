var _0x0006 = (function () {
    function _0x0006() {
    }
    //
    _0x0006.prototype.constuctor = function () {
    };
    _0x0006.prototype.parseData = function (obj) {
        if (!obj)
            return;
        Main.player.playerUpdate(obj);
        if (obj["vipRewards"]) {
            DialogManager.Update(MapDialog, "MapDialog", true);
            DialogManager.Update(BuyMoneyDialog, "BuyMoneyDialog", true);
        }
    };
    return _0x0006;
})();
_0x0006.prototype.__class__ = "_0x0006";
