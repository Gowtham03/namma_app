import React, { PureComponent } from 'react';

import { TextInput,View,Text,Image,TouchableOpacity, ScrollView,KeyboardAvoidingView,Alert,
    Picker,Dimensions} from 'react-native';
let {height, width} = Dimensions.get('window');
export default class LoginView extends PureComponent{

    render(){

        return(
            <View style={{flex:1,backgroundColor:'red'}}>
               <Image style={{width:width,height:height}} source={require('./login_bg.jpg')}/>
                <View style={{position:'absolute',width:width,height:height}}>
                    <View style={{flex:0.3,alignItems:'center',justifyContent:'flex-end'}}>
                        <Text style={{fontSize:36,color:'white',fontWeight:'bold'}}>NAMMA APP</Text>
                    </View>
                    <View style={{flex:0.7,alignItems:'center',marginTop:80}}>
                       <TextInput style={{width:width-50,color:'white',textAlign:'center',fontSize:20,fontWeight:'500',fontFamily:'monospace'}} placeholder={'Enter Username'} underlineColorAndroid={'white'}/>
                        <TextInput style={{width:width-50,color:'white',textAlign:'center',fontSize:20,marginTop:30,fontWeight:'500',fontFamily:'monospace'}}
                                   placeholder={'Enter Password'}
                                   underlineColorAndroid={'white'}
                                   autoCapitalize={'none'}
                                   secureTextEntry={true}/>
                        <TouchableOpacity style={{marginTop:60,borderRadius:20,borderColor:'white',borderWidth:2}} onPress={this.props.onPressLogin.bind(this)}>
                            <Text style={{backgroundColor:'transparent',fontSize:26,paddingHorizontal:60,paddingVertical:7,color:'white',fontWeight:'bold'}}>Login</Text>
                        </TouchableOpacity>

                    </View>
                </View>
            </View>
        )
    }


}