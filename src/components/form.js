import ApiData from './apiData';
import * from './render';
import './styles/form.scss';

class Form {
  constructor() {
    this.container = document.getElementById('container');
  }

  static renderData(value) {
    renderDegrees(value);
    renderTemp(value);
    renderHumidity(value);
    renderClimate(value);
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