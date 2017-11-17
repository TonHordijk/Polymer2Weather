class WeatherApp extends Polymer.Element {
    static get is() {
        return "weather-app";
    }
    static get properties() {
        return {
            cityName: {
                type: String,
                reflectToAttribute: true
            },
            latVal: {
                type: String,
                reflectToAttribute: true
            },
            longVal: {
                type: String,
                reflectToAttribute: true
            },
            cityWeatherHidden: {
                type: Boolean,
                value: true,
                notify: true
            },
            surroundingsWeatherHidden: {
                type: Boolean,
                value: true,
                notify: true
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
        this.addEventListener('evt-resetValues', function(e){
            this.resetValues(e);
        });
    }
    handleSearch(searchData) {
        if(searchData.detail) {
            if(searchData.detail.type === 'cityName' && searchData.detail.cityName) {
                this.set('cityName', searchData.detail.cityName);
                this.set('surroundingsWeatherHidden', true);
                this.set('cityWeatherHidden', false);
            } else if(searchData.detail.type === 'degree' && searchData.detail.lat && searchData.detail.long) {
                this.set('latVal', searchData.detail.lat);
                this.set('longVal', searchData.detail.long);
                this.set('cityWeatherHidden', true);
                this.set('surroundingsWeatherHidden', false);
            }
        } else {
            this.set('cityWeatherHidden', true);
            this.set('surroundingsWeatherHidden', true);
        }
    }
    resetValues() {
        this.set('cityName', '');
        this.set('latVal', '');
        this.set('longVal', '');
        this.set('cityWeatherHidden', true);
        this.set('surroundingsWeatherHidden', true);
    }
}
customElements.define(WeatherApp.is, WeatherApp);