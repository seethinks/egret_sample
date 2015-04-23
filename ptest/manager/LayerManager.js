/**
 * Created by seethinks@gmail.com on 15/4/22.
 */
///<reference path = "../typescript/phaser.d.ts"/>
var test;
(function (test) {
    var LayerManager = (function () {
        function LayerManager() {
        }
        LayerManager.setup = function (game) {
            this.game = game;
            if (!this.BgLayer) {
                this.BgLayer = this.game.add.sprite(0, 0);
            }
            if (!this.GameLayer) {
                this.GameLayer = this.game.add.sprite(0, 0);
            }
            if (!this.AppLayer) {
                this.AppLayer = this.game.add.sprite(0, 0);
            }
            if (!this.TipsLayer) {
                this.TipsLayer = this.game.add.sprite(0, 0);
            }
        };
        return LayerManager;
    })();
    test.LayerManager = LayerManager;
})(test || (test = {}));
//# sourceMappingURL=LayerManager.js.map