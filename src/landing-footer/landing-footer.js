import { Element as PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import * as view from './landing-footer.template.html';
import '@polymer/paper-input/paper-input.js';
import '@polymer/paper-button/paper-button.js';
import '../landing-social/landing-social.js';
import '../unifide-window/unifide-window.js';


export default class LandingFooter extends PolymerElement {
    constructor() {
        super();
    }

    static get properties() {
        return {


        };
    }
    static get is() {
      return "landing-footer";
    }
    static get template() {
        return view;
    }
    recruit(){
      router.recruit();
      console.log();
    }


}
customElements.define('landing-footer', LandingFooter);
