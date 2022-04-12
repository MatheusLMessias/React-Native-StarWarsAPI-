import React, { useState } from 'react';
import { SafeAreaView, StatusBar, Alert } from 'react-native';
import { CharacterOne } from "./Components/Character";
import { HeaderOne } from './Components/Header';
import { ServiceCharacter, ServiceFilms } from './Services/ServiceApi';
import Styles from './StyleApp';

export default function App() { 

  const[characterName, setCharacterName] = useState([])

  ServiceCharacter({setCharacterName}) 

  function BtnClick(p){

      ServiceFilms({p})
    
  }

  return (
    
    <SafeAreaView style={Styles.container}>

      <HeaderOne />

      <CharacterOne characterNameOne={characterName} testeOne={BtnClick}  />

    </SafeAreaView>
    
  );
}




