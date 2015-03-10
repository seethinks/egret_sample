var Heart = (function () {
    function Heart() {
        this.gameHeartTime = 0;
        this.serverHeart = 0;
        this.fightHeart = 0;
        this.flyTxtHeart = 0;
        this.msgsendTime = 0;
        this.hornHeart = 0;
        this.prisonTime = 0;
        this.timer = new egret.Timer(100);
        this.timer.addEventListener(egret.TimerEvent.TIMER, this.onTimer, this);
        this.timer.start();
    }
    Heart.prototype.onTimer = function (e) {
        if (GameManager.stopGame)
            return;
        this.serverHeart++;
        this.fightHeart++;
        this.flyTxtHeart++;
        this.gameHeartTime++;
        this.hornHeart++;
        this.prisonTime++;
        //0x0040 服务器心跳
        if (this.serverHeart >= 113) {
            this.serverHeart = 0;
            var url = "http://" + GameManager.server["ip"] + ":" + GameManager.server["port"];
            var params = "type=0x0040&sid = " + GameManager.SESSION_ID;
            HttpMessage.sendMsg(url, params);
        }
        //战斗
        if (this.fightHeart >= 10) {
            this.fightHeart = 0;
            //            if(GameManager.nextFightTime < 0 && !GameManager.isFighting){
            //                GameManager.nextFightTime = 3;
            //                //发消息取距离下场战斗时长
            //                var url:string = "http://"+GameManager.server["ip"]+":"+GameManager.server["port"];
            //                var params:string = "type=0x0053&sid="+GameManager.SESSION_ID;
            //                HttpMessage.sendMsg(url, params);
            //            }
            //            GameManager.nextFightTime --;
            var fight = DialogManager.findDialog(FightDialog, "FightDialog");
            if (fight)
                fight.onTimers();
        }
        //提示信息飘字
        if (this.flyTxtHeart >= 2) {
            this.flyTxtHeart = 0;
            GameManager.flyMessage();
        }
        if (GameManager.startGame && Main.player.m_leaveResult) {
            var result = DialogManager.findDialog(ResultDialog, "ResultDialog");
            if (result)
                result.updateText(Main.player.m_leaveResult);
        }
        var fight = DialogManager.findDialog(FightDialog, "FightDialog", false);
        if (fight && fight.chat) {
            fight.chat.updateTime();
        }
        if (GameManager.msgSending && !GameManager.mseffisplay) {
            this.msgsendTime++;
            if (this.msgsendTime > 10 * 3) {
                GameManager.mseffisplay = true;
                this.msgsendTime = 0;
                GameManager.loding.play();
            }
        }
        else {
            this.msgsendTime = 0;
        }
        if (this.hornHeart >= 10) {
            this.hornHeart = 0;
            if (!GameManager.hornStop && GameManager.hornList && GameManager.hornList.length > 0) {
                GameManager.horn.play(GameManager.hornList.shift());
            }
            if (Main.player.faction && Main.player.m_society) {
                var dialog = DialogManager.findDialog(SocietyDialog, "SocietyDialog");
                if (dialog) {
                    dialog.countD();
                }
            }
        }
        if (this.prisonTime >= 10) {
            this.prisonTime = 0;
            var prison = DialogManager.findDialog(PrisonDialog, "PrisonDialog", true);
            if (prison && prison.showing) {
                prison.onTimer();
            }
        }
        //        console.log("heart hit");
    };
    return Heart;
})();
Heart.prototype.__class__ = "Heart";
