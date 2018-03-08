import {Element} from '@polymer/polymer/polymer-element.js';
import * as view from './landing-social.template.html';
import '../unifide-icons/unifide-icons.js'


export class LandingSocial extends Element {
    constructor() {
        super();
    }

    static get properties() {
        return {
          facebook: {
            type: String
          },
          twitter: {
            type: String
          },
          instagram: {
            type: String
          },
          youtube: {
            type: String
          },
          github: {
            type: String
          },
          marginTop: {
            type: String,
          },
          marginBottom: {
            type: String
          }

        };
    }

    static get template() {
        return view;
    }

}
customElements.define('landing-social', LandingSocial);
