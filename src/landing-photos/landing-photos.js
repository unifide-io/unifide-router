import {Element} from '@polymer/polymer/polymer-element.js';
import * as view from './landing-photos.template.html';
import '../landing-photo/landing-photo.js';


export class LandingPhotos extends Element {

    static get properties() {
        return {

        };
    }

    constructor() {
        super();
    }

    static get template() {
        return view;
    }

}
customElements.define('landing-photos', LandingPhotos);
