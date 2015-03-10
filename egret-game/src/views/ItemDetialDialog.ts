class ItemDetialDialog extends Dialog{

    private m_dilog:SmallDialogBox;
    private m_UI:UIItemDetail;

    public constructor(){
        super();
    }

    public createChildren() {
        super.createChildren();

        this.horizontalCenter = 0;
        this.verticalCenter = -100;

        this.m_dilog = new SmallDialogBox();
        this.addElement(this.m_dilog);
        this.m_dilog.height = 350;

        this.m_dilog.setTitle("物品详情");

        this.m_UI = new UIItemDetail();
        this.addElement(this.m_UI);
        this.m_UI.horizontalCenter = 0;
        this.m_UI.verticalCenter = 30;

        this.m_UI._item_btn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchBtn, this);
        this.m_dilog._close_btn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onCloseBtn, this);

    }

    private onTouchBtn(e:egret.TouchEvent)
    {
        var item:Item = Main.player.m_clickItme;

        if(!item)return;

        if(item.maxType == 1)
        {
            DialogManager.open(GemUpgradeDialog, "GemUpgradeDialog");
        }
        else if(item.maxType == 7 || item.maxType == 6)
        {
            var url:string = "http://"+GameManager.server["ip"]+":"+GameManager.server["port"];

            var param:string = "type=0x0081&sid="+GameManager.SESSION_ID+ "&id=" + item["id"];

            HttpMessage.sendMsg(url, param);

        }
        else
        {

        }

        this.hide();
    }

    private onCloseBtn(e:egret.TouchEvent){

        this.hide();
    }

    public onUpdate(){

        var item:Item = Main.player.m_clickItme;
        if(!item)return;


        if(item.maxType == 1){
            //宝石
            this.m_UI._item_btn._setLabel("合成宝石");
        } else if(item.maxType == 7){
            //神器碎片
            this.m_UI._item_btn._setLabel("合成神器");
        } else if(item.maxType == 6){
            //宝石袋
            this.m_UI._item_btn._setLabel("使用");
        } else {
            this.m_UI._item_btn._setLabel("关闭");
        }

        this.m_UI._item_icon.data = item.getData();
        this.m_UI._item_icon.dataChanged();

        this.m_UI._item_detail_label.text = item.tpl["des"];
        this.m_UI._item_detail_label.lineSpacing = 3;


    }

    public show(){
        super.show();
        this.onUpdate();
    }

    public hide(){
        super.hide();
        //Main.player.m_clickItme = null;
    }
}