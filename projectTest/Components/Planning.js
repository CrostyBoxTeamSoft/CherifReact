// Components/Search.js
import React,{useState} from 'react'
//import { reduxForm, Field } from "redux-form";
import { Text,StyleSheet, View, TextInput, Button,CheckBox } from 'react-native'
//import { reduxForm, Field } from "redux-form";
import {FontAwesome,AntDesign,SimpleLineIcons,Feather,Foundation,MaterialIcons} from '@expo/vector-icons';

class Planning extends React.Component {

    render(){

      return (

        <View style={styles.container}>

                <View style={styles.containrow}>
                <AntDesign name="wifi" size={24} color="black"  />
                  <Foundation name="list" size={24} color="black" style={{ paddingLeft:250}}/>
                    </View>


    <View style={styles.containrow}>
            <AntDesign name="arrowright" size={24} color="black" style={styles.containArrow} />
          <Text style={{fontWeight: 'bold',marginBottom:100,height:50, width:150, paddingLeft:30}}> Planning </Text>
        <AntDesign name="arrowleft" size={24} color="black" style={styles.containArrow} />
                  </View>
      <View style={styles.containrow}>

                  <CheckBox
                    style={styles.checkbox1}
                    />

                      <Text style={{fontWeight: 'bold',marginBottom:20,height:50, width:150, paddingLeft:30}}> Defaut </Text>
                  <CheckBox
                    style={styles.checkbox2}
                    />
                      <Text style={{fontWeight: 'bold',marginBottom:20,height:50, width:150, paddingLeft:-40}}> Perso</Text>


                  </View>



                  <View style={styles.containrow}>

                    <Text style={{fontWeight: 'bold',marginBottom:550,height:25, width:150, paddingLeft:90}}> Durée </Text>
                    <TextInput style={{borderColor:'#000',borderWidth:2,marginBottom:550,height:25, width:150, paddingLeft:30}}  placeholder='xx jours'/>
                    <Text style={{fontWeight: 'bold',marginBottom:400,height:50, width:100, paddingLeft:-40, color:'red',left: -150}}> Portion </Text>
                  </View>

                  <View style={styles.containrow}>

                    <Text style={{fontWeight: 'bold',marginBottom:400,height:25, width:150, paddingLeft:25}}> Qté Food </Text>
                    <TextInput style={{borderColor:'#000',borderWidth:2,marginBottom:400,height:25, width:150, paddingLeft:30,left:-40}} placeholder='xxx g/jour'/>

                  </View>


                          <View style={styles.btnBack}>
                            <Button
                            title="Back"
                              onPress={()=> this.props.navigation.navigate("Felix")}
                            />
                          </View>

                          <View style={styles.btnSave}>
                            <Button
                            title="Save"
                            onPress={()=> this.props.navigation.navigate("FelixProg")}
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


checkbox1:{
//  position: 'absolute',
bottom:50,
left: 130,
marginBottom: -50
},
checkbox2:{
  //position: 'absolute',
bottom:50,
left: 100,
marginBottom: -50
},
  btnBack:{
    position: 'absolute',
  bottom: 120,
  left: 40,

  },

  btnSave:{
    position: 'absolute',
  bottom: 120,
  right: 40
  }




});

export default Planning
