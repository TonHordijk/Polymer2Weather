class LocationInputs extends Polymer.Element {
    static get is() {
        return 'location-inputs';
    }
    static get properties() {
        return {
            cityName: {
                type: String,
                notify: true
            }
        };
    }
    constructor() {
        super();
    }
    searchClicked() {
        this.dispatchEvent(new CustomEvent('evt-searchWeatherInfo', {
            detail: {
                cityName: this.get('cityName')
            },
            composed: true,
            bubbles: true
        }));
    }
}
customElements.define(LocationInputs.is, LocationInputs);