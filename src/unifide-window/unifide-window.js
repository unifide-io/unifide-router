import {Element} from '@polymer/polymer/polymer-element.js';

import template from './unifide-window.template.html';

import { IronOverlayBehavior } from '@polymer/iron-overlay-behavior/iron-overlay-behavior.js';

export class UnifideWindow extends Element {
  static get properties() {
    return {

    };
  }

  static get is() {
    return "unifide-window";
  }

  static get template() {
    return template;
  }

  constructor() {
    super()
  
  }

  open() {
    console.log('okay.')
  }

  get behaviors(){
    return [IronOverlayBehavior]
  }

}
customElements.define('unifide-window', UnifideWindow);
