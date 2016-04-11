import {ROOT_URL, API_KEY} from '../utils/constants';

export default class WeatherService {
  constructor($resource) {
    const url = `${ROOT_URL}/forecast/daily?APPID=${API_KEY}`;

    this.dailyForecastAPI = $resource(url, { callback: 'JSON_CALLBACK' }, { get: { method: 'JSONP' }});
  }

  getWeather(city, days) {
    return this.dailyForecastAPI.get({ q: city, cnt: days });
  }
}

WeatherService.$inject = ['$resource'];
