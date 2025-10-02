import ThemedTextInput from '@/components/ThemedTextInput';
import React, { useContext, useState } from 'react';
import { Button, ImageBackground, KeyboardAvoidingView, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { UserContext } from '../contexts/UserContext';

const BackgroundLight = require('../assets/images/backgroundLight.png')

const Auth = () => {
  const { login, register } = useContext(UserContext)!

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  const [isRegistering, setIsRegistering] = useState(false)
  const [error, setError] = useState('')

  const handleAuth = async () => {
    setError('');
    try {
      if (isRegistering) {
        await register(email, password, name || undefined);
      } else {
        await login(email, password);
      }
    } catch (err: any) {
      setError(err.message || 'Something went wrong.');
    }
  }


  return (
    <ImageBackground
      source={BackgroundLight}
      style={styles.background}
      resizeMode="cover"
    >

      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        style={styles.container}
      >
        <View
          style={styles.form}>
          <Text
            style={styles.title}>
            Welcome to the Hobby Projects Blog
          </Text>
          <Text
            style={styles.subtitle}>
            {isRegistering ? 'Register to continue' : 'Login to continue'}
          </Text>

          {isRegistering && (
            <ThemedTextInput
              placeholder="Name"
              value={name}
              onChangeText={setName}
            />
          )}
          <ThemedTextInput
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />
          <ThemedTextInput
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />

          {error ? <Text style={styles.error}>{error}</Text> : null}

          <Button
            title={isRegistering ? 'Register' : 'Login'} onPress={handleAuth} />

          <TouchableOpacity onPress={() => setIsRegistering(!isRegistering)}>
            <Text
              style={styles.toggle}>
              {isRegistering ? 'Already have an account? Login' : "Don't have an account? Register"}
            </Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </ImageBackground>
  );
};

export default Auth;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  form: {
    width: '100%',
    maxWidth: 400,
    backgroundColor: '#3D5647',
    padding: 12,
    borderRadius: 12,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#C4AA91',
    marginBottom: 32,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 6,
    color: '#fff',
    textAlign: 'left',
    paddingLeft: 20
  },
  error: {
    color: 'red',
    marginBottom: 10,
    textAlign: 'center',
  },
  toggle: {
    marginTop: 15,
    color: '#fff',
    textAlign: 'center',
    textDecorationLine: 'underline',
  },
});