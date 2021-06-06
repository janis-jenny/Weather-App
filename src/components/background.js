import background from '../images/background.jpg';
import clouds from '../images/clouds.gif';
import clear from '../images/clear_sky.gif';
import rain from '../images/rain.gif';
import thunder from '../images/thunder.gif';
import snow from '../images/snow.gif';
import mist from '../images/mist.gif';

const renderBackground = (data) => {
  const weather = data.weather.toLowerCase();
  document.body.style.backgroundImage = `url(${background})`;
  if (weather === 'rain' || weather === 'light rain' || weather === 'shower rain'|| weather === 'drizzle') {
    document.body.style.backgroundImage = `url(${rain})`;
  } else if (weather === 'scattered clouds' || weather === 'broken clouds' || weather === 'clouds' || weather === 'few clouds') {
    document.body.style.backgroundImage = `url(${clouds})`;
  } else if (weather === 'clear sky' || weather === 'clear') {
    document.body.style.backgroundImage = `url(${clear})`;
  } else if (weather === 'thunderstorm') {
    document.body.style.backgroundImage = `url(${thunder})`;
  } else if (weather === 'snow') {
    document.body.style.backgroundImage = `url(${snow})`;
  } else if (weather === 'mist') {
    document.body.style.backgroundImage = `url(${mist})`;
  } else {
    document.body.style.backgroundImage = `url(${background})`;
  }
};

export default renderBackground;