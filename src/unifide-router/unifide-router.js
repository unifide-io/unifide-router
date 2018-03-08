//Import Polymer
import {Element as PolymerElement} from "@polymer/polymer/polymer-element.js"
export const html = (strings, ...values) => strings[0]
+ values.map((v, i) => v + strings[i+1]).join('');
//Import HTML
import * as view from './unifide-router.template.html'

//Import Dependencies
//polymer app elements
import '@polymer/app-layout/app-layout.js'
//polymer iron elements
import '@polymer/iron-flex-layout/iron-flex-layout'
import '@polymer/iron-form/iron-form.js'
import '@polymer/iron-icons/iron-icons.js'
//polyer paper elements
import '@polymer/paper-card/paper-card.js'
import '@polymer/paper-checkbox/paper-checkbox.js'
import '@polymer/paper-input/paper-input.js'
import '@polymer/paper-icon-button/paper-icon-button.js'
//unifide elements
import '../landing-first/landing-first.js'
import '../landing-services/landing-services.js'
import '../landing-speech/landing-speech.js'
import '../landing-photos/landing-photos.js'
import '../landing-about/landing-about.js'
import '../landing-centerfold/landing-centerfold.js'
import '../landing-footer/landing-footer.js'


class UnifideRouter extends PolymerElement {

  static get properties() {
      return {
        appName: {
          type: String,
          value: 'Unifide'
        },
        socialLinks: {
          type:Array,
          notify: true,
          observer: '_getSocialLinks',

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
        isRecruit: {
          type: Boolean,
          notify: true,
          observer: '_isRecruiting',
          reflectToAttribute: true,
          value: false,
          value: false
        },
        recruitName: {
          type: String,
        },
        recruitEmail: {
          type: String,
        },
        agreedToEULA:{
          type: Boolean,
          value: false
        }


      }
  }
  constructor() {
    super();
    document.body.style.backgroundImage = 'url(\''+router.landingBackground+'\')';

  }

  static get template () {
    return view;

  }

  recruit(){
    this.isRecruit = !this.isRecruit;
  }

  _isRecruiting(){
    if(this.isRecruit == true){
      this.$.recruit.style.display = 'flex';
    } else {
      this.$.recruit.style.display = 'none';
    }

  }
  close(){
    this.isRecruit = false;

  }
  getRecruited(){
    this.$.recruitForm.submit();

  }
  postRecruitment(){

  }
  _getSocialLinks(){
    var docRef = db.collection("unifideRouter").doc("socialLinks");

    docRef.get().then(function(doc) {
        if (doc.exists) {
            console.log("Document data:", doc.data());
            this.socialLinks = doc.data();
            console.log(this.socialLinks);
        } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
        }
    }).catch(function(error) {
        console.log("Error getting document:", error);
    });
  }



}


customElements.define('unifide-router', UnifideRouter);
