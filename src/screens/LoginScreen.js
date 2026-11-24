
import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';

import { Ionicons } from '@expo/vector-icons';
import colors from '../styles/colors';

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [mostrarSenha, setMostrarSenha] = useState(false);

  function entrar() {
    if (!email.trim() || !senha.trim()) {
      alert('Preencha seu email e sua senha.');
      return;
    }

    navigation.replace('Principal');
  }

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      keyboardShouldPersistTaps="handled"
    >
      <View style={styles.logoContainer}>
        <View style={styles.logo}>
          <Ionicons name="restaurant-outline" size={34} color={colors.white} />
        </View>

        <Text style={styles.logoText}>ReceitaJá</Text>
        <Text style={styles.subtitle}>Sua cozinha, suas escolhas.</Text>
      </View>

      <View style={styles.form}>
        <Text style={styles.title}>Bem-vindo de volta!</Text>

        <Text style={styles.description}>
          Entre na sua conta para continuar planejando suas refeições.
        </Text>

        <Text style={styles.label}>Email</Text>
        <View style={styles.inputContainer}>
          <Ionicons name="mail-outline" size={20} color={colors.textSecondary} />
          <TextInput
            style={styles.input}
            placeholder="Digite seu email"
            placeholderTextColor="#A0A8A0"
            keyboardType="email-address"
            autoCapitalize="none"
            value={email}
            onChangeText={setEmail}
          />
        </View>

        <Text style={styles.label}>Senha</Text>
        <View style={styles.inputContainer}>
          <Ionicons name="lock-closed-outline" size={20} color={colors.textSecondary} />
          <TextInput
            style={styles.input}
            placeholder="Digite sua senha"
            placeholderTextColor="#A0A8A0"
            secureTextEntry={!mostrarSenha}
            value={senha}
            onChangeText={setSenha}
          />

          <TouchableOpacity
            onPress={() => setMostrarSenha(!mostrarSenha)}
          >
            <Ionicons
              name={mostrarSenha ? 'eye-off-outline' : 'eye-outline'}
              size={21}
              color={colors.textSecondary}
            />
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.forgot}>
          <Text style={styles.forgotText}>Esqueceu sua senha?</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={entrar}>
          <Text style={styles.buttonText}>Entrar</Text>
          <Ionicons name="arrow-forward" size={20} color={colors.white} />
        </TouchableOpacity>

        <View style={styles.registerContainer}>
          <Text style={styles.registerText}>Ainda não tem uma conta? </Text>

          <TouchableOpacity onPress={() => navigation.navigate('Cadastro')}>
            <Text style={styles.registerLink}>Cadastre-se</Text>
          </TouchableOpacity>
        </View>
      </View>

      <Text style={styles.footer}>
        ReceitaJá - Transformando sua alimentação.
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: colors.background,
    justifyContent: 'center',
    paddingHorizontal: 25,
    paddingVertical: 35,
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 35,
  },
  logo: {
    width: 70,
    height: 70,
    borderRadius: 22,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoText: {
    fontSize: 29,
    fontWeight: 'bold',
    color: colors.primaryDark,
    marginTop: 12,
  },
  subtitle: {
    fontSize: 14,
    color: colors.textSecondary,
    marginTop: 5,
  },
  form: {
    backgroundColor: colors.white,
    borderRadius: 20,
    padding: 23,
    borderWidth: 1,
    borderColor: colors.border,
  },
  title: {
    fontSize: 23,
    fontWeight: 'bold',
    color: colors.text,
  },
  description: {
    color: colors.textSecondary,
    fontSize: 14,
    lineHeight: 21,
    marginTop: 8,
    marginBottom: 24,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.text,
    marginBottom: 8,
  },
  inputContainer: {
    height: 52,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 11,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 13,
    marginBottom: 19,
    gap: 10,
  },
  input: {
    flex: 1,
    color: colors.text,
    fontSize: 14,
  },
  forgot: {
    alignSelf: 'flex-end',
    marginBottom: 22,
  },
  forgotText: {
    color: colors.primary,
    fontWeight: '600',
    fontSize: 13,
  },
  button: {
    height: 53,
    backgroundColor: colors.primary,
    borderRadius: 11,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    gap: 10,
  },
  buttonText: {
    color: colors.white,
    fontWeight: 'bold',
    fontSize: 16,
  },
  registerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 24,
    flexWrap: 'wrap',
  },
  registerText: {
    color: colors.textSecondary,
    fontSize: 13,
  },
  registerLink: {
    color: colors.primary,
    fontWeight: 'bold',
    fontSize: 13,
  },
  footer: {
    textAlign: 'center',
    color: colors.textSecondary,
    fontSize: 11,
    marginTop: 30,
  },
});
