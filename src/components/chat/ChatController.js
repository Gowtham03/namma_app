import React, { Component } from 'react';

import { FlatList,View,Text,Image,TouchableOpacity, ScrollView,KeyboardAvoidingView,Alert,
    Picker} from 'react-native';
import ChatView from './ChatView'
export default class ChatController extends Component{



    render(){
        return(

            <ChatView
                ref={(o => {
                    this.view = o;
                })}
            />
        )
    }
}