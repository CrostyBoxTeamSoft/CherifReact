import 'react-native-gesture-handler';
import {createAppContainer } from 'react-navigation';
import { createStackNavigator} from 'react-navigation-stack';
import Home from '../Components/Home';
import Options from '../Components/Options';
import Animal from '../Components/Animal';
import Reglage from '../Components/Reglage';
import Compte from '../Components/Compte';
import AddPet from '../Components/AddPet';
import Animal2 from '../Components/Animal2';
import Animal3 from '../Components/Animal3';
import Felix from '../Components/Felix';
import Planning from '../Components/Planning';
import Planning2 from '../Components/Planning2';
import FelixProg from '../Components/FelixProg.js';
const StackNavigator = createStackNavigator({
  Home:{
    screen: Home,
    navigationOptions: {
      title: "Home"

    }

  },
  Options:{
    screen: Options,
    navigationOptions: {
      title: "Options"

    }
  },
    Animal:{
      screen: Animal,
      navigationOptions: {
        title: "Animal"

      }
  },
  Reglage:{
    screen: Reglage,
    navigationOptions: {
      title: "Reglage"

    }
},
Compte:{
  screen: Compte,
  navigationOptions: {
    title: "Compte"

  }
},
AddPet:{
  screen: AddPet,
  navigationOptions: {
    title: "AddPet"

  }
},
  Animal2:{
    screen: Animal2,
    navigationOptions: {
      title: "Animal2"
    }

    },
    Animal3:{
      screen: Animal3,
      navigationOptions: {
        title: "Animal3"
      }
      },
    Felix: {
        screen: Felix,
        navigationOptions: {
          title: "Felix"

        }
      },
      FelixProg: {
          screen: FelixProg,
          navigationOptions: {
            title: "FelixProg"

          }
        },
      Planning: {
          screen: Planning,
          navigationOptions: {
            title: "Planning"

          }
        },
        Planning2: {
            screen: Planning2,
            navigationOptions: {
              title: "Planning2"

            }
          }




})
export default createAppContainer(StackNavigator);
