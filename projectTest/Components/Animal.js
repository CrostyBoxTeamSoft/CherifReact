// Components/Search.js
import React from 'react'
//import { reduxForm, Field } from "redux-form";
import { Text,StyleSheet, View, TextInput, Button } from 'react-native'
//import { reduxForm, Field } from "redux-form";
import {FontAwesome,AntDesign,SimpleLineIcons,Feather,Foundation,TouchableOpacity} from '@expo/vector-icons';

class Animal extends React.Component {

    render(){
      return (
        <View style={styles.container}>

                <View style={styles.containrow}>
                <AntDesign name="wifi" size={24} color="black"   />
                  <Foundation name="list" size={24} color="green" style={{ paddingLeft:250}}/>
                    </View>

    <View style={styles.containrow}>
            <AntDesign name="arrowright" size={24} color="black" style={styles.containArrow} />
          <Text style={{fontWeight: 'bold',marginBottom:200,height:50, width:150, paddingLeft:30}}>  Animaux </Text>
        <AntDesign name="arrowleft" size={24} color="black" style={styles.containArrow} />
        </View>



                <View style={styles.add}>
                  <Button
                  title="+"
                  onPress={()=> this.props.navigation.navigate("AddPet")}

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
    marginBottom:300

},
  containArrow: {

    flexDirection: 'column',
    height: 50,
    alignSelf: 'center',

    marginBottom: 200,
  },



  containrow: {
    flex: 1,
    flexDirection: 'row',
  alignItems: 'center',
},

  add: {
    //position: 'absolute',

  bottom: 150,
  left:-100,
  width: 100



}



});

export default Animal
