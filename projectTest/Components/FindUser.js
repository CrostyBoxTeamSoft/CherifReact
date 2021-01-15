// Components/FindUser.js

import React from 'react'
import { StyleSheet, View, TextInput, Button, Text,FlatList } from 'react-native'
// ici flatlist permet d'afficher une liste au iveau de la console avec les fichiers json traités
//import users from '../DataBase/UserData'
import inf from '../DataBase/Infos.json' //on importe le fichier json situé dans le dossie database
import UserItem from './UserItem' // on importe la classe Useritem
//import Infos from './DataBase/Infos.json'
// cette classe permet de traiter les données d'un fichier json pour les récupérer et les utiliser pour savoir l'utilisateur qui s'est connecté

class FindUser extends React.Component {

  render() {
    const Infos = require('./DataBase/Infos.json');// permet d'accéder au données du fichier json
    return (
      <View style={styles.main_container}>
        <TextInput style={styles.textinput} placeholder='un utilisateur'/> // affichage du texte un utilisateur
        <Button title='Rechercher' onPress={() => {}}/> // un bouton recherche
        <FlatList

        data={inf}
        keyExtractor={(item) => item.idUser.toString()} // cette ligne permet de récupérer l'iduser contenu dans le fichier json
        renderItem={({item}) => <UserItem user={item}/>} // utiliser UserItem
        />

      </View>
    )
  }
}

const styles = StyleSheet.create({
  main_container: {
    flex: 1,
    marginTop: 20
  },
  textinput: { //style pour le textInput
    marginLeft: 5,
    marginRight: 5,
    height: 50,
    borderColor: '#000000',
    borderWidth: 1,
    paddingLeft: 5
  }
})

export default FindUser
