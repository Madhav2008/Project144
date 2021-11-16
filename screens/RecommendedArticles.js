import React,{Component} from 'react'
import { View,Text,StyleSheet,TouchableOpacity,FlatList} from 'react-native'
import { Header,Icon } from 'react-native-elements'
import {RFValue} from 'react-native-responsive-fontsize'
import axios from 'axios'

export default class RecommendedArticles extends Component{
    constructor(props){
        super(props)
        this.state = {
            data : []
        }
    }

    getData=()=>{
        const url = 'http://localhost:5000/recommended-articles'
        axios
        .get(url)
        .then(async response=>{
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

    keyExtractor=(item,index)=>{index.toString()}

    renderItem = ({item,index}) =>{
        return(
            <Card
            key = {`card-${index}`}
            featuredTitle = {item.title}
            featuredTitleStyle = {styles.title}
            containerStyle = {styles.cardContainer}
            featuredSubtitle = {item.lang,' ',item.total_events}
            featuredSubtitleStyle = {styles.subTitle}/>
        )
    }

    render(){
        const {data} = this.state
        return(
            <View style = {styles.container}>
                <FlatList
                renderItem = {this.renderItem}
                data = {data}
                keyExtractor = {this.keyExtractor}/>
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
        fontSize : RFValue(25),
        fontWeight : 'bold',
        alignSelf : 'flex-start',
        paddingLeft : RFValue(15),
        marginTop : RFValue(60),
        color : 'blue'
    },

    cardContainer : {
        flex : 1,
        justifyContent : 'center',
        borderRadius : RFValue(10),
        height : RFValue(300),
        marginBottom : RFValue(20)
    },

    subTitle : {
        fontSize : RFValue(20),
        fontWeight : 'bold',
        alignSelf : 'flex-start',
        paddingLeft : RFValue(15),
        color : 'black'
    },
})