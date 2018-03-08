import {Element} from '@polymer/polymer/polymer-element.js';
import * as view from './landing-services.template.html';


export class LandingServices extends Element {
    constructor() {
        super();
    }

    static get properties() {
        return {

        };
    }

    static get template() {
        return view;
    }

}
customElements.define('landing-services', LandingServices);
