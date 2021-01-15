
import React from 'react'

import { Text,StyleSheet, View, TextInput, Button,Image } from 'react-native' // on importe lesdifférentes bibliothèques

import {FontAwesome,AntDesign,SimpleLineIcons,Feather,Foundation} from '@expo/vector-icons';

//on crée la classe qui permet d'ajouter un animal
class AddPet extends React.Component {

  constructor(props){ // ce constructeur permet de créer les différets attributs de l'animal
    super(props)

    this.state = {
      Machine: '',
      Wifi: '',
      password: '',
      Name: '',
      Species: '',
      Race: '',
      Age: '',
      Weight: '',

    }
  }
// on affiche dans la console les informations suivantes
  _handlePress() {
     console.log(this.state.Machine);
     console.log(this.state.Wifi);
     console.log(this.state.password);
     console.log(this.state.Name);
     console.log(this.state.Species);
     console.log(this.state.Race);
     console.log(this.state.Age);
     console.log(this.state.Weight);
  }


    render(){
      return (
        <View style={styles.container}> // on crée notre vue principale

            <View style={styles.containrow}>

              <View style={styles.iconwifi}> // pour l'aafichage de l'icone wifi de l'application
              <AntDesign name="wifi" size={24} color="black"  /> // de couleur noir et taille 24
              </View>

              <View style={styles.iconlist}> //pour l'aafichage de l'icone liste pour le menu de l'application
              <Foundation name="list" size={24} color="green" style={{ paddingLeft:40}}/>// de couleur verte et taille 24 et décalé vers la gauche
              </View>

           </View>

        <View style={styles.containrow}>
          <AntDesign name="arrowright" size={24} color="black"/> // Pour l'affichage de flèche cers la droite
          <Text style={{fontWeight: 'bold',fontSize: 20,color:'blue',marginBottom:-50,height:80, width:180, paddingLeft:55}}> Add pet </Text>// affichage du nom du menu de l'appli
          <AntDesign name="arrowleft" size={24} color="black" /> // Pour l'affichage de flèche cers la gauche
        </View>

        <View style={styles.containrow}>
          <Text style={{fontWeight: 'bold',marginBottom:-70,height:25, width:150, paddingLeft:45}}> Machine </Text> //affichage du texte machine avec le bon positionnement
          <TextInput style={{borderColor:'#000',borderWidth:2,marginBottom:-55,height:25, width:150, paddingLeft:20}}  placeholder='xxxxxxx'// zone pour saisir le nom de la machine
          onChangeText={(text) => this.setState({Machine:text})} /// tocker ce qu'on a saisi dans la variable machinev changer le texte pré rempli
          />
        </View>

        <View style={styles.containrow}>
          <Text style={{fontWeight: 'bold',marginBottom:-20,height:25, width:150, paddingLeft:45}}> Wifi </Text> //affichage du texte wifi
          <TextInput style={{borderColor:'#000',borderWidth:2,marginBottom:-10,height:25, width:150, paddingLeft:20}}  placeholder='id'// prérempli avec un exemple id
          onChangeText={(text) => this.setState({Wifi:text})} // tocker ce qu'on a saisi dans la variable wifi changer le texte pré rempli
          />
        </View>

        <View style={styles.containrow}>
          <Text style={{fontWeight: 'bold',marginBottom:30,height:25, width:150, paddingLeft:45}}> Password </Text> //affichage du texte password
          <TextInput style={{borderColor:'#000',borderWidth:2,marginBottom:40,height:25, width:150, paddingLeft:20}} placeholder='*******'
          onChangeText={(text) => this.setState({password:text})} // tocker ce qu'on a saisi dans la variable password changer le texte pré rempli
          />
        </View>

        <View style={styles.containrow}>
          <Text style={{fontWeight: 'bold',marginBottom:100,height:25, width:150, paddingLeft:45}}> Name </Text> //affichage du texte name
          <TextInput style={{borderColor:'#000',borderWidth:2,marginBottom:100,height:25, width:150, paddingLeft:20}} placeholder='Felix'
          onChangeText={(text) => this.setState({Name:text})}// tocker ce qu'on a saisi dans la variable name changer le texte pré rempli
          />
        </View>

        <View style={styles.containrow}>
          <Text style={{fontWeight: 'bold',marginBottom:150,height:25, width:150, paddingLeft:45}}>  Species  </Text> //affichage du texte species
          <TextInput style={{borderColor:'#000',borderWidth:2,marginBottom:160,height:25, width:150, paddingLeft:20}} placeholder='Chat'
          onChangeText={(text) => this.setState({Species:text})} // tocker ce qu'on a saisi dans la variable specieschanger le texte pré rempli
          />
        </View>

        <View style={styles.containrow}>
          <Text style={{fontWeight: 'bold',marginBottom:190,height:25, width:150, paddingLeft:45}}>  Race  </Text> ////affichage du texte Race
          <TextInput style={{borderColor:'#000',borderWidth:2,marginBottom:200,height:25, width:150, paddingLeft:20}} placeholder='Persan'
          onChangeText={(text) => this.setState({Race:text})} // tocker ce qu'on a saisi dans la variable race changer le texte pré rempli
          />
        </View>

        <View style={styles.containrow}>
          <Text style={{fontWeight: 'bold',marginBottom:250,height:25, width:150, paddingLeft:45}}>  Age  </Text>//affichage du texte Age
          <TextInput style={{borderColor:'#000',borderWidth:2,marginBottom:250,height:25, width:150, paddingLeft:20}} placeholder='3 mois'
          onChangeText={(text) => this.setState({Age:text})}// tocker ce qu'on a saisi dans la variable age changer le texte pré rempli
          />
        </View>

        <View style={styles.containrow}>
          <Text style={{fontWeight: 'bold',marginBottom:280,height:25, width:150, paddingLeft:45}}>  Weight  </Text> //affichage du texte weight
          <TextInput style={{borderColor:'#000',borderWidth:2,marginBottom:290,height:25, width:150, paddingLeft:20}} placeholder='2,5 Kg'
          onChangeText={(text) => this.setState({Weight:text})}// tocker ce qu'on a saisi dans la variable weight changer le texte pré rempli
          />
        </View>



        <View style={styles.btnBack}> // une vue pour le bouton retour (back)
          <Button
          title="Back"// titre du bouton
          onPress={() => { console.log("back")}}//on affiche back lorsqu'on appuie sur le bouton
          />
        </View>

        <View style={styles.btnSave}> // une vue pour le bouton save
          <Button
          title="Save"// titre du b
          onPress={() => this._handlePress()}
          />
        </View>

        </View>
      )
    }
}

const styles = StyleSheet.create({// on crée les styles de nos différents composants
  container: {//,style pour la vue principale
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center', // pour aligner les éléments au centre
    justifyContent: 'center',// pour aligner les lignes de l'élement container
  },

  containrow: {// styles pour les vues secondaires
    flex: 1,
    flexDirection: 'row',// pour spécifier le type d'ordonnancement ,ici en ligne
    alignItems: 'center',

  },

  btnBack:{
    position: 'absolute',
  bottom: 120,// en bas
  left: 40// a gauche
  },

  btnSave:{
    position: 'absolute',
  bottom: 120,//en bas
  right: 40 // adroite
},


   iconwifi:{
     position: 'absolute', //positionnement de l'icone en absolue
   top: 50,// en haut
   right: 120// a droite
   },

   iconlist:{
     position: 'absolute',//positionnement de l'icone en absolu
   top: 50,
   left: 100
   }

});

export default AddPet
