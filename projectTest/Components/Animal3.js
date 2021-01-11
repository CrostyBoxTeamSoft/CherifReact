// Components/Search.js
import React from 'react'
//import { reduxForm, Field } from "redux-form";
import { Text,StyleSheet, View, TextInput, Button,Image } from 'react-native'
//import { reduxForm, Field } from "redux-form";
import {FontAwesome,AntDesign,SimpleLineIcons,Feather,Foundation,TouchableOpacity} from '@expo/vector-icons';

class Animal3 extends React.Component {

    render(){
      return (
        <View style={styles.container}>

                <View style={styles.containrow}>
                <AntDesign name="wifi" size={24} color="black" style={{ marginBottom:100}}  />
                  <Foundation name="list" size={24} color="green" style={{ paddingLeft:250, marginBottom:100}}/>
                    </View>

    <View style={styles.containrow}>
            <AntDesign name="arrowright" size={24} color="black" style={styles.containArrow} />
          <Text style={{fontWeight: 'bold',marginBottom:400,height:50, width:150, paddingLeft:30}}>  Animaux </Text>
        <AntDesign name="arrowleft" size={24} color="black" style={styles.containArrow} />
        </View>

                <View >
                  <Image  style={styles.picture}
                source={require('./apppics/felix_image.png')}

                  />


                  </View>


        <View style={styles.add}>
          <Button
          title="+"
          onPress={()=> this.props.navigation.navigate("AddPet")}

          />
          </View>

          <View style={styles.btnSave}>
            <Button
            title="Save"
            onPress={()=> this.props.navigation.navigate("Felix")}
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
    marginBottom:50

},
  containArrow: {

    flexDirection: 'column',
    height: 50,
    alignSelf: 'center',

    marginBottom: 400,
  },



  containrow: {
    flex: 1,
    flexDirection: 'row',
  alignItems: 'center',
},

  add: {
    //position: 'absolute',

  bottom: 310,
  left:100,
  width: 100



},
picture: {

width: 90,
height:90,
left: -100,
bottom: 250
},
btnSave:{
  position: 'absolute',
bottom: 100,
right: 40
}




});

export default Animal3
