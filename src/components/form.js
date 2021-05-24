import ApiData from './apiData';
import Render from './render';

class Form {
  constructor() {
    this.container = document.getElementById('container');
  }

  static renderData(value) {
    const render = new Render(value);

    render.renderDegrees();
    render.renderTemp();
    render.renderHumidity();
    render.renderClimate();
    render.renderWind();
    render.renderCountry();
    // render.renderBackground();
  }

  static weather(city) {
    const wheather = new ApiData(city.value);
    wheather.getApiData().then((value) => { Form.renderData(value); });
  }

  createForm() {
    const form = document.createElement('form');
    const input = document.createElement('input');
    const button = document.createElement('button');
    this.container.className = 'form-container';
    form.action = '/home';
    form.id = 'from-city';
    input.type = 'text';
    input.name = 'city';
    input.placeholder = 'Type a city';
    button.innerHTML = 'Submit';
    button.type = 'submit';
    form.append(input);
    form.append(button);
    this.container.append(form);
    return form;
  }

  submitForm() {
    const form = document.getElementById('from-city');
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const cityInput = form.elements.city;
      Form.weather(cityInput);
      cityInput.value = '';
    });
  }
}

export default Form;