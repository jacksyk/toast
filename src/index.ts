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
}

const toast = new Toast()
export { toast }
