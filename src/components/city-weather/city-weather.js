class CityWeather extends Polymer.Element {
    static get is(){
        return 'city-weather';
    }
    static get properties() {
        return {
            city: {
                type: String,
                value: ''
            }
        };
    }
    constructor(){
        super();
    }
}
customElements.define(CityWeather.is, CityWeather);