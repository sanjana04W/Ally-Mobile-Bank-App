// screens/LoginScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

export default function LoginScreen({ navigation }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Implement login logic here (e.g., API call or validation)
    navigation.navigate('Home'); // Navigate to Home screen after login
  };

  return (
    <View style={styles.container}>
      {/* Welcome Text */}
      <Text style={styles.welcomeText}>WELCOME!</Text>

      {/* Bank Icon (Replace this with an actual icon or logo component if needed) */}
      <View style={styles.iconPlaceholder}>
        <Text style={styles.iconText}>🏦</Text>
      </View>

      {/* Username Input */}
      <TextInput
        placeholder="Username or Email"
        placeholderTextColor="#AAA"
        style={styles.input}
        value={username}
        onChangeText={setUsername}
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

      {/* Login Button */}
      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.loginButtonText}>Login</Text>
      </TouchableOpacity>

      {/* Register Link */}
      <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
        <Text style={styles.registerText}>
          New to Bank App? <Text style={styles.registerLink}>Register</Text>
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
  welcomeText: {
    fontSize: 28,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  iconPlaceholder: {
    alignSelf: 'center',
    backgroundColor: '#1565C0',
    borderRadius: 50,
    padding: 20,
    marginBottom: 30,
  },
  iconText: {
    fontSize: 32,
    color: 'white',
  },
  input: {
    backgroundColor: '#708090',
    color: 'white',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
  },
  loginButton: {
    backgroundColor: '#303F9F',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginVertical: 10,
  },
  loginButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  registerText: {
    color: '#AAA',
    textAlign: 'center',
    marginTop: 20,
  },
  registerLink: {
    color: '#1E90FF',
    fontWeight: 'bold',
  },
});

