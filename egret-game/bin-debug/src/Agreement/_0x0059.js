var _0x0059 = (function () {
    function _0x0059() {
    }
    _0x0059.prototype.parseData = function (obj) {
        if (!obj)
            return;
        //alist:[{神器属性常量：神器属性值},{},{}]，hlist:[{heroid：psotion},{},{}]
        var alist = obj["alist"];
        var hlist = obj["hlist"];
        var dialog = DialogManager.findDialog(BelleZhenfa, "BelleZhenfa");
        if (dialog) {
            dialog.alist = alist;
            dialog.hlist = {};
            if (hlist && hlist.length > 0) {
                for (var i = 0; i < hlist.length; i++) {
                    var obj = hlist[i];
                    dialog.hlist[obj["postion"]] = obj;
                }
            }
            if (dialog.showing) {
                dialog.onUpdate();
            }
        }
    };
    return _0x0059;
})();
_0x0059.prototype.__class__ = "_0x0059";
