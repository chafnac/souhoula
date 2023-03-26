import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import imagePath from '../assets/souhoulabg.png'; // Update this path to match the location of your background image
import Icon from 'react-native-vector-icons/FontAwesome';
const AuthScreen = () => {
  const navigation = useNavigation();

  const handleFacebookLogin = () => {
    // Add your Facebook login logic here
  };

  const handleAppleLogin = () => {
    // Add your Apple login logic here
  };

  const goToSignUp = () => {
    navigation.navigate('SignUp');
  };

  const goToLogin = () => {
    navigation.navigate('Login');
  };

  return (
    <ImageBackground source={imagePath} style={styles.backgroundImage}>
      <View style={styles.overlay}>
        <View style={styles.header}>
          <Text style={styles.appName}>truth<Text style={styles.appNameSmall}>only</Text></Text>
        </View>
        <View style={styles.marketingContainer}>
          <View style={styles.marketing}>
            <Text style={styles.marketingText1}>ASK. CHAT. SHARE</Text>
          </View>
          <View style={styles.marketing}>
            <Text style={styles.marketingText2}>ANONYMOUSLY.</Text>
          </View>
        </View>
        {/* Get started with */}
        <Text style={styles.getStartedText}>Get started with:</Text>

        {/* Buttons */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={handleFacebookLogin}>
            <Icon name="facebook-official" size={20} color="white" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={handleAppleLogin}>
            <Icon name="apple" size={20} color="white" />
          </TouchableOpacity>

        </View>
        <View style={styles.signUpContainer}>
          <TouchableOpacity style={styles.signUpButton} onPress={() => console.log('Sign Up button pressed')}>
            <Text style={styles.signUpButtonText}>Sign Up</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.loginText}>Have an account: <Text style={styles.loginTextLink}>Login.</Text></Text>

      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
  },
  header: {
    marginTop: 90,
    alignItems: 'center',
  },
  appName: {
    fontSize: 40,
    color: 'white',
    fontFamily: 'Anton-Regular', // Change the font family to your desired font
  },
  appNameSmall: {
    fontSize: 24,
  },
  marketingContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  },
  marketing: {
    backgroundColor: '#d69cbc',
    paddingHorizontal: 8,
    paddingVertical: 1,
    marginTop: 15,
    borderRadius: 1,
    marginHorizontal: 5,
    
  },
  marketingText1: {
    color: '#111111', // Change this color to suit the blue background
    fontSize: 26, // Updated font size
    fontWeight: 'bold',
    fontFamily: 'Anton-Regular',
  },
  marketingText2: {
    color: 'white',
    fontSize: 26, // Updated font size
    fontWeight: 'bold',
    fontFamily: 'Anton-Regular',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 30,
  },
  title: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  getStartedText: {
    fontSize: 14,
    textAlign: 'center',
    color: 'white',
    marginTop: 60,
    marginBottom: 30,
  },
  loginText: {
    fontSize: 14,
    textAlign: 'center',
    color: 'white',
    marginTop: 20
  },
  loginTextLink: {
    fontWeight: 'bold'
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    paddingHorizontal: 40, // Adjust this value to control the spacing between the buttons
    marginBottom: 20,
  },
  button: {
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 50,
    alignItems: 'center',
  },
  signUpContainer: {
    flexDirection: "row",
    justifyContent: 'space-around',
    paddingHorizontal: 40,
    width: '100%',

  },
  signUpButton: {
    backgroundColor: 'white',
    paddingHorizontal: 100,
    paddingVertical: 15,
    borderRadius: 5,
    marginBottom: 10,
  },
  signUpButtonText: {
    color: 'black',
    fontSize: 16,
    textAlign: 'center',
    fontWeight: 'bold'
  },
});

export default AuthScreen;

