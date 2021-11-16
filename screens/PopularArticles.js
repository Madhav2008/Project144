import React,{Component} from 'react'
import { View,Text,StyleSheet,TouchableOpacity,FlatList} from 'react-native'
import { Header,Icon,Card } from 'react-native-elements'
import {RFValue} from 'react-native-responsive-fontsize'
import axios from 'axios'

export default class PopularArticles extends Component{
    constructor(props){
        super(props)
        this.state = {
            data : []
        }
    }

    getData=()=>{
        const url = 'http://localhost:5000/popular-articles'
        axios
        .get(url)
        .then(response=>{
            this.setState({
                data:response.data.data
            })
        })
        .catch(error=>{
            console.log(error.message)
        })
    }

    componentDidMount(){
        this.getData()
    }

    keyExtractor=(item,index)=>{
        index.toString()
    }

    renderItem=({item,index})=>{
        return(
            <Card 
            key = {`card ${index}`}
            featuredTitle = {item.title}
            containerStyle = {styles.cardContainer}
            featuredTitleStyle = {styles.title}
            featuredSubtitle= {item.lang,' ',item.total_events}
            featuredSubtitleStyle = {styles.subtitle}/>
        )
    }

    render(){
        const {data} = this.state
        return(
            <View style = {styles.container}>
                <FlatList
                renderItem = {this.renderItem}
                keyExtractor = {this.keyExtractor}
                data = {data}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor : 'lightyellow'
    },

    title : {
        alignSelf : 'flex-start',
        paddingLeft : RFValue(15),
        fontSize : RFValue(25),
        marginTop : RFValue(65),
        color : 'blue'
    },

    subtitle : {
        fontWeight : 'bold',
       alignSelf : 'flex-start',
       fontSize : RFValue(20),
       paddingLeft : RFValue(15),
       color : 'black'
    },

    cardContainer : {
        flex : 1,
        borderRadius : RFValue(10),
        justifyContent : 'center',
        marginBottom : RFValue(20)
    },
})