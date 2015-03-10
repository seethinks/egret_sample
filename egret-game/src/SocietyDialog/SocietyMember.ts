/**
 * 帮会成员
 */
class SocietyMemberDialog extends Dialog
{
    private _dialog:DialogBox;

    private m_UI:UISocietyArrange;

    private list:egret.gui.List = new egret.gui.List();

    private dp:egret.gui.ArrayCollection = new egret.gui.ArrayCollection();

    public constructor()
    {
        super();
    }

    public createChildren():void
    {
        super.createChildren();

        this._dialog = new DialogBox();

        this.addElement(this._dialog);

        this._dialog.horizontalCenter = 0;

        this.m_UI = new UISocietyArrange();

        this.addElement(this.m_UI);

        this.m_UI.horizontalCenter = 0;

        this._dialog._btn_close.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouch,this);

        this._dialog._btn_help.visible = false;

        this._dialog.setTitle("行会成员");

        this.top = 30;

        this.m_UI.top = this.top + 50;

        this.list.skinName = "skins.ListSkin";

        this.list.height = 451;

        this.list.width = 530;

        this.list.horizontalCenter = 0;

        this.list.top = 245;

        this.list.itemRenderer = new egret.gui.ClassFactory(UISocietyRankItem);

        this.list.itemRendererSkinName = "skins.SocietyRankItemReaderSkin";

        this.list.dataProvider = this.dp;

        this.list.touchChildren = true;

        this.list.addEventListener(egret.gui.ListEvent.ITEM_CLICK, this.clickItem, this);

        this.addElement(this.list);

        this.m_UI._btn_buzhen.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);

        this.m_UI._btn_exit.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);

        this.m_UI._btn_manager.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);

        this.m_UI._btn_buzhen.visible = false;
    }

    private clickItem(e:egret.gui.ListEvent):void
    {
        var item = e.item;

        var id:number = Number(item["roleId"]);

        var sm:SocietyMemeber = Main.player.m_society.findMemeber(id);

        if(sm)
        {
            if(sm.roleId == Main.player.m_society.myInfo.roleId) return;

            var dialog:MemberManagerDialog = DialogManager.findDialog(MemberManagerDialog, "MemberManagerDialog");

            if(dialog)
            {
                dialog.sm = sm;

                dialog.show();
            }
        }
    }

    private onTouch(e:egret.TouchEvent):void
    {
        this.hide();
    }

    private onClick(e:egret.TouchEvent):void
    {
        switch (e.target){
            case this.m_UI._btn_exit:
                GameManager.msgBox.showMsg(function(r){
                    if(r){
                        var url:string = "http://"+GameManager.server["ip"]+":"+GameManager.server["port"];
                        var param:string = "type=0x0021&sid="+GameManager.SESSION_ID;
                        HttpMessage.sendMsg(url, param);
                    }
                }, "确定要退出行会？");
                break;
            case this.m_UI._btn_buzhen:
            case this.m_UI._btn_manager:
                DialogManager.open(SocietyManager, "SocietyManager");
            default :

                break;
        }
    }

    public onUpdate():void
    {
        this.dp.removeAll();

        var so:Society = Main.player.m_society;
        if(!so)return;

        this.m_UI._label_level.text = "行会等级："+so.lv;
        this.m_UI._label_renshu.text = "行会人数："+so.num +"/" + so.maxNum;

        for(var i in so.members){
            if(!so.members[i])continue;
            this.dp.addItem(so.members[i]);
        }
    }

    public show()
    {
        super.show();
        this.onUpdate();
        Main.iconMeun.setHanghuiGroupVis(false);
    }

    public hide()
    {
        Main.iconMeun.setHanghuiGroupVis(true);
        super.hide();
    }
}
