import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useTheme } from 'styled-components';

import { RegisterUserRoutes } from '~/routes/registerUser.routes';

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
  const { colors } = useTheme();

  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        contentStyle: { backgroundColor: colors.background },
      }}>
      <Screen name="RegisterUserRoutes" component={RegisterUserRoutes} />
    </Navigator>
  );
}
