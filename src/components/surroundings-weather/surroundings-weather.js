class SurroundingsWeather extends Polymer.Element {
    static get is() {
        return 'surroundings-weather';
    }
    static get properties() {
        return {
            weatherData: {
                type: Object,
                value: {}
            },
            urlParams: {
                type: Object,
                value: {
                    appid: 'e6d58a6c77231ac95d1d145c6d7d2c36',
                    units: 'metric',
                    cnt: '10'
                }
            },
            lat: {
                type: String,
                observer: 'latlongChanged'
            },
            long: {
                type: String,
                observer: 'latlongChanged'
            },
            serviceCallPending: {
                type: Boolean,
                value: false
            }
        };
    }
    constructor() {
        super();
    }
    latlongChanged() {
        if(!this.get('serviceCallPending') && this.get('lat') && this.get('long')){
            this.set('serviceCallPending', true);
            this.set('urlParams.lat', this.get('lat'));
            this.set('urlParams.lon', this.get('long'));
            this.$.getSurroundingsWeatherData.generateRequest();
        }
    }
    handleResponse() {
        console.log(this.get('weatherData'));
        this.set('serviceCallPending', false);
    }
}

customElements.define(SurroundingsWeather.is, SurroundingsWeather);