var _0x0003 = (function () {
    function _0x0003() {
    }
    _0x0003.prototype.constuctor = function () {
    };
    _0x0003.prototype.parseData = function (obj) {
        if (!obj)
            return;
        Main.player.playerUpdate(obj);
        var url = "http://" + GameManager.server["ip"] + ":" + GameManager.server["port"];
        var param = "type=0x0007&sid=" + GameManager.SESSION_ID + "&isBoss=0&mapid=" + Main.player.map;
        HttpMessage.sendMsg(url, param);
        DialogManager.Update(HeroEqpt, "HeroEqpt");
        Main.MainUI.updateData();
        /* -------美能暂时屏蔽------- */
        var url = "http://" + GameManager.server["ip"] + ":" + GameManager.server["port"];
        var param = "type=0x0055&sid=" + GameManager.SESSION_ID;
        HttpMessage.sendMsg(url, param);
        var url = "http://" + GameManager.server["ip"] + ":" + GameManager.server["port"];
        var param = "type=0x0008&sid=" + GameManager.SESSION_ID;
        HttpMessage.sendMsg(url, param);
        //检查回馈
        //        if(GameManager.account && GameManager.account["username"] && GameManager.account["guid"]){
        //            var url:string = "http://"+GameManager.delive["ip"]+":"+GameManager.delive["port"]+"/"+GameManager.delive["pn"]+"/opFeedBack.php";
        //            var params:string = "id="+GameManager.account["guid"]+"&sid="+GameManager.server["sid"]+"&name="+Main.player.name;
        //            HttpMessage.sendMsgCallBack(url, params,function(obj:any){});
        //        }
        //推送角色进入游戏事件
        //       if(GameManager.dataEyes)GameManager.dataEyes.pushEvent("IntoGame", 1,
        //            {playerName:Main.player.name, level:Main.player.level, job:GameManager.JOB_NAME[Main.player.job], server:GameManager.server.sid});
        //uc推送  oppo
        var submitRole = Main.player.id + "|" + Main.player.name + "|" + Main.player.level + "|" + GameManager.server.sid + "|" + GameManager.server.name;
        egret.ExternalInterface.call("pt_submitRole", submitRole);
    };
    return _0x0003;
})();
_0x0003.prototype.__class__ = "_0x0003";
