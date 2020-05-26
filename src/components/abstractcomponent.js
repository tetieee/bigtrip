import { createElement } from '../utils'
export default class AbstractComponent {
    constructor() {
        if (new.target === AbstractComponent) {
            throw new Error(`only concrete`)
        }
        this._element = null;
    }
    getTemplate() {
        throw new Error(`Abstract method not implemented`)
    }
    getElement() {
        if (!this._element) {
            this._element = createElement(this.getTemplate())
        }
        return this._element;
    }
    removeElement() {
        this._element = null;
    }
}