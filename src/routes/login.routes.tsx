import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Login } from '~/screens/login';

const { Navigator, Screen } = createNativeStackNavigator();

export function LoginRoutes() {
  return (
    <Navigator>
      <Screen 
        name='login'
        component={Login}
        options={{
          headerShown: false, // Remova o header
        }} 
      />
    </Navigator>
  )
}