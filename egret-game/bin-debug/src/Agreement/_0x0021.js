var _0x0021 = (function () {
    function _0x0021() {
    }
    _0x0021.prototype.parseData = function (obj) {
        if (!obj)
            return;
        var tempArr = new Array();
        for (var i in obj["societys"]) {
            var temp = new Society();
            temp.update(obj["societys"][i]);
            tempArr.push(temp);
        }
        var dialog = DialogManager.findDialog(SocietyRank, "SocietyRank");
        if (dialog && dialog.showing) {
            dialog.rankList = tempArr;
            dialog.onUpdate();
        }
    };
    return _0x0021;
})();
_0x0021.prototype.__class__ = "_0x0021";
