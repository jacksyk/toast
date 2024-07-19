import "./index.css";
declare class Toast {
    private _mountDom;
    constructor();
    private createMountElement;
    log(text: string): void;
    private logType;
    success(text: string): void;
    warning(text: string): void;
    error(text: string): void;
}
declare const toast: Toast;
export { toast };
