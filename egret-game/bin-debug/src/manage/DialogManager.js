var DialogManager = (function () {
    function DialogManager() {
    }
    DialogManager.allUpdate = function () {
        for (var d in DialogManager.dict) {
            var dialog = DialogManager.dict[d];
            if (dialog && dialog.showing) {
                dialog.onUpdatePlayer();
            }
        }
    };
    DialogManager.open = function (dialogClass, dialogName, up) {
        if (up === void 0) { up = false; }
        if (DialogManager.dict[dialogName] == null) {
            var dialog = new dialogClass();
            dialog.show();
            DialogManager.dict[dialogName] = dialog;
        }
        else {
            DialogManager.dict[dialogName].show();
        }
        egret.ExternalInterface.call("pt_tdce", dialogName); //TD采集点开界面
        //        if(GameManager.dataEyes)GameManager.dataEyes.pushEvent("open_dialog", 1, {dialogName:dialogName});
    };
    DialogManager.clear = function () {
        for (var a in DialogManager.dict) {
            if (DialogManager.dict[a]) {
                var _d = DialogManager.dict[a];
                if (_d.parent)
                    _d.hide();
            }
        }
    };
    DialogManager.Update = function (_class, _className, isOnlyShow) {
        if (isOnlyShow === void 0) { isOnlyShow = true; }
        if (_class && _className) {
            if (DialogManager.dict[_className]) {
                if (isOnlyShow && !DialogManager.dict[_className].showing)
                    return;
                DialogManager.dict[_className].onUpdate();
            }
        }
    };
    DialogManager.findDialog = function (_class, _className, isNew) {
        if (isNew === void 0) { isNew = true; }
        if (_class && _className) {
            if (DialogManager.dict[_className]) {
                return DialogManager.dict[_className];
            }
            else if (isNew) {
                return DialogManager.dict[_className] = new _class();
            }
        }
        return null;
    };
    DialogManager.dict = {};
    return DialogManager;
})();
DialogManager.prototype.__class__ = "DialogManager";
