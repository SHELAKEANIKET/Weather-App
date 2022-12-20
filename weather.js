const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '0de817533bmshd709e98c2aded39p18e5eejsnf17d79265607',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};


const getWeather = (city) => {
    city.innerHTML = city;

    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
        .then(response => response.json())
        .then((response) => {

            console.log(response)

            temp.innerHTML = response.temp

            humidity.innerHTML = response.humidity

            wind_speed.innerHTML = response.wind_speed



        })
        .catch(err => console.error(err));
}

search_button.addEventListener("click", (e) => {
    e.preventDefault();
    getWeather(search_input.value);
})
