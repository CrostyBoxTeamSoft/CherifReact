// Components/Search.js
import React from 'react'
//import { reduxForm, Field } from "redux-form";
import { Text,StyleSheet, View, TextInput, Button,Image,AppRegistry } from 'react-native'

import {FontAwesome,AntDesign,SimpleLineIcons,Feather,Foundation} from '@expo/vector-icons';

import { MaterialCommunityIcons } from '@expo/vector-icons';
// Cpage de création de comptede l'utilisateur
//on définit les différentes variable et la mise en forma des différents boutons
//c'est le meme principe que sur addpet

class Compte extends React.Component {

      constructor(props){ // ce constructeur permet de créer les variables ID et password de l'utilisateur
        super(props)

        this.state = {
          ID: '', //identifiant de l'utilisateur
          password: '',// le mot de passe de l'utilisateur
        }
      }

      _handlePress() {
         console.log(this.state.ID); // affichage de l'ID au niveau de la console
         console.log(this.state.password); // affichage de l'ID au niveau de la console
         console.log(this.state.confirmpwd); //affichage du mot de passe  au niveau de la console
         console.log(this.state.email);// affichage de l'e mail au niveau de la console
      }


        render(){
          return (
            <View style={styles.container}> // on crée notre vue principale

            <View style={styles.containrow}>

              <View style={styles.iconwifi}>  // pour l'aafichage de l'icone wifi de l'application
              <AntDesign name="wifi" size={24} color="black"  />
              </View>

              <View style={styles.iconlist}> // pour l'aafichage de l'icone liste de l'application
              <Foundation name="list" size={24} color="green" style={{ paddingLeft:40}}/>
              </View>

           </View>

            <View style={styles.containarrow}>
              <AntDesign name="arrowright" size={24} color="black" />
              <Text style={{fontWeight: 'bold',fontSize: 20,color:'blue',marginBottom:-50,height:80, width:180, paddingLeft:55}}> Account </Text>
              <AntDesign name="arrowleft" size={24} color="black" />
            </View>

            <View style={styles.icon}>
             <MaterialCommunityIcons name="account-circle-outline" size={94} color="black" />
            </View>

            <View style={styles.containrow}>
              <Text style={{fontWeight: 'bold',marginBottom:400,height:25, width:150, paddingLeft:45}}> identifiant </Text>
              <TextInput style={{borderColor:'#000',borderWidth:2,marginBottom:410,height:25, width:150, paddingLeft:20}}  placeholder='SuperID'
              onChangeText={(text) => this.setState({ID:text})}
              />
            </View>

            <View style={styles.containrow}>
              <Text style={{fontWeight: 'bold',marginBottom:400,height:25, width:150, paddingLeft:45}}> Password </Text>
              <TextInput style={{borderColor:'#000',borderWidth:2,marginBottom:410,height:25, width:150, paddingLeft:20}} placeholder='*******'
              onChangeText={(text) => this.setState({password:text})}
              />
            </View>


            <View style={styles.containrow}>
              <Text style={{fontWeight: 'bold',marginBottom:370,height:25, width:150, paddingLeft:45}}>  e mail  </Text>
              <TextInput style={{borderColor:'#000',borderWidth:2,marginBottom:380,height:25, width:150, paddingLeft:20}} placeholder='**@mail'
              onChangeText={(text) => this.setState({email:text})}
              />
            </View>



            <View style={styles.btnBack}>
              <Button
              title="Back"
              onPress={() => { console.log("back")}}
              />
            </View>

            <View style={styles.btnLogin}>
              <Button
              title="Login"
              onPress={() => this._handlePress()}
              />
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

      containrow: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',

      },

      containarrow: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom:350


      },

      icon:{
      position: 'absolute',
      top: 200,
      right: 130
      },

      btnBack:{
        position: 'absolute',
      bottom: 120,
      left: 40
      },

      btnLogin:{
        position: 'absolute',
      bottom: 120,
      right: 40
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

      export default Compte
