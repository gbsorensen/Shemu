# 🛒 React Native Add to Cart App

A simple yet functional React Native app that allows users to browse a list of products, add them to a cart, view the cart contents in real-time, and apply dynamic discount vouchers.

This project was built as part of a coding assessment and demonstrates the use of core React Native concepts, hooks, context, and styling with Tailwind CSS for React Native.

---

## 📱 Features

### Static Product List
- 4 pre-defined products.
- Each product has:
  - `productName` (string)
  - `description` (string)
  - `price` (number)

### Add to Cart Functionality
- Add and remove individual items.
- Cart count updates in real time.

### Cart Screen
- Displays all cart items with:
  - Product name
  - Price
- Displays total amount (updates in real time).

### Bonus: Voucher Feature
- Enter a discount code in the format:  
  `discount10`, `discount30`, etc.
- Applies a percentage discount based on the number in the code.
- Shows updated discounted total.

### React Hooks Used
- `useState`
- `useEffect`
- `useMemo`
- `useContext`

### Tailwind CSS Styling
- Clean and responsive layout using Tailwind CSS for React Native (`nativewind`).

---

## 🛠Tech Stack

- React Native (with Expo or CLI)
- Tailwind CSS (`nativewind`)
- TypeScript
- React Navigation
- Custom Context API for cart management

---

## Installation

```bash
# Clone the repo
git clone https://github.com/your-username/react-native-cart-app.git
cd react-native-cart-app

# Install dependencies
npm install

# Run the app on Android
npx react-native run-android
