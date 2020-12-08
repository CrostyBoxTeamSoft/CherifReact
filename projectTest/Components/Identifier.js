//import React from 'react'

//import { Text,StyleSheet, View, TextInput, Button,Image } from 'react-native'

//class Identifier {

const peps = {
		 pseudo :'name',
		 id : 'number',
     password :'pwd',
     email :'xxxx@gmail.com',

     get fullInfo() {
       return `${peps.pseudo} ${peps.id} ${peps.password} ${peps.email}`
     },
     set fullInfo(value){
       const parts = value.split('');
       this.pseudo=parts[0];
       this.id=parts[1];
       this.password=parts[2];
       this.email=parts[3];
     }
	};
  peps.fullInfo='simran 12 mikymiky kunye@gmail.com';

  console.log(peps);
