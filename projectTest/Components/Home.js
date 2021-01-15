// Components/Search.js
import React from 'react'
//import { reduxForm, Field } from "redux-form";
import { Text,StyleSheet, View, TextInput, Button,Image } from 'react-native' // permet de pouvoir rajouter du texte, des images, des boutons etc.

import {FontAwesome,AntDesign,SimpleLineIcons,Feather,Foundation} from '@expo/vector-icons';// permet d'importer les icones de react native

// c'est la page d'accueil de l'application mobile
// nous affichons juste quelques données par défaut genre la gamelle, le réservoir, le planning avec le logo de la crosty box



  render(){
    return (


// ajout ds deux icones wifi et liste pour le menu
      <View style={styles.container}>
        <View style={styles.containrow}>

          <View style={styles.iconwifi}>
          <AntDesign name="wifi" size={24} color="black"  />
          </View>

          <View style={styles.iconlist}>
          <Foundation name="list" size={24} color="green" style={{ paddingLeft:40}}/>
          </View>

       </View>

        <View style={styles.containrow}>
           <Image
            style={styles.logo}
            source={require('./apppics/logoCB.png')} // affichage du logo de la crsoty box
           />
        </View>

        <View style={styles.containrow}>
           <Image
             style={styles.gamelle}
             source={require('./apppics/gamelle.jpg')} // affichage de l'image de la gamelle
           />
           <Text style={{fontWeight: 'bold',borderColor:'#000',borderWidth:0,marginBottom:5,height:25, width:120, paddingLeft:25}}> Gamelle </Text>
        </View>

        <View style={styles.containrow}>
           <Image
             style={styles.reservoir}
             source={require('./apppics/reservoir.png')}// affichage de l'image du réservoir
           />
           <Text style={{fontWeight: 'bold',borderColor:'#000',borderWidth:0,marginBottom:5,height:25, width:120, paddingLeft:55}}> réservoir </Text>
        </View>

        <View style={styles.containrow}>
           <Image
             style={styles.planning}
             source={require('./apppics/planning.png')}// affichage du planning
           />
           <Text style={{fontWeight: 'bold',borderColor:'#000',borderWidth:0,marginBottom:5,height:25, width:120, paddingLeft:55}}> Planning </Text>
        </View>



       </View>

     )
   }
}


  const styles = StyleSheet.create({
    container: {// style de la vue principale
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },

    containrow: { // style à appliquer sur les ddifférentes lignes
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',

    },

      gamelle: { // style pour l'image de  la gamelle
      width: 146,
      height: 64,
    },
      reservoir: {// style pour l'image du réservoir
      width: 80,
      height:80,
    },

    planning: {// style pour le planning
    width: 80,
    height:80,

   },

   logo: { // style pour le logo de la crosty box
     flex: 1,
     width: 120,
     height: 120,
     resizeMode: 'contain',
   top: -50,

  },

   iconwifi:{ // style pour l'icone wifi
     position: 'absolute',
   top: 50,
   right: 120
   },

   iconlist:{ // style pour l'icone du menu
     position: 'absolute',
   top: 50,
   left: 100
   }



    });
  export default Home
