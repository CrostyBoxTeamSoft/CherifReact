
// Components/Search.js
import React from 'react'
//import { reduxForm, Field } from "redux-form";
import { Text,StyleSheet, View, TextInput, Button,Image,AppRegistry,TouchableOpacity } from 'react-native'

import {FontAwesome,AntDesign,SimpleLineIcons,Feather,Foundation} from '@expo/vector-icons';


class FelixProg extends React.Component {


  render(){

    return (



      <View style={styles.container}>
        <View style={styles.containrow}>

          <View style={styles.iconwifi}>
          <AntDesign name="wifi" size={24} color="black"  />
          </View>

          <View style={styles.iconlist}>
          <Foundation onPress={()=> this.props.navigation.navigate("Options")}  name="list" size={24} color="green" style={{ paddingLeft:40}}/>
          </View>

       </View>

        <View style={styles.containrow}>
           <Image
            style={styles.logo}
            source={require('./apppics/felix.png')}
           />
        </View>

        <View style={styles.containrow}>
           <Image
             style={styles.gamelle}
             source={require('./apppics/gamellec.png')}
           />
           <Text style={{fontWeight: 'bold',borderColor:'#000',borderWidth:0,marginBottom:5,height:25, width:120, paddingLeft:25}}> put progress bar later  </Text>
        </View>

        <View style={styles.containrow}>
           <Image
             style={styles.reservoir}
             source={require('./apppics/reservoirc.png')}
           />
           <Text style={{fontWeight: 'bold',borderColor:'#000',borderWidth:0,marginBottom:5,height:25, width:120, paddingLeft:55}}> put progress bar later </Text>
        </View>

        <TouchableOpacity onPress={()=> this.props.navigation.navigate("Planning2")} style={styles.containrow}>
           <Image

             style={styles.planning}
             source={require('./apppics/planningc.png')}
           />
           <Text style={{fontWeight: 'bold',borderColor:'#000',borderWidth:0,marginBottom:5,height:55, width:140, paddingLeft:55}}> 10/09/2020 à 12H38 </Text>
        </TouchableOpacity>



       </View>

     )
   }
}


  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
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

  export default FelixProg
