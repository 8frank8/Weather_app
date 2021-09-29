
var key = '2f144ea17440ffa4f2e637a7a353e424'
//query selectors
// let 


async function getapi(query){
  var link = `https://api.openweathermap.org/data/2.5/weather?q=${query}&units=imperial&appid=`;
    try{
         
         const response = await fetch(link + key);
         const data = await response.json();
        console.log(data)
        query = data.name
        document.getElementById('city').innerHTML = data.name
        
     }catch(err){
         console.log(err)
     }
    
 } 

 
 function SearchBar (){
    window.onload = () => {
       const searchFieldElement = document.querySelector(".searchBar")
   
      searchFieldElement.onkeyup = (event) =>{
        getapi(searchFieldElement.value);
      }
   
   
    }
   };

   getapi();

