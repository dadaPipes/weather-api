const api_key = '514b2ed6f2404feabc5125947231412';

const form = document.querySelector('.weather-form');
form.addEventListener('submit', (event) => {
 event.preventDefault();
 const query = document.querySelector('#location').value;
 currentWeather(query);
});

async function currentWeather(query) {
 try {
   const request     = 'http://api.weatherapi.com/v1/current.json?key=' + api_key + '&q=' + query;
   const response    = await fetch(request, {mode: 'cors'});
   const weatherData = await response.json();
   console.log(weatherData);

   displayWeather(weatherData);
 } catch (error) {
   console.error(error);
 }
}

function displayWeather(weatherData) {
  const heading     = document.querySelector('.weather-card__location');
  const condition   = document.querySelector('.weather-card__condition-text');
  const weatherIcon = document.querySelector('.weather-card__condition-icon');
  console.log('icon element: ', weatherIcon);
  const temp        = document.querySelector('.weather-card__temp');

  heading.textContent   = weatherData.location.name;
  condition.textContent = weatherData.current.condition.text;
  weatherIcon.src       = weatherData.current.condition.icon;
  temp.textContent      = weatherData.current.temp_c;
}