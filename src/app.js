import { LitElement, html } from "lit-element";

class MyApp extends LitElement {

    constructor() {
        super();
    }

    render() {
        return html`
            <p>Hello World!</p>
        `;
    }
}

customElements.define("my-app", MyApp);