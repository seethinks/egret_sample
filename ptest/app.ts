/**
 * Created by seethinks@gmail.com on 15/4/21.
 */
///<reference path = "typescript/phaser.d.ts"/>
    ///<reference path = "manager/LayerManager.ts"/>
    module test {

    export class SimpleGame {

        constructor() {
            this.game = new Phaser.Game(800, 600, Phaser.AUTO, 'content', {preload: this.preload, create: this.create});
        }

        game:Phaser.Game;

        preload() {
            this.game.load.image('logo', 'phaser2.png');
            this.game.load.image('bg', 'IMG_0012.JPG');
        }

        create() {
            var logo = this.game.make.sprite(0,0,"logo")
            logo.anchor.setTo(0.5, 0.5);
            LayerManager.setup(this.game);

            LayerManager.TipsLayer.addChild(logo)
            LayerManager.BgLayer.addChild(this.game.make.sprite(0,0,"bg"))

        }

    }
}
window.onload = () => {

    var game = new test.SimpleGame();

};