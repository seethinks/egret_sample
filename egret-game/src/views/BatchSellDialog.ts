class BatchSellDialog extends Dialog {

    private m_dialog:SmallDialogBox;
    private m_UI:UIBatchSell;

    public constructor(){
        super();
    }

    public createChildren() {
        super.createChildren();

        this.horizontalCenter = 0;
        this.verticalCenter = -100;

        this.m_dialog = new SmallDialogBox();
        this.addElement(this.m_dialog);
        this.m_dialog.height = 420;

        this.m_dialog.setTitle("批量卖出");

        this.m_UI = new UIBatchSell();
        this.m_UI.horizontalCenter = 0;
        this.m_UI.verticalCenter = 30;

        this.addElement(this.m_UI);

        this.m_dialog._close_btn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onCloseBtn, this);
        this.m_UI._close_btn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onCloseBtn, this);
        this.m_UI._blue_btn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onSellBtn, this);
        this.m_UI._white_btn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onSellBtn, this);
        this.m_UI._green_btn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onSellBtn, this);
        this.m_UI._violet_btn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onSellBtn, this);

    }

    private onCloseBtn(e:egret.TouchEvent){

        this.hide();
    }

    public onUpdate(){

        var items:Equip[] = Main.player.m_items.equips;

        var w:number = 0;
        var g:number = 0;
        var b:number = 0;
        var v:number = 0;

        for(var i in items){
            var equip:Equip = items[i];
            if(!equip)continue;

            if(equip.godEq > 0)continue;

            if(equip.qly == 0)w++;
            if(equip.qly == 1)g++;
            if(equip.qly == 2)b++;
            if(equip.qly == 3)v++;
        }

        this.m_UI._white_label.text = "白色装备x"+w;
        this.m_UI._green_label.text = "绿色装备x"+g;
        this.m_UI._blue_label.text = "蓝色装备x"+b;
        this.m_UI._violet_label.text = "紫色装备x"+v;

    }

    private onSellBtn(e:egret.TouchEvent){
        var qly:number = -1;
        switch(e.target){
            case this.m_UI._white_btn:
                qly = 0;
                break;
            case this.m_UI._blue_btn:
                qly = 2;
                break;
            case this.m_UI._green_btn:
                qly = 1;
                break;
            case this.m_UI._violet_btn:
                qly = 3;
                break;
        }
        if(qly > -1){
            var url:string = "http://"+GameManager.server["ip"]+":"+GameManager.server["port"];
            var params:string = "type=0x0076&sid="+GameManager.SESSION_ID+"&quality="+qly;
            HttpMessage.sendMsg(url, params);
        }

    }

    public show(){
        super.show();
        this.onUpdate();
    }

    public hide(){
        super.hide();
        Main.player.m_clickItme = null;
    }

}