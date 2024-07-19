import "./index.css"
class Toast {
    private _mountDom: HTMLDivElement | null
    constructor() {
        this._mountDom = null
        this.createMountElement()
    }

    private createMountElement() {
        let mountElement = document.createElement("div")
        mountElement.id = "ktoast_root"
        document.body.appendChild(mountElement)
        this._mountDom = mountElement
    }
    public log(text: string) {
        let span = document.createElement("span")
        span.innerHTML = text
        if (this._mountDom) {
            this._mountDom.appendChild(span)
            setTimeout(() => {
                span.classList.add("hide")
            }, 2500)
            setTimeout(() => {
                span.remove()
            }, 3000)
        }
    }
    private logType(text: string, type: "success" | "warning" | "error") {
        let span = document.createElement("span")
        span.innerHTML = text
        span.classList.add("toast-" + type)
        if (this._mountDom) {
            this._mountDom.appendChild(span)
            setTimeout(() => {
                span.classList.add("hide")
            }, 2500)
            setTimeout(() => {
                span.remove()
            }, 3000)
        }
    }

    public success(text: string) {
        this.logType(text, "success")
    }

    public warning(text: string) {
        this.logType(text, "warning")
    }

    public error(text: string) {
        this.logType(text, "error")
    }
}

const toast = new Toast()
export { toast }
