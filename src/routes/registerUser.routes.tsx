import { useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, Text } from 'react-native';
import { useTheme } from 'styled-components';

import { Tall } from '~/screens/registerUser/tall';

const { Navigator, Screen, Group } = createNativeStackNavigator();

export function RegisterUserRoutes() {
  const { colors } = useTheme();
  const { getState } = useNavigation();
  const state = getState();
  console.log(state?.routes[0].state?.routes);
  return (
    <>
      <Navigator
        screenOptions={{
          headerShown: false,
          contentStyle: { backgroundColor: colors.background },
        }}>
        <Screen name="Tall" component={Tall} />
      </Navigator>
      <View style={{ backgroundColor: 'red', height: 120 }}>
        <Text>Ola</Text>
      </View>
    </>
  );
}