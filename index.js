require('dotenv').config()

const axios = require('axios')
const {appid, q, url, urlgeo, limit, units, language} = process.env
const end1 = `${urlgeo}?q=${q},BR&limit=${limit}&appid=${appid}`

axios.get(end1)
.then((res) =>{
    return res['data']
})
.then((res) =>{
    for (let coord of res){
        const lat = coord.lat
        const lon = coord.lon
        const end2 = `${url}?lat=${lat}&lon=${lon}&units=${units}&lang=${language}&appid=${appid}`
        axios.get(end2)
        .then((res) =>{
            const dados = res['data']
            console.log("Descrição:",dados.weather[0].description)
            console.log("Sensação:",dados.main.feels_like,"ºC")
        })

    }
})




