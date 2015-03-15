/**
 * Created by seethinks@gmail.com on 2015/3/12.
 */
var LayerManager = (function () {
    function LayerManager() {
    }
    LayerManager.init = function ($container) {
        LayerManager._root = $container;
        LayerManager.stage = egret.MainContext.instance.stage;
        if (!LayerManager.GameLayer) {
            LayerManager.GameLayer = new egret.DisplayObjectContainer();
            LayerManager._root.addChild(LayerManager.GameLayer);
        }
        if (!LayerManager.TopLayer) {
            LayerManager.TopLayer = new egret.DisplayObjectContainer();
            LayerManager._root.addChild(LayerManager.TopLayer);
        }
        if (!LayerManager.GUILayer) {
            LayerManager.GUILayer = new egret.DisplayObjectContainer();
            LayerManager._root.addChild(LayerManager.GUILayer);
        }
    };
    return LayerManager;
})();
LayerManager.prototype.__class__ = "LayerManager";
