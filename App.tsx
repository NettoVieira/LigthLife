import 'react-native-gesture-handler';
import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold,
} from '@expo-google-fonts/poppins';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import { ThemeProvider } from 'styled-components';

import theme from '~/global/theme';
import { AppRoutes } from '~/routes/app.routes';

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <View style={{ flex: 1, backgroundColor: theme.colors.background }}>
          <StatusBar style="dark" backgroundColor={theme.colors.background} translucent={false} />
          <AppRoutes />
        </View>
      </NavigationContainer>
    </ThemeProvider>
  );
}
