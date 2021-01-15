import React from 'react'
import { StyleSheet, View, Text,Image, Button } from 'react-native'
//import StaticClass from './StaticClass';

const user = require('../DataBase/Infos.json')

class TestFetch extends React.Component {

  getRequest() {
     console.log("GET from React");
     fetch('http://91.174.249.33:4545/user/1')
     .then
     (
       (response) => response.json()
     )
     .then
     (
       function(jsonText)
       {
         console.log(jsonText);
       }
     );
  }

  testStatic()
  {
    //var staticVar = require('./')
    //StaticClass.getIdUser();
    console.log(user.pseudo);
  }

  changePseudo()
  {
    user.pseudo="new Pseudo";
  }

  getPoids()
  {
    console.log("GET poids");
    fetch('http://192.168.43.151/')
    .then
    (
      (response) => response.json()
    )
    .then
    (
      function(jsonText)
      {
        console.log("Poids = ");
        console.log(jsonText);
      }
    );
  }

  render() {

    //const user = this.props.user
    //const Infos = require('./DataBase/Infos.json');
     return (
       <View style={styles.test}>
         <Button
         title="Get pseudo"
         onPress={() => { this.testStatic()}}
         />
         <Button
         title="change pseudo"
         onPress={() => { this.changePseudo()}}
         />
         <Button
         title="Get poids"
         onPress={() => { this.getPoids()}}
         />
       </View>
     )
   }
 }

 const styles = StyleSheet.create({


   test:{
     position: 'absolute',
   bottom: 120,
   left: 40
   }

 });

export default TestFetch
