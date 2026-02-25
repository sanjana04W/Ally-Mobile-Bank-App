// screens/SignUpScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

export default function SignUpScreen({ navigation }) {
  const [name, setName] = useState('');
  const [accountNumber, setAccountNumber] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = () => {
    // Implement sign-up logic here (e.g., API call or form validation)
    navigation.navigate('Home'); // Navigate to Home screen after successful signup
  };

  return (
    <View style={styles.container}>
      {/* Bank Icon Section */}
      <View style={styles.iconSection}>
        <View style={styles.iconPlaceholder}>
          <Text style={styles.iconText}>🏦</Text>
        </View>
        <Text style={styles.connectText}>Connect to Your bank account</Text>
      </View>

      {/* Name Input */}
      <TextInput
        placeholder="Your Name"
        placeholderTextColor="#AAA"
        style={styles.input}
        value={name}
        onChangeText={setName}
      />

      {/* Bank Account Input */}
      <TextInput
        placeholder="Bank Account"
        placeholderTextColor="#AAA"
        style={styles.input}
        value={accountNumber}
        onChangeText={setAccountNumber}
      />

      {/* Email Input */}
      <TextInput
        placeholder="Email"
        placeholderTextColor="#AAA"
        style={styles.input}
        value={email}
        onChangeText={setEmail}
      />

      {/* Password Input */}
      <TextInput
        placeholder="Password"
        placeholderTextColor="#AAA"
        style={styles.input}
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      {/* Sign Up Button */}
      <TouchableOpacity style={styles.signUpButton} onPress={handleSignUp}>
        <Text style={styles.signUpButtonText}>Sign Up</Text>
      </TouchableOpacity>

      {/* Navigation to Login */}
      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text style={styles.loginText}>
          Always signed up? <Text style={styles.loginLink}>Log in</Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1A237E', // Dark blue background
    padding: 20,
    justifyContent: 'center',
  },
  iconSection: {
    alignItems: 'center',
    marginBottom: 20,
  },
  iconPlaceholder: {
    backgroundColor: '#1565C0',
    borderRadius: 50,
    padding: 20,
  },
  iconText: {
    fontSize: 32,
    color: 'white',
  },
  connectText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 10,
  },
  input: {
    backgroundColor: '#708090',
    color: 'white',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
  },
  signUpButton: {
    backgroundColor: '#303F9F',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginVertical: 10,
  },
  signUpButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  loginText: {
    color: '#AAA',
    textAlign: 'center',
    marginTop: 20,
  },
  loginLink: {
    color: '#1E90FF',
    fontWeight: 'bold',
  },
});






