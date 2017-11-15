class WeatherApp extends Polymer.Element {
    static get is() {
        return "weather-app";
    }
    static get properties() {
        return {
            cityName: {
                type: String,
                value: '',
                reflectToAttribute: true
            },
            cityWeatherHidden: {
                type: Boolean,
                value: true
            }
        };
    }
    constructor() {
        super();
    }
    ready() {
        super.ready();
        this.addEventListener('evt-searchWeatherInfo', function(e){
            this.handleSearch(e);
        });
    }
    handleSearch(searchData) {
        if(searchData.detail) {
            if(searchData.detail.cityName) {
                this.set('cityName', searchData.detail.cityName);
                this.set('cityWeatherHidden', false);
            } else {
                this.set('cityWeatherHidden', true);
            }
        } else {
            this.set('cityWeatherHidden', true);
        }

    }
}
customElements.define(WeatherApp.is, WeatherApp);