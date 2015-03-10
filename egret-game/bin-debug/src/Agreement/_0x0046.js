var _0x0046 = (function () {
    function _0x0046() {
    }
    _0x0046.prototype.parseData = function (obj) {
        if (!obj)
            return;
        var list = obj["arg"];
        if (list && list.length > 0) {
            var dialog = DialogManager.findDialog(GiftDialog, "GiftDialog");
            if (dialog) {
                list.sort(function (x, y) {
                    if (y["tag"] > x["tag"]) {
                        return 1;
                    }
                    else if (y["tag"] == x["tag"]) {
                        if (y["type"] < x["type"]) {
                            return 1;
                        }
                    }
                    return -1;
                });
                dialog.actList = list;
                if (dialog.showing)
                    dialog.onUpdate();
                for (var i in list) {
                    var obj = list[i];
                    if (Number(obj["tag"]) == 1) {
                        if (!dialog.showing)
                            Main.iconMeun.setGift(true);
                        break;
                    }
                }
            }
        }
    };
    return _0x0046;
})();
_0x0046.prototype.__class__ = "_0x0046";
