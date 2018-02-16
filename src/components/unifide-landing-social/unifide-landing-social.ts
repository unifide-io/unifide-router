import { Element as PolymerElement } from '@polymer/polymer/polymer-element';
import * as view from './landing-social.template.html';


export class UnifideLandingSocial extends PolymerElement {
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
