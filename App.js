import Login from "./src/screens/Login"
import Signup from "./src/screens/Signup"
import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import Pred from "./src/screens/Pred"
import Result from "./src/screens/Result"

const navigator=createStackNavigator({
  Log:Login,
  Sign:Signup,
  Pred:Pred,
  Res:Result,
},{
  initialRouteName:'Log',
  defaultNavigationOptions:{
    title:'TANCET Predictor',
    cardStyle: {
      backgroundColor: 'transparent',
    },
  }
})

export default createAppContainer(navigator)