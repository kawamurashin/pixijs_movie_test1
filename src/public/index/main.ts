import {ControllerManager} from "./controller/controllerManager";

class Main
{
    private _controllerManager:ControllerManager;
    constructor() {
        const resize = () =>
        {
            this.resizeHandler();
        }
        this._controllerManager = new ControllerManager();

        window.addEventListener("resize", (e:Event) =>
        {
            resize();
        })
    }
    private resizeHandler = () =>
    {
        this._controllerManager.resize();
    }
}

window.addEventListener("load", () =>
{
    new Main();
})