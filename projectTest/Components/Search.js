// Components/Search.js
import React from 'react'
//import { reduxForm, Field } from "redux-form";
import { Text,StyleSheet, View, TextInput, Button,Image } from 'react-native'
//import { reduxForm, Field } from "redux-form";

class Search extends React.Component {

  constructor(props){
    super(props)

    this.state = {
      ID: '',
      password: '',
    }
  }

  _handlePress() {
     console.log(this.state.ID);
     console.log(this.state.password);
     console.log(this.state.confirmpwd);
     console.log(this.state.email);
  }


    render(){
      return (
        <View style={styles.container}>

        <View style={styles.containrow}>
          <Text style={{fontWeight: 'bold',marginBottom:-200,height:25, width:150, paddingLeft:45}}> identifiant </Text>
          <TextInput style={{borderColor:'#000',borderWidth:2,marginBottom:-200,height:25, width:150, paddingLeft:20}}  placeholder='SuperID'
          onChangeText={(text) => this.setState({ID:text})}
          />
        </View>

        <View style={styles.containrow}>
          <Text style={{fontWeight: 'bold',marginBottom:-50,height:25, width:150, paddingLeft:45}}> Password </Text>
          <TextInput style={{borderColor:'#000',borderWidth:2,marginBottom:-50,height:25, width:150, paddingLeft:20}} placeholder='*******'
          onChangeText={(text) => this.setState({password:text})}
          />
        </View>

        <View style={styles.containrow}>
          <Text style={{fontWeight: 'bold',marginBottom:100,height:25, width:150, paddingLeft:45}}> confirm </Text>
          <TextInput style={{borderColor:'#000',borderWidth:2,marginBottom:100,height:25, width:150, paddingLeft:20}} placeholder='*******'
          onChangeText={(text) => this.setState({confirmpwd:text})}
          />
        </View>

        <View style={styles.containrow}>
          <Text style={{fontWeight: 'bold',marginBottom:250,height:25, width:150, paddingLeft:45}}>  email  </Text>
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

export default Search
