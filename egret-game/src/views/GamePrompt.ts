
class GamePrompt extends Dialog
{
    private _dialog:DialogBox;

    private m_UI:UIGamePrompt;

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

        this.m_UI = new UIGamePrompt();

        this.addElement(this.m_UI);

        this.m_UI.horizontalCenter = 0;

        this._dialog._btn_close.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouch,this);

        this.m_UI._btn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouch,this);

        this._dialog._btn_help.visible = false;

        this._dialog.setTitle("游戏提示");

        this.top = 30;

        this.m_UI.top = this.top + 50;

        var str:string = "  ---- 他是一款放置类游戏！！！！超级简单，\n\n超级轻松，拒绝各种繁琐打怪！\n\n\n" +
            "  ---- 在这里打怪都是 →|自 动 的|← 从创建人物开始就\n\n会不停的自动打怪，获得经验、金币和装备。\n\n\n" +
            "  ---- 即使退出游戏也 →|不 会 停|← 随时再回到游戏就\n\n可以收获一堆经验金币和装备!\n\n\n" +
            "  ---- 怎么玩这个游戏？你所做的，只需要挑选最好的装\n\n备给你的人物和美人穿上，不断的战胜BOSS和其他玩\n\n家，最终达到实力的巅峰赢取白富美！";

        this.m_UI.help_label.text = str;
    }

    private onTouch(e:egret.TouchEvent):void
    {
        this.hide();
    }

    public onUpdate():void
    {

    }

    public show()
    {
        super.show( );


    }

    public hide()
    {
        super.hide();

        DialogManager.open(ActivityDialog, "ActivityDialog");
    }
}
