import React from 'react'
//import { reduxForm, Field } from "redux-form";
import { Text,StyleSheet, View, TextInput, Button,Image,AppRegistry } from 'react-native'

import {FontAwesome,AntDesign,SimpleLineIcons,Feather,Foundation} from '@expo/vector-icons';

//import { MaterialCommunityIcons } from '@expo/vector-icons';


class Resume extends React.Component {

      constructor(props){
        super(props)

        this.state = {
          total: '',
          duration: '',
        }
      }

      _handlePress() {
         console.log(this.state.total);
         console.log(this.state.duration);
      }


        render(){
          return (
            <View style={styles.container}>

            <View style={styles.containrow}>

              <View style={styles.iconwifi}>
              <AntDesign name="wifi" size={24} color="black"  />
              </View>

              <View style={styles.iconlist}>
              <Foundation name="list" size={24} color="green" style={{ paddingLeft:40}}/>
              </View>

           </View>

            <View style={styles.containarrow}>
              <AntDesign name="arrowright" size={24} color="black" />
              <Text style={{fontWeight: 'bold',fontSize: 20,color:'blue',marginBottom:-50,height:80, width:180, paddingLeft:55}}>Summary </Text>
              <AntDesign name="arrowleft" size={24} color="black" />
            </View>


            <View style={styles.containrow}>
              <Text style={{fontWeight: 'bold',marginBottom:550,height:25, width:150, paddingLeft:45}}> Total </Text>
              <TextInput style={{borderColor:'#000',borderWidth:2,marginBottom:560,height:25, width:150, paddingLeft:20}}  placeholder='from back end'
              onChangeText={(text) => this.setState({total:text})}
              />
            </View>

            <View style={styles.containrow}>
              <Text style={{fontWeight: 'bold',marginBottom:600,height:25, width:150, paddingLeft:45}}> Duration </Text>
              <TextInput style={{borderColor:'#000',borderWidth:2,marginBottom:610,height:25, width:150, paddingLeft:20}} placeholder='from back end'
              onChangeText={(text) => this.setState({duration:text})}
              />
            </View>

            <View style={styles.containrow}>
              <TextInput style={{borderColor:'#000',borderWidth:1,marginBottom:500,height:170, width:300, paddingLeft:20}} placeholder=' warning !! Pas assez de nourriture dans le réservoir'
              />
            </View>


            <View style={styles.btnBack}>
              <Button
              title="Back"
              onPress={() => { console.log("back")}}
              />
            </View>

            <View style={styles.btnLogin}>
              <Button
              title="Login"
              onPress={() => this._handlePress()}
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

      containrow: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',

      },

      containarrow: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom:350


      },

      btnBack:{
        position: 'absolute',
      bottom: 120,
      left: 40
      },

      btnLogin:{
        position: 'absolute',
      bottom: 120,
      right: 40
    },

    iconwifi:{
      position: 'absolute',
    top: 50,
    right: 120
    },

    iconlist:{
      position: 'absolute',
    top: 50,
    left: 100
    }

      });

      export default Resume
