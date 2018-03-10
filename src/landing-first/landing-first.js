import {Element} from '@polymer/polymer/polymer-element.js';
import * as view from './landing-first.template.html';

import '../landing-social/landing-social.js';


export class LandingFirst extends Element {

    static get properties() {
        return {
          appName: {
            type: String,
            value: 'Unifide'
          },
          appNameWidth: {
            type:String,
          },
          landingBackground: {
            type: String,
            value: 'https://firebasestorage.googleapis.com/v0/b/unifide-app.appspot.com/o/unifide-landing%2Fimg%2Funifide-landing-tunnel.gif?alt=media&token=8a81724a-7ba0-47ae-8778-eb254786a8d2'
          },
          landingLogo: {
            type: String,
            value: 'https://firebasestorage.googleapis.com/v0/b/unifide-app.appspot.com/o/unifide-landing%2Fimg%2Funifide-logo.png?alt=media&token=42d237aa-5d6d-48c5-8065-a1f866c3ddb4'
          },
          landingSlogan: {
            type: String,
            value: 'Browse. Meet. Chat. Learn.'
          },
          socialLinks: {
            type:Array,
            observer: '_updateSocialLinks',
            notify: true,
            reflectToAttribute: true,
          },
        
        };
    }

    constructor() {
        super();
        //(<any>this).appNameWidth = '150px';
        //(<any>this).appNameLeft = (window.innerWidth/2)-75+'px';

    }

    static get template() {
        return view;
    }

}
customElements.define('landing-first', LandingFirst);
