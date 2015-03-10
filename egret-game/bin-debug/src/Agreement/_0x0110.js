var _0x0110 = (function () {
    function _0x0110() {
    }
    //战斗数据
    _0x0110.prototype.constuctor = function () {
    };
    _0x0110.prototype.parseData = function (obj) {
        if (!obj)
            return;
        var str = "";
        var rewards = obj["rewards"];
        if (rewards) {
            if (rewards["win"] == "1" || rewards["win"] == 1) {
                str += "战斗胜利";
            }
            else {
                str += "战斗失败";
            }
            if (Number(rewards["exp"]) > 0) {
                str += ",经验+" + rewards["exp"];
            }
            if (Number(rewards["money"]) > 0) {
                str += ",金币+" + rewards["money"];
            }
            if (Number(rewards["bstone"]) > 0) {
                str += ",黑铁矿石+" + rewards["bstone"];
            }
            if (rewards["equips"]) {
                str += "\n";
                for (var i in rewards["equips"]) {
                    var temp = rewards["equips"][i];
                    var eqpt = GameManager.JSON_EQPT[temp["t"]];
                    str += "获得装备(Lv." + eqpt["lv"] + ")" + eqpt["name"];
                }
            }
            var boxInfos = obj["boxInfos"];
            if (boxInfos) {
                var del = boxInfos["delKeyIds"];
                if (del && del.length > 0) {
                    for (var i in del) {
                        Main.player.m_items.delItemById(del[i]);
                    }
                }
                var open = boxInfos["openedBoxs"];
                for (var tid in open) {
                    str += this.getoPenBoxMsg(open[tid]);
                }
                var miss = boxInfos["lostBoxs"];
                for (var tid in miss) {
                    var boxT = GameManager.JSON_ITEM[tid];
                    if (!boxT)
                        continue;
                    str += ",发现[" + boxT["name"] + "]*" + miss[tid] + "但是身上没钥匙只能遗憾离去";
                }
            }
            GameManager.msgBox.showMsg(function (r) {
            }, str, true);
        }
    };
    _0x0110.prototype.getoPenBoxMsg = function (data) {
        var str = "";
        for (var tid in data) {
            var boxT = GameManager.JSON_ITEM[tid];
            if (!boxT)
                continue;
            str = "开启[" + boxT["name"] + "] 获得";
            var rewards = data[tid];
            for (var i in rewards) {
                if (!rewards[i])
                    continue;
                if (Number(rewards[i]["maxType"]) == 151) {
                    str += "金币+" + Number(rewards[i]["num"]) * Main.player.level + " ";
                }
                else if (Number(rewards[i]["maxType"]) == 52) {
                    str += "元宝+" + rewards[i]["num"] + " ";
                }
                else if (Number(rewards[i]["maxType"]) == 156) {
                    str += "经验+" + Number(rewards[i]["num"]) * Main.player.level + " ";
                }
                else if (Number(rewards[i]["maxType"]) < 50) {
                    var itemT = GameManager.JSON_ITEM[rewards[i]["itemId"]];
                    if (!itemT)
                        continue;
                    str += " " + itemT.name + "*" + rewards[i]["num"];
                }
            }
        }
        return str + "\n";
    };
    return _0x0110;
})();
_0x0110.prototype.__class__ = "_0x0110";
