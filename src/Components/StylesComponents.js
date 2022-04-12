import React, { useEffect } from 'react';
import { StyleSheet } from 'react-native';


export default StyleSheet.create({

    container: {
        marginTop: 20,
        padding: 10,
      },

      containerC: {
        width:200,
        marginTop: -508,
        padding: 10,
      },

    fullStyle:{
        flexDirection:'row',
        justifyContent: 'space-between',
        borderRadius:10,
        borderWidth: 1,
      },

    textStyle:{
       marginLeft:5,
       fontSize: 20,
       color: 'black',
       marginTop: 20,
       width: 150,
       height: 28,
       borderRadius: 20,
       justifyContent: 'center',
       alignItems:'center',
      },

    textStyleBtn:{
        textAlignVertical: "center",
        fontSize: 15,
        color: 'white',
      },

    btnStyle:{
        marginRight:10,
        marginTop: 15,
        width: 132,
        height: 28,
        borderRadius: 20,
        backgroundColor: "blue",
        justifyContent: 'center',
        alignItems:'center',
      },

    containerH: {
        flex:1,
        backgroundColor: 'blue',
        padding: 60, 
    },

   fullStyleH: {
        flexDirection:'row',
        paddingTop: 2,
        paddingHorizontal: 20,
        height: 60, 
        alignItems: 'center',
        justifyContent: 'space-between',
        marginLeft: -50,
        marginRight: -50,
    },
      
    txtButtonMais: {
        color: 'white',
        fontSize: 20
    },

    titleText: {
        color: 'white',
        fontSize: 32,
    },


  });