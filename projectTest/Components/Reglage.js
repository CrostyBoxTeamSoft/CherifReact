// Components/Search.js
import React,{useState} from 'react'
//import { reduxForm, Field } from "redux-form";
import { Text,StyleSheet, View, TextInput, Button,CheckBox } from 'react-native'
//import { reduxForm, Field } from "redux-form";
import {FontAwesome,AntDesign,SimpleLineIcons,Feather,Foundation,MaterialIcons,MaterialCommunityIcons} from '@expo/vector-icons';

class Reglage extends React.Component {

    render(){

      return (

        <View style={styles.container}>

                <View style={styles.containrow}>
                <AntDesign name="wifi" size={24} color="black"  />
                  <Foundation name="list" size={24} color="black" style={{ paddingLeft:250}}/>
                    </View>


    <View style={styles.containrow}>
            <AntDesign name="arrowright" size={24} color="black" style={styles.containArrow} />
          <Text style={{fontWeight: 'bold',marginBottom:100,height:50, width:150, paddingLeft:30}}> Reglage </Text>
        <AntDesign name="arrowleft" size={24} color="black" style={styles.containArrow} />
                  </View>
      <View style={styles.containrow}>


                  </View>

                      <View style={styles.containrow}>
                              <MaterialCommunityIcons name="star-four-points-outline" size={24} color="black " style={styles.containStar1} />
                            <Text style={{fontWeight: 'bold',marginBottom: 350,height:50, width:150, paddingLeft:-10}}> Notifications </Text>
                            <CheckBox
                              style={styles.checkbox1}
                              />
                                    </View>
                        <View style={styles.containrow}>
                        <MaterialCommunityIcons name="star-four-points-outline" size={24} color="black " style={styles.containStar2} />
                      <Text style={{fontWeight: 'bold',marginBottom: 430,height:50, width:150, paddingLeft:-10}}> Gamelle vide </Text>

                      <CheckBox
                        style={styles.checkbox2}
                        />
                                    </View>
                                    <View style={styles.containrow}>
                                    <MaterialCommunityIcons name="star-four-points-outline" size={24} color="black " style={styles.containStar3} />
                                  <Text style={{fontWeight: 'bold',marginBottom: 500,height:50, width:150, paddingLeft:-10}}>Reservoir Vide </Text>

                                  <CheckBox
                                    style={styles.checkbox3}
                                    />
                                                </View>



                  <View style={styles.containrow}>
                        <MaterialCommunityIcons name="star-four-points-outline" size={24} color="black " style={styles.containStar4} />
                          <Text style={{fontWeight: 'bold',marginBottom: 570,height:50, width:150, paddingLeft:-10}}>Heure de manger </Text>
                          <CheckBox
                            style={styles.checkbox4}
                            />
                          </View>



                          <View style={styles.btnBack}>
                            <Button
                            title="Back"
                            onPress={()=> this.props.navigation.navigate("Options")}

                            />
                          </View>

                          <View style={styles.btnSave}>
                            <Button
                            title="Save"/>
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
  containArrow: {

    flexDirection: 'column',
    height: 50,
    alignSelf: 'center',

    marginBottom: 100,
  },
  containStar1: {

    flexDirection: 'column',
    height: 50,
    alignSelf: 'center',

    marginBottom: 350,
  },
  containStar2: {

    flexDirection: 'column',
    height: 50,
    alignSelf: 'center',

    marginBottom: 430,
  },
  containStar3: {

    flexDirection: 'column',
    height: 50,
    alignSelf: 'center',

    marginBottom: 500,
  },
  containStar4: {

    flexDirection: 'column',
    height: 50,
    alignSelf: 'center',

    marginBottom: 570,
  },
  checkbox1:{
//  position: 'absolute',
  bottom:50,
  left: 10,
    marginBottom: 280
  },
  checkbox2 :{
//  position: 'absolute',
  bottom:50,
  left: 10,
    marginBottom: 360
  },
  checkbox3 :{
//  position: 'absolute',
  bottom:50,
  left: 10,
    marginBottom: 430
  },
  checkbox4 :{
  //  position: 'absolute',
  bottom:50,
  left: 10,
    marginBottom: 500
  },



  containrow: {
    flex: 1,
    flexDirection: 'row',
  alignItems: 'center',
},


 btnBack:{
    position: 'absolute',
  bottom: 120,
  left: 40
  },

  btnSave:{
    position: 'absolute',
  bottom: 120,
  right: 40
  }




});

export default Reglage
