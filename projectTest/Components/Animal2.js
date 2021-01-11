// Components/Search.js
import React from 'react'
//import { reduxForm, Field } from "redux-form";
import { Text,StyleSheet, View, TextInput, Button } from 'react-native'
//import { reduxForm, Field } from "redux-form";
import {FontAwesome,AntDesign,SimpleLineIcons,Feather,Foundation,MaterialIcons} from '@expo/vector-icons';

class Animal2 extends React.Component {

    render(){
      return (
        <View style={styles.container}>

                <View style={styles.containrow}>
                <AntDesign name="wifi" size={24} color="black"  />
                  <Foundation name="list" size={24} color="black" style={{ paddingLeft:250}}/>
                    </View>

    <View style={styles.containrow}>
            <AntDesign name="arrowright" size={24} color="black" style={styles.containArrow} />
          <Text style={{fontWeight: 'bold',marginBottom:100,height:50, width:150, paddingLeft:30}}>  Animaux </Text>
        <AntDesign name="arrowleft" size={24} color="black" style={styles.containArrow} />





                  </View>
<MaterialIcons onPress={()=> this.props.navigation.navigate("Animal3")} name="add-a-photo" size={150} color="black" style={{ marginBottom:300}} />


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
  containArrow: {

    flexDirection: 'column',
    height: 50,
    alignSelf: 'center',

    marginBottom: 100,
  },



  containrow: {
    flex: 1,
    flexDirection: 'row',
  alignItems: 'center',
},

  add: {
    position: 'absolute',
  bottom: 300,
  left: 40
}



});

export default Animal2
