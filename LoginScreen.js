import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, KeyboardAvoidingView, Platform, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as Animatable from 'react-native-animatable';

const LoginScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  const handleLogin = () => {
    if (!username || !password) {
      showAlert('Username and password are required.');
      return;
    }
    
    // Make API call to authenticate user
    fetch('http://192.168.19.209/vivek/login.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username,
        password,
      }),
    })
    .then(response => response.text())
    .then(result => {
      if (result === 'success') {
        // Handle successful login and navigate to Dashboard with username
        showAlert('Login successful!');
        navigation.navigate('Dashboard', { username }); // Navigate to Dashboard screen with username
      } else {
        showAlert('Invalid username or password.');
      }
    })
    .catch(error => {
      console.error('Error:', error);
      showAlert('An error occurred. Please try again.');
    });
  };
  
  const showAlert = (message) => {
    Alert.alert('Alert', message);
  };

  const handleSignupPress = () => {
    navigation.navigate('Signup');
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === 'ios' ? 'padding' : null}>
      <Animatable.Text animation="fadeInDown" style={styles.title}>Welcome, Doctor</Animatable.Text>
      <Animatable.Text animation="fadeInDown" delay={200} style={styles.title1}>Please Login to Continue</Animatable.Text>
      <Animatable.View animation="fadeInUp" delay={400} style={styles.outerBox}>
        <View style={styles.form}>
          <Animatable.View animation="fadeIn" delay={600} style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              onChangeText={setUsername}
              value={username}
              placeholder="Username"
              placeholderTextColor="#ccc"
              autoCapitalize="none"
            />
          </Animatable.View>
          <Animatable.View animation="fadeIn" delay={800} style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              onChangeText={setPassword}
              value={password}
              placeholder="Password"
              placeholderTextColor="#ccc"
              secureTextEntry
            />
          </Animatable.View>
        </View>
      </Animatable.View>
      <Animatable.View animation="fadeInUp" delay={1000}>
        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.buttonText}>LOGIN</Text>
        </TouchableOpacity>
      </Animatable.View>
      <Animatable.Text animation="fadeInUp" delay={1200} style={styles.account}>Not a user yet?</Animatable.Text>
      <Animatable.View animation="fadeInUp" delay={1400}>
        <TouchableOpacity onPress={handleSignupPress}>
          <Text style={styles.signup}>Sign up</Text>
        </TouchableOpacity>
      </Animatable.View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F1F1F1',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#213066',
    textShadowColor: 'rgba(0, 0, 0, 0.3)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 4,
  },
  title1: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 30,
    color: '#213066',
    textShadowColor: 'rgba(0, 0, 0, 0.3)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
  },
  outerBox: {
    width: '80%',
    backgroundColor: '#213066', 
    padding: 20,
    marginTop: 20,
    marginBottom: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 15,
  },
  form: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputContainer: {
    marginTop: 25,
    marginBottom: 30,
    borderRadius: 35,
    backgroundColor: 'white',
    width: '100%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 10,
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: 'transparent',
    borderRadius: 20,
    paddingHorizontal: 20,
    fontSize: 16,
    color: 'black',
    width: '100%',
  },
  loginButton: {
    backgroundColor: '#213066', 
    borderRadius: 35,
    paddingVertical: 15,
    paddingHorizontal: 30,
    alignItems: 'center',
    marginBottom: 30,
    marginTop: 25,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 15,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
    textShadowColor: 'rgba(0, 0, 0, 0.3)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
  },
  account: {
    fontSize: 16,
    marginTop: 10,
    color: '#213066',
  },
  signup: {
    fontSize: 16,
    color: '#213066',
    textDecorationLine: 'underline',
  }
});

export default LoginScreen;
