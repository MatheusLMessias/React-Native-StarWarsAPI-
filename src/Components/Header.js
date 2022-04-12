import React from 'react';
import { Text, View, Alert, TouchableOpacity } from 'react-native';
import Styles from './StylesComponents';

export function HeaderOne() {
    return (
        
    <View>

        <View style={Styles.containerH}>

            <View style={Styles.fullStyleH}>

                <Text style={Styles.titleText}>        
                    Projeto 3                 
                </Text>

                <View></View>
                <View></View>
                <View></View>
                <View></View>

                <TouchableOpacity 
                    color={'transparent'} 
                    onPress={() => Alert.alert('Clique no botão para apresentar os nomes dos filmes do personagem')}
                    >            
                    <Text style={Styles.txtButtonMais}>Dica</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                    color={'transparent'} 
                    onPress={() => Alert.alert('App fechado')}
                    >
                    <Text style={Styles.txtButtonMais}>X</Text>
                </TouchableOpacity>

            </View>

        </View>

    </View>

);
}