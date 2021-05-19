const content = document.getElementById('content');

const renderTemp = (data) => {
  
  content.innerHTML = '';
  const h1 = document.createElement('h1');
  h1.className = 'city-name';
  const p = document.createElement('p');
  h1.innerHTML = data.city;
  p.innerHTML = `Temp: ${data.temperature}`;
  p.id = 'temp';
  p.className = 'temp-container';
  content.append(h1);
  content.append(p);
};

const tempF = (temp) => {
  return `${Math.round((Number(temp) * (9 / 5)) + 32)} °`;
}

const tempC = (temp) => {
  return `${Math.round((Number(temp) - 32) * (5 / 9))} °`;
}

const callTemps = (formula) => {
  const temp = document.getElementById('temp');
  const mainTemp = temp.innerHTML.split(' ')[1];
  temp.innerHTML = `Temp: ${formula(mainTemp)}`;
  return temp;
}

const convertToF = () => {
  return callTemps(tempF);
}

const convertToC = () => {
  return callTemps(tempC);
}

const checkDegrees = () => {
  if (this.innerHTML === 'C') {
    convertToF();
    innerHTML = 'F';
  } else {
    convertToC();
    innerHTML = 'C';
  }
}

const renderDegrees = (data) => {
  const container = document.getElementById('type');
  const button = document.createElement('button');
  button.id = 'degrees';
  button.className = 'degrees';
  button.innerHTML = data.type;
  button.addEventListener('click', checkDegrees);
  container.append(button);
}

const renderHumidity = (data) => {
  const p = document.createElement('p');
  p.innerHTML = `Humidity: ${data.humidity}`;
  p.className = 'temp-container';
  content.append(p);
}

const renderlCimate = (data) => {
  const p = document.createElement('p');
  const body = document.getElementsByTagName('body')[0];
  if (data.icon) {
    const iconLetter = (data.icon.split(''))[2];
    if (iconLetter === 'n') {
      body.className = 'bg-nigth';
    } else {
      body.className = 'bg-day';
    }
  }
  p.innerHTML = `Climate: ${data.climate}`;
  p.className = 'temp-container';
  const image = document.createElement('img');
  image.className = 'climate-image';
  image.src = `http://openweathermap.org/img/wn/${data.icon}@4x.png`;
  content.append(p);
  content.append(image);
}
