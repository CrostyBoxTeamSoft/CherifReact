// Components/Search.js
import React from 'react'
//import { reduxForm, Field } from "redux-form";
import { Text,StyleSheet, View, TextInput, Button,TouchableOpacity } from 'react-native'
//import { reduxForm, Field } from "redux-form";
import {FontAwesome,AntDesign,SimpleLineIcons,Feather,Foundation} from '@expo/vector-icons';

class Options extends React.Component {

    render(){
      return (
        <View style={styles.container}>

        <View style={styles.containrow}>

          <AntDesign name="wifi" size={24} color="black"  />

        <FontAwesome  onPress={()=> this.props.navigation.navigate("Animal")} name="paw" size={24} color="black" style={styles.containAnimal}/>
          <Text style={{fontWeight: 'bold',marginBottom:-300,height:50, width:150, paddingLeft:50}}>  Animaux </Text>
          <Foundation name="list" size={24} color="green" style={{ paddingLeft:40}}/>

        </View>

        <View style={styles.containrow}>
        <AntDesign onPress={()=> this.props.navigation.navigate("Reglage")} name="setting" size={24} color="black" style={styles.containSettings}  />
          <Text style={{fontWeight: 'bold',marginBottom:-150,height:50, width:150, paddingLeft:45}}> Reglages </Text>

        </View>

        <View style={styles.containrow}>
        <SimpleLineIcons name="user" size={24} color="black" style={styles.containAccount} />
          <Text style={{fontWeight: 'bold',marginBottom:0,height:50, width:150, paddingLeft:45}}> Compte </Text>
          </View>

        <View style={styles.containrow}>
        <Feather name="help-circle" size={24} color="black" style={styles.containHelp} />
          <Text style={{fontWeight: 'bold',marginBottom:150,height:50, width:150, paddingLeft:45}}>  Aide  </Text>

        </View>
        <View style={styles.containrow}>
        <AntDesign onPress={()=> this.props.navigation.navigate("Compte")} name="poweroff" size={24} color="black" style={styles.containDisconnect} />
          <Text style={{fontWeight: 'bold',marginBottom:300,height:50, width:150, paddingLeft:45}}>  Deconnexion  </Text>

        </View>


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
  containSettings: {


    flexDirection: 'column',
    height: 50,
    alignSelf: 'center',
    paddingLeft: 30,
    marginBottom: -150,


  },

  containAnimal: {


    flexDirection: 'column',
    height: 50,
    alignSelf: 'center',
    paddingLeft: 65,
    marginBottom: -300,


  },
  containAccount: {


    flexDirection: 'column',
    height: 50,
    alignSelf: 'center',
    paddingLeft: 30,
    marginBottom: 0,


  },
  containHelp: {


    flexDirection: 'column',
    height: 50,
    alignSelf: 'center',
    paddingLeft: 30,
    marginBottom: 150,


  },
  containDisconnect: {


    flexDirection: 'column',
    height: 50,
    alignSelf: 'center',
    paddingLeft: 30,
    marginBottom: 300,


  },



  containrow: {
    flex: 1,
    flexDirection: 'row',
  alignItems: 'center',
  }

});

export default Options
