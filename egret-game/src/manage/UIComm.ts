class UIComm extends egret.gui.UIComponent
{
    /**
     * 加载状态
     */
    public m_LoadState:boolean;

    /**
     * 资源组名称
     */
    public m_path:string = "";

    /**
     * 加载进度界面
     */
    private loadingView:LoadingUI;

    public constructor(path:string)
    {
        super();

        this.m_path = path;

        //设置加载进度界面
        this.loadingView  = new LoadingUI();
        //this.addChild(this.loadingView);

        RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE,this.onResourceLoadComplete,this);
        RES.addEventListener(RES.ResourceEvent.GROUP_PROGRESS,this.onResourceProgress,this);
        RES.loadGroup(this.m_path);
    }

    /**
     * 资源组加载完成
     */
    private onResourceLoadComplete(event:RES.ResourceEvent):void
    {
        if(event.groupName==this.m_path)
        {
            //this.stage.removeChild(this.loadingView);
            RES.removeEventListener(RES.ResourceEvent.GROUP_COMPLETE,this.onResourceLoadComplete,this);
            RES.removeEventListener(RES.ResourceEvent.GROUP_PROGRESS,this.onResourceProgress,this);

            this.m_LoadState = true;
        }
    }
    /**
     * 资源组加载进度
     */
    private onResourceProgress(event:RES.ResourceEvent):void
    {
        if(event.groupName==this.m_path)
        {
            this.loadingView.setProgress(event.itemsLoaded,event.itemsTotal);
        }
    }

    public onShow():void
    {
        //if(!this.parent)
        //{
            //Main.mainUI.addChild(this);
        //}
    }

    public onHide():void
    {
        //if(this.parent)
        //{
            //this.parent.removeChild(this);
        //}
    }

}