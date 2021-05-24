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
    const button = document.createElement('button');
    button.id = 'degrees';
    button.className = 'degrees';
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
  /* renderBackground() {
    const weather = this.data.weather[0].main.toLowerCase();
    const imgs = document.getElementById('body');
    imgs.style.backgroundImage = "url('../images/background.jpg')";
    if (weather === 'rain' || weather === 'light rain' || weather === 'shower rain') {
      imgs.style.backgroundImage = "url(rain.gif)";
    } else if (weather === 'scattered clouds' || weather === 'broken clouds' || weather === 'clouds') {
      imgs.style.backgroundImage = 'url(cloud.gif)';
    } else if (weather === 'few clouds') {
      imgs.style.backgroundImage = 'url(few-clouds.gif)';
    } else if (weather === 'clear sky' || weather === 'clear') {
      imgs.style.backgroundImage = 'url(sky.gif)';
    } else if (weather === 'thunderstorm') {
      imgs.style.backgroundImage = 'url(thunder.gif)';
    } else if (weather === 'snow') {
      imgs.style.backgroundImage = 'url(snow.gif)';
    } else if (weather === 'mist') {
      imgs.style.backgroundImage = 'url(mist.gif)';
    } else {
      imgs.style.backgroundImage = "url('../images/background.jpg')";
    }
  } */
}
export default Render;
