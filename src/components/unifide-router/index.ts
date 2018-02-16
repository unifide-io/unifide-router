import { Element as PolymerElement } from '@polymer/polymer/polymer-element';
import '@polymer/app-layout/app-layout.js';

import * as view from './app.template.html';

export class UnifideRouter extends PolymerElement {

    static get template() {

        return view;

    }

    constructor() {

        super();
    }

    static get properties() {
        return {
          unifideLogo: {
            type: String,
            value: 'https://firebasestorage.googleapis.com/v0/b/unifide-app.appspot.com/o/unifide-landing%2Fimg%2Funifide-logo.png?alt=media&token=42d237aa-5d6d-48c5-8065-a1f866c3ddb4'
          },
          background: {
            type: String,
            value: 'https://firebasestorage.googleapis.com/v0/b/unifide-app.appspot.com/o/unifide-landing%2Fimg%2Funifide-landing-tunnel.gif?alt=media&token=8a81724a-7ba0-47ae-8778-eb254786a8d2'
          }

        };
    }



    

}
