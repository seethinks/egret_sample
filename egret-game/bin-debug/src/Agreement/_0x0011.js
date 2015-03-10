var _0x0011 = (function () {
    function _0x0011() {
    }
    _0x0011.prototype.constuctor = function () {
    };
    _0x0011.prototype.parseData = function (obj) {
        if (!obj)
            return;
        var err = obj["error"];
        var text = GameManager.JSON_ERROR[err];
        switch (err) {
            case "1":
                if (!GameManager.account || !GameManager.account.guid) {
                    egret.ExternalInterface.call("pt_login", "login");
                    return;
                }
                //获取服务器地址
                if (GameManager.server) {
                    var url = "http://" + GameManager.server["ip"] + ":" + GameManager.server["port"];
                    var param = "type=0x0001&name=" + GameManager.account["guid"];
                    HttpMessage.sendMsg(url, param);
                    egret.localStorage.setItem("lastLoginServer", GameManager.server["sid"]);
                }
                break;
            case "2":
                Main.guiLayer.removeAllElements();
                Main.guiLayer.addElement(Main.creatHero);
                break;
            case "3":
                GameManager.stopGame = true;
                //在别处登陆了游戏
                GameManager.msgBox.showMsg(function (r) {
                    if (r) {
                        GameManager.stopGame = false;
                    }
                    else {
                        egret.ExternalInterface.call("pt_login", "login");
                    }
                }, "与服务器断开连接!是否重新连接服务器？");
                break;
            case "4":
            case "5":
            case "445":
            case "446":
            case "447":
                if (!text)
                    return;
                var txt = new egret.gui.Label();
                Main.guiLayer.addElement(txt);
                txt.horizontalCenter = 0;
                txt.y = Main.guiLayer.height / 2;
                txt.textColor = GameManager.COLOR[5];
                txt.text = text;
                var tw = egret.Tween.get(txt, { loop: false });
                tw.to({ y: 50 }, 1500).to({ y: 50 }, 3000).call(function () {
                    if (txt.parent)
                        Main.guiLayer.removeElement(txt);
                });
                break;
            default:
                if (text)
                    GameManager.flyText({ t: text, q: 1 }, 0);
        }
    };
    return _0x0011;
})();
_0x0011.prototype.__class__ = "_0x0011";
