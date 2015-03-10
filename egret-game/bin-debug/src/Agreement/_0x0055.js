var _0x0055 = (function () {
    function _0x0055() {
    }
    _0x0055.prototype.parseData = function (obj) {
        if (!obj)
            return;
        var heros = obj["heros"];
        Main.player.m_heros.heros = {};
        for (var k in heros) {
            if (!heros[k])
                continue;
            var hero = new SuperWoman();
            hero.update(heros[k]);
            Main.player.m_heros.heros[hero.id] = hero;
        }
        DialogManager.Update(BelleDialog, "BelleDialog");
    };
    return _0x0055;
})();
_0x0055.prototype.__class__ = "_0x0055";
