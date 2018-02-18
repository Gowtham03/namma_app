import React, { PureComponent } from 'react';

import {
    TextInput, View, Text, Image, TouchableOpacity, ScrollView, KeyboardAvoidingView, Alert,
    Picker, Dimensions, FlatList, StyleSheet
} from 'react-native';
let {height, width} = Dimensions.get('window');
export default class ChatView extends PureComponent{
    static navigationOptions = {
        title:'login',
         header:null
    };
    constructor(props){
        super(props);
        const USERS_API = 'http://nammaapp.pythonanywhere.com/users/';

        this.state={
            items:[{
                    "name":"dhinesh",
                    "message" : "Heloo"
                },
                {
                    "name":"Jeeva",
                    "message" : "How are you"
                },
                {
                    "name":"dhinesh",
                    "message" : "Fine"
                }]
        }
    }
    renderChatItems({item,index}){
       let align='flex-start';
       let color='white'
       if(item.name==='dhinesh'){
           align='flex-end'
           color='#9EC2C0'
       }

        return(<View >
            <View style={[styles.container,{alignItems:align}]}>
            <View style={{flex:1,backgroundColor:color,minHeight:50,width:width-70,
                borderRadius: 2,
                elevation: 5,
                marginLeft: 5,
                marginRight: 5,
            justifyContent:'center',margin:5}}>
                <Text style={{marginLeft:10,marginVertical:10}}> {item.message}
                </Text>
            </View>
            </View>
            </View>
        )
    }
    render(){
        return(
            <View style={{flex:1,backgroundColor:'white'}}>
                <View style={{flex:0.1,alignItems:'center',justifyContent:'center',backgroundColor:'#9EC2C0'}}>
                    <Text style={{color:'white',fontSize:28,fontFamily:'monospace',fontWeight:'bold'}}>Chats</Text>
                </View>
                <FlatList
                    extraData={this.state}
                    data={this.state.items}
                    keyExtractor={(item, index) => index}
                    renderItem={this.renderChatItems.bind(this)}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        margin:5,
        marginRight: 5},
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
