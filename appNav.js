import { StackNavigator } from 'react-navigation';
import LoginController from './src/components/login/LoginController';
import ChatController from './src/components/chat/ChatController'
export const AppNav = StackNavigator({
    Login: { screen: LoginController },
    Chat:{screen:ChatController}
}
    ,
    {
        // headerMode: 'screen',
        // mode: 'card',

        navigationOptions: {
           header:null
        }
    }
);

export default AppNav;