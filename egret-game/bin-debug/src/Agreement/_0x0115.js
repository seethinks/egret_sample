var _0x0115 = (function () {
    function _0x0115() {
    }
    _0x0115.prototype.constuctor = function () {
    };
    _0x0115.prototype.parseData = function (obj) {
        if (!obj)
            return;
        if (obj["isGo"]) {
            var go = Number(obj["isGo"]);
            if (go == 0) {
                GameManager.msgBox.showMsg(function (r) {
                }, "您还没开启该玩家所在的地图，无法切换到该地图！", true);
                return;
            }
        }
        var killerId = obj["killerId"];
        var mapId = obj["mapId"];
        var map = GameManager.JSON_MAP[mapId];
        if (mapId) {
            GameManager.msgBox.showMsg(function (r) {
                if (r) {
                    Main.player.map = "" + mapId;
                    Main.MainUI.updateData();
                    DialogManager.open(FightDialog, "FightDialog");
                }
            }, "该玩家正在地图[" + map["name"] + "]挂机中，是否切换到该地图追杀他？");
        }
        //        if(obj["item"])
        //        {
        //            var item = obj["item"];
        //
        //            var id = item["id"];
        //
        //            var count = item["count"];
        //
        //            if(Number(count) <= 0)
        //            {
        //                Main.player.m_items.delItemById(id);
        //
        //                Main.player.m_items.sortItems();
        //
        //                DialogManager.Update(ItemBag, "ItemBag");
        //
        //            }
        //        }
    };
    return _0x0115;
})();
_0x0115.prototype.__class__ = "_0x0115";
