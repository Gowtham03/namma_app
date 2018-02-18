import React, { Component } from 'react';

import { FlatList,View,Text,Image,TouchableOpacity, ScrollView,KeyboardAvoidingView,Alert,
    Picker} from 'react-native';
import LoginView from './loginView'
export default class LoginController extends Component{


    onPressLogin(){
        this.props.navigation.navigate('Chat')
    }
    render(){
        return(

            <LoginView
                ref={(o => {
                    this.view = o;
                })}
                onPressLogin={this.onPressLogin.bind(this)}
            />
        )
    }
}