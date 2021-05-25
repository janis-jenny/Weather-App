class Render {
  constructor(data) {
    this.data = data;
    this.content = document.getElementById('content');
  }

  renderTemp() {
    this.content.innerHTML = '';
    const h1 = document.createElement('h1');
    h1.className = 'city-name';
    const p = document.createElement('p');
    h1.innerHTML = this.data.city;
    p.innerHTML = `Temp: ${this.data.temperature}`;
    p.id = 'temp';
    p.className = 'temp-container';
    this.content.append(h1);
    this.content.append(p);
  }

  static tempF(temp) {
    return `${Math.round((Number(temp) * (9 / 5)) + 32)} °`;
  }

  static tempC(temp) {
    return `${Math.round((Number(temp) - 32) * (5 / 9))} °`;
  }

  static callTemps(formula) {
    const temp = document.getElementById('temp');
    const mainTemp = temp.innerHTML.split(' ')[1];
    temp.innerHTML = `Temp: ${formula(mainTemp)}`;
    return temp;
  }

  static convertToF() {
    return Render.callTemps(Render.tempF);
  }

  static convertToC() {
    return Render.callTemps(Render.tempC);
  }

  static checkDegrees() {
    if (this.innerHTML === 'C') {
      Render.convertToF();
      this.innerHTML = 'F';
    } else {
      Render.convertToC();
      this.innerHTML = 'C';
    }
  }

  renderDegrees() {
    const container = document.getElementById('type');
    container.classList.add('d-flex');
    const button = document.createElement('button');
    button.id = 'degrees';
    button.classList.add('degrees');
    button.innerHTML = this.data.type;
    button.addEventListener('click', Render.checkDegrees);
    container.innerHTML = '';
    container.append(button);
  }

  renderHumidity() {
    const p = document.createElement('p');
    p.innerHTML = `Humidity: ${this.data.humidity}`;
    p.className = 'temp-container';
    this.content.append(p);
  }

  renderClimate() {
    const p = document.createElement('p');
    p.innerHTML = `Climate: ${this.data.climate}`;
    p.className = 'temp-container';
    this.content.append(p);
  }

  renderWind() {
    const p = document.createElement('p');
    p.innerHTML = `WindSpeed: ${this.data.windSpeed}`;
    p.className = 'temp-container';
    this.content.append(p);
  }

  renderCountry() {
    const p = document.createElement('p');
    p.innerHTML = `Country: ${this.data.country}`;
    p.className = 'temp-container';
    this.content.append(p);
  }
}
export default Render;
