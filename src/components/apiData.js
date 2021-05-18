/* eslint-disable linebreak-style */
import API_KEY from './api';
import Error404 from '../images/Error404.png';

class ApiData {
  constructor(city) {
    this.apiKey = API_KEY;
    this.city = city;
  }

  static convertKtoC(temp) {
    return {
      temp: `${Math.floor(temp - 273.15)} °`,
      type: 'C',
    };
  }

  convertDataToObj(data) {
    return {
      type: ApiData.convertKtoC(data.main.temp).type,
      city: this.city,
      country: data.sys.country,
      temperature: ApiData.convertKtoC(data.main.temp).temp,
      humidity: data.main.humidity,
      condition: data.weather[0].description,
      icon: data.weather[0].icon,
      windSpeed: data.wind.speed,
    };
  }

  static showImgError() {
    const img = document.createElement('img');
    img.src = Error404;
    document.body.append(img);
  }

  async getApiData() {
    try {
      const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${this.apiKey}`, {
        mode: 'cors',
      });
      const data = await res.json();
      return this.convertDataToObj(data);
    } catch (e) {
      return setTimeout(ApiData.showImgError, 200);
    }
  }
}
export default ApiData;