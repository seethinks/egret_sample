var _0x0058 = (function () {
    function _0x0058() {
    }
    _0x0058.prototype.parseData = function (obj) {
        if (!obj)
            return;
        var msgs = obj["arg"];
        if (msgs && msgs.length > 0) {
            for (var i = msgs.length - 1; i >= 0; i--) {
                GameManager.hornList.push(msgs[i]);
            }
        }
    };
    return _0x0058;
})();
_0x0058.prototype.__class__ = "_0x0058";
