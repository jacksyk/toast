import "./index.css";
declare class Toast {
    private _mountDom;
    constructor();
    private createMountElement;
    log(text: string): void;
}
declare const toast: Toast;
export { toast };
