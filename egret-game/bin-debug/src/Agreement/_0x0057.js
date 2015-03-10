var _0x0057 = (function () {
    function _0x0057() {
    }
    _0x0057.prototype.parseData = function (obj) {
        if (!obj)
            return;
        var heros = obj["heros"];
        for (var k in heros) {
            if (!heros[k])
                continue;
            var hero = Main.player.m_heros.heros[heros[k]["id"]];
            if (hero) {
                hero.update(heros[k]);
            }
            else {
                hero = new SuperWoman();
                hero.update(heros[k]);
                Main.player.m_heros.heros[hero.id] = hero;
            }
        }
        DialogManager.Update(BelleDialog, "BelleDialog");
    };
    return _0x0057;
})();
_0x0057.prototype.__class__ = "_0x0057";
