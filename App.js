
import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from './src/screens/SplashScreen';
import OnboardingScreen1 from './src/screens/OnboardingScreen1';
import OnboardingScreen2 from './src/screens/OnboardingScreen2';
import OnboardingScreen3 from './src/screens/OnboardingScreen3';
import LoginScreen from './src/screens/LoginScreen';
import SignupScreen from './src/screens/SignupScreen';
// import HomeScreen from './src/screens/HomeScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import Header from './src/components/Header';
import IotHome from './src/components/iot/IotHome';
import Dashboard from './src/components/iot/Dashboard'; // Placeholder component
import DeviceMetrics from './src/components/iot/DeviceMetrics'; // Placeholder component
import EnvironmentMetrics from './src/components/iot/EnvironmentMetrics'; // Placeholder component
// import Devices from './src/components/iot/DeviceInformation'; // Placeholder component
import EcgHome from './src/components/ecg/EcgHome'; // Placeholder component
import ECGDashboard from './src/components/ecg/Dashboard/ECGDashboard';

import DeviceInformation from './src/components/iot/DeviceInformation';
import DeviceDetails from './src/components/iot/DeviceDetails';
import SimsTable from './src/components/sim/SimsTable'; // Placeholder component
import SimsHome from './src/components/sim/SimsHome';
import SimInformation from './src/components/sim/SimInformation'; // Placeholder component
import ForgotPasswordScreen from './src/screens/ForgetPasswordScreen'; // Placeholder component



const Stack = createStackNavigator();

const renderHeader = (headerProps) => <Header {...headerProps} />;

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen name="Splash" component={SplashScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Onboarding1" component={OnboardingScreen1} options={{ headerShown: false }} />
        <Stack.Screen name="Onboarding2" component={OnboardingScreen2} options={{ headerShown: false }} />
        <Stack.Screen name="Onboarding3" component={OnboardingScreen3} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Signup" component={SignupScreen} options={{ headerShown: false }} />
        {/* <Stack.Screen name="Home" component={HomeScreen} options={{ header: renderHeader }} /> */}
        <Stack.Screen name="Profile" component={ProfileScreen} options={{ header: renderHeader }} />
        <Stack.Screen name="IotHome" component={IotHome} options={{ header: renderHeader }} />
        <Stack.Screen name="Dashboard" component={Dashboard} options={{ header: renderHeader }} />
        <Stack.Screen name="DeviceMetrics" component={DeviceMetrics} options={{ header: renderHeader }} />
        <Stack.Screen name="EnvironmentMetrics" component={EnvironmentMetrics} options={{ header: renderHeader }} />
        <Stack.Screen name="DeviceInformation" component={DeviceInformation} options={{ header: renderHeader }} />
        <Stack.Screen name="DeviceDetails" component={DeviceDetails} options={{ header: renderHeader }} />
        <Stack.Screen name="EcgHome" component={EcgHome} options={{ header: renderHeader }} />
        <Stack.Screen name="ECGDashboard" component={ECGDashboard} options={{ header: renderHeader }} />
        <Stack.Screen name="SimsHome" component={SimsHome} options={{ header: renderHeader }} />
        <Stack.Screen name="SimsTable" component={SimsTable} options={{ header: renderHeader }} />
        <Stack.Screen name="SimInformation" component={SimInformation} options={{ header: renderHeader }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
