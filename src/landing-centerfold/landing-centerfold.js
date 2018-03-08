import { Element } from '@polymer/polymer/polymer-element';
import * as view from './landing-centerfold.template.html';


export class LandingCenterfold extends Element {
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
customElements.define('landing-centerfold', LandingCenterfold);
