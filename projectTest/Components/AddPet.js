
import React from 'react'

import { Text,StyleSheet, View, TextInput, Button,Image } from 'react-native'

import {FontAwesome,AntDesign,SimpleLineIcons,Feather,Foundation} from '@expo/vector-icons';

class AddPet extends React.Component {

  constructor(props){
    super(props)

    this.state = {
      Machine: '',
      Wifi: '',
      password: '',
      Name: '',
      Species: '',
      Race: '',
      Age: '',
      Weight: '',

    }
  }

  _handlePress() {
     console.log(this.state.Machine);
     console.log(this.state.Wifi);
     console.log(this.state.password);
     console.log(this.state.Name);
     console.log(this.state.Species);
     console.log(this.state.Race);
     console.log(this.state.Age);
     console.log(this.state.Weight);
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

        <View style={styles.containrow}>
          <AntDesign name="arrowright" size={24} color="black"/>
          <Text style={{fontWeight: 'bold',fontSize: 20,color:'blue',marginBottom:-50,height:80, width:180, paddingLeft:55}}> Add pet </Text>
          <AntDesign name="arrowleft" size={24} color="black" />
        </View>

        <View style={styles.containrow}>
          <Text style={{fontWeight: 'bold',marginBottom:-70,height:25, width:150, paddingLeft:45}}> Machine </Text>
          <TextInput style={{borderColor:'#000',borderWidth:2,marginBottom:-55,height:25, width:150, paddingLeft:20}}  placeholder='xxxxxxx'
          onChangeText={(text) => this.setState({Machine:text})}
          />
        </View>

        <View style={styles.containrow}>
          <Text style={{fontWeight: 'bold',marginBottom:-20,height:25, width:150, paddingLeft:45}}> Wifi </Text>
          <TextInput style={{borderColor:'#000',borderWidth:2,marginBottom:-10,height:25, width:150, paddingLeft:20}}  placeholder='id'
          onChangeText={(text) => this.setState({Wifi:text})}
          />
        </View>

        <View style={styles.containrow}>
          <Text style={{fontWeight: 'bold',marginBottom:30,height:25, width:150, paddingLeft:45}}> Password </Text>
          <TextInput style={{borderColor:'#000',borderWidth:2,marginBottom:40,height:25, width:150, paddingLeft:20}} placeholder='*******'
          onChangeText={(text) => this.setState({password:text})}
          />
        </View>

        <View style={styles.containrow}>
          <Text style={{fontWeight: 'bold',marginBottom:100,height:25, width:150, paddingLeft:45}}> Name </Text>
          <TextInput style={{borderColor:'#000',borderWidth:2,marginBottom:100,height:25, width:150, paddingLeft:20}} placeholder='Felix'
          onChangeText={(text) => this.setState({Name:text})}
          />
        </View>

        <View style={styles.containrow}>
          <Text style={{fontWeight: 'bold',marginBottom:150,height:25, width:150, paddingLeft:45}}>  Species  </Text>
          <TextInput style={{borderColor:'#000',borderWidth:2,marginBottom:160,height:25, width:150, paddingLeft:20}} placeholder='Chat'
          onChangeText={(text) => this.setState({Species:text})}
          />
        </View>

        <View style={styles.containrow}>
          <Text style={{fontWeight: 'bold',marginBottom:190,height:25, width:150, paddingLeft:45}}>  Race  </Text>
          <TextInput style={{borderColor:'#000',borderWidth:2,marginBottom:200,height:25, width:150, paddingLeft:20}} placeholder='Persan'
          onChangeText={(text) => this.setState({Race:text})}
          />
        </View>

        <View style={styles.containrow}>
          <Text style={{fontWeight: 'bold',marginBottom:250,height:25, width:150, paddingLeft:45}}>  Age  </Text>
          <TextInput style={{borderColor:'#000',borderWidth:2,marginBottom:250,height:25, width:150, paddingLeft:20}} placeholder='3 mois'
          onChangeText={(text) => this.setState({Age:text})}
          />
        </View>

        <View style={styles.containrow}>
          <Text style={{fontWeight: 'bold',marginBottom:280,height:25, width:150, paddingLeft:45}}>  Weight  </Text>
          <TextInput style={{borderColor:'#000',borderWidth:2,marginBottom:290,height:25, width:150, paddingLeft:20}} placeholder='2,5 Kg'
          onChangeText={(text) => this.setState({Weight:text})}
          />
        </View>



        <View style={styles.btnBack}>
          <Button
          title="Back"
            onPress={() => this.props.navigation.navigate("Animal3")}
          />
        </View>

        <View style={styles.btnSave}>
          <Button
          title="Save"
          onPress={() => this.props.navigation.navigate("Animal2")}
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

  btnBack:{
    position: 'absolute',
  bottom: 120,
  left: 40
  },

  btnSave:{
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

export default AddPet
