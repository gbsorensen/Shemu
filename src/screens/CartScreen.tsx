// import React, { useState, useMemo } from 'react';
// import { View, Text, ScrollView, Button, TextInput } from 'react-native';
// import { useCart } from '../context/CartContext';

// export default function CartScreen() {
//   const { cartItems, removeFromCart } = useCart();
//   const [voucher, setVoucher] = useState('');
//   const [voucherApplied, setVoucherApplied] = useState(false);
//   const [discountPercent, setDiscountPercent] = useState(0);

//   const total = useMemo(() => cartItems.reduce((sum, item) => sum + item.price, 0), [cartItems]);

//   const discount = useMemo(() => (total * discountPercent) / 100, [total, discountPercent]);

//   const finalTotal = total - discount;

//   const applyVoucher = () => {
//     const match = voucher.match(/^discount(\d{1,2})$/i);
//     if (match) {
//       const percent = parseInt(match[1], 10);
//       if (percent > 0 && percent <= 100) {
//         setDiscountPercent(percent);
//         setVoucherApplied(true);
//         alert(`🎉 ${percent}% discount applied!`);
//         return;
//       }
//     }
//     setDiscountPercent(0);
//     setVoucherApplied(false);
//     alert('Invalid voucher code. Use format like "discount10" or "discount30".');
//   };

//   return (
//     <ScrollView className="p-4">
//       <Text className="text-2xl font-bold mb-4">Your Cart</Text>

//       {cartItems.length === 0 ? (
//         <Text className="text-center text-gray-500">Your cart is empty.</Text>
//       ) : (
//         cartItems.map((item, index) => (
//           <View key={index} className="bg-white p-4 mb-4 rounded-lg shadow">
//             <Text className="text-lg font-semibold">{item.productName}</Text>
//             <Text className="mt-1">₱{item.price}</Text>
//             <Button title="Remove" color="red" onPress={() => removeFromCart(item.id)} />
//           </View>
//         ))
//       )}

//       <View className="my-6">
//         <Text className="font-semibold mb-1">Enter Voucher Code:</Text>
//         <TextInput
//           className="border p-2 rounded bg-white"
//           placeholder="e.g. discount10"
//           value={voucher}
//           onChangeText={setVoucher}
//         />
//         <Button title="Apply Voucher" onPress={applyVoucher} />
//       </View>

//       <View className="mt-4 bg-gray-100 p-4 rounded-lg">
//         <Text className="text-base">Subtotal: ₱{total.toFixed(2)}</Text>
//         {voucherApplied && (
//           <Text className="text-green-600">Discount ({discountPercent}%): -₱{discount.toFixed(2)}</Text>
//         )}
//         <Text className="text-lg font-bold mt-2">Final Total: ₱{finalTotal.toFixed(2)}</Text>
//       </View>
//     </ScrollView>
//   );
// }


import React, { useState, useMemo } from 'react';
import { View, Text, ScrollView, Button, TextInput } from 'react-native';
import { useCart } from '../context/CartContext';

export default function CartScreen() {
  const { cartItems, removeFromCartByIndex } = useCart();
  const [voucher, setVoucher] = useState('');
  const [voucherApplied, setVoucherApplied] = useState(false);
  const [discountPercent, setDiscountPercent] = useState(0);

  const total = useMemo(() => cartItems.reduce((sum, item) => sum + item.price, 0), [cartItems]);
  const discount = useMemo(() => (total * discountPercent) / 100, [total, discountPercent]);
  const finalTotal = total - discount;

  const applyVoucher = () => {
    const match = voucher.match(/^discount(\d{1,2})$/i);
    if (match) {
      const percent = parseInt(match[1], 10);
      if (percent > 0 && percent <= 100) {
        setDiscountPercent(percent);
        setVoucherApplied(true);
        alert(`🎉 ${percent}% discount applied!`);
        return;
      }
    }
    setDiscountPercent(0);
    setVoucherApplied(false);
    alert('Invalid voucher code. Use format like "discount10" or "discount30".');
  };

  return (
    <ScrollView className="p-4">
      <Text className="text-2xl font-bold mb-4">Your Cart</Text>

      {cartItems.length === 0 ? (
        <Text className="text-center text-gray-500">Your cart is empty.</Text>
      ) : (
        cartItems.map((item, index) => (
          <View key={`${item.id}-${index}`} className="bg-white p-4 mb-4 rounded-lg shadow">
            <Text className="text-lg font-semibold">{item.productName}</Text>
            <Text className="mt-1">₱{item.price}</Text>
            <Button title="Remove" color="red" onPress={() => removeFromCartByIndex(index)} />
          </View>
        ))
      )}

      <View className="my-6">
        <Text className="font-semibold mb-1">Enter Voucher Code:</Text>
        <TextInput
          className="border p-2 rounded bg-white"
          placeholder="e.g. discount10"
          value={voucher}
          onChangeText={setVoucher}
        />
        <Button title="Apply Voucher" onPress={applyVoucher} />
      </View>

      <View className="mt-4 bg-gray-100 p-4 rounded-lg">
        <Text className="text-base">Subtotal: ₱{total.toFixed(2)}</Text>
        {voucherApplied && (
          <Text className="text-green-600">Discount ({discountPercent}%): -₱{discount.toFixed(2)}</Text>
        )}
        <Text className="text-lg font-bold mt-2">Final Total: ₱{finalTotal.toFixed(2)}</Text>
      </View>
    </ScrollView>
  );
}
