

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
     let lat = document.querySelector('.lat').value
     let lon = document.querySelector('.long').value
     let key = '2f144ea17440ffa4f2e637a7a353e424'
    let  link = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${key}`;
   

    fetch(link)
    .then((response)=> {
      if(!response.ok) throw new Error(response.statusText);
      return response.json()})
    .then((data) => {
      weather_app.showWeather(data);
    })
    .catch(console.error)
 
  },
   showWeather: (data) => {
    console.log(data)
    let display = document.querySelector('.row');
    let time = data.dt;
    let city = data.name;
    let icon = data.weather[0].icon;
    let current_temp = data.main.temp;


    let html = `
     <div class="col">
     <h4 class="current-time">${time}</h4>
     <h1 id="location">${city}</h1>
     <img src="http://openweathermap.org/img/wn/${icon}.png" alt="" class="icon">
     <div class="temp-container">
         <p class="curren-temp">Current Temperature:${current_temp}</p>
         <p class="min-temp">Minimum Temperature:${city}</p>
         <p class="max-temp">Maximum Temperature:${city} </p>
     </div>
     <div class="description-container">
         <!-- description, feels like and windspeed -->
         <p>${city}</p>

       
     </div>
 </div>
     `
     display.innerHTML = html;
  }
   


};

  weather_app.getSearchBar();

