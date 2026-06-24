import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar, StyleSheet, Platform, Image, Text, View, TouchableOpacity } from 'react-native';
import 'react-native-gesture-handler';

import {
  Menu,
  Home,
  Users,
  Briefcase,
  MessageSquare,
  FileText,
  Store,
  Settings,
  LayoutGrid,
} from 'lucide-react-native';

import FeedScreen from '../screens/FeedScreen/index';
import MyHubScreen from '../screens/MyHubScreen/index';
import JobsScreen from '../screens/JobsScreen/index';
import MessagesScreen from '../screens/MessageScreen/index';
import ArticlesScreen from '../screens/ArticlesScreen/index';
import MarketplaceScreen from '../screens/MarketplaceScreen/index';
import SettingsScreen from '../screens/SettingScreen/index';
import OnBoardingScreen from '../screens/OnBoarding/index';
import SignInScreen from '../screens/SignInScreen/index';
import SignUpScreen from '../screens/SignUpScreen/index';   

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

const CustomHeader = ({ navigation, userName, balance }) => {
  return (
    <SafeAreaView edges={['top']} style={styles.headerContainer}>
      <View style={styles.headerLeft}>
        <Image source={require('../assets/images/logo.png')} style={styles.headerLogo} />
        <Text style={styles.headerUserText}>{userName}</Text>
      </View>

      <View style={styles.headerRight}>
        <TouchableOpacity style={styles.balanceButton}>
          <Text style={styles.balanceText}>💵 {balance}</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuButton} onPress={() => navigation.openDrawer()}>
          <Menu size={24} color="#1a202c" strokeWidth={2} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const tabScreenOptions = ({ route }) => ({
  headerShown: false,
  tabBarActiveTintColor: '#3b82f6',
  tabBarInactiveTintColor: '#94a3b8',
  tabBarStyle: {
    height: 65,
    paddingBottom: 10,
    paddingTop: 5,
    backgroundColor: '#ffffff',
    borderTopWidth: 1,
    borderTopColor: '#f1f5f9',
  },
  tabBarLabelStyle: {
    fontSize: 11,
    fontWeight: '500',
  },
  tabBarIcon: ({ color, size }) => {
    const iconSize = size ? size : 22;

    if (route.name === 'Feed') return <Home color={color} size={iconSize} strokeWidth={2} />;
    if (route.name === 'MyHub') return <Users color={color} size={iconSize} strokeWidth={2} />;
    if (route.name === 'Jobs') return <Briefcase color={color} size={iconSize} strokeWidth={2} />;
    if (route.name === 'Messages')
      return <MessageSquare color={color} size={iconSize} strokeWidth={2} />;
    if (route.name === 'Articles')
      return <FileText color={color} size={iconSize} strokeWidth={2} />;
    if (route.name === 'Marketplace')
      return <Store color={color} size={iconSize} strokeWidth={2} />;

    return null;
  },
});

const TabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={tabScreenOptions}>
      <Tab.Screen name="Feed" component={FeedScreen} options={{ tabBarLabel: 'Feed' }} />
      <Tab.Screen
        name="MyHub"
        component={MyHubScreen}
        options={{ tabBarLabel: 'My Hub' }}
      />
      <Tab.Screen name="Jobs" component={JobsScreen} options={{ tabBarLabel: 'Jobs' }} />
      <Tab.Screen
        name="Messages"
        component={MessagesScreen}
        options={{ tabBarLabel: 'Messages' }}
      />
      <Tab.Screen
        name="Articles"
        component={ArticlesScreen}
        options={{ tabBarLabel: 'Articles' }}
      />
      <Tab.Screen
        name="Marketplace"
        component={MarketplaceScreen}
        options={{ tabBarLabel: 'Marketplace' }}
      />
    </Tab.Navigator>
  );
};

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={({ navigation }) => ({
        header: () => (
          <CustomHeader navigation={navigation} userName="Abdullah Azalea" balance="35" />
        ),
        drawerActiveTintColor: '#3b82f6',
        drawerInactiveTintColor: '#94a3b8',
        drawerStyle: {
          width: '80%',
          backgroundColor: 'black',
        },
      })}
    >
      <Drawer.Screen
        name="MainTabs"
        component={TabNavigator}
        options={{
          title: 'Home Dashboard',
          drawerIcon: ({ color, size }) => <LayoutGrid color={color} size={size} />,
        }}
      />
      <Drawer.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          title: 'Settings',
          drawerIcon: ({ color, size }) => <Settings color={color} size={size} />,
        }}
      />
    </Drawer.Navigator>
  );
};

export default function AppNavigator() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="OnBoarding" component={OnBoardingScreen} />
          <Stack.Screen name="SignIn" component={SignInScreen} />
          <Stack.Screen name="SignUp" component={SignUpScreen} />
          <Stack.Screen name="MainApp" component={DrawerNavigator} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },

  headerContainer: {
    flexDirection: 'row',
    height: Platform.OS === 'ios' ? 100 : 70,
    backgroundColor: '#ffffff',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#f1f5f9',
    paddingBottom: Platform.OS === 'ios' ? 20 : 10,
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerLogo: {
    width: 36,
    height: 36,
    borderRadius: 18,
    marginRight: 10,
  },
  headerUserText: {
    fontSize: 18,
    fontWeight: '700',
    color: '#1a202c',
  },
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  balanceButton: {
    backgroundColor: '#f1f5f9',
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#e2e8f0',
    marginRight: 12,
  },
  balanceText: {
    color: '#3b82f6',
    fontWeight: '700',
    fontSize: 15,
  },
  menuButton: {
    backgroundColor: '#f1f5f9',
    padding: 8,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#e2e8f0',
  },
});

