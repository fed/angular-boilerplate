module.exports = function ($resource) {
  this.getWeather = function (city, days) {
    var weatherAPI = $resource('http://api.openweathermap.org/data/2.5/forecast/daily?APPID=ae112c6acf5b9fb83ca3d20895541979', { callback: 'JSON_CALLBACK' }, { get: { method: 'JSONP' }});

    return weatherAPI.get({ q: city, cnt: days });
  };
};
