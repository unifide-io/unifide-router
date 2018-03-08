import {Element} from '@polymer/polymer/polymer-element.js';
import * as view from './landing-photo.template.html';


export class LandingPhoto extends Element {
    static get properties() {
        return {
          imgUrl: {
            type: String,
            observer: 'getPhoto'
          }
        };
    }

    constructor() {
        super();
    }

    getPhoto(imgUrl) {
      this.style.backgroundImage = 'url(\''+imgUrl+'\')';
    }

    static get template() {
        return view;
    }

}
customElements.define('landing-photo', LandingPhoto);
