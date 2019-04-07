import { LitElement, html, css } from 'lit-element';

class MyHeader extends LitElement {

    static get properties() {
        return {
            username: { type: String },
            loggedOn: { type: Boolean }
        };
    }

    static get styles() {
        return css`
            * {
                font-family: sans-serif;
            }

            header {
                background-color: #414e58;
                display: flex;
                justify-content: center;
            }

            p {
                color: white;
            }
        `;
    }

    render() {
        return html`
        <header>
            <p>Hello, ${this.username}</p>
            <button @click=${this.signOut}>Sign out</button>
        </header>`;
    }

    signOut() {
        const event = new CustomEvent("sign-out");
        this.dispatchEvent(event);
    }
}
customElements.define('my-header', MyHeader);