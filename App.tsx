import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { CartProvider } from './src/context/CartContext';
import HomeScreen from './src/screens/HomeScreen';
import CartScreen from './src/screens/CartScreen';
import { enableScreens } from 'react-native-screens';

enableScreens();

export type RootStackParamList = {
  Products: undefined;
  Cart: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <CartProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Products" component={HomeScreen} />
          <Stack.Screen name="Cart" component={CartScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </CartProvider>
  );
}

// import { View, Text } from 'react-native';

// export default function App() {
//   return (
//     <View className="flex-1 items-center justify-center bg-blue-500">
//       <Text className="text-white text-lg">NativeWind Works!</Text>
//     </View>
//   );
// }
