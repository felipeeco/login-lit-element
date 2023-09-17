import { LitElement, html, css } from 'lit';

export class LoginLit extends LitElement {
    static is() {
        return 'login-lit'
    }

    static get styles() {
        return css`
            .container {
                border: solid 3px #11ce76;
                border-radius: 10px;
                width: 350px;
                height: 400px;
                text-align: center;
                margin-top: 5%                 
            }

            input {
                width: 90%;
                height: 30px;
                margin-top: 5vh;
                border: 1px solid #414141;
                border-top: 0px;
                border-radius: 5px;
            }

            button {
                width: 60%;
                height: 40px;
                background-color: #11ce76;
                color: #414141;
                border: none;
                border-radius: 6px;
                margin-top: 5vh;
            }

            button:hover {
                background-color: #0da35d;
                cursor: pointer;
            }
        `
    }
    
    render() {
        return html`
            <div class='container'>
                <h1>Login</h1>
                <input id='email' type='email' placeholder='write your email' />
                <input id='password' type='password' placeholder='write your password' />

                <button @click=${this._login}>Sign in</button>
            </div>
        `;
    }

    _login() {
        const email = this.shadowRoot.querySelector('#email').value;
        const password = this.shadowRoot.querySelector('#password').value;

        if(!!email && !!password){
            this.dispatchEvent(new CustomEvent('sign', {
                 detail: { login: true },
                 bubbles: true,
                 composed: true
            }));
        }
    }
}

customElements.define(LoginLit.is(), LoginLit)
