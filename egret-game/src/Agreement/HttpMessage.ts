class HttpMessage
{
    public constructor()
    {

    }

    public static sendMsg(URL:string, parm:string):void
    {
        GameManager.msgSending = true;
        if(GameManager.stopGame)return;

        var loder:egret.URLLoader = new egret.URLLoader();
        loder.dataFormat = egret.URLLoaderDataFormat.TEXT;
        var request:egret.URLRequest = new egret.URLRequest(URL);
        request.method = egret.URLRequestMethod.POST;
        request.data = new egret.URLVariables(parm);
        loder.load(request);
        loder.addEventListener(egret.Event.COMPLETE,function(event:egret.Event)
        {
            GameManager.msgSending = false;

            if(GameManager.loding)
            {
                GameManager.loding.stop();

                GameManager.mseffisplay = false;
            }

            var loader:egret.URLLoader = <egret.URLLoader> event.target;
            var data:egret.URLVariables = loader.data;
            var obj:any = JSON.parse(data.toString());
            var type:string = obj["type"];
            if(type)
            {
                GameManager.Agree[type].parseData(obj["data"]);
            }

            if(obj["codes"])
            {
                for(var i in obj["codes"]) {
                    //如果战斗结果同步
                    if(type == "0x0007" || type == "0x0411")
                    {
                        Main.player.FRCodes[obj["codes"][i]] = obj["codes"][i];
                        continue;
                    }

                    var url:string = "http://"+GameManager.server["ip"]+":"+GameManager.server["port"];
                    var param:string = "type="+obj["codes"][i]+"&sid="+GameManager.SESSION_ID;
                    HttpMessage.sendMsg(url, param);
                }
            }

        },this);
    }

    public static sendMsgCallBack(URL:string, param:string, callback:Function):void
    {
        GameManager.msgSending = true;



        //if(GameManager.stopGame)return;

        var loader:egret.URLLoader = new egret.URLLoader();
        loader.dataFormat = egret.URLLoaderDataFormat.TEXT;
        var request:egret.URLRequest = new egret.URLRequest(URL);
        request.method = egret.URLRequestMethod.POST;
        request.data = new egret.URLVariables(param);
        loader.load(request);

        loader.addEventListener(egret.Event.COMPLETE, function(event:egret.Event)
        {

            GameManager.msgSending = false;

            if(GameManager.loding)
            {
                GameManager.loding.stop();

                GameManager.mseffisplay = false;
            }

            var loader:egret.URLLoader = <egret.URLLoader>event.target;
            var data:egret.URLVariables = loader.data;
            var obj:any = JSON.parse(data.toString());
            callback(obj);
        }, this);
    }
}