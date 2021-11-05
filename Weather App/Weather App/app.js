

 const weather_app = {
  
 getSearchBar: () => {
    document.querySelector('.search').addEventListener('click', weather_app.fetchWeather );
  },
   position: (event) => {
    window.onload = () => {
       const searchFieldElement = document.querySelector(".searchBar")
   
      searchFieldElement.onkeyup = (event) =>{
        getapi(searchFieldElement.value);
      }
   
   
    }
   }, 
 fetchWeather: () => {
    //  let lat = document.querySelector('.lat').value
    //  let lon = document.querySelector('.long').value
    let city_value = document.querySelector('.long').value
     let key = '2f144ea17440ffa4f2e637a7a353e424'
    let  link = `http://api.openweathermap.org/data/2.5/weather?q=${city_value}&units=imperial&appid=${key}`;
   

    fetch(link)
    .then((response)=> {
      // if(!response.ok) throw new Error(response.statusText);
      return response.json()})
    .then((data) => {
      weather_app.showWeather(data);
    })
    // .catch(window.alert(error))
 
  },
 
   showWeather: (data) => {
    console.log(data)
    let display = document.querySelector('.row');
    let time =new Date(data.dt * 1000);
    let city = data.name;
    let icon = data.weather[0].icon;
    let current_temp = data.main.temp;
    let feel_temp = data.main.feels_like;
    let min_temp = data.main.temp_min;
    let max_temp = data.main.temp_max;
    let description = data.weather[0].description;
    let wind_speed = data.wind.speed;
    let humid = data.main.humidity;
    let lat = data.coord.lat;
    let lon = data.coord.lon;
    let wind_direction = data.wind.deg;
   let cloudiness = data.clouds.all;
   let country = data.sys.country;
   let sunrise = new Date(data.sys.sunrise * 1000)
   let new_sunrise = sunrise.toLocaleString('en-GB', { hour:'numeric', minute:'numeric', hour12:true } );
   let sunset = new Date(data.sys.sunset * 1000)
   let new_sunset = sunset.toLocaleString('en-GB', { hour:'numeric', minute:'numeric', hour12:true } );
  
  
 
    const myLatnLon= {lat:lat, lng:lon};
    let html = `
    <div class="col">
    <div class = "title">
        <div class ="location">
    <p class="current-time">${time}</p>
    <p id="location">${city},${country}</p>
</div>

    <div class = "img_container">
    <img src="http://openweathermap.org/img/wn/${icon}@4x.png" alt="icon" class="icon">
    <div class = "temp_cont">
    <p class = "temp">${Math.round(current_temp)} &#8457</p>
    </div>
    </div>
    </div>
    <div class="description_container">
        <!-- description, feels like and windspeed -->
        <p> Today feels like ${Math.round(feel_temp)}&#8457 outside with ${description} </p>
    </div>
   
    <ul>
    <li class="min_temp ">Minimum Temperature:${Math.round(min_temp)}&#8457</li>


    <li class="max_temp">Maximum Temperature:${Math.round(max_temp)}&#8457<li>

    <li class="wind_dir">Wind Direction:${wind_direction}&#176;</li> 

    <li class="wind_spd">Wind Speed: ${Math.round(wind_speed)} mph</li> 

    <li class="humid">Humidity: ${Math.round(humid)}%</li>

    <li class="cloudy">Cloudiness: ${Math.round(cloudiness)}%</li>  

    <li class="sunrise">Sunrise:${new_sunrise}</li>

    <li class="sunset">Sunset:${new_sunset}</li>
  </ul>
    <div id="windy"></div>

</div>

     `
     display.innerHTML = html;
    
   


     const options = {
      // Required: API key
      key: 'B0hBFdgPfnNvtAmcaD8xClzoZIwgTEsQ', // REPLACE WITH YOUR KEY !!!
  
      // Put additional console output
  
      // Optional: Initial state of the map
      lat: lat,
      lon: lon,
      numDirection: true,
      className: 'popup'
     }
  
  // Initialize Windy API
  windyInit(options, windyAPI => {
    
  
  
      const { map } = windyAPI;
      // .map is instance of Leaflet map
    
      L.popup()
          .setLatLng([lat, lon])
          .setContent(`${Math.round(current_temp)} &#8457 ${city}`)
          .openOn(map)
        
  });
    
  
   },
  
 
  
 
};







  weather_app.getSearchBar();
