const api = {
    key: "de71d7996a6784cb1152ad833759b608",
    baseUrl: "https://api.openweathermap.org/data/2.5/" 
}
function clickOnSearch() {
    const cityName = document.getElementById('text-box').value; 
fetch(`${api.baseUrl}weather?q=${cityName}&units=metric&APPID=${api.key}`)
.then(res => res.json())
.then(data =>{
    console.log(data);
    document.getElementById('image').setAttribute('src', `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`);
    document.getElementById('location').innerText = data.name;
    document.getElementById('temperature').innerText = Math.round(data.main.temp);
   const weather = document.getElementById('weather').innerText = data.weather[0].main;
   if(weather == Rain){
    document.querySelector('body').style.background = 'images/images';
   }
    
})
}
