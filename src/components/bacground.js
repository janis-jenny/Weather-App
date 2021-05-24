const renderBackground = (data) => {
    const weather = data.weather[0].main.toLowerCase();
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
  }