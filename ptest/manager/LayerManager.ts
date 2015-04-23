/**
 * Created by seethinks@gmail.com on 15/4/22.
 */
///<reference path = "../typescript/phaser.d.ts"/>
module test {
    export class LayerManager
    {
        static BgLayer:Phaser.Sprite;
        static TipsLayer:Phaser.Sprite;
        static AppLayer:Phaser.Sprite;
        static GameLayer:Phaser.Sprite;
        static game:Phaser.Game;

        constructor()
        {

        }

        public static setup(game:Phaser.Game){
            this.game = game;
            if(!this.BgLayer)
            {
                this.BgLayer = this.game.add.sprite(0,0);
            }
            if(!this.GameLayer)
            {
                this.GameLayer = this.game.add.sprite(0,0);
            }
            if(!this.AppLayer)
            {
                this.AppLayer = this.game.add.sprite(0,0);
            }
            if(!this.TipsLayer)
            {
                this.TipsLayer = this.game.add.sprite(0,0);
            }
        }
    }
}