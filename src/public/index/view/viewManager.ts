import * as PIXI from 'pixi.js'

export class ViewManager {
    public static STAGE_WIDTH = 1920;
    public static STAGE_HEIGHT = 1080;
    private readonly _app: PIXI.Application;

    constructor() {
        const canvas: any = document.getElementById("main");
        this._app = new PIXI.Application({
            width: ViewManager.STAGE_WIDTH,
            height: ViewManager.STAGE_HEIGHT,
            backgroundColor: 0xCCCCCC, resolution: window.devicePixelRatio || 1,
            antialias: true,
            view: canvas
        });

        let stage: PIXI.Container = this._app.stage;

        let options: object = {
            resourceOptions: {
                autoPlay: false
            }
        }
        const videoSprite = PIXI.Sprite.from("./movie/movie.mp4", options);
        stage.addChild(videoSprite);



        let sprite:PIXI.Sprite = new PIXI.Sprite();
        stage.addChild(sprite)

        let g = new PIXI.Graphics();
        g.beginFill(0xFF0000);
        g.drawCircle(0,0,50);
        sprite.addChild(g);
        sprite.x = 100;
        sprite.y = 100;
        sprite.interactive = true;
        sprite.buttonMode = true;
        sprite.on("click", () =>
        {
            let resource:any = videoSprite.texture.baseTexture.resource
            resource.source.play()


        })

        this.resize()
    }

    resize() {
        const scale: number = document.body.clientWidth / ViewManager.STAGE_WIDTH
        const w: number = ViewManager.STAGE_WIDTH * scale;
        const h: number = ViewManager.STAGE_HEIGHT * scale
        this._app.renderer.view.style.width = w + "px"
        this._app.renderer.view.style.height = h + "px"
    }
}