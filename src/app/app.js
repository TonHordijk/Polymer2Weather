class WeatherApp extends Polymer.Element {
    static get is() {
        return "weather-app";
    }
    constructor() {
        super();
    }
}
customElements.define(WeatherApp.is, WeatherApp);