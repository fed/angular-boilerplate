export default class CityService {
  constructor() {
    this.city = 'Sydney, NSW, Australia';
  }

  set(newCity) {
    this.city = newCity;
  }

  get() {
    return this.city;
  }
}
