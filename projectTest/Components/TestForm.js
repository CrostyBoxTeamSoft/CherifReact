// Components/Search.js
import React from 'react'
//import { reduxForm, Field } from "redux-form";
import { StyleSheet, View, TextInput, Button } from 'react-native'
//import { reduxForm, Field } from "redux-form";

class App extends React.Component {

    state = {
      Id : null,
      pwd :null,
      confirmpwd :null,
      mail:null
    };

    change = e=> {
      this.setState({
        [e.target.id]:e.target.value
      });
    };

    submit = e =>{
      e.preventDefault();
      console.log(this.state);
    };

    render(){
      return (
        <div>
        <form onSubmit={this.submit}>
        <label htmlFor="Id"> Identifiant:</label>
        <input type="text" id="Id" onChange={this.Change} />

        <label htmlFor="pwd"> Password:</label>
        <input type="text" id="pwd" onChange={this.Change} />

        <label htmlFor="confirmpwd"> Confirm Password:</label>
        <input type="text" id="confirmpwd" onChange={this.Change} />

        <label htmlFor="mail"> Mail:</label>
        <input type="text" id="mail" onChange={this.Change} />

        <button> login </button>

        </form>

        </div>
      );
    }
}

export default TestForm
