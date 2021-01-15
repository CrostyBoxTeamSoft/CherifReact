// Components/Search.js
import React from 'react'
//import { reduxForm, Field } from "redux-form";
import { Text,StyleSheet, View, TextInput, Button,Image } from 'react-native'

import {FontAwesome,AntDesign,SimpleLineIcons,Feather,Foundation} from '@expo/vector-icons';

// page d'information par défaut sur létat du réservoir, de la gamelle et du planning pour l'animal
//c'est le même princu=ipe que les pages précédentes au niveau de la mise en forme

class Felix extends React.Component {


  render(){
    return (

//mise en place des icones wifi et liste menu comme dans les pages précédentes

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
            style={styles.logo} // importation du logo à afficher
            source={require('./apppics/felix.png')}//importerune iage
           />
        </View>

        <View style={styles.containrow}>
           <Image
             style={styles.gamelle}
             source={require('./apppics/gamelle.jpg')}// ajout de l'image de la gamelle
           />
           <Text style={{fontWeight: 'bold',borderColor:'#000',borderWidth:0,marginBottom:5,height:25, width:120, paddingLeft:25}}> Gamelle </Text>// texte Gamelle
        </View>

        <View style={styles.containrow}>
           <Image
             style={styles.reservoir}
             source={require('./apppics/reservoir.png')}//ajout de l'image du réservoir
           />
           <Text style={{fontWeight: 'bold',borderColor:'#000',borderWidth:0,marginBottom:5,height:25, width:120, paddingLeft:55}}> réservoir </Text>
        </View>

        <View style={styles.containrow}>
           <Image
             style={styles.planning}
             source={require('./apppics/planningc.png')}//image du plannin
           />
           <Text style={{fontWeight: 'bold',borderColor:'#000',borderWidth:0,marginBottom:5,height:25, width:120, paddingLeft:55}}> Planning </Text>
        </View>



       </View>

     )
   }
}


  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff', // pour la coulur de l'arrière plan 
      alignItems: 'center',
      justifyContent: 'center',
    },

    containrow: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',

    },

      gamelle: {
      width: 155,
      height: 65,
    },
      reservoir: {
      width: 80,
      height:80,
    },

    planning: {
    width: 80,
    height:80,

   },

    logo: {
      flex: 1,
      width: 120,
      height: 120,
      resizeMode: 'contain',
    top: -50,

  },

   iconwifi:{
     position: 'absolute',
   top: 50,
   right: 120
   },

   iconlist:{
     position: 'absolute',
   top: 50,
   left: 100
   }



    });
  export default Felix
