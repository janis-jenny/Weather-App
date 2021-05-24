// eslint disable-linebreak-style
// eslint disable-max-len
import background from '../images/background.jpg'
import clouds from '../images/clouds.jpg'

const renderBackground = (data) => {
  console.log(data.weather.toLowerCase());
  const weather = data.weather.toLowerCase();
  document.body.style.backgroundImage = background;
  if (weather === 'rain' || weather === 'light rain' || weather === 'shower rain') {
    document.body.style.backgroundImage = clouds;
    
  } else if (weather === 'scattered clouds' || weather === 'broken clouds' || weather === 'clouds') {
    console.log('AQUI!')
    document.body.style.backgroundImage = 'url(clouds.gif)';
  } else if (weather === 'few clouds') {
    document.body.style.backgroundImage = 'url(few-clouds.gif)';
  } else if (weather === 'clear sky' || weather === 'clear') {
    document.body.style.backgroundImage = 'url(sky.gif)';
  } else if (weather === 'thunderstorm') {
    document.body.style.backgroundImage = 'url(thunder.gif)';
  } else if (weather === 'snow') {
    document.body.style.backgroundImage = 'url(snow.gif)';
  } else if (weather === 'mist') {
    document.body.style.backgroundImage = 'url(mist.gif)';
  } else {
    document.body.style.backgroundImage = "url('../images/background.jpg')";
  }
}

export default renderBackground