var HttpMessage = (function () {
    function HttpMessage() {
    }
    HttpMessage.sendMsg = function (URL, parm) {
        GameManager.msgSending = true;
        if (GameManager.stopGame)
            return;
        var loder = new egret.URLLoader();
        loder.dataFormat = egret.URLLoaderDataFormat.TEXT;
        var request = new egret.URLRequest(URL);
        request.method = egret.URLRequestMethod.POST;
        request.data = new egret.URLVariables(parm);
        loder.load(request);
        loder.addEventListener(egret.Event.COMPLETE, function (event) {
            GameManager.msgSending = false;
            if (GameManager.loding) {
                GameManager.loding.stop();
                GameManager.mseffisplay = false;
            }
            var loader = event.target;
            var data = loader.data;
            var obj = JSON.parse(data.toString());
            var type = obj["type"];
            if (type) {
                GameManager.Agree[type].parseData(obj["data"]);
            }
            if (obj["codes"]) {
                for (var i in obj["codes"]) {
                    //如果战斗结果同步
                    if (type == "0x0007" || type == "0x0411") {
                        Main.player.FRCodes[obj["codes"][i]] = obj["codes"][i];
                        continue;
                    }
                    var url = "http://" + GameManager.server["ip"] + ":" + GameManager.server["port"];
                    var param = "type=" + obj["codes"][i] + "&sid=" + GameManager.SESSION_ID;
                    HttpMessage.sendMsg(url, param);
                }
            }
        }, this);
    };
    HttpMessage.sendMsgCallBack = function (URL, param, callback) {
        GameManager.msgSending = true;
        //if(GameManager.stopGame)return;
        var loader = new egret.URLLoader();
        loader.dataFormat = egret.URLLoaderDataFormat.TEXT;
        var request = new egret.URLRequest(URL);
        request.method = egret.URLRequestMethod.POST;
        request.data = new egret.URLVariables(param);
        loader.load(request);
        loader.addEventListener(egret.Event.COMPLETE, function (event) {
            GameManager.msgSending = false;
            if (GameManager.loding) {
                GameManager.loding.stop();
                GameManager.mseffisplay = false;
            }
            var loader = event.target;
            var data = loader.data;
            var obj = JSON.parse(data.toString());
            callback(obj);
        }, this);
    };
    return HttpMessage;
})();
HttpMessage.prototype.__class__ = "HttpMessage";
