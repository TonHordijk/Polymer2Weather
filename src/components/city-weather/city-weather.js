class CityWeather extends Polymer.Element {
    static get is(){
        return 'city-weather';
    }
    constructor(){
        super();
    }
}
customElements.define(CityWeather.is, CityWeather);