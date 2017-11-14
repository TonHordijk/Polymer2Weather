class LocationInputs extends Polymer.Element {
    static get is() {
        return 'location-inputs';
    }
    static get properties() {
        return {
            cityName: {
                type: String,
                value: 'test'
            }
        };
    }
    constructor() {
        super();
    }
    searchClicked() {
        this.dispatchEvent(new CustomEvent('evt-searchCityWeather', {
            detail: {
                cityName: this.get('cityName')
            },
            composed: true,
            bubbles: true
        }));
    }
}
customElements.define(LocationInputs.is, LocationInputs);