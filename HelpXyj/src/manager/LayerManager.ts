/**
 * Created by seethinks@gmail.com on 2015/3/12.
 */
    class LayerManager {
        static TopLayer:egret.DisplayObjectContainer;
        static GUILayer:egret.DisplayObjectContainer;
        static GameLayer:egret.DisplayObjectContainer;
        static stage:egret.Stage;

        /**
         * 根
         */
        private static _root:egret.DisplayObjectContainer;

        public static init($container:egret.DisplayObjectContainer):void {

            LayerManager._root = $container;
            LayerManager.stage = egret.MainContext.instance.stage;


            if (!LayerManager.GameLayer) {
                LayerManager.GameLayer = new egret.DisplayObjectContainer();
                LayerManager._root.addChild(LayerManager.GameLayer);
            }

            if (!LayerManager.TopLayer) {
                LayerManager.TopLayer = new egret.DisplayObjectContainer();
                LayerManager._root.addChild(LayerManager.TopLayer)
            }

            if (!LayerManager.GUILayer) {
                LayerManager.GUILayer = new egret.DisplayObjectContainer();
                LayerManager._root.addChild(LayerManager.GUILayer);
            }
        }
    }
