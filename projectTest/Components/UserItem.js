// Components/UserItem.js

import React from 'react'
import { StyleSheet, View, Text,Image } from 'react-native'
import Infos from './DataBase/Infos.json'

// cette classe permet d'afficher les données récupérées du fichier json (Infos.json)
// d'afficher ces données via une page de l'appli directment à partir de du fichier
class UserItem extends React.Component {
  render() {

    //const user = this.props.user
    const Infos = require('./DataBase/Infos.json');// on accède au fichier
     return (
       <View style={styles.main_container}>
         <Image
           style={styles.image}
          source={require('./apppics/simran.jpg')}
         />
         <View style={styles.content_container}>
           <View style={styles.header_container}>
             <Text style={styles.title_text}>{Infos.pseudo}</Text>// on récupère le pseudo contenu dans le fichier json
             <Text style={styles.vote_text}>{Infos.idUser}</Text> // on récupère l'id contenu dans le fichier json
           </View>
           <View style={styles.description_container}>
             <Text style={styles.description_text} numberOfLines={6}>{Infos.overview}</Text> // on récupère la description contenue dans le fichier json
             {/* La propriété numberOfLines permet de couper un texte si celui-ci est trop long, il suffit de définir un nombre maximum de ligne */}
           </View>
           <View style={styles.date_container}>
             <Text style={styles.date_text}>Registered on {Infos.registDate}</Text> // on récupère la date d'inscription contenu dans le fichier json
           </View>
         </View>
       </View>
     )
   }
 }
// on définit les style  àappliquer sur les différents components 
 const styles = StyleSheet.create({
   main_container: {
     height: 190,
     flexDirection: 'row'
   },
   image: {
     width: 120,
     height: 180,
     margin: 5,
     backgroundColor: 'gray'
   },
   content_container: {
     flex: 1,
     margin: 5
   },
   header_container: {
     flex: 3,
     flexDirection: 'row'
   },
   title_text: {
     fontWeight: 'bold',
     fontSize: 20,
     flex: 1,
     flexWrap: 'wrap',
     paddingRight: 5
   },
   vote_text: {
     fontWeight: 'bold',
     fontSize: 26,
     color: '#666666'
   },
   description_container: {
     flex: 7
   },
   description_text: {
     fontStyle: 'italic',
     color: '#666666'
   },
   date_container: {
     flex: 1
   },
   date_text: {
     textAlign: 'right',
     fontSize: 14
   }
 })

export default UserItem
