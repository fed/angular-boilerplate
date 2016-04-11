export default class CityService {
  constructor() {
    this.city = 'Sydney, NSW, Australia';
  }

  setCity(newCity) {
    this.city = newCity;
  }

  getCity() {
    return this.city;
  }
}
