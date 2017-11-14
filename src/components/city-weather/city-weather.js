class CityWeather extends Polymer.Element {
    static get is(){
        return 'city-weather';
    }
    static get properties() {
        return {
            cityName: {
                type: String,
                value: ''
            }
        };
    }
    constructor(){
        super();
    }
    ready() {
        super.ready();
        this.addEventListener('evt-searchCityWeather', function(e){
            this.handleSearch(e);
        });
    }
    handleSearch(searchData) {
        this.set('cityName', searchData.detail.cityName);
    }
}
customElements.define(CityWeather.is, CityWeather);