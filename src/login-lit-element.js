import { LitElement, html, css } from 'lit';
import { LoginLit } from './login-lit.js';

class LoginLitElement extends LitElement {
  static properties = {
    sucess: { type: Boolean },
  }

  static get styles() {
    return css`
      login-lit {
        display: flex;
        justify-content: center;
        align-items: center;
      }
    `;
  }

  constructor() {
    super();
  }

  render() {
    return html`
      <main>
        ${ this.sucess ? html`<h1>Welcome</h1>` : html` <login-lit @sign=${this._hiddenLogin}></login-lit>`}
      </main>
    `;
  }

  _hiddenLogin() {
    console.log('se dispara el ocultar');
    this.sucess = !this.sucess;
  }
}

customElements.define('login-lit-element', LoginLitElement);