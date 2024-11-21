class AppFooter extends HTMLElement {
  static get observedAttributes() {
    return ['brand','copyright','year'];
  }

  get brand() {
    return this.getAttribute('brand') || 'Restaurant Nusantara';
  }

  get copyright() {
    return this.getAttribute('copyright') || '©';
  }

  get year() {
    return this.getAttribute('year') || new Date().getFullYear();
  }
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <footer>
          <p> ${this.brand} ${this.copyright} ${this.year} </p>
        </footer>
      `;
  }
}

customElements.define('App-footer', APPFooter);