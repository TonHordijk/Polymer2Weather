class CityWeather extends Polymer.Element {
    static get is(){
        return 'city-weather';
    }
    static get properties() {
        return {
            city: {
                type: String,
                observer: 'cityChanged'
            },
            urlParams: {
                type: Object,
                value: {
                    appid: 'e6d58a6c77231ac95d1d145c6d7d2c36',
                    units: 'metric'
                }
            },
            weatherData: Object
        };
    }
    constructor(){
        super();
    }
    cityChanged() {
        if(this.get('city')) {
            this.set('urlParams.q', this.get('city'));
            this.$.getCityWeatherData.generateRequest();
        }
    }
    handleResponse() {
        this.set('weatherData.main.temp', Math.round(this.get('weatherData.main.temp')));
    }
}
customElements.define(CityWeather.is, CityWeather);