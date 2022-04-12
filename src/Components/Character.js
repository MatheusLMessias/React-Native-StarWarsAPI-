import React from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import Styles from "./StylesComponents";


export function CharacterOne(props) {

  return (

    <View style={Styles.container}>

        <View >   

        <FlatList 
                data={props.characterNameOne}
                renderItem={({item}) => (
                <View style={Styles.fullStyle} >
                  <Text style={Styles.textStyle}>{item.name}</Text>
                <TouchableOpacity 
                style={Styles.btnStyle}
                onPress={()=>{props.testeOne(item.films)}}
                >
                  <Text style={Styles.textStyleBtn}>Ver filmes</Text>
                </TouchableOpacity>  
                </View>
              )
              }
        />

          </View>

    </View>

  );
}

 