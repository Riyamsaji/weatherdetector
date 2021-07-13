







function displayDetails(city) {
  let city_name = city.name;
  let humidity = city.main.humidity;
  let iconid = city.weather[0].icon;
  let country = city.sys.country;
  let timezone = city.timezone;
  let temp = city.main.temp;
  let temp_min = city.main.temp_min;
  let temp_max = city.main.temp_max;
  let weather_des = city.weather[0].description;
  let Pressure = city.main.pressure;
  let sealevel = city.main.sea_level;
  let latitude = city.coord.lat;
  let longitude = city.coord.lon;
  console.log(country);
  let html_data =
    `
    <div class="card-group ">
    <div class="card"style="border:none ;background-color:white;color:#011f4b">
    <img src="./icons/${iconid}.png" alt="">
      <div class="card-body" style="font-family: 'Anton', sans-serif;
      font-family: 'STIX Two Math', serif;">
    <p class="card-text text-center " style="font-size:50px"><b>${temp}°C </b></p>
      </div>
    </div>
    <div class="card"style="border:none;background-color:white;color:#011f4b">
     <div class="card-body">
     <p class="card-text text-center" style="font-size:50px"><b>${city_name} </b></p>
         <p class="card-text text-center" style="font-size:50px"><b>${country} </b></p>
       
      </div>
    </div>
    <div class="card" style="border:none;background-color:white;color:#011f4b;">
   <div class="card-body text-center" style="font-family: 'STIX Two Math', serif;">
   <p class="card-text text-center"style="font-size:30px;">Temp-min:${temp_min}</p>
   <p class="card-text text-center"style="font-size:30px">Temp-min:${temp_max}</p>
      
      </div>
    </div>
  
  <div class="card" style="border:none;background-color:white;color:#011f4b">
  <div class="card-body text-center" style="font-family: 'STIX Two Math', serif;">
  <p class="card-text text-center"style="font-size:40px;"><b>Humidity:${humidity}</b></p>
  <p class="card-text text-center"style="font-size:40px;"><b>Pressure:${Pressure}</b></p>
     
     </div>
   </div>
 
    </div>
    <div class="card-group" >
    <div class="card "style="border:none ;background-color:white;color:#011f4b;">
    <div class="card-body" style="font-family: 'STIX Two Math', serif;">
      <p class="card-text text-center" style="font-size:50px; text-transform:uppercase">${weather_des} </b></p>
      </div>
    </div>
    <div class="card"style="border:none;background-color:white;color:#011f4b;">
     <div class="card-body-text-center">
     <p class="card-text text-center" style="font-size:30px; ">lattitude:<b>${latitude} </b></p>
     <p class="card-text text-center " style="font-size:30px;">longitude:<b>${longitude} </b></p>
     </div>
       
      </div>
      <div class="card"style="border:none;background-color:white;color:#011f4b">
     <div class="card-body-text-center"style="font-size:30px;font-family: 'Anton', sans-serif;
     font-family: 'Bree Serif', serif;
     font-family: 'Concert One', cursive;
     font-family: 'STIX Two Math', serif; ">
     <p class="card-text text-center" ><b>sealevel:${sealevel}</b></p>
     
     </div>
       
      </div>
    </div>`
  result.innerHTML = html_data

} 


function resetButton(){
  city.value=" "
  result.innerHTML=" "
}





function fetchData() {
  let city_name = city.value;
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=93c046e9370077994082d7249567b1db&units=metric`
  fetch(url).then(res => res.json()).then(data => displayDetails(data));
}
