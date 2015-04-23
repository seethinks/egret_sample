/**
 * Created by seethinks@gmail.com on 15/4/21.
 */
///<reference path = "typescript/phaser.d.ts"/>
///<reference path = "manager/LayerManager.ts"/>
var test;
(function (test) {
    var SimpleGame = (function () {
        function SimpleGame() {
            this.game = new Phaser.Game(800, 600, Phaser.AUTO, 'content', { preload: this.preload, create: this.create });
        }
        SimpleGame.prototype.preload = function () {
            this.game.load.image('logo', 'phaser2.png');
            this.game.load.image('bg', 'IMG_0012.JPG');
        };
        SimpleGame.prototype.create = function () {
            var logo = this.game.make.sprite(0, 0, "logo");
            logo.anchor.setTo(0.5, 0.5);
            test.LayerManager.setup(this.game);
            test.LayerManager.TipsLayer.addChild(logo);
            test.LayerManager.BgLayer.addChild(this.game.make.sprite(0, 0, "bg"));
        };
        return SimpleGame;
    })();
    test.SimpleGame = SimpleGame;
})(test || (test = {}));
window.onload = function () {
    var game = new test.SimpleGame();
};
//# sourceMappingURL=app.js.map