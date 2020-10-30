const submit=document.querySelector(".button");
const searchname=document.querySelector(".searchname");
const answer=document.querySelector(".ans");
const celsius=document.querySelector(".cel");
const weathermood= document.querySelector(".mood");
const apikey='api_key_goes_here';

async function  clickme(e)
{
    e.preventDefault();
  
    try{

        let url =`http://api.openweathermap.org/data/2.5/weather?q=${searchname.value}&APPID=${apikey}`;
        const response = await fetch(url);
         const data =await response.json();
        const finale=data.main.temp-273.15;
       answer.value=finale;
        celsius.style.opacity="1";
        const tempStatus= data.weather[0].main;

        if (tempStatus == "Sunny") {
            weathermood.innerHTML =
              "<i class='fas  fa-sun' style='color:yellow;font-size:100px;'></i>";
          } else if (tempStatus == "Clouds") {
            weathermood.innerHTML =
              "<i class='fas  fa-cloud' style='color:#add8e6;font-size:100px;></i>";
          } else if (tempStatus == "Rainy") {
            weathermood.innerHTML =
              "<i class='fas  fa-cloud-rain' style='color:#232323;font-size:100px;'></i>";
          } else {
            weathermood.innerHTML =
              "<i class='fas  fa-cloud' style='color:yellow;font-size:100px;'></i>";
          }
    }
   catch{
      answer.innerText="ENTER VALID CITY";

    
   } 
}

submit.addEventListener("click" ,clickme);

