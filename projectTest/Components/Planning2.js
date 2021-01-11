// Components/Search.js
import React,{useState} from 'react'
//import { reduxForm, Field } from "redux-form";
import { Text,StyleSheet, View, TextInput, Button,CheckBox } from 'react-native'
//import { reduxForm, Field } from "redux-form";
import {FontAwesome,AntDesign,SimpleLineIcons,Feather,Foundation,MaterialIcons} from '@expo/vector-icons';

class Planning2 extends React.Component {

    render(){

      return (

        <View style={styles.container}>

                <View style={styles.containrow}>
                <AntDesign name="wifi" size={24} color="black"  />
                  <Foundation name="list" size={24} color="black" style={{ paddingLeft:250}}/>
                    </View>



    <View style={styles.containrow}>
            <AntDesign name="arrowright" size={24} color="black" style={styles.containArrow} />
          <Text style={{fontWeight: 'bold',marginBottom:50,height:50, width:150, paddingLeft:30}}> Planning </Text>
        <AntDesign name="arrowleft" size={24} color="black" style={styles.containArrow} />

                  </View>

                  <View style={styles.containrow }>
                  <View style={{ height: 90, width: 90, backgroundColor: '#048b9a' ,marginBottom:140}}>
                  <Text style={{fontWeight: 'bold',marginBottom:670,height:50, width:90, paddingLeft:20,color:'white'}}>Date </Text>
                  </View>
                  <View style={{ height: 90, width: 90, backgroundColor: '#9fe8',marginBottom:140}}>
                  <Text style={{fontWeight: 'bold',marginBottom:670,height:50, width:90, paddingLeft:25}}>Heure </Text>
                  </View>
                  <View style={{ height: 90, width: 90, backgroundColor: '#048b9a' ,marginBottom:140}}>
                  <Text style={{fontWeight: 'bold',marginBottom:670,height:50, width:90, paddingLeft:30,color:'white'}}>Repas</Text></View>
                  <View style={{ height: 90, width: 90, backgroundColor: '#9fe8',marginBottom:140 }}>
                  <Text style={{fontWeight: 'bold',marginBottom:670,height:50, width:90, paddingLeft:35}}>Etat</Text>
                  </View>


                                              </View>


            <View style={styles.containrow }>
               <View style={{ height: 90, width: 90, backgroundColor: '#9fe8',marginBottom:155}}>
                     <Text style={{fontWeight: 'bold',marginBottom:370,height:50, width:90, paddingLeft:25}}>... </Text>
                     </View>
                     <View style={{ height: 90, width: 90, backgroundColor: '#048b9a' ,marginBottom:155}}>
                     <Text style={{fontWeight: 'bold',marginBottom:370,height:50, width:90, paddingLeft:20,color:'white'}}>... </Text>
                     </View>
                     <View style={{ height: 90, width: 90, backgroundColor: '#9fe8',marginBottom:155 }}>
                     <Text style={{fontWeight: 'bold',marginBottom:370,height:50, width:90, paddingLeft:35}}>...</Text>
                     </View>

                     <View style={{ height: 90, width: 90, backgroundColor: '#048b9a' ,marginBottom:155}}>
                     <Text style={{fontWeight: 'bold',marginBottom:370,height:50, width:90, paddingLeft:30,color:'white'}}>...</Text>
                     </View>


                           </View>

                           <View style={styles.containrow }>
                           <View style={{ height: 85, width: 90, backgroundColor: '#048b9a' ,marginBottom:180}}>
                           <Text style={{fontWeight: 'bold',marginBottom:670,height:50, width:90, paddingLeft:20,color:'white'}}>... </Text>
                           </View>
                           <View style={{ height: 85, width: 90, backgroundColor: '#9fe8',marginBottom:180}}>
                           <Text style={{fontWeight: 'bold',marginBottom:670,height:50, width:90, paddingLeft:25}}>...</Text>
                           </View>
                           <View style={{ height: 85, width: 90, backgroundColor: '#048b9a' ,marginBottom:180}}>
                           <Text style={{fontWeight: 'bold',marginBottom:670,height:50, width:90, paddingLeft:30,color:'white'}}>...</Text></View>
                           <View style={{ height: 85, width: 90, backgroundColor: '#9fe8',marginBottom:180 }}>
                           <Text style={{fontWeight: 'bold',marginBottom:670,height:50, width:90, paddingLeft:35}}>...</Text>
                           </View>

                            </View>
                            <View style={styles.containrow }>
                            <View style={{ height: 90, width: 90, backgroundColor: '#9fe8' ,marginBottom:200}}>
                            <Text style={{fontWeight: 'bold',marginBottom:670,height:50, width:90, paddingLeft:20}}>... </Text>
                            </View>
                            <View style={{ height: 90, width: 90, backgroundColor: '#048b9a',marginBottom:200}}>
                            <Text style={{fontWeight: 'bold',marginBottom:670,height:50, width:90, paddingLeft:25,color:'white'}}>...</Text>
                            </View>
                            <View style={{ height: 90, width: 90, backgroundColor: '#9fe8' ,marginBottom:200}}>
                            <Text style={{fontWeight: 'bold',marginBottom:670,height:50, width:90, paddingLeft:30}}>...</Text></View>
                            <View style={{ height: 90, width: 90, backgroundColor: '#048b9a',marginBottom:200 }}>
                            <Text style={{fontWeight: 'bold',marginBottom:670,height:50, width:90, paddingLeft:35,color:'white'}}>...</Text>
                            </View>





                                                              </View>


                                                              <View style={styles.btnBack}>
                                                                                        <Button
                                                                                        title="Back"
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

    marginBottom: 50,
  },


    containrow: {

      flex: 1,
      flexDirection: 'row',
    alignItems: 'center',
  },





  btnBack:{
    //position: 'absolute',
  bottom: 50,
  left: -110,

  }






});

export default Planning2
