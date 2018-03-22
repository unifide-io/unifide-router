import {Element} from '@polymer/polymer/polymer-element.js';
import * as view from './landing-social.template.html';
import '../unifide-icons/unifide-icons.js'


export class LandingSocial extends Element {
    constructor() {
        super();
    }

    static get properties() {
        return {
          socialLinks: {
            type:Array,
            notify: true,
            reflectToAttribute: true,
            observer: '_splitSocialLinks'

          },
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
          },
          test: {
            type: String,
            data: 'test'
          }

        };
    }

    static get template() {
        return view;
    }
    _splitSocialLinks(socialLinks){
      var links = this.socialLinks.links;
      var selector = '(http:\/\/)\w*.*';
      var i;
      for (i = 0; i < links.length; i++) {
          if (links[i].includes("facebook")){
            this.facebook = links[i]
          } else if (links[i].includes("twitter")){
            this.twitter = links[i]
          } else if (links[i].includes("instagram")){
            this.instagram = links[i]
          } else if (links[i].includes("youtube")){
            this.youtube = links[i]
          } else if (links[i].includes("github")){
            this.github = links[i]
          }
      }
    }

}
customElements.define('landing-social', LandingSocial);
