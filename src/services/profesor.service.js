const axios = require("axios")

axios.default.baseURL = "http://127.0.0.1:8090/api/collections"

const getProfesor = async ( username )=>{
    const profesor = await axios("/profesores/records") 
    const findProfesor = profesor.data.items.find(profesor => profesor.username === username)

    if(findProfesor){
        const profesorNormalize = { 
            username: findProfesor.username, 
            active: findProfesor.active, 
            expiration_date: findProfesor.active, 
            id: findProfesor.id 
        } 

        return profesorNormalize
     }
     
    return null
}

const calcExpiration = (days) => {
    const date = new Date();
    date.setDate(date.getDate() + days);
    return date;
}

const registerProfesor = async ( username )=>{
    const expiration_date = calcExpiration(30)
    const postResult = await axios.post("/profesores/records", {username, expiration_date, active: true}) 

    if(!postResult.code) return postResult
    return null 
}

module.exports = {
    getProfesor
}

