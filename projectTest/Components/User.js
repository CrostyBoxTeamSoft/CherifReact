import React from 'react'

import { Text,StyleSheet, View, TextInput, Button,Image } from 'react-native'

//import {FontAwesome,AntDesign,SimpleLineIcons,Feather,Foundation} from '@expo/vector-icons';
// affiche les infos de l'utilisateur
class User extends React.Component {

constructor(props){
  super(props)

  this.state = {
    pseudo: '',
    id: '',
    pwd: '',
    email: '',



  }
}

_handlePress() {
   console.log(this.state.pseudo);
   console.log(this.state.id);
   console.log(this.state.pwd);
   console.log(this.state.email);

}


    render(){
      return (

        <View style={styles.container}>

        <View style={styles.containrow}>
          <Text style={{fontWeight: 'bold',marginBottom:-50,height:25, width:150, paddingLeft:45}}> Pseudo </Text>
          <TextInput style={{borderColor:'#000',borderWidth:2,marginBottom:-50,height:25, width:150, paddingLeft:20}} placeholder=''
          onChangeText={(text) => this.setState({pseudo:text})}
          />
        </View>

        <View style={styles.containrow}>
          <Text style={{fontWeight: 'bold',marginBottom:-20,height:25, width:150, paddingLeft:45}}> identifiant </Text>
          <TextInput style={{borderColor:'#000',borderWidth:2,marginBottom:-20,height:25, width:150, paddingLeft:20}}  placeholder='IDuser'
          onChangeText={(text) => this.setState({id:text})}
          />
        </View>

        <View style={styles.containrow}>
          <Text style={{fontWeight: 'bold',marginBottom:100,height:25, width:150, paddingLeft:45}}> Password</Text>
          <TextInput style={{borderColor:'#000',borderWidth:2,marginBottom:100,height:25, width:150, paddingLeft:20}} placeholder='*******'
          onChangeText={(text) => this.setState({pwd:text})}
          />
        </View>

        <View style={styles.containrow}>
          <Text style={{fontWeight: 'bold',marginBottom:250,height:25, width:150, paddingLeft:45}}>  e mail  </Text>
          <TextInput style={{borderColor:'#000',borderWidth:2,marginBottom:250,height:25, width:150, paddingLeft:20}} placeholder='**@mail'
          onChangeText={(text) => this.setState({email:text})}
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

  btnBack:{
    position: 'absolute',
  bottom: 120,
  left: 40
  },

  btnLogin:{
    position: 'absolute',
  bottom: 120,
  right: 40
  }

});

export default User
