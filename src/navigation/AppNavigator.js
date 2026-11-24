
import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import LoginScreen from '../screens/LoginScreen';
import CadastroScreen from '../screens/CadastroScreen';
import HomeScreen from '../screens/HomeScreen';

import colors from '../styles/colors';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,

        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.textSecondary,

        tabBarStyle: {
          height: 65,
          paddingBottom: 8,
          paddingTop: 6,
          backgroundColor: colors.white,
          borderTopColor: colors.border,
        },

        tabBarLabelStyle: {
          fontSize: 10,
          fontWeight: '600',
        },

        tabBarIcon: ({ color, size }) => {
          const icons = {
            Inicio: 'home-outline',
            Receitas: 'restaurant-outline',
            Ingredientes: 'leaf-outline',
            Planos: 'calendar-outline',
            Perfil: 'person-outline',
          };

          return (
            <Ionicons
              name={icons[route.name]}
              size={size}
              color={color}
            />
          );
        },
      })}
    >
      <Tab.Screen name="Inicio" component={HomeScreen} />
      <Tab.Screen name="Receitas" component={HomeScreen} />
      <Tab.Screen name="Ingredientes" component={HomeScreen} />
      <Tab.Screen name="Planos" component={HomeScreen} />
      <Tab.Screen name="Perfil" component={HomeScreen} />
    </Tab.Navigator>
  );
}

export default function AppNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="Login"
        component={LoginScreen}
      />

      <Stack.Screen
        name="Cadastro"
        component={CadastroScreen}
      />

      <Stack.Screen
        name="Principal"
        component={MainTabs}
      />
    </Stack.Navigator>
  );
}
