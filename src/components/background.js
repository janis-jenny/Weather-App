// eslint disable-linebreak-style
// eslint disable-max-len
import background from '../images/background.jpg'
import clouds from '../images/clouds.gif'
import clear from '../images/clear_sky.gif'
import rain from '../images/rain.gif'
import thunder from '../images/thunder.gif'
import snow from '../images/snow.gif'
import mist from '../images/mist.gif'

const renderBackground = (data) => {
  console.log(data.weather.toLowerCase());
  const weather = data.weather.toLowerCase();
  document.body.style.backgroundImage = background;
  if (weather === 'rain' || weather === 'light rain' || weather === 'shower rain') {
    document.body.style.backgroundImage = 'url(rain.gif)'; 
  } else if (weather === 'scattered clouds' || weather === 'broken clouds' || weather === 'clouds' || weather === 'few clouds') {
    console.log('AQUI!')
    document.body.style.backgroundImage = 'url(clouds.gif)';
  } else if (weather === 'clear sky' || weather === 'clear') {
    document.body.style.backgroundImage = 'url(clear_sky.gif)';
  } else if (weather === 'thunderstorm') {
    document.body.style.backgroundImage = 'url(thunder.gif)';
  } else if (weather === 'snow') {
    document.body.style.backgroundImage = 'url(snow.gif)';
  } else if (weather === 'mist') {
    document.body.style.backgroundImage = 'url(mist.gif)';
  } else {
    document.body.style.backgroundImage = background;
  }
}

export default renderBackground