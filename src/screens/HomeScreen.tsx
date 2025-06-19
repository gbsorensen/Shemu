import React from 'react';
import { View, Text, ScrollView, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../App';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import { TouchableOpacity } from 'react-native';
//import { View as TWView, Text as TWText } from 'react-native';

export default function HomeScreen() {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const { addToCart, cartItems } = useCart();

  return (
    // <ScrollView className="p-4">
    //   <View className="flex-row justify-between items-center mb-4">
    //     <Text className="text-2xl font-bold">Products</Text>
    //     <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
    //       <Text className="text-blue-500">Go to Cart ({cartItems.length})</Text>
    //     </TouchableOpacity>
    //   </View>

    //   {products.map((product) => (
    //     <View key={product.id} className="bg-white p-4 mb-4 rounded-lg shadow">
    //       <Text className="text-lg font-semibold">{product.productName}</Text>
    //       <Text className="text-sm text-gray-600">{product.description}</Text>
    //       <Text className="mt-2 font-bold">₱{product.price}</Text>
    //       <Button title="Add to Cart" onPress={() => addToCart(product)} />
    //     </View>
    //   ))}
    // </ScrollView>
    <ScrollView className="p-4 bg-gray-50">
      <View className="flex-row justify-between items-center mb-4">
        <Text className="text-2xl font-bold">Products</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
          <Text className="text-blue-500">Go to Cart ({cartItems.length})</Text>
        </TouchableOpacity>
      </View>

      {products.map((product) => (
        <View key={product.id} className="bg-white p-4 mb-4 rounded-lg shadow">
          <Text className="text-lg font-semibold">{product.productName}</Text>
          <Text className="text-sm text-gray-600">{product.description}</Text>
          <Text className="mt-2 font-bold">₱{product.price}</Text>
          <View className="mt-2">
            <Button title="Add to Cart" onPress={() => addToCart(product)} />
          </View>
        </View>
      ))}
    </ScrollView>
  );
}



