// Components/UserItem.js

import React from 'react'
import { StyleSheet, View, Text,Image, Button } from 'react-native'
import Utility from './Components/Utility'


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
    Utility.getIdUser();
  }

  render() {

    //const user = this.props.user
    //const Infos = require('./DataBase/Infos.json');
     return (
       <View style={styles.test}>
         <Button
         title="Get one user"
         onPress={() => { this.testStatic()}}
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
