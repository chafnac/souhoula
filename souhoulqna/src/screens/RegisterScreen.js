import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity, StyleSheet} from 'react-native';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import {useNavigation} from '@react-navigation/native';
const RegisterScreen = () => {
    const navigation = useNavigation();
  const [username, setUsername] = useState('');
  const [gender, setGender] = useState('');
  const [birthday, setBirthday] = useState('');

  const handleRegister = async () => {
    try {
      const user = auth().currentUser;
  
      // Save additional user information to Firestore
      await firestore().collection('users').doc(user.uid).set({
        username,
        gender,
        birthday,
      });
  
      // Update user display name with the entered username
      await user.updateProfile({
        displayName: username,
      });
  
      // Navigate to the Tutorial screen
      navigation.navigate('Tutorial');
    } catch (error) {
      console.error('Error updating user data:', error);
    }
  };
  

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Complete Registration</Text>
      <TextInput
        style={styles.input}
        value={username}
        onChangeText={setUsername}
        placeholder="Username"
      />
      <TextInput
        style={styles.input}
        value={gender}
        onChangeText={setGender}
        placeholder="Gender"
      />
      <TextInput
        style={styles.input}
        value={birthday}
        onChangeText={setBirthday}
        placeholder="Birthday"
      />
      <TouchableOpacity style={styles.registerButton} onPress={handleRegister}>
        <Text style={styles.registerButtonText}>Register</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    width: '80%',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
  },
  registerButton: {
    backgroundColor: 'blue',
    paddingHorizontal: 50,
    paddingVertical: 10,
    borderRadius: 5,
  },
  registerButtonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default RegisterScreen;
