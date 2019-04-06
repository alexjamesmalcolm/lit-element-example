import { LitElement, html } from "lit-element";

class MyApp extends LitElement {

    static get properties() {
        return {
            username: { type: String },
            messages: { type: Array }
        }
    }

    constructor() {
        super();
        this.username = "Alex Malcolm";
        this.messages = [
            "(Urgent) Please respond",
            "Doctors hate him, see why"
        ]
    }

    render() {
        return html`
            <header>
                <p>Hello ${this.username}</p>
            </header>
            <main>
                <p>Here are your messages</p>
                <ul>
                    ${this.messages.map(message => html`<li>${message}</li>`)}
                </ul>
            </main>
            <footer></footer>
        `;
    }
}

customElements.define("my-app", MyApp);