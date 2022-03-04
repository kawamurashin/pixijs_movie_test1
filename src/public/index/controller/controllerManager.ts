import {ViewManager} from "../view/viewManager";

export class ControllerManager
{
    private _viewManager: ViewManager;
    constructor() {
        this._viewManager = new ViewManager()
    }

    resize() {
        this._viewManager.resize();
    }
}