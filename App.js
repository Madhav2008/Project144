import React,{Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './screens/HomeScreen'
import PopularArticles from './screens/PopularArticles';
import RecommendedArticles from './screens/RecommendedArticles';
import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import {createMaterialTopTabNavigator} from 'react-navigation-tabs'
import { RFValue } from 'react-native-responsive-fontsize';

export default class App extends Component {
  render(){
    return (
      <AppContainer/>
    )
  }
}

const AppTabNavigator = createMaterialTopTabNavigator({
  RecommendedArticles:{screen:RecommendedArticles,
    navigationOptions:{
      tabBarLabel:'Recommended',
      tabBarOptions:{
        tabStyle:{backgroundColor:'lightgreen'},
        labelStyle:{color:'black'},
        indicatorStyle:{backgroundColor:'green'}
      }
    }
  },

  PopularArticles:{screen:PopularArticles,
    navigationOptions:{
      tabBarLabel:'Popular',
      tabBarOptions:{
        tabStyle:{backgroundColor:'lightgreen'},
        labelStyle:{color:'black'},
        indicatorStyle:{backgroundColor:'green'}
      }
    }
  }
})

const AppStackNavigator = createStackNavigator({
  Home:{screen:HomeScreen,
    navigationOptions:{
      headerShown:false
    }
  },

  AppTopNav:{screen:AppTabNavigator,
    navigationOptions:{
      headerBackTitle:null,
      headerTintColor:'white',
      headerTitle:'Recommended Articles',
      headerStyle:{
        backgroundColor:'lightgreen'
      },
      headerTitleStyle:{
        color:'black',
        fontSize:RFValue(18),
        fontWeight:'bold'
      }
    }
  }
},
{
  initialRouteName:'Home'
})

const AppContainer = createAppContainer(AppStackNavigator)
