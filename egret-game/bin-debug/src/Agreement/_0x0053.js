var _0x0053 = (function () {
    function _0x0053() {
    }
    _0x0053.prototype.parseData = function (obj) {
        if (!obj)
            return;
        var time = obj["time"];
        if (!time)
            time = 0;
        if (time >= GameManager.nextFightTime)
            GameManager.nextFightTime = time;
    };
    return _0x0053;
})();
_0x0053.prototype.__class__ = "_0x0053";
