import React, { useEffect } from "react";

export const ServiceCharacter = props =>{

    let characterFilms = []

    useEffect(() => {
        fetch('https://swapi.dev/api/people/',{
            method:'GET',
            headers:{
               'Accept' : 'application/json',
            }
        })
            .then(response => response.json())
            .then(data =>{
                data.results.forEach(function(txt){
                    characterFilms.push({name: txt.name, films: txt.films})  
                })
                props.setCharacterName(characterFilms)
            })
    }, []) 
}

export const ServiceFilms = props  =>{

    let filmsName = []

    props.p.forEach(function(URLs){

        fetch(URLs,{
            method:'GET',
            headers:{
               'Accept' : 'application/json',
            }})
            .then(response => response.json())
            .then(data =>{
                 filmsName.push(' '+ data.title)
            })
    });
    setTimeout(() =>{
        alert(filmsName)
    },1000)
    
}