Name: Unathi Lahliwe 
Student Number: ST10487772 
Module: MAST5112 — Mobile App Scripting 

 Overview 

The Chef Menu App is a cross-platform mobile application built with React Native (TypeScript). It was developed as part of the MAST5112 Mobile App Scripting Part 2 Assignment. 
 
The app allows a private chef (Christoffel) to create, manage, and display a dynamic menu for clients. It is designed to work on both Android and iOS using React Native. 

Features 

• Add new menu items with: Dish Name, Description, Course (Starters, Mains, Desserts, Drinks), Price 

• Predefined course selection (no manual typing required). 

• Display all menu items on the Home Screen. 

• Show total number of menu items. 

• Calculate and display the average price per course. 

• Remove menu items (long press on Home or via Details screen). 

• Separate Add Item Screen to manage dishes. 

• Filter Screen to view items by course only. 

• Simple navigation between screens using React Navigation. 

 Project Structure 

ChefMenu/ 
  App.tsx 
  README.docx 
  src/ 
    context/ 
      MenuContext.tsx 
    data/ 
      courses.ts 
    screens/ 
      HomeScreen.tsx 
      AddItemScreen.tsx 
      FilterScreen.tsx 
      ItemDetailsScreen.tsx 
    types.ts 

 Installation & Setup 

1. Clone the repository: 

   git clone https:  https://github.com/ST10487772/MAST5112_Part-2/tree/main
   cd ChefMenu 

2. Install dependencies (Expo recommended): 

   npx expo install react-native-gesture-handler react-native-safe-area-context @react-native-picker/picker 
   npm install @react-navigation/native @react-navigation/native-stack uuid 
   npm i -D @types/uuid 

3. Run the app (Expo): 

   npx expo start

GitHub Link:
https://github.com/ST10487772/MAST5112_Part-2/tree/main

YouTube Video:
👉  https://www.youtube.com/watch?v=xpC5lL7fHcU

Technologies Used 

• React Native 

• TypeScript 

• React Navigation 

• Context API (for state management) 

• Expo (for development)

Reference List: 

Expo.dev, 2024. Getting started with Expo in React Native. [online] Available at: https://docs.expo.dev/get-started/installation/ [Accessed 6 October 2025]. 

React Native, 2024. React Native documentation. [online] Available at: https://reactnative.dev/docs/getting-started [Accessed 6 October 2025]. 

W3Schools, 2024. React Native tutorial. [online] Available at: https://www.w3schools.com/react/react_native_intro.asp [Accessed 6 October 2025]. 

Microsoft, 2024. Using Visual Studio Code for React Native development. [online] Available at: https://code.visualstudio.com/docs/reactnative/getting-started [Accessed 6 October 2025]. 

Stack Overflow, 2024. Common React Native errors and troubleshooting tips. [online] Available at: https://stackoverflow.com/questions/tagged/react-native [Accessed 6 October 2025]. 

Genymotion, 2024. Using Genymotion as an Android emulator. [online] Available at: https://www.genymotion.com/ [Accessed 6 October 2025]. 

BlueStacks, 2024. How to install and run Expo Go on BlueStacks. [online] Available at: https://support.bluestacks.com/ [Accessed 6 October 2025]. 

Packt Publishing, 2023. React Native Cookbook: Bringing mobile development to life. 2nd ed. Birmingham: Packt Publishing. 

Mozilla Developer Network (MDN), 2024. JavaScript fundamentals for React Native developers. [online] Available at: https://developer.mozilla.org/en-US/docs/Web/JavaScript [Accessed 6 October 2025]. 

 
