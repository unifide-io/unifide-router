import {Element} from '@polymer/polymer/polymer-element.js';
import * as view from './landing-speech.template.html';


export class LandingSpeech extends Element {
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
customElements.define('landing-speech', LandingSpeech);
