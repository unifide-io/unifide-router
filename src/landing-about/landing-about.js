import {Element} from '@polymer/polymer/polymer-element.js';
import * as view from './landing-about.template.html';


export class LandingAbout extends Element {
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
customElements.define('landing-about', LandingAbout);
