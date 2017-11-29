class LocationInputs extends Polymer.Element {
    static get is() {
        return 'location-inputs';
    }
    static get properties() {
        return {
            cityName: {
                type: String,
                notify: true
            },
            latVal: {
                type: String,
                notify: true
            },
            longVal: {
                type: String,
                notify: true
            },
            cityNameChecked: {
                type: Boolean,
                value: true,
                observer: 'cityNameRadioChanged'
            },
            degreeChecked: {
                type: Boolean,
                value: false,
                observer: 'degreeRadioChanged'
            },
            token: {
                type: String,
                value: '',
                observer: 'tokenChanged'
            },
            tokenFilled: {
                type: Boolean,
                value: false
            }
        };
    }
    constructor() {
        super();
    }
    searchClicked() {
        this.dispatchEvent(new CustomEvent('evt-searchWeatherInfo', {
            detail: {
                type: this.get('cityNameChecked') ? 'cityName' : 'degree',
                cityName: this.get('cityName'),
                lat: this.get('latVal'),
                long: this.get('longVal')
            },
            composed: true,
            bubbles: true
        }));
    }
    degreeRadioChanged(newVal) {
        if(newVal) {
            this.set('cityNameChecked', false);
            this.set('cityName', '');
            this.dispatchEvent(new CustomEvent('evt-resetValues', {
                composed: true,
                bubbles: true
            }));
        }
    }
    cityNameRadioChanged(newVal) {
        if(newVal) {
            this.set('degreeChecked', false);
            this.set('latVal', '');
            this.set('longVal', '');
            this.dispatchEvent(new CustomEvent('evt-resetValues', {
                composed: true,
                bubbles: true
            }));
        }
    }
    tokenChanged(newVal) {
        if(newVal !== ''){
            this.set('tokenFilled', true);
        } else {
            this.set('tokenFilled', false);
        }
    }
}
customElements.define(LocationInputs.is, LocationInputs);