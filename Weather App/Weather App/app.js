

 

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


    let html = `
     <div class="col">
     <h4 class="current-time">${time}</h4>
     <br>
     <h1 id="location">${city}</h1>
     <img src="http://openweathermap.org/img/wn/${icon}.png" alt="" class="icon">
     <div class="temp-container">
        <p class="min-temp">Minimum Temperature:${min_temp}</p>
         <p class="curren-temp">Current Temperature:${current_temp}</p>
         <p class="max-temp">Maximum Temperature:${max_temp} </p>
     </div>
     <div class="description-container">
         <!-- description, feels like and windspeed -->
         <p>Today feels like ${feel_temp} outside with ${description} and wind speeds of ${wind_speed} and a humidity of ${humid}</p>

       
     </div>
 </div>
     `
     display.innerHTML = html;
  }
   


};

  weather_app.getSearchBar();
